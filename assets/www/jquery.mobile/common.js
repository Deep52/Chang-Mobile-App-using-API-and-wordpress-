
    jQuery(document).ready(function($) {
      $('#width-slider1').royalSlider({
        arrowsNav: false,
        loop: true,
        keyboardNavEnabled: false,
        controlsInside: false,
        imageScaleMode: 'fill',
        arrowsNavAutoHide: true,
        autoScaleSlider: true, 
        autoScaleSliderWidth: 1300,     
        autoScaleSliderHeight: 703,
        controlNavigation: 'bullets',
        thumbsFitInViewport: false,
        navigateByClick: true,
        startSlideId: 0,
        transitionType:'move',
        transitionSpeed:1500,
        globalCaption: false,
        autoHeight: true,
        numImagesToPreload: 4,
        imgWidth: null,
        imgHeight: null,
        deeplinking: {
          enabled: true,
          change: false
        },
        autoplay: {
          enabled: false,
          delay: 3000,
          stopAtAction: false
        },
        thumbs: {
          arrows: false
        }
      });

   
      $('#width-slider').royalSlider({
        arrowsNav: false,
        loop: true,
        keyboardNavEnabled: false,
        controlsInside: false,
        imageScaleMode: 'fill',
        arrowsNavAutoHide: true,
        autoScaleSlider: true, 
        autoScaleSliderWidth: 1300,     
        autoScaleSliderHeight: 703,
        controlNavigation: 'bullets',
        thumbsFitInViewport: false,
        navigateByClick: true,
        startSlideId: 0,
        transitionType:'move',
        transitionSpeed:1500,
        globalCaption: false,
        autoHeight: true,
        numImagesToPreload: 4,
        imgWidth: null,
        imgHeight: null,
        deeplinking: {
          enabled: true,
          change: false
        },
        autoplay: {
          enabled: false,
          delay: 3000,
          stopAtAction: false
        },
        thumbs: {
          arrows: false
        }
      });
  
      $('#full-width-slider').royalSlider({
        arrowsNav: false,
        loop: false,
        keyboardNavEnabled: true,
        controlsInside: false,
        imageScaleMode: 'fill',
        arrowsNavAutoHide: true,
        autoScaleSlider: true, 
        autoScaleSliderWidth: 1300,     
        autoScaleSliderHeight: 703,
        controlNavigation: 'bullets',
        thumbsFitInViewport: false,
        navigateByClick: true,
        startSlideId: 0,
        transitionType:'move',
        transitionSpeed:1500,
        globalCaption: false,
        deeplinking: {
          enabled: true,
          change: false
        },
        autoplay: {
          enabled: true,
          delay: 2000,
          stopAtAction: false
        },
        thumbs: {
          arrows: false
        }
      });
    });

