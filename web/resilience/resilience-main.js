/*global window, jQuery, rJS */
(function (window, $, rJS) {
  "use strict";

  rJS(window).declareMethod('setContent', function (url) {
    PDFView.open(url, 0);
  });

}(window, jQuery, rJS))
