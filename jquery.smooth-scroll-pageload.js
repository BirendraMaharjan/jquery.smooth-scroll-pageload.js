function scrollOnPageLoad() {
  // to top right away
  if (window.location.hash) scroll(0, 0);
  // void some browsers issue
  setTimeout(scroll(0, 0), 1);
  var hashLink = window.location.hash;
    if ($(hashLink).length) {
      $(function () {
          // *only* if we have anchor on the url
          // smooth scroll to the anchor id
          $('html, body').animate({
            scrollTop: $(window.location.hash).offset().top - 77
          }, 2000);
      });
    }
}

scrollOnPageLoad();
