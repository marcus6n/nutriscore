$(document).ready(function () {
  const mobileBtn = $("#mobile-btn");
  const mobileMenu = $("#mobile-menu");
  const sections = $("section");
  const navItems = $(".nav-item");
  const header = $("header");

  mobileBtn.on("click", function () {
    if (mobileMenu.hasClass("active")) {
      mobileMenu.animate({ height: "toggle", opacity: "toggle" }, 300);
    } else {
      mobileMenu.animate({ height: "toggle", opacity: "toggle" }, 300);
    }

    mobileMenu.toggleClass("active");
    mobileBtn.find("i").toggleClass("fa-x");
  });

  $(window).on("scroll", function () {
    const scrollPosition = $(window).scrollTop() - header.outerHeight();
    const boxShadow = scrollPosition <= 0 ? "none" : "5px 1px 5px rgba(255, 255, 255, 0.1)";
    header.css("box-shadow", boxShadow);

    let activeSectionIndex = findActiveSectionIndex(scrollPosition);
    updateActiveNavItem(activeSectionIndex);
  });

  function findActiveSectionIndex(scrollPosition) {
    let activeSectionIndex = 0;

    sections.each(function (i) {
      const section = $(this);
      const sectionTop = section.offset().top - 96;
      const sectionBottom = sectionTop + section.outerHeight();

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSectionIndex = i;
        return false;
      }
    });

    return activeSectionIndex;
  }

  function updateActiveNavItem(activeSectionIndex) {
    navItems.removeClass("active");
    $(navItems[activeSectionIndex]).addClass("active");
  }

  const revealOptions = {
    duration: 2500,
    distance: '20%'
  };

  ScrollReveal().reveal("#cta", { ...revealOptions, origin: "left" });
  ScrollReveal().reveal("#banner", { ...revealOptions, origin: "right" });
  ScrollReveal().reveal("#shelf", { ...revealOptions, origin: "bottom" });
  ScrollReveal().reveal("#ebooks", { ...revealOptions, origin: "bottom" });
  ScrollReveal().reveal("#about, #infos", { ...revealOptions, origin: "bottom" });
});