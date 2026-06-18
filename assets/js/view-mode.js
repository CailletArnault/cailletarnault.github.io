(function () {
  var STORAGE_KEY = "arnault-site-view-mode";
  var root = document.documentElement;
  var viewport = document.querySelector('meta[name="viewport"]');
  var toggles = Array.prototype.slice.call(document.querySelectorAll("[data-view-toggle]"));
  var mobileQuery = window.matchMedia("(max-width: 48em)");
  var mobileInterfaceQuery = window.matchMedia("(hover: none) and (pointer: coarse)");
  var desktopViewport = "width=device-width, initial-scale=1.0";
  var mobileViewport = "width=device-width, initial-scale=1.0";

  function isMobileInterface() {
    var screenSize = window.screen ? Math.min(window.screen.width || 9999, window.screen.height || 9999) : 9999;
    return mobileInterfaceQuery.matches || screenSize <= 768;
  }

  function updateInterfaceClass() {
    root.classList.toggle("mobile-interface", isMobileInterface());
  }

  function storedMode() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return null;
    }
  }

  function saveMode(mode) {
    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
    } catch (error) {
      return;
    }
  }

  function applyMode(mode) {
    root.classList.remove("view-mode-mobile", "view-mode-desktop");
    if (mode === "mobile") {
      root.classList.add("view-mode-mobile");
      if (viewport) viewport.setAttribute("content", mobileViewport);
    } else if (mode === "desktop") {
      root.classList.add("view-mode-desktop");
      if (viewport) viewport.setAttribute("content", desktopViewport);
    } else if (viewport) {
      viewport.setAttribute("content", mobileViewport);
    }
  }

  function effectiveMode() {
    if (!isMobileInterface()) return "desktop";
    var mode = storedMode();
    if (mode === "mobile" || mode === "desktop") return mode;
    return "mobile";
  }

  function updateToggle() {
    if (!toggles.length) return;
    var mode = effectiveMode();
    var nextLabel = mode === "mobile" ? "Laptop view" : "Smartphone view";
    toggles.forEach(function (toggle) {
      toggle.textContent = nextLabel;
      toggle.setAttribute("aria-label", "Switch to " + nextLabel.toLowerCase());
      toggle.setAttribute("title", "Switch to " + nextLabel.toLowerCase());
    });
  }

  function keepInternalLinksInTab() {
    var currentHost = window.location.host;
    document.querySelectorAll("a[href]").forEach(function (link) {
      var rawHref = link.getAttribute("href");
      var url;
      if (!rawHref || rawHref.charAt(0) === "#" || rawHref.indexOf("mailto:") === 0 || rawHref.indexOf("tel:") === 0) {
        return;
      }
      try {
        url = new URL(rawHref, window.location.href);
      } catch (error) {
        return;
      }
      if (url.host === currentHost) {
        link.setAttribute("target", "_self");
      }
    });
  }

  function initLinkedCards() {
    document.querySelectorAll(".supervision-card[data-href]").forEach(function (card) {
      function visit() {
        window.open(card.dataset.href, card.dataset.target || "_self");
      }

      card.addEventListener("click", function (event) {
        if (event.target.closest("a")) return;
        visit();
      });

      card.addEventListener("keydown", function (event) {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        visit();
      });
    });
  }

  function prefetchInternalPages() {
    var prefetched = {};
    var currentHost = window.location.host;

    function prefetch(url) {
      if (prefetched[url]) return;
      prefetched[url] = true;
      var link = document.createElement("link");
      link.rel = "prefetch";
      link.href = url;
      document.head.appendChild(link);
    }

    document.querySelectorAll("a[href]").forEach(function (link) {
      var rawHref = link.getAttribute("href");
      var url;
      if (!rawHref || rawHref.charAt(0) === "#" || rawHref.indexOf("mailto:") === 0 || rawHref.indexOf("tel:") === 0) {
        return;
      }
      try {
        url = new URL(rawHref, window.location.href);
      } catch (error) {
        return;
      }
      if (url.host !== currentHost || url.pathname === window.location.pathname || url.pathname.indexOf("/assets/") === 0) {
        return;
      }
      link.addEventListener("pointerenter", function () { prefetch(url.href); }, { once: true });
      link.addEventListener("touchstart", function () { prefetch(url.href); }, { once: true, passive: true });
    });
  }

  toggles.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      if (!isMobileInterface()) return;
      var nextMode = effectiveMode() === "mobile" ? "desktop" : "mobile";
      saveMode(nextMode);
      applyMode(nextMode);
      updateInterfaceClass();
      updateToggle();
    });
  });

  if (mobileQuery.addEventListener) {
    mobileQuery.addEventListener("change", function () {
      updateInterfaceClass();
      applyMode(isMobileInterface() ? storedMode() : null);
      updateToggle();
    });
  } else if (mobileQuery.addListener) {
    mobileQuery.addListener(function () {
      updateInterfaceClass();
      applyMode(isMobileInterface() ? storedMode() : null);
      updateToggle();
    });
  }

  if (mobileInterfaceQuery.addEventListener) {
    mobileInterfaceQuery.addEventListener("change", function () {
      updateInterfaceClass();
      applyMode(isMobileInterface() ? storedMode() : null);
      updateToggle();
    });
  }

  updateInterfaceClass();
  applyMode(isMobileInterface() ? storedMode() : null);
  updateToggle();
  keepInternalLinksInTab();
  initLinkedCards();
  prefetchInternalPages();
}());
