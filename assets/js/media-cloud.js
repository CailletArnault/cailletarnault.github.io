(function () {
  var clouds = Array.prototype.slice.call(document.querySelectorAll('.cso-media-cloud'));
  if (!clouds.length) return;

  var lastWidths = new WeakMap();
  var scheduled = false;

  function pack(cloud) {
    var width = cloud.clientWidth;
    if (!width) return;
    lastWidths.set(cloud, width);
    cloud.classList.add('is-packed');

    var padding = 10;
    var placed = [];
    var items = Array.prototype.map.call(cloud.querySelectorAll('a'), function (link, index) {
      return {
        link: link,
        index: index,
        key: link.querySelector('img').getAttribute('src'),
        width: link.offsetWidth,
        height: link.offsetHeight
      };
    });

    items.sort(function (a, b) {
      return b.width * b.height - a.width * a.height || a.index - b.index;
    });

    // Stagger starting points within an oval, then search for clear space.
    items.forEach(function (item) {
      var phase = (item.index + 1) * 2.399963;
      var spread = Math.sqrt((item.index + 0.5) / items.length);
      var originX = width / 2 + Math.cos(phase) * width * 0.24 * spread;
      var originY = Math.sin(phase) * Math.sqrt(items.length) * item.height * 0.62 * spread;
      var candidate;
      var found = false;
      for (var attempt = 0; attempt < 8000; attempt++) {
        var radius = 5 * Math.sqrt(attempt);
        var angle = attempt * 2.399963 + item.index * 0.83;
        candidate = {
          x: originX + Math.cos(angle) * radius - item.width / 2,
          y: originY + Math.sin(angle) * radius * 0.64 - item.height / 2,
          width: item.width,
          height: item.height,
          key: item.key
        };
        if (candidate.x < padding || candidate.x + item.width > width - padding) continue;

        var blocked = placed.some(function (other) {
          var gap = item.key === other.key ? Math.min(90, width * 0.24) : 9 + item.index % 3 * 4;
          return candidate.x < other.x + other.width + gap &&
            candidate.x + candidate.width + gap > other.x &&
            candidate.y < other.y + other.height + gap &&
            candidate.y + candidate.height + gap > other.y;
        });
        if (!blocked) {
          found = true;
          break;
        }
      }

      if (!found) {
        candidate.x = (width - item.width) / 2;
        candidate.y = placed.reduce(function (bottom, other) {
          return Math.max(bottom, other.y + other.height);
        }, 0) + 90;
      }
      item.x = candidate.x;
      item.y = candidate.y;
      placed.push(candidate);
    });

    if (!items.length) return;
    var top = Math.min.apply(null, items.map(function (item) { return item.y; }));
    var bottom = Math.max.apply(null, items.map(function (item) { return item.y + item.height; }));
    items.forEach(function (item) {
      item.link.style.left = Math.round(item.x) + 'px';
      item.link.style.top = Math.round(item.y - top + padding) + 'px';
    });
    cloud.style.height = Math.ceil(bottom - top + padding * 2) + 'px';
  }

  function schedule() {
    if (scheduled) return;
    scheduled = true;
    window.setTimeout(function () {
      scheduled = false;
      clouds.forEach(pack);
    }, 50);
  }

  if (window.ResizeObserver) {
    var observer = new ResizeObserver(function (entries) {
      if (entries.some(function (entry) {
        return Math.abs(entry.contentRect.width - (lastWidths.get(entry.target) || 0)) > 1;
      })) schedule();
    });
    clouds.forEach(function (cloud) { observer.observe(cloud); });
  }

  window.addEventListener('resize', schedule);
  clouds.forEach(pack);
}());
