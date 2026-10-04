/* メニュー、季節スイッチ、見た目だけのチップ。
   デスクトップの境目 1080px は css/styles.css とそろえる。 */
(function () {
  var toggle = document.querySelector(".menu");
  var nav = document.querySelector("#site-nav");
  var desktop = window.matchMedia("(min-width: 1080px)");

  function setOpen(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setOpen(false);
    });

    document.addEventListener("click", function (event) {
      if (!nav.classList.contains("is-open")) return;
      if (nav.contains(event.target) || toggle.contains(event.target)) return;
      setOpen(false);
    });

    function onDesktop(event) {
      if (event.matches) setOpen(false);
    }

    if (typeof desktop.addEventListener === "function") {
      desktop.addEventListener("change", onDesktop);
    } else if (typeof desktop.addListener === "function") {
      desktop.addListener(onDesktop);
    }
  }

  var seasonTabs = Array.prototype.slice.call(document.querySelectorAll("[data-season-tab]"));
  seasonTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var season = tab.getAttribute("data-season-tab");
      document.body.setAttribute("data-season", season);
      seasonTabs.forEach(function (item) {
        var on = item === tab;
        item.classList.toggle("on", on);
        item.setAttribute("aria-selected", on ? "true" : "false");
      });
    });
  });

  function exclusive(selector) {
    var buttons = Array.prototype.slice.call(document.querySelectorAll(selector));
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        buttons.forEach(function (item) {
          var on = item === button;
          item.classList.toggle("on", on);
          item.setAttribute("aria-pressed", on ? "true" : "false");
        });
      });
    });
  }

  exclusive(".chip");
  exclusive(".years button");

  if (!("IntersectionObserver" in window) || !nav) return;

  var links = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'));
  var sections = links
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) {
          if (link.getAttribute("href") === "#" + entry.target.id) {
            link.setAttribute("aria-current", "true");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });
})();
