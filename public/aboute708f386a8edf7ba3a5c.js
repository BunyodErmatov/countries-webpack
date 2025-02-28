(() => {
  var n = {
      16: () => {
        const n = document.querySelector(".header__dark-mode"),
          e = document.querySelector("body"),
          a = localStorage.getItem("mode")
            ? localStorage.getItem("mode")
            : null;
        a && e.classList.add("dark-mode"),
          n.addEventListener("click", () => {
            e.classList.toggle("dark-mode"),
              a
                ? localStorage.setItem("mode", "")
                : localStorage.setItem("mode", "dark");
          });
      },
    },
    e = {};
  function a(o) {
    var s = e[o];
    if (void 0 !== s) return s.exports;
    var t = (e[o] = { exports: {} });
    return n[o](t, t.exports, a), t.exports;
  }
  (() => {
    "use strict";
    a(16);
    const n = document.querySelector(".loader"),
      e = (e) => {
        e ? n.classList.remove("hidden") : n.classList.add("hidden");
      },
      o =
        (document.querySelector(".cards"),
        document.querySelector(".country-info")),
      s = window.location.search;
    (async (n) => {
      e(!0);
      const a = await fetch(n);
      if (!a.ok) throw (e(!1), new Error("Something went wrong ! :("));
      const o = await a.json();
      return e(!1), o;
    })(`https://restcountries.com/v3.1${new URLSearchParams(s).get("country")}`)
      .then((n) => {
        ((n) => {
          const {
            population: e,
            borders: a,
            capital: s,
            flags: t,
            name: r,
            region: c,
            tld: l,
            currencies: i,
            languages: p,
            subregion: u,
          } = n;
          console.log(n);
          const d = Object.values(r.nativeName)[0].official,
            m = Object.values(i)[0].name,
            g = Object.values(p);
          o.innerHTML = `\n    \n          <img\n            class="country-info__img"\n            src=${
            t.svg
          }\n            alt="germany-flag"\n            width="560"\n            height="400"\n          />\n          <div class="country-info__content">\n            <h2>${
            r.common
          }</h2>\n            <ul class="country-info__list">\n              <li class="country-info__item">\n                <p class="name">\n                  Native Name: \n                  <span>${d}</span>\n                </p>\n                <p class="population">\n                  Population:\n                  <span>${e}</span>\n                </p>\n                <p class="region">\n                  Region:\n                  <span>${c}</span>\n                </p>\n                <p class="sub-region">\n                  Sub Region:\n                  <span>${u}</span>\n                </p>\n                <p class="capital">\n                  Capital:\n                  <span>${s}</span>\n                </p>\n              </li>\n              <li class="country-info__item">\n                <p class="name">\n                  Top Level Domain:\n                  <span>${l}</span>\n                </p>\n                <p class="population">\n                  Currencies:\n                  <span>${m}</span>\n                </p>\n                <p class="region">\n                  Languages:\n                  <span>${g}</span>\n                </p>\n              </li>\n            </ul>\n\n            <div class="country-info__borders">\n              <h3>Border Countries:</h3>\n              ${
            a
              ? a.map(
                  (n) => `<a href="./about.html?country=/alpha/${n}">${n}</a>`
                )
              : "No Borders"
          }\n            </div>\n          </div>\n        \n  `;
        })(n[0]);
      })
      .catch((n) => {
        alert(n.message);
      });
  })();
})();
