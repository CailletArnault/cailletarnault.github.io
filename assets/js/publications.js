(function () {
  "use strict";

  function init(root) {
    var typeFilters = root.querySelectorAll("[data-filter]");
    var authorFilters = root.querySelectorAll("[data-author-filter]");
    var tagFilters = root.querySelectorAll("[data-tag-filter]");
    var entries = root.querySelectorAll("[data-type]");
    var groups = root.querySelectorAll("[data-year-group]");
    var cells = root.querySelectorAll("[data-cell-type]");
    var activeType = "all";
    var activeAuthor = "all";
    var activeTag = "all";
    if (!typeFilters.length || !entries.length) return;

    function entryHasAuthorRole(el, role) {
      var roles = " " + (el.getAttribute("data-author-roles") || "") + " ";
      return role === "all" || roles.indexOf(" " + role + " ") !== -1;
    }

    function entryHasTag(el, tag) {
      var tags = " " + (el.getAttribute("data-tags") || "") + " ";
      return tag === "all" || tags.indexOf(" " + tag + " ") !== -1;
    }

    function entryHasType(el, type) {
      return type === "all" || el.getAttribute("data-type") === type;
    }

    function countVisibleEntries(matchFn) {
      var count = 0;
      entries.forEach(function (el) {
        if (!el.hidden && matchFn(el)) {
          count += 1;
        }
      });
      return count;
    }

    function setButtonCount(button, count) {
      var countEl = button.querySelector(".pubtrack__count");
      if (countEl) countEl.textContent = count;
    }

    function updateCounts() {
      typeFilters.forEach(function (b) {
        var type = b.getAttribute("data-filter");
        setButtonCount(b, countVisibleEntries(function (el) {
          return entryHasType(el, type);
        }));
      });

      authorFilters.forEach(function (b) {
        var role = b.getAttribute("data-author-filter");
        setButtonCount(b, countVisibleEntries(function (el) {
          return entryHasAuthorRole(el, role);
        }));
      });

      tagFilters.forEach(function (b) {
        var tag = b.getAttribute("data-tag-filter");
        setButtonCount(b, countVisibleEntries(function (el) {
          return entryHasTag(el, tag);
        }));
      });
    }

    function apply() {
      entries.forEach(function (el) {
        var typeMatch = entryHasType(el, activeType);
        var authorMatch = entryHasAuthorRole(el, activeAuthor);
        var tagMatch = entryHasTag(el, activeTag);
        var show = typeMatch && authorMatch && tagMatch;
        el.hidden = !show;
      });

      groups.forEach(function (g) {
        var visible = g.querySelectorAll("[data-type]:not([hidden])").length;
        g.hidden = visible === 0;
      });

      cells.forEach(function (c) {
        var match = activeType === "all" || c.getAttribute("data-cell-type") === activeType;
        c.classList.toggle("is-dim", !match);
      });

      typeFilters.forEach(function (b) {
        var on = b.getAttribute("data-filter") === activeType;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-pressed", on ? "true" : "false");
      });

      authorFilters.forEach(function (b) {
        var on = b.getAttribute("data-author-filter") === activeAuthor;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-pressed", on ? "true" : "false");
      });

      tagFilters.forEach(function (b) {
        var on = b.getAttribute("data-tag-filter") === activeTag;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-pressed", on ? "true" : "false");
      });

      updateCounts();
    }

    typeFilters.forEach(function (b) {
      b.addEventListener("click", function () {
        activeType = b.getAttribute("data-filter");
        apply();
      });
    });

    authorFilters.forEach(function (b) {
      b.addEventListener("click", function () {
        activeAuthor = b.getAttribute("data-author-filter");
        apply();
      });
    });

    tagFilters.forEach(function (b) {
      b.addEventListener("click", function () {
        activeTag = b.getAttribute("data-tag-filter");
        apply();
      });
    });

    apply();
  }

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    document.querySelectorAll("[data-pubtrack]").forEach(function (root) {
      init(root);
    });
  });
})();
