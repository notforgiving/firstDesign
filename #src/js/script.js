$(document).ready(function () {
  $(".sdn__init").slick({
    autoplay: true,
    dots: true,
    dotsClass: "sdn__dots",
    prevArrow:
      '<button type="button" class="sdn__arrow sdn__prev"><svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="64" y1="9.53553" x2="26.5355" y2="47" stroke="#59615B" stroke-width="5" stroke-linecap="round" /><line x1="26.5355" y1="47" x2="63" y2="83.4645" stroke="#59615B" stroke-width="5" stroke-linecap="round" /><line x1="65.5053" y1="26.5355" x2="45.5355" y2="46.5053" stroke="#59615B" stroke-width="5" stroke-linecap="round" /><line x1="45.5355" y1="47" x2="65.5053" y2="66.9698" stroke="#59615B" stroke-width="5" stroke-linecap="round" /></svg></button>',
    nextArrow:
      '<button type="button" class="sdn__arrow sdn__next"><svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="64" y1="9.53553" x2="26.5355" y2="47" stroke="#59615B" stroke-width="5" stroke-linecap="round" /><line x1="26.5355" y1="47" x2="63" y2="83.4645" stroke="#59615B" stroke-width="5" stroke-linecap="round" /><line x1="65.5053" y1="26.5355" x2="45.5355" y2="46.5053" stroke="#59615B" stroke-width="5" stroke-linecap="round" /><line x1="45.5355" y1="47" x2="65.5053" y2="66.9698" stroke="#59615B" stroke-width="5" stroke-linecap="round" /></svg></button>',
    responsive: [
      {
        breakpoint: 650,
        settings: {
          arrows: false,
          dots: false,
        },
      },
    ],
  });
});
