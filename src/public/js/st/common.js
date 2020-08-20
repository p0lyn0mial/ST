function enableSlider(element) {
	$(element).slick({
      dots: false,
      arrows: true,
      lazyLoad: 'ondemand',
      autoplay: false,
      adaptiveHeight: false,
      centerMode: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            variableWidth: false,
            centerMode: true
          }
        }
      ]
    });
}