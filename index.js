(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object') {
    module.exports = factory();
  } else {
    root.AJAXScroll = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  var originalSend = XMLHttpRequest.prototype.send;
  var customSend = function () {
    this.addEventListener("readystatechange", function () {
      if (this.readyState === 4 && this.status === 200) {
        var hashElement = document.getElementById(location.hash.slice(1));
        if (hashElement) {
          window.scrollTo(0, hashElement.clientTop);
        }
      }
    });
    originalSend.apply(this, arguments);
  };
  var AJAXScroll = {
    attach: function (xmlhttp) {
      if (!xmlhttp) {
        XMLHttpRequest.prototype.send = customSend;
      } else {
        xmlhttp.send = customSend;
      }
    },
    detach: function (xmlhttp) {
      if (!xmlhttp) {
        XMLHttpRequest.prototype.send = originalSend;
      } else {
        xmlhttp.send = originalSend;
      }
    }
  }
  return AJAXScroll;
}));