$(document).ready(function () {
  const translations = {
    en: "assets/json/en.json",
    ar: "assets/json/ar.json",
    ku: "assets/json/ku.json",
    ko: "assets/json/ko.json"
  };
  function loadLanguage(lang) {
    $.getJSON(translations[lang], function (data) {
      $("[data-translate]").each(function () {
        const key = $(this).data("translate");
        if ($(this).is("input, textarea")) {
          $(this).attr("placeholder", data[key] || key);
        } else {
          $(this).text(data[key] || key);
        }
      });
      localStorage.setItem("language", lang);
      if (lang === "ar" || lang === "ku" || lang === "ko") {
        $("body").attr("dir", "rtl");
        $(".navbar-nav").attr("dir", "rtl");
        $(".navbar-nav").removeClass("me-auto");
        $(".dropdown-toggle-icon").removeClass("ms-auto").css("margin-right", "auto");
        $(".languages").addClass("text-end");
        $(".caret-down-symbol").addClass("me-auto").removeClass("ms-auto");
        $("#accordion-rtl").attr("dir", "rtl");
        $(".accordion-button").addClass("a-b-after");
        $(".about").attr("dir", "rtl");
        $(".contact").attr("dir", "rtl");
        $(".number").text("3837 300 750 964+");
        $("footer").attr("dir", "rtl");
        $(".scroll-to-top").addClass("text-start");
        $(".scroll-to-top").removeClass("text-end");
      } else {
        $("body").attr("dir", "rtl");
        $(".navbar-nav").attr("dir", "ltr");
        $(".navbar-nav").addClass("me-auto");
        $(".dropdown-toggle-icon").addClass("ms-auto").css("margin-right", "7px");
        $(".languages").removeClass("text-end");
        $(".caret-down-symbol").addClass("ms-auto").removeClass("me-auto");
        $("#accordion-rtl").attr("dir", "ltr");
        $(".accordion-button").removeClass("a-b-after");
        $(".about").attr("dir", "ltr");
        $(".contact").attr("dir", "ltr");
        $(".number").text("+964 750 300 3837");
        $("footer").attr("dir", "ltr");
        $(".scroll-to-top").addClass("text-end");
        $(".scroll-to-top").removeClass("text-start");
      }
    }); //.fail(function() {
    //     console.error('Failed to load language file.');
    // });
  }
  function init() {
    const savedLang = localStorage.getItem("language") || "ku";
    loadLanguage(savedLang);
  }
  $("button").click(function () {
    const lang = $(this).data("lang");
    loadLanguage(lang);
  });
  init();
});