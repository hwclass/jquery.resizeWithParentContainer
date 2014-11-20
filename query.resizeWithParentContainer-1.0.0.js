/*!
 * jquery.resizeWithParentContainer. An basic image resizer with its parent node plugin for jQuery.
 *
 * Copyright (c) 2014 Barış Güler
 * http://hwclass.github.io
 *
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 * http://docs.jquery.com/Plugins/Authoring
 * jQuery authoring guidelines
 *
 * Launch  : November 2014
 * Version : 1.0.0
 * Released: November 20th, 2014
 * jQuery Availability : >= 1.7.0
 *
 *
 * resizes an image with its parent element orientation
 */

(function ($) {
  $.fn.resizeWithParentContainer = function (parentNode, overFlowHidden) {
    var parentWidth = $(parentNode).width();
    var imageWidth = $(this).width();
    var diffImageAndParent = parentWidth - imageWidth;
    diffImageAndParent = diffImageAndParent / 2;
    if (!diffImageAndParent == 0) {
      $(this).css('margin-left', diffImageAndParent + 'px');
    };
    if (overFlowHidden) {
      $(parentNode).css('overflow', 'hidden');
    }
    return this;
  };
})(jQuery);