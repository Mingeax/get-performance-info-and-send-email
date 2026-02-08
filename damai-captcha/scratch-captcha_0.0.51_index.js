var scratchCaptcha = (function () {
  "use strict";
  var c = function (a, t) {
    return (c =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (c, a) {
          c.__proto__ = a;
        }) ||
      function (c, a) {
        for (var t in a) a.hasOwnProperty(t) && (c[t] = a[t]);
      })(a, t);
  };
  function a(a, t) {
    function n() {
      this.constructor = a;
    }
    c(a, t),
      (a.prototype =
        null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
  }
  var t = function () {
    return (t =
      Object.assign ||
      function (c) {
        for (var a, t = arguments, n = 1, e = arguments.length; e > n; n++)
          for (var i in (a = t[n]))
            Object.prototype.hasOwnProperty.call(a, i) && (c[i] = a[i]);
        return c;
      }).apply(this, arguments);
  };
  !(function (c, a) {
    void 0 === a && (a = {});
    var t = a.insertAt;
    if (c && "undefined" != typeof document) {
      var n = document.head || document.getElementsByTagName("head")[0],
        e = document.createElement("style");
      (e.type = "text/css"),
        "top" === t && n.firstChild
          ? n.insertBefore(e, n.firstChild)
          : n.appendChild(e),
        e.styleSheet
          ? (e.styleSheet.cssText = c)
          : e.appendChild(document.createTextNode(c));
    }
  })(
    '@font-face {\n  font-family: "iconfont";\n  /* Project id 4207494 */\n  src: url("//at.alicdn.com/t/a/font_4207494_knqdu4g9gis.woff2?t=1699263941005") format("woff2"), url("//at.alicdn.com/t/a/font_4207494_knqdu4g9gis.woff?t=1699263941005") format("woff"), url("//at.alicdn.com/t/a/font_4207494_knqdu4g9gis.ttf?t=1699263941005") format("truetype");\n}\n.iconfont {\n  font-family: "iconfont" !important;\n  font-size: 12px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon-arrow:before {\n  content: "\\e624";\n}\n.icon-refresh:before {\n  content: "\\e613";\n}\n.icon-slide:before {\n  content: "\\e623";\n}\nbody {\n  overflow: hidden;\n}\n.scratch-captcha-title,\n.puzzle-captcha-title {\n  font-size: 15px;\n  color: #494949;\n  text-align: center;\n  margin-bottom: 48px;\n}\n.scratch-captcha-container,\n.puzzle-captcha-container {\n  position: relative;\n  user-select: none;\n  -webkit-user-select: none;\n  text-align: justify;\n  margin: auto;\n}\n.scratch-captcha-container.en .scratch-captcha-slider .label,\n.puzzle-captcha-container.en .scratch-captcha-slider .label,\n.scratch-captcha-container.en .puzzle-captcha-slider .label,\n.puzzle-captcha-container.en .puzzle-captcha-slider .label,\n.scratch-captcha-container.en .scratch-captcha-slider,\n.puzzle-captcha-container.en .scratch-captcha-slider,\n.scratch-captcha-container.en .puzzle-captcha-slider,\n.puzzle-captcha-container.en .puzzle-captcha-slider {\n  font-size: 12px;\n}\n.scratch-captcha-container .scratch-captcha-question,\n.puzzle-captcha-container .scratch-captcha-question,\n.scratch-captcha-container .puzzle-captcha-question,\n.puzzle-captcha-container .puzzle-captcha-question {\n  position: relative;\n  margin-bottom: 3.125%;\n}\n.scratch-captcha-container .scratch-captcha-question img,\n.puzzle-captcha-container .scratch-captcha-question img,\n.scratch-captcha-container .puzzle-captcha-question img,\n.puzzle-captcha-container .puzzle-captcha-question img {\n  width: 100%;\n  height: 100%;\n}\n.scratch-captcha-container .scratch-captcha-question .scratch-captcha-question-header,\n.puzzle-captcha-container .scratch-captcha-question .scratch-captcha-question-header,\n.scratch-captcha-container .puzzle-captcha-question .scratch-captcha-question-header,\n.puzzle-captcha-container .puzzle-captcha-question .scratch-captcha-question-header,\n.scratch-captcha-container .scratch-captcha-question .puzzle-captcha-question-header,\n.puzzle-captcha-container .scratch-captcha-question .puzzle-captcha-question-header,\n.scratch-captcha-container .puzzle-captcha-question .puzzle-captcha-question-header,\n.puzzle-captcha-container .puzzle-captcha-question .puzzle-captcha-question-header {\n  margin-bottom: 3.44%;\n  margin-right: 10%;\n}\n.scratch-captcha-container .scratch-captcha-question .scratch-captcha-question-header .info,\n.puzzle-captcha-container .scratch-captcha-question .scratch-captcha-question-header .info,\n.scratch-captcha-container .puzzle-captcha-question .scratch-captcha-question-header .info,\n.puzzle-captcha-container .puzzle-captcha-question .scratch-captcha-question-header .info,\n.scratch-captcha-container .scratch-captcha-question .puzzle-captcha-question-header .info,\n.puzzle-captcha-container .scratch-captcha-question .puzzle-captcha-question-header .info,\n.scratch-captcha-container .puzzle-captcha-question .puzzle-captcha-question-header .info,\n.puzzle-captcha-container .puzzle-captcha-question .puzzle-captcha-question-header .info {\n  position: relative;\n  height: 20px;\n  overflow: hidden;\n}\n.scratch-captcha-container .scratch-captcha-question .scratch-captcha-question-header .title,\n.puzzle-captcha-container .scratch-captcha-question .scratch-captcha-question-header .title,\n.scratch-captcha-container .puzzle-captcha-question .scratch-captcha-question-header .title,\n.puzzle-captcha-container .puzzle-captcha-question .scratch-captcha-question-header .title,\n.scratch-captcha-container .scratch-captcha-question .puzzle-captcha-question-header .title,\n.puzzle-captcha-container .scratch-captcha-question .puzzle-captcha-question-header .title,\n.scratch-captcha-container .puzzle-captcha-question .puzzle-captcha-question-header .title,\n.puzzle-captcha-container .puzzle-captcha-question .puzzle-captcha-question-header .title {\n  position: absolute;\n  white-space: nowrap;\n  font-size: 14px;\n  color: #333333;\n  display: inline-block;\n  line-height: 20px;\n  height: 100%;\n}\n.scratch-captcha-container .scratch-captcha-question .scratch-captcha-question-header .title span,\n.puzzle-captcha-container .scratch-captcha-question .scratch-captcha-question-header .title span,\n.scratch-captcha-container .puzzle-captcha-question .scratch-captcha-question-header .title span,\n.puzzle-captcha-container .puzzle-captcha-question .scratch-captcha-question-header .title span,\n.scratch-captcha-container .scratch-captcha-question .puzzle-captcha-question-header .title span,\n.puzzle-captcha-container .scratch-captcha-question .puzzle-captcha-question-header .title span,\n.scratch-captcha-container .puzzle-captcha-question .puzzle-captcha-question-header .title span,\n.puzzle-captcha-container .puzzle-captcha-question .puzzle-captcha-question-header .title span,\n.scratch-captcha-container .scratch-captcha-question .scratch-captcha-question-header .title img,\n.puzzle-captcha-container .scratch-captcha-question .scratch-captcha-question-header .title img,\n.scratch-captcha-container .puzzle-captcha-question .scratch-captcha-question-header .title img,\n.puzzle-captcha-container .puzzle-captcha-question .scratch-captcha-question-header .title img,\n.scratch-captcha-container .scratch-captcha-question .puzzle-captcha-question-header .title img,\n.puzzle-captcha-container .scratch-captcha-question .puzzle-captcha-question-header .title img,\n.scratch-captcha-container .puzzle-captcha-question .puzzle-captcha-question-header .title img,\n.puzzle-captcha-container .puzzle-captcha-question .puzzle-captcha-question-header .title img {\n  float: left;\n}\n.scratch-captcha-container .scratch-captcha-question .scratch-captcha-question-header .title #captcha-question,\n.puzzle-captcha-container .scratch-captcha-question .scratch-captcha-question-header .title #captcha-question,\n.scratch-captcha-container .puzzle-captcha-question .scratch-captcha-question-header .title #captcha-question,\n.puzzle-captcha-container .puzzle-captcha-question .scratch-captcha-question-header .title #captcha-question,\n.scratch-captcha-container .scratch-captcha-question .puzzle-captcha-question-header .title #captcha-question,\n.puzzle-captcha-container .scratch-captcha-question .puzzle-captcha-question-header .title #captcha-question,\n.scratch-captcha-container .puzzle-captcha-question .puzzle-captcha-question-header .title #captcha-question,\n.puzzle-captcha-container .puzzle-captcha-question .puzzle-captcha-question-header .title #captcha-question {\n  width: 100%;\n  height: 100%;\n}\n.scratch-captcha-container .scratch-captcha-question .scratch-captcha-question-header .refresh,\n.puzzle-captcha-container .scratch-captcha-question .scratch-captcha-question-header .refresh,\n.scratch-captcha-container .puzzle-captcha-question .scratch-captcha-question-header .refresh,\n.puzzle-captcha-container .puzzle-captcha-question .scratch-captcha-question-header .refresh,\n.scratch-captcha-container .scratch-captcha-question .puzzle-captcha-question-header .refresh,\n.puzzle-captcha-container .scratch-captcha-question .puzzle-captcha-question-header .refresh,\n.scratch-captcha-container .puzzle-captcha-question .puzzle-captcha-question-header .refresh,\n.puzzle-captcha-container .puzzle-captcha-question .puzzle-captcha-question-header .refresh {\n  font-size: 16px;\n  line-height: 20px;\n  height: 20px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer;\n}\n.scratch-captcha-container .scratch-captcha-question .scratch-captcha-question-header .refresh.scratch,\n.puzzle-captcha-container .scratch-captcha-question .scratch-captcha-question-header .refresh.scratch,\n.scratch-captcha-container .puzzle-captcha-question .scratch-captcha-question-header .refresh.scratch,\n.puzzle-captcha-container .puzzle-captcha-question .scratch-captcha-question-header .refresh.scratch,\n.scratch-captcha-container .scratch-captcha-question .puzzle-captcha-question-header .refresh.scratch,\n.puzzle-captcha-container .scratch-captcha-question .puzzle-captcha-question-header .refresh.scratch,\n.scratch-captcha-container .puzzle-captcha-question .puzzle-captcha-question-header .refresh.scratch,\n.puzzle-captcha-container .puzzle-captcha-question .puzzle-captcha-question-header .refresh.scratch {\n  font-size: 19px;\n  line-height: 30px;\n  height: 30px;\n}\n.scratch-captcha-container .scratch-captcha-question .scratch-captcha-question-bg,\n.puzzle-captcha-container .scratch-captcha-question .scratch-captcha-question-bg,\n.scratch-captcha-container .puzzle-captcha-question .scratch-captcha-question-bg,\n.puzzle-captcha-container .puzzle-captcha-question .scratch-captcha-question-bg,\n.scratch-captcha-container .scratch-captcha-question .puzzle-captcha-question-bg,\n.puzzle-captcha-container .scratch-captcha-question .puzzle-captcha-question-bg,\n.scratch-captcha-container .puzzle-captcha-question .puzzle-captcha-question-bg,\n.puzzle-captcha-container .puzzle-captcha-question .puzzle-captcha-question-bg {\n  position: relative;\n  width: 100%;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.scratch-captcha-container .scratch-captcha-question .scratch-captcha-question-bg .puzzle-captcha-puzzle,\n.puzzle-captcha-container .scratch-captcha-question .scratch-captcha-question-bg .puzzle-captcha-puzzle,\n.scratch-captcha-container .puzzle-captcha-question .scratch-captcha-question-bg .puzzle-captcha-puzzle,\n.puzzle-captcha-container .puzzle-captcha-question .scratch-captcha-question-bg .puzzle-captcha-puzzle,\n.scratch-captcha-container .scratch-captcha-question .puzzle-captcha-question-bg .puzzle-captcha-puzzle,\n.puzzle-captcha-container .scratch-captcha-question .puzzle-captcha-question-bg .puzzle-captcha-puzzle,\n.scratch-captcha-container .puzzle-captcha-question .puzzle-captcha-question-bg .puzzle-captcha-puzzle,\n.puzzle-captcha-container .puzzle-captcha-question .puzzle-captcha-question-bg .puzzle-captcha-puzzle {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  left: 0px;\n}\n.scratch-captcha-container .scratch-captcha-question .scratch-captcha-question-bg .scratch-captcha-result,\n.puzzle-captcha-container .scratch-captcha-question .scratch-captcha-question-bg .scratch-captcha-result,\n.scratch-captcha-container .puzzle-captcha-question .scratch-captcha-question-bg .scratch-captcha-result,\n.puzzle-captcha-container .puzzle-captcha-question .scratch-captcha-question-bg .scratch-captcha-result,\n.scratch-captcha-container .scratch-captcha-question .puzzle-captcha-question-bg .scratch-captcha-result,\n.puzzle-captcha-container .scratch-captcha-question .puzzle-captcha-question-bg .scratch-captcha-result,\n.scratch-captcha-container .puzzle-captcha-question .puzzle-captcha-question-bg .scratch-captcha-result,\n.puzzle-captcha-container .puzzle-captcha-question .puzzle-captcha-question-bg .scratch-captcha-result,\n.scratch-captcha-container .scratch-captcha-question .scratch-captcha-question-bg .puzzle-captcha-result,\n.puzzle-captcha-container .scratch-captcha-question .scratch-captcha-question-bg .puzzle-captcha-result,\n.scratch-captcha-container .puzzle-captcha-question .scratch-captcha-question-bg .puzzle-captcha-result,\n.puzzle-captcha-container .puzzle-captcha-question .scratch-captcha-question-bg .puzzle-captcha-result,\n.scratch-captcha-container .scratch-captcha-question .puzzle-captcha-question-bg .puzzle-captcha-result,\n.puzzle-captcha-container .scratch-captcha-question .puzzle-captcha-question-bg .puzzle-captcha-result,\n.scratch-captcha-container .puzzle-captcha-question .puzzle-captcha-question-bg .puzzle-captcha-result,\n.puzzle-captcha-container .puzzle-captcha-question .puzzle-captcha-question-bg .puzzle-captcha-result {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  text-align: center;\n  font-size: 14px;\n  color: #fff;\n  overflow: hidden;\n  display: none;\n}\n.scratch-captcha-container .scratch-captcha-question .scratch-captcha-question-bg .scratch-captcha-result .result-mask,\n.puzzle-captcha-container .scratch-captcha-question .scratch-captcha-question-bg .scratch-captcha-result .result-mask,\n.scratch-captcha-container .puzzle-captcha-question .scratch-captcha-question-bg .scratch-captcha-result .result-mask,\n.puzzle-captcha-container .puzzle-captcha-question .scratch-captcha-question-bg .scratch-captcha-result .result-mask,\n.scratch-captcha-container .scratch-captcha-question .puzzle-captcha-question-bg .scratch-captcha-result .result-mask,\n.puzzle-captcha-container .scratch-captcha-question .puzzle-captcha-question-bg .scratch-captcha-result .result-mask,\n.scratch-captcha-container .puzzle-captcha-question .puzzle-captcha-question-bg .scratch-captcha-result .result-mask,\n.puzzle-captcha-container .puzzle-captcha-question .puzzle-captcha-question-bg .scratch-captcha-result .result-mask,\n.scratch-captcha-container .scratch-captcha-question .scratch-captcha-question-bg .puzzle-captcha-result .result-mask,\n.puzzle-captcha-container .scratch-captcha-question .scratch-captcha-question-bg .puzzle-captcha-result .result-mask,\n.scratch-captcha-container .puzzle-captcha-question .scratch-captcha-question-bg .puzzle-captcha-result .result-mask,\n.puzzle-captcha-container .puzzle-captcha-question .scratch-captcha-question-bg .puzzle-captcha-result .result-mask,\n.scratch-captcha-container .scratch-captcha-question .puzzle-captcha-question-bg .puzzle-captcha-result .result-mask,\n.puzzle-captcha-container .scratch-captcha-question .puzzle-captcha-question-bg .puzzle-captcha-result .result-mask,\n.scratch-captcha-container .puzzle-captcha-question .puzzle-captcha-question-bg .puzzle-captcha-result .result-mask,\n.puzzle-captcha-container .puzzle-captcha-question .puzzle-captcha-question-bg .puzzle-captcha-result .result-mask {\n  width: 100%;\n  height: 100%;\n}\n.scratch-captcha-container .scratch-captcha-question .scratch-captcha-question-bg .scratch-captcha-result .result-content,\n.puzzle-captcha-container .scratch-captcha-question .scratch-captcha-question-bg .scratch-captcha-result .result-content,\n.scratch-captcha-container .puzzle-captcha-question .scratch-captcha-question-bg .scratch-captcha-result .result-content,\n.puzzle-captcha-container .puzzle-captcha-question .scratch-captcha-question-bg .scratch-captcha-result .result-content,\n.scratch-captcha-container .scratch-captcha-question .puzzle-captcha-question-bg .scratch-captcha-result .result-content,\n.puzzle-captcha-container .scratch-captcha-question .puzzle-captcha-question-bg .scratch-captcha-result .result-content,\n.scratch-captcha-container .puzzle-captcha-question .puzzle-captcha-question-bg .scratch-captcha-result .result-content,\n.puzzle-captcha-container .puzzle-captcha-question .puzzle-captcha-question-bg .scratch-captcha-result .result-content,\n.scratch-captcha-container .scratch-captcha-question .scratch-captcha-question-bg .puzzle-captcha-result .result-content,\n.puzzle-captcha-container .scratch-captcha-question .scratch-captcha-question-bg .puzzle-captcha-result .result-content,\n.scratch-captcha-container .puzzle-captcha-question .scratch-captcha-question-bg .puzzle-captcha-result .result-content,\n.puzzle-captcha-container .puzzle-captcha-question .scratch-captcha-question-bg .puzzle-captcha-result .result-content,\n.scratch-captcha-container .scratch-captcha-question .puzzle-captcha-question-bg .puzzle-captcha-result .result-content,\n.puzzle-captcha-container .scratch-captcha-question .puzzle-captcha-question-bg .puzzle-captcha-result .result-content,\n.scratch-captcha-container .puzzle-captcha-question .puzzle-captcha-question-bg .puzzle-captcha-result .result-content,\n.puzzle-captcha-container .puzzle-captcha-question .puzzle-captcha-question-bg .puzzle-captcha-result .result-content {\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  text-align: center;\n}\n.scratch-captcha-container .scratch-captcha-question .scratch-captcha-question-bg .scratch-captcha-result .result-content .result-icon,\n.puzzle-captcha-container .scratch-captcha-question .scratch-captcha-question-bg .scratch-captcha-result .result-content .result-icon,\n.scratch-captcha-container .puzzle-captcha-question .scratch-captcha-question-bg .scratch-captcha-result .result-content .result-icon,\n.puzzle-captcha-container .puzzle-captcha-question .scratch-captcha-question-bg .scratch-captcha-result .result-content .result-icon,\n.scratch-captcha-container .scratch-captcha-question .puzzle-captcha-question-bg .scratch-captcha-result .result-content .result-icon,\n.puzzle-captcha-container .scratch-captcha-question .puzzle-captcha-question-bg .scratch-captcha-result .result-content .result-icon,\n.scratch-captcha-container .puzzle-captcha-question .puzzle-captcha-question-bg .scratch-captcha-result .result-content .result-icon,\n.puzzle-captcha-container .puzzle-captcha-question .puzzle-captcha-question-bg .scratch-captcha-result .result-content .result-icon,\n.scratch-captcha-container .scratch-captcha-question .scratch-captcha-question-bg .puzzle-captcha-result .result-content .result-icon,\n.puzzle-captcha-container .scratch-captcha-question .scratch-captcha-question-bg .puzzle-captcha-result .result-content .result-icon,\n.scratch-captcha-container .puzzle-captcha-question .scratch-captcha-question-bg .puzzle-captcha-result .result-content .result-icon,\n.puzzle-captcha-container .puzzle-captcha-question .scratch-captcha-question-bg .puzzle-captcha-result .result-content .result-icon,\n.scratch-captcha-container .scratch-captcha-question .puzzle-captcha-question-bg .puzzle-captcha-result .result-content .result-icon,\n.puzzle-captcha-container .scratch-captcha-question .puzzle-captcha-question-bg .puzzle-captcha-result .result-content .result-icon,\n.scratch-captcha-container .puzzle-captcha-question .puzzle-captcha-question-bg .puzzle-captcha-result .result-content .result-icon,\n.puzzle-captcha-container .puzzle-captcha-question .puzzle-captcha-question-bg .puzzle-captcha-result .result-content .result-icon {\n  margin: auto;\n  margin-bottom: 6px;\n  display: block;\n}\n.scratch-captcha-container .scratch-captcha-question .scratch-captcha-question-bg .scratch-captcha-result .result-info,\n.puzzle-captcha-container .scratch-captcha-question .scratch-captcha-question-bg .scratch-captcha-result .result-info,\n.scratch-captcha-container .puzzle-captcha-question .scratch-captcha-question-bg .scratch-captcha-result .result-info,\n.puzzle-captcha-container .puzzle-captcha-question .scratch-captcha-question-bg .scratch-captcha-result .result-info,\n.scratch-captcha-container .scratch-captcha-question .puzzle-captcha-question-bg .scratch-captcha-result .result-info,\n.puzzle-captcha-container .scratch-captcha-question .puzzle-captcha-question-bg .scratch-captcha-result .result-info,\n.scratch-captcha-container .puzzle-captcha-question .puzzle-captcha-question-bg .scratch-captcha-result .result-info,\n.puzzle-captcha-container .puzzle-captcha-question .puzzle-captcha-question-bg .scratch-captcha-result .result-info,\n.scratch-captcha-container .scratch-captcha-question .scratch-captcha-question-bg .puzzle-captcha-result .result-info,\n.puzzle-captcha-container .scratch-captcha-question .scratch-captcha-question-bg .puzzle-captcha-result .result-info,\n.scratch-captcha-container .puzzle-captcha-question .scratch-captcha-question-bg .puzzle-captcha-result .result-info,\n.puzzle-captcha-container .puzzle-captcha-question .scratch-captcha-question-bg .puzzle-captcha-result .result-info,\n.scratch-captcha-container .scratch-captcha-question .puzzle-captcha-question-bg .puzzle-captcha-result .result-info,\n.puzzle-captcha-container .scratch-captcha-question .puzzle-captcha-question-bg .puzzle-captcha-result .result-info,\n.scratch-captcha-container .puzzle-captcha-question .puzzle-captcha-question-bg .puzzle-captcha-result .result-info,\n.puzzle-captcha-container .puzzle-captcha-question .puzzle-captcha-question-bg .puzzle-captcha-result .result-info {\n  position: absolute;\n  min-width: 100%;\n  bottom: 0;\n  background-color: #58c65f;\n  border-radius: 2px;\n  white-space: nowrap;\n}\n.scratch-captcha-container .scratch-captcha-question .scratch-captcha-question-bg .error,\n.puzzle-captcha-container .scratch-captcha-question .scratch-captcha-question-bg .error,\n.scratch-captcha-container .puzzle-captcha-question .scratch-captcha-question-bg .error,\n.puzzle-captcha-container .puzzle-captcha-question .scratch-captcha-question-bg .error,\n.scratch-captcha-container .scratch-captcha-question .puzzle-captcha-question-bg .error,\n.puzzle-captcha-container .scratch-captcha-question .puzzle-captcha-question-bg .error,\n.scratch-captcha-container .puzzle-captcha-question .puzzle-captcha-question-bg .error,\n.puzzle-captcha-container .puzzle-captcha-question .puzzle-captcha-question-bg .error {\n  position: absolute;\n  display: none;\n}\n.scratch-captcha-container .scratch-captcha-question .scratch-captcha-question-bg .veins,\n.puzzle-captcha-container .scratch-captcha-question .scratch-captcha-question-bg .veins,\n.scratch-captcha-container .puzzle-captcha-question .scratch-captcha-question-bg .veins,\n.puzzle-captcha-container .puzzle-captcha-question .scratch-captcha-question-bg .veins,\n.scratch-captcha-container .scratch-captcha-question .puzzle-captcha-question-bg .veins,\n.puzzle-captcha-container .scratch-captcha-question .puzzle-captcha-question-bg .veins,\n.scratch-captcha-container .puzzle-captcha-question .puzzle-captcha-question-bg .veins,\n.puzzle-captcha-container .puzzle-captcha-question .puzzle-captcha-question-bg .veins {\n  position: absolute;\n}\n.scratch-captcha-container .scratch-captcha-question .scratch-captcha-question-bg #captcha-answer,\n.puzzle-captcha-container .scratch-captcha-question .scratch-captcha-question-bg #captcha-answer,\n.scratch-captcha-container .puzzle-captcha-question .scratch-captcha-question-bg #captcha-answer,\n.puzzle-captcha-container .puzzle-captcha-question .scratch-captcha-question-bg #captcha-answer,\n.scratch-captcha-container .scratch-captcha-question .puzzle-captcha-question-bg #captcha-answer,\n.puzzle-captcha-container .scratch-captcha-question .puzzle-captcha-question-bg #captcha-answer,\n.scratch-captcha-container .puzzle-captcha-question .puzzle-captcha-question-bg #captcha-answer,\n.puzzle-captcha-container .puzzle-captcha-question .puzzle-captcha-question-bg #captcha-answer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-image: linear-gradient(90deg, #eb8854 3%, #ffd5b9 95%);\n}\n.scratch-captcha-container .scratch-captcha-question .scratch-captcha-question-bg .icon,\n.puzzle-captcha-container .scratch-captcha-question .scratch-captcha-question-bg .icon,\n.scratch-captcha-container .puzzle-captcha-question .scratch-captcha-question-bg .icon,\n.puzzle-captcha-container .puzzle-captcha-question .scratch-captcha-question-bg .icon,\n.scratch-captcha-container .scratch-captcha-question .puzzle-captcha-question-bg .icon,\n.puzzle-captcha-container .scratch-captcha-question .puzzle-captcha-question-bg .icon,\n.scratch-captcha-container .puzzle-captcha-question .puzzle-captcha-question-bg .icon,\n.puzzle-captcha-container .puzzle-captcha-question .puzzle-captcha-question-bg .icon {\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  animation: blinker 2s linear infinite;\n  background-image: url("https://img.alicdn.com/imgextra/i3/O1CN01MutyE11PIguuqAfDn_!!6000000001818-2-tps-553-313.png");\n  background-size: cover;\n}\n.scratch-captcha-container .scratch-captcha-slider,\n.puzzle-captcha-container .scratch-captcha-slider,\n.scratch-captcha-container .puzzle-captcha-slider,\n.puzzle-captcha-container .puzzle-captcha-slider {\n  position: relative;\n  height: 24px;\n  border-radius: 2px;\n  touch-action: pan-x;\n  margin-bottom: 16px;\n  border: 1px solid #ff6a00;\n}\n.scratch-captcha-container .scratch-captcha-slider .button,\n.puzzle-captcha-container .scratch-captcha-slider .button,\n.scratch-captcha-container .puzzle-captcha-slider .button,\n.puzzle-captcha-container .puzzle-captcha-slider .button {\n  position: absolute;\n  left: -1px;\n  width: 48px;\n  border-radius: 6px;\n  text-align: center;\n  z-index: 1;\n  background-color: #ff6a00;\n  cursor: move;\n}\n.scratch-captcha-container .scratch-captcha-slider .button i,\n.puzzle-captcha-container .scratch-captcha-slider .button i,\n.scratch-captcha-container .puzzle-captcha-slider .button i,\n.puzzle-captcha-container .puzzle-captcha-slider .button i {\n  font-size: 16px;\n  color: #fff;\n}\n.scratch-captcha-container .scratch-captcha-slider .info,\n.puzzle-captcha-container .scratch-captcha-slider .info,\n.scratch-captcha-container .puzzle-captcha-slider .info,\n.puzzle-captcha-container .puzzle-captcha-slider .info {\n  position: relative;\n  display: none;\n  height: 100%;\n  overflow: hidden;\n  margin: auto;\n}\n.scratch-captcha-container .scratch-captcha-slider .info .label,\n.puzzle-captcha-container .scratch-captcha-slider .info .label,\n.scratch-captcha-container .puzzle-captcha-slider .info .label,\n.puzzle-captcha-container .puzzle-captcha-slider .info .label {\n  position: absolute;\n  height: 100%;\n  cursor: pointer;\n  text-align: center;\n  font-size: 12px;\n  color: #8b8b8b;\n  min-width: 100%;\n  white-space: nowrap;\n}\n.scratch-captcha-container .scratch-captcha-slider .scratch-captcha-loading,\n.puzzle-captcha-container .scratch-captcha-slider .scratch-captcha-loading,\n.scratch-captcha-container .puzzle-captcha-slider .scratch-captcha-loading,\n.puzzle-captcha-container .puzzle-captcha-slider .scratch-captcha-loading,\n.scratch-captcha-container .scratch-captcha-slider .puzzle-captcha-loading,\n.puzzle-captcha-container .scratch-captcha-slider .puzzle-captcha-loading,\n.scratch-captcha-container .puzzle-captcha-slider .puzzle-captcha-loading,\n.puzzle-captcha-container .puzzle-captcha-slider .puzzle-captcha-loading {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: 9;\n  text-align: center;\n  text-align: -webkit-center;\n}\n.scratch-captcha-container .scratch-captcha-slider .scratch-captcha-loading.fruit_yellow circle,\n.puzzle-captcha-container .scratch-captcha-slider .scratch-captcha-loading.fruit_yellow circle,\n.scratch-captcha-container .puzzle-captcha-slider .scratch-captcha-loading.fruit_yellow circle,\n.puzzle-captcha-container .puzzle-captcha-slider .scratch-captcha-loading.fruit_yellow circle,\n.scratch-captcha-container .scratch-captcha-slider .puzzle-captcha-loading.fruit_yellow circle,\n.puzzle-captcha-container .scratch-captcha-slider .puzzle-captcha-loading.fruit_yellow circle,\n.scratch-captcha-container .puzzle-captcha-slider .puzzle-captcha-loading.fruit_yellow circle,\n.puzzle-captcha-container .puzzle-captcha-slider .puzzle-captcha-loading.fruit_yellow circle {\n  fill: #ffbc00;\n}\n.scratch-captcha-container .scratch-captcha-slider .scratch-captcha-loading.landscape_blue circle,\n.puzzle-captcha-container .scratch-captcha-slider .scratch-captcha-loading.landscape_blue circle,\n.scratch-captcha-container .puzzle-captcha-slider .scratch-captcha-loading.landscape_blue circle,\n.puzzle-captcha-container .puzzle-captcha-slider .scratch-captcha-loading.landscape_blue circle,\n.scratch-captcha-container .scratch-captcha-slider .puzzle-captcha-loading.landscape_blue circle,\n.puzzle-captcha-container .scratch-captcha-slider .puzzle-captcha-loading.landscape_blue circle,\n.scratch-captcha-container .puzzle-captcha-slider .puzzle-captcha-loading.landscape_blue circle,\n.puzzle-captcha-container .puzzle-captcha-slider .puzzle-captcha-loading.landscape_blue circle {\n  fill: #289cff;\n}\n.scratch-captcha-container .scratch-captcha-slider .scratch-captcha-loading.plant_green circle,\n.puzzle-captcha-container .scratch-captcha-slider .scratch-captcha-loading.plant_green circle,\n.scratch-captcha-container .puzzle-captcha-slider .scratch-captcha-loading.plant_green circle,\n.puzzle-captcha-container .puzzle-captcha-slider .scratch-captcha-loading.plant_green circle,\n.scratch-captcha-container .scratch-captcha-slider .puzzle-captcha-loading.plant_green circle,\n.puzzle-captcha-container .scratch-captcha-slider .puzzle-captcha-loading.plant_green circle,\n.scratch-captcha-container .puzzle-captcha-slider .puzzle-captcha-loading.plant_green circle,\n.puzzle-captcha-container .puzzle-captcha-slider .puzzle-captcha-loading.plant_green circle {\n  fill: #0fb799;\n}\n.scratch-captcha-container .scratch-captcha-slider .scratch-captcha-loading.universe_purple circle,\n.puzzle-captcha-container .scratch-captcha-slider .scratch-captcha-loading.universe_purple circle,\n.scratch-captcha-container .puzzle-captcha-slider .scratch-captcha-loading.universe_purple circle,\n.puzzle-captcha-container .puzzle-captcha-slider .scratch-captcha-loading.universe_purple circle,\n.scratch-captcha-container .scratch-captcha-slider .puzzle-captcha-loading.universe_purple circle,\n.puzzle-captcha-container .scratch-captcha-slider .puzzle-captcha-loading.universe_purple circle,\n.scratch-captcha-container .puzzle-captcha-slider .puzzle-captcha-loading.universe_purple circle,\n.puzzle-captcha-container .puzzle-captcha-slider .puzzle-captcha-loading.universe_purple circle {\n  fill: #6358f0;\n}\n.scratch-captcha-container .scratch-captcha-slider .scratch-captcha-loading.clothes_red circle,\n.puzzle-captcha-container .scratch-captcha-slider .scratch-captcha-loading.clothes_red circle,\n.scratch-captcha-container .puzzle-captcha-slider .scratch-captcha-loading.clothes_red circle,\n.puzzle-captcha-container .puzzle-captcha-slider .scratch-captcha-loading.clothes_red circle,\n.scratch-captcha-container .scratch-captcha-slider .puzzle-captcha-loading.clothes_red circle,\n.puzzle-captcha-container .scratch-captcha-slider .puzzle-captcha-loading.clothes_red circle,\n.scratch-captcha-container .puzzle-captcha-slider .puzzle-captcha-loading.clothes_red circle,\n.puzzle-captcha-container .puzzle-captcha-slider .puzzle-captcha-loading.clothes_red circle {\n  fill: #f74a4a;\n}\n.scratch-captcha-container .scratch-captcha-slider .scratch-captcha-loading.animals_orange circle,\n.puzzle-captcha-container .scratch-captcha-slider .scratch-captcha-loading.animals_orange circle,\n.scratch-captcha-container .puzzle-captcha-slider .scratch-captcha-loading.animals_orange circle,\n.puzzle-captcha-container .puzzle-captcha-slider .scratch-captcha-loading.animals_orange circle,\n.scratch-captcha-container .scratch-captcha-slider .puzzle-captcha-loading.animals_orange circle,\n.puzzle-captcha-container .scratch-captcha-slider .puzzle-captcha-loading.animals_orange circle,\n.scratch-captcha-container .puzzle-captcha-slider .puzzle-captcha-loading.animals_orange circle,\n.puzzle-captcha-container .puzzle-captcha-slider .puzzle-captcha-loading.animals_orange circle {\n  font: #ff6a00;\n}\n.connect-captcha-container,\n.click-captcha-container,\n.drag-captcha-container {\n  position: relative;\n  user-select: none;\n  -webkit-user-select: none;\n  margin: auto;\n  border-radius: 8px;\n}\n.connect-captcha-container .connect-captcha-bg,\n.click-captcha-container .connect-captcha-bg,\n.drag-captcha-container .connect-captcha-bg,\n.connect-captcha-container .click-captcha-bg,\n.click-captcha-container .click-captcha-bg,\n.drag-captcha-container .click-captcha-bg,\n.connect-captcha-container .drag-captcha-bg,\n.click-captcha-container .drag-captcha-bg,\n.drag-captcha-container .drag-captcha-bg {\n  border-radius: 8px;\n}\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question,\n.click-captcha-container .click-captcha-bg .connect-captcha-question,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question,\n.click-captcha-container .connect-captcha-bg .click-captcha-question,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question,\n.connect-captcha-container .click-captcha-bg .click-captcha-question,\n.click-captcha-container .click-captcha-bg .click-captcha-question,\n.drag-captcha-container .click-captcha-bg .click-captcha-question,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question,\n.click-captcha-container .drag-captcha-bg .click-captcha-question,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question,\n.click-captcha-container .click-captcha-bg .drag-captcha-question,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question {\n  padding: 10px;\n  border-radius: 8px;\n}\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header,\n.click-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header,\n.click-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header,\n.click-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header {\n  opacity: 0;\n  position: relative;\n}\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .question,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .question,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .question,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .question,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .question,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .question,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .question,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .question,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .question,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .question,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .question,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .question,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .question,\n.click-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .question,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .question,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .question,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .question,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .question,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .question,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .question,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .question,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .question,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .question,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .question,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .question,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .question,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .question,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .question,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .question,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .question,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .question,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .question,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .question,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .question,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .question,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .question,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .question,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .question,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .question,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .question,\n.click-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .question,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .question,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .question,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .question,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .question,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .question,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .question,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .question,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .question,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .question,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .question,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .question,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .question,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .question,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .question,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .question,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .question,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .question,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .question,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .question,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .question,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .question,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .question,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .question,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .question,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .question,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .question,\n.click-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .question,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .question,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .question,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .question,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .question,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .question,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .question,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .question,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .question,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .question,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .question,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .question,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .question,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .question {\n  width: 100%;\n  height: 100%;\n  text-align: left;\n  position: absolute;\n}\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .question p,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .question p,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .question p,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .question p,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .question p,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .question p,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .question p,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .question p,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .question p,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .question p,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .question p,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .question p,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .question p,\n.click-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .question p,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .question p,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .question p,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .question p,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .question p,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .question p,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .question p,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .question p,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .question p,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .question p,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .question p,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .question p,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .question p,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .question p,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .question p,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .question p,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .question p,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .question p,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .question p,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .question p,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .question p,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .question p,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .question p,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .question p,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .question p,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .question p,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .question p,\n.click-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .question p,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .question p,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .question p,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .question p,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .question p,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .question p,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .question p,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .question p,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .question p,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .question p,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .question p,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .question p,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .question p,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .question p,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .question p,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .question p,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .question p,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .question p,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .question p,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .question p,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .question p,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .question p,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .question p,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .question p,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .question p,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .question p,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .question p,\n.click-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .question p,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .question p,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .question p,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .question p,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .question p,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .question p,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .question p,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .question p,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .question p,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .question p,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .question p,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .question p,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .question p,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .question p {\n  text-align: left;\n}\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .question .h1,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .question .h1,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .question .h1,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .question .h1,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .question .h1,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .question .h1,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .question .h1,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .question .h1,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .question .h1,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .question .h1,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .question .h1,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .question .h1,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .question .h1,\n.click-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .question .h1,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .question .h1,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .question .h1,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .question .h1,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .question .h1,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .question .h1,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .question .h1,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .question .h1,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .question .h1,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .question .h1,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .question .h1,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .question .h1,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .question .h1,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .question .h1,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .question .h1,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .question .h1,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .question .h1,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .question .h1,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .question .h1,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .question .h1,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .question .h1,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .question .h1,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .question .h1,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .question .h1,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .question .h1,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .question .h1,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .question .h1,\n.click-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .question .h1,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .question .h1,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .question .h1,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .question .h1,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .question .h1,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .question .h1,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .question .h1,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .question .h1,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .question .h1,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .question .h1,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .question .h1,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .question .h1,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .question .h1,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .question .h1,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .question .h1,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .question .h1,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .question .h1,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .question .h1,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .question .h1,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .question .h1,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .question .h1,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .question .h1,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .question .h1,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .question .h1,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .question .h1,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .question .h1,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .question .h1,\n.click-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .question .h1,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .question .h1,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .question .h1,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .question .h1,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .question .h1,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .question .h1,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .question .h1,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .question .h1,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .question .h1,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .question .h1,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .question .h1,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .question .h1,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .question .h1,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .question .h1,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .question .h3,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .question .h3,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .question .h3,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .question .h3,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .question .h3,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .question .h3,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .question .h3,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .question .h3,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .question .h3,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .question .h3,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .question .h3,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .question .h3,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .question .h3,\n.click-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .question .h3,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .question .h3,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .question .h3,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .question .h3,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .question .h3,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .question .h3,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .question .h3,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .question .h3,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .question .h3,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .question .h3,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .question .h3,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .question .h3,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .question .h3,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .question .h3,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .question .h3,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .question .h3,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .question .h3,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .question .h3,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .question .h3,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .question .h3,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .question .h3,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .question .h3,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .question .h3,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .question .h3,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .question .h3,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .question .h3,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .question .h3,\n.click-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .question .h3,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .question .h3,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .question .h3,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .question .h3,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .question .h3,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .question .h3,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .question .h3,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .question .h3,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .question .h3,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .question .h3,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .question .h3,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .question .h3,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .question .h3,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .question .h3,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .question .h3,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .question .h3,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .question .h3,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .question .h3,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .question .h3,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .question .h3,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .question .h3,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .question .h3,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .question .h3,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .question .h3,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .question .h3,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .question .h3,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .question .h3,\n.click-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .question .h3,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .question .h3,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .question .h3,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .question .h3,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .question .h3,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .question .h3,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .question .h3,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .question .h3,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .question .h3,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .question .h3,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .question .h3,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .question .h3,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .question .h3,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .question .h3 {\n  font-weight: 400;\n}\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .question .h2 canvas,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .question .h2 canvas,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .question .h2 canvas,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .question .h2 canvas,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .question .h2 canvas,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .question .h2 canvas,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .question .h2 canvas,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .question .h2 canvas,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .question .h2 canvas,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .question .h2 canvas,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .question .h2 canvas,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .question .h2 canvas,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .question .h2 canvas,\n.click-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .question .h2 canvas,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .question .h2 canvas,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .question .h2 canvas,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .question .h2 canvas,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .question .h2 canvas,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .question .h2 canvas,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .question .h2 canvas,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .question .h2 canvas,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .question .h2 canvas,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .question .h2 canvas,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .question .h2 canvas,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .question .h2 canvas,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .question .h2 canvas,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .question .h2 canvas,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .question .h2 canvas,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .question .h2 canvas,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .question .h2 canvas,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .question .h2 canvas,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .question .h2 canvas,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .question .h2 canvas,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .question .h2 canvas,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .question .h2 canvas,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .question .h2 canvas,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .question .h2 canvas,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .question .h2 canvas,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .question .h2 canvas,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .question .h2 canvas,\n.click-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .question .h2 canvas,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .question .h2 canvas,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .question .h2 canvas,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .question .h2 canvas,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .question .h2 canvas,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .question .h2 canvas,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .question .h2 canvas,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .question .h2 canvas,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .question .h2 canvas,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .question .h2 canvas,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .question .h2 canvas,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .question .h2 canvas,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .question .h2 canvas,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .question .h2 canvas,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .question .h2 canvas,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .question .h2 canvas,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .question .h2 canvas,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .question .h2 canvas,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .question .h2 canvas,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .question .h2 canvas,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .question .h2 canvas,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .question .h2 canvas,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .question .h2 canvas,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .question .h2 canvas,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .question .h2 canvas,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .question .h2 canvas,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .question .h2 canvas,\n.click-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .question .h2 canvas,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .question .h2 canvas,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .question .h2 canvas,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .question .h2 canvas,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .question .h2 canvas,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .question .h2 canvas,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .question .h2 canvas,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .question .h2 canvas,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .question .h2 canvas,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .question .h2 canvas,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .question .h2 canvas,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .question .h2 canvas,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .question .h2 canvas,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .question .h2 canvas {\n  width: 100%;\n  height: 100%;\n}\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .drop,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .drop,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .drop,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .drop,\n.click-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .drop,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .drop,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .drop,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .drop,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .drop,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .drop,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .drop,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .drop,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .drop,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .drop,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .drop,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .drop,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .drop,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .drop,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .drop,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .drop,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .drop,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .drop,\n.click-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .drop,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .drop,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .drop,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .drop,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .drop,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .drop,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .drop,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .drop,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .drop,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .drop,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .drop,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .drop,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .drop,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .drop,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .drop,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .drop,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .drop,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .drop,\n.click-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .drop,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .drop,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .drop,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .drop,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .drop,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop {\n  position: absolute;\n  right: 0;\n  transition: all 0.1s ease-in-out;\n}\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .arrow,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .arrow,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .arrow,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .arrow,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .arrow,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .arrow,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .arrow,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .arrow,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .arrow,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .arrow,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .arrow,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .arrow,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .arrow,\n.click-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .arrow,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .arrow,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .arrow,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .arrow,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .arrow,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .arrow,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .arrow,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .arrow,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .arrow,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .arrow,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .arrow,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .arrow,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .arrow,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .arrow,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .arrow,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .arrow,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .arrow,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .arrow,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .arrow,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .arrow,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .arrow,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .arrow,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .arrow,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .drop .arrow,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .drop .arrow,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .drop .arrow,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .drop .arrow,\n.click-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .drop .arrow,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .drop .arrow,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .drop .arrow,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .drop .arrow,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .drop .arrow,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .arrow,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .arrow,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .arrow,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .arrow,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .arrow,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .arrow,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .arrow,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .arrow,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .arrow,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .arrow,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .arrow,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .arrow,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .arrow,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .arrow,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .arrow,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .arrow,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .arrow,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .arrow,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .arrow,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .arrow,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .arrow,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .arrow,\n.click-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .arrow,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .arrow,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .arrow,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .arrow,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .arrow,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .arrow,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .arrow,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .arrow,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .arrow,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .arrow,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .arrow,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .arrow,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .arrow,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .arrow {\n  position: absolute;\n}\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop img,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop img,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop img,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop img,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop img,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop img,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop img,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop img,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop img,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .drop img,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .drop img,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .drop img,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .drop img,\n.click-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .drop img,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .drop img,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .drop img,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .drop img,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .drop img,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop img,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop img,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop img,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop img,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop img,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop img,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop img,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop img,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop img,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .drop img,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .drop img,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .drop img,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .drop img,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .drop img,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .drop img,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .drop img,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .drop img,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .drop img,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .drop img,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .drop img,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .drop img,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .drop img,\n.click-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .drop img,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .drop img,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .drop img,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .drop img,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .drop img,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .drop img,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .drop img,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .drop img,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .drop img,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .drop img,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .drop img,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .drop img,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .drop img,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .drop img,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop img,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop img,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop img,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop img,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop img,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop img,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop img,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop img,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop img,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .drop img,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .drop img,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .drop img,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .drop img,\n.click-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .drop img,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .drop img,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .drop img,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .drop img,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .drop img,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop img,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop img,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop img,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop img,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop img,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop img,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop img,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop img,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop img {\n  width: 100%;\n  height: 100%;\n}\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .count,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .count,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .count,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .count,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .count,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .count,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .count,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .count,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .count,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .count,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .count,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .count,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .count,\n.click-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .count,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .count,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .count,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .count,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .count,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .count,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .count,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .count,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .count,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .count,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .count,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .count,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .count,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .count,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .count,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .count,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .count,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .count,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .count,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .count,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .count,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .count,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .count,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .drop .count,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .drop .count,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .drop .count,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .drop .count,\n.click-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .drop .count,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .drop .count,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .drop .count,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .drop .count,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .drop .count,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .count,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .count,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .count,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .count,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .count,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .count,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .count,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .count,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .count,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .count,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .count,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .count,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .count,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .count,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .count,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .count,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .count,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .count,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .count,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .count,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .count,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .count,\n.click-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .count,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .count,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .count,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .count,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .count,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .count,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .count,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .count,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .count,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .count,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .count,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .count,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .count,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .count {\n  height: 16px;\n  width: 16px;\n  background-color: #fd6542;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  border-radius: 8px;\n  color: #fff;\n  display: none;\n}\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .bg,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .bg,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .bg,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .bg,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .bg,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .bg,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .bg,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .bg,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .bg,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .bg,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .bg,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .bg,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .bg,\n.click-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .bg,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .bg,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .bg,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .bg,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .bg,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .bg,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .bg,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .bg,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .bg,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .bg,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .bg,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .bg,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .bg,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .bg,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .bg,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .bg,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .bg,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .bg,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .bg,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .bg,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .bg,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .bg,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .bg,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .drop .bg,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .drop .bg,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .drop .bg,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .drop .bg,\n.click-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .drop .bg,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .drop .bg,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .drop .bg,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .drop .bg,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .drop .bg,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .bg,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .bg,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .bg,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .bg,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .bg,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .bg,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .bg,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .bg,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .bg,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .bg,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .bg,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .bg,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .bg,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .bg,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .bg,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .bg,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .bg,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .bg,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .bg,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .bg,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .bg,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .bg,\n.click-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .bg,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .bg,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .bg,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .bg,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .bg,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .bg,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .bg,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .bg,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .bg,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .bg,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .bg,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .bg,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .bg,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .bg {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 50%;\n  height: 50%;\n  margin: auto;\n  transition: all 0.3s ease-in-out;\n}\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .bg.drop,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .bg.drop,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .bg.drop,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .bg.drop,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .bg.drop,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .bg.drop,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .bg.drop,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .bg.drop,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .bg.drop,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .bg.drop,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .bg.drop,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .bg.drop,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .bg.drop,\n.click-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .bg.drop,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .bg.drop,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .bg.drop,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .bg.drop,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .bg.drop,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .bg.drop,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .bg.drop,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .bg.drop,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .bg.drop,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .bg.drop,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .bg.drop,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .bg.drop,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .bg.drop,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .bg.drop,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .bg.drop,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .bg.drop,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .bg.drop,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .bg.drop,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .bg.drop,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .bg.drop,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .bg.drop,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .bg.drop,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .bg.drop,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .drop .bg.drop,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .drop .bg.drop,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .drop .bg.drop,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .drop .bg.drop,\n.click-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .drop .bg.drop,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .drop .bg.drop,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .drop .bg.drop,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .drop .bg.drop,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .drop .bg.drop,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .bg.drop,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .bg.drop,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .bg.drop,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .bg.drop,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .bg.drop,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .bg.drop,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .bg.drop,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .bg.drop,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .bg.drop,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .bg.drop,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .bg.drop,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .bg.drop,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .bg.drop,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .bg.drop,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .bg.drop,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .bg.drop,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .bg.drop,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .bg.drop,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .bg.drop,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .bg.drop,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .bg.drop,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .bg.drop,\n.click-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .bg.drop,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .bg.drop,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .bg.drop,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .bg.drop,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .bg.drop,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .bg.drop,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .bg.drop,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .bg.drop,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .bg.drop,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .bg.drop,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .bg.drop,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .bg.drop,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .bg.drop,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .bg.drop,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .bg.gu-transit,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .bg.gu-transit,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .bg.gu-transit,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .bg.gu-transit,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .bg.gu-transit,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .bg.gu-transit,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .bg.gu-transit,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .bg.gu-transit,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-question-header .drop .bg.gu-transit,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .bg.gu-transit,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .bg.gu-transit,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .bg.gu-transit,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .bg.gu-transit,\n.click-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .bg.gu-transit,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .bg.gu-transit,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .bg.gu-transit,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .bg.gu-transit,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-question-header .drop .bg.gu-transit,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .bg.gu-transit,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .bg.gu-transit,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .bg.gu-transit,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .bg.gu-transit,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .bg.gu-transit,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .bg.gu-transit,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .bg.gu-transit,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .bg.gu-transit,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-question-header .drop .bg.gu-transit,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .bg.gu-transit,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .bg.gu-transit,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .bg.gu-transit,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .bg.gu-transit,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .bg.gu-transit,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .bg.gu-transit,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .bg.gu-transit,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .bg.gu-transit,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .bg.gu-transit,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .drop .bg.gu-transit,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .drop .bg.gu-transit,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .drop .bg.gu-transit,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .drop .bg.gu-transit,\n.click-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .drop .bg.gu-transit,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .drop .bg.gu-transit,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .drop .bg.gu-transit,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .drop .bg.gu-transit,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .drop .bg.gu-transit,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .bg.gu-transit,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .bg.gu-transit,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .bg.gu-transit,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .bg.gu-transit,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .bg.gu-transit,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .bg.gu-transit,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .bg.gu-transit,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .bg.gu-transit,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .bg.gu-transit,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .bg.gu-transit,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .bg.gu-transit,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .bg.gu-transit,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .bg.gu-transit,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .bg.gu-transit,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .bg.gu-transit,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .bg.gu-transit,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .bg.gu-transit,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-question-header .drop .bg.gu-transit,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .bg.gu-transit,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .bg.gu-transit,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .bg.gu-transit,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .bg.gu-transit,\n.click-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .bg.gu-transit,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .bg.gu-transit,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .bg.gu-transit,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .bg.gu-transit,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-question-header .drop .bg.gu-transit,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .bg.gu-transit,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .bg.gu-transit,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .bg.gu-transit,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .bg.gu-transit,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .bg.gu-transit,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .bg.gu-transit,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .bg.gu-transit,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .bg.gu-transit,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-question-header .drop .bg.gu-transit {\n  border-radius: 8px;\n  background-size: cover;\n}\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .mask,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .mask,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .mask,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .mask,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .mask,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .mask,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .mask,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .mask,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .drop .mask,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .drop .mask,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .drop .mask,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .drop .mask,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .drop .mask,\n.click-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .drop .mask,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .drop .mask,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .drop .mask,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .drop .mask,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .drop .mask,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .mask,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .mask,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .mask,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .mask,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .mask,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .mask,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .mask,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .mask,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .drop .mask {\n  display: none;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  background-color: #000;\n  color: #fff;\n  opacity: 0.5;\n  border-radius: 0 0 4px 4px;\n}\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .drop canvas,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .drop canvas,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-question-header .drop canvas,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .drop canvas,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .drop canvas,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-question-header .drop canvas,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .drop canvas,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .drop canvas,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-question-header .drop canvas,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .drop canvas,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .drop canvas,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-question-header .drop canvas,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .drop canvas,\n.click-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .drop canvas,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-question-header .drop canvas,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .drop canvas,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .drop canvas,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-question-header .drop canvas,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .drop canvas,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .drop canvas,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-question-header .drop canvas,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .drop canvas,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .drop canvas,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-question-header .drop canvas,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .drop canvas,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .drop canvas,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-question-header .drop canvas {\n  width: 100%;\n  height: 100%;\n  border-radius: 4px;\n}\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .grid-container,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .grid-container,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .grid-container,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .grid-container,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .grid-container,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .grid-container,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .grid-container,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .grid-container,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .grid-container,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .grid-container,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .grid-container,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .grid-container,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .grid-container,\n.click-captcha-container .click-captcha-bg .click-captcha-question .grid-container,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .grid-container,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .grid-container,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .grid-container,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .grid-container,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .grid-container,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .grid-container,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .grid-container,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .grid-container,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .grid-container,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .grid-container,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .grid-container,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .grid-container,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .grid-container {\n  background-color: transparent;\n  border-radius: 4px;\n  font-size: 0;\n  margin: auto;\n}\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .grid-container .grid,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .grid-container .grid,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .grid-container .grid,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .grid-container .grid,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .grid-container .grid,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .grid-container .grid,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .grid-container .grid,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .grid-container .grid,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .grid-container .grid,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .grid-container .grid,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .grid-container .grid,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .grid-container .grid,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .grid-container .grid,\n.click-captcha-container .click-captcha-bg .click-captcha-question .grid-container .grid,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .grid-container .grid,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .grid-container .grid,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .grid-container .grid,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .grid-container .grid,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .grid-container .grid,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .grid-container .grid,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .grid-container .grid,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .grid-container .grid,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .grid-container .grid,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .grid-container .grid,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .grid-container .grid,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .grid-container .grid,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .grid-container .grid {\n  display: inline-block;\n  cursor: pointer;\n  background-size: cover;\n  opacity: 1;\n  transition: opacity 0.1s ease-in-out;\n}\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .grid-container .grid .empty,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .grid-container .grid .empty,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .grid-container .grid .empty,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .grid-container .grid .empty,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .grid-container .grid .empty,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .grid-container .grid .empty,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .grid-container .grid .empty,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .grid-container .grid .empty,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .grid-container .grid .empty,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .grid-container .grid .empty,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .grid-container .grid .empty,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .grid-container .grid .empty,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .grid-container .grid .empty,\n.click-captcha-container .click-captcha-bg .click-captcha-question .grid-container .grid .empty,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .grid-container .grid .empty,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .grid-container .grid .empty,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .grid-container .grid .empty,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .grid-container .grid .empty,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .grid-container .grid .empty,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .grid-container .grid .empty,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .grid-container .grid .empty,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .grid-container .grid .empty,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .grid-container .grid .empty,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .grid-container .grid .empty,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .grid-container .grid .empty,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .grid-container .grid .empty,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .grid-container .grid .empty {\n  position: absolute;\n}\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-loading,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-loading,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-loading,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-loading,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-loading,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-loading,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-loading,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-loading,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-loading,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-loading,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-loading,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-loading,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-loading,\n.click-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-loading,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-loading,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-loading,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-loading,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-loading,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-loading,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-loading,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-loading,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-loading,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-loading,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-loading,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-loading,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-loading,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-loading,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-loading,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-loading,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-loading,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-loading,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-loading,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-loading,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-loading,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-loading,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-loading,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-loading,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-loading,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-loading,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-loading,\n.click-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-loading,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-loading,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-loading,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-loading,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-loading,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-loading,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-loading,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-loading,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-loading,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-loading,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-loading,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-loading,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-loading,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-loading,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-loading,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-loading,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-loading,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-loading,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-loading,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-loading,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-loading,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-loading,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-loading,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-loading,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-loading,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-loading,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-loading,\n.click-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-loading,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-loading,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-loading,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-loading,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-loading,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-loading,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-loading,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-loading,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-loading,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-loading,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-loading,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-loading,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-loading,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-loading {\n  position: absolute;\n  height: 28px;\n  left: 10px;\n  text-align: center;\n  text-align: -webkit-center;\n}\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-loading.fruit_yellow circle,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-loading.fruit_yellow circle,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-loading.fruit_yellow circle,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-loading.fruit_yellow circle,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-loading.fruit_yellow circle,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-loading.fruit_yellow circle,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-loading.fruit_yellow circle,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-loading.fruit_yellow circle,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-loading.fruit_yellow circle,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-loading.fruit_yellow circle,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-loading.fruit_yellow circle,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-loading.fruit_yellow circle,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-loading.fruit_yellow circle,\n.click-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-loading.fruit_yellow circle,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-loading.fruit_yellow circle,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-loading.fruit_yellow circle,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-loading.fruit_yellow circle,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-loading.fruit_yellow circle,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-loading.fruit_yellow circle,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-loading.fruit_yellow circle,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-loading.fruit_yellow circle,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-loading.fruit_yellow circle,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-loading.fruit_yellow circle,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-loading.fruit_yellow circle,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-loading.fruit_yellow circle,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-loading.fruit_yellow circle,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-loading.fruit_yellow circle,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-loading.fruit_yellow circle,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-loading.fruit_yellow circle,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-loading.fruit_yellow circle,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-loading.fruit_yellow circle,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-loading.fruit_yellow circle,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-loading.fruit_yellow circle,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-loading.fruit_yellow circle,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-loading.fruit_yellow circle,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-loading.fruit_yellow circle,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-loading.fruit_yellow circle,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-loading.fruit_yellow circle,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-loading.fruit_yellow circle,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-loading.fruit_yellow circle,\n.click-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-loading.fruit_yellow circle,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-loading.fruit_yellow circle,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-loading.fruit_yellow circle,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-loading.fruit_yellow circle,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-loading.fruit_yellow circle,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-loading.fruit_yellow circle,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-loading.fruit_yellow circle,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-loading.fruit_yellow circle,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-loading.fruit_yellow circle,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-loading.fruit_yellow circle,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-loading.fruit_yellow circle,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-loading.fruit_yellow circle,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-loading.fruit_yellow circle,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-loading.fruit_yellow circle,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-loading.fruit_yellow circle,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-loading.fruit_yellow circle,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-loading.fruit_yellow circle,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-loading.fruit_yellow circle,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-loading.fruit_yellow circle,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-loading.fruit_yellow circle,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-loading.fruit_yellow circle,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-loading.fruit_yellow circle,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-loading.fruit_yellow circle,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-loading.fruit_yellow circle,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-loading.fruit_yellow circle,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-loading.fruit_yellow circle,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-loading.fruit_yellow circle,\n.click-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-loading.fruit_yellow circle,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-loading.fruit_yellow circle,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-loading.fruit_yellow circle,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-loading.fruit_yellow circle,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-loading.fruit_yellow circle,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-loading.fruit_yellow circle,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-loading.fruit_yellow circle,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-loading.fruit_yellow circle,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-loading.fruit_yellow circle,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-loading.fruit_yellow circle,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-loading.fruit_yellow circle,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-loading.fruit_yellow circle,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-loading.fruit_yellow circle,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-loading.fruit_yellow circle {\n  fill: #ffbc00;\n}\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-loading.landscape_blue circle,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-loading.landscape_blue circle,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-loading.landscape_blue circle,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-loading.landscape_blue circle,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-loading.landscape_blue circle,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-loading.landscape_blue circle,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-loading.landscape_blue circle,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-loading.landscape_blue circle,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-loading.landscape_blue circle,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-loading.landscape_blue circle,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-loading.landscape_blue circle,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-loading.landscape_blue circle,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-loading.landscape_blue circle,\n.click-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-loading.landscape_blue circle,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-loading.landscape_blue circle,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-loading.landscape_blue circle,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-loading.landscape_blue circle,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-loading.landscape_blue circle,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-loading.landscape_blue circle,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-loading.landscape_blue circle,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-loading.landscape_blue circle,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-loading.landscape_blue circle,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-loading.landscape_blue circle,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-loading.landscape_blue circle,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-loading.landscape_blue circle,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-loading.landscape_blue circle,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-loading.landscape_blue circle,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-loading.landscape_blue circle,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-loading.landscape_blue circle,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-loading.landscape_blue circle,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-loading.landscape_blue circle,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-loading.landscape_blue circle,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-loading.landscape_blue circle,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-loading.landscape_blue circle,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-loading.landscape_blue circle,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-loading.landscape_blue circle,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-loading.landscape_blue circle,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-loading.landscape_blue circle,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-loading.landscape_blue circle,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-loading.landscape_blue circle,\n.click-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-loading.landscape_blue circle,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-loading.landscape_blue circle,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-loading.landscape_blue circle,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-loading.landscape_blue circle,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-loading.landscape_blue circle,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-loading.landscape_blue circle,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-loading.landscape_blue circle,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-loading.landscape_blue circle,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-loading.landscape_blue circle,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-loading.landscape_blue circle,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-loading.landscape_blue circle,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-loading.landscape_blue circle,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-loading.landscape_blue circle,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-loading.landscape_blue circle,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-loading.landscape_blue circle,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-loading.landscape_blue circle,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-loading.landscape_blue circle,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-loading.landscape_blue circle,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-loading.landscape_blue circle,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-loading.landscape_blue circle,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-loading.landscape_blue circle,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-loading.landscape_blue circle,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-loading.landscape_blue circle,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-loading.landscape_blue circle,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-loading.landscape_blue circle,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-loading.landscape_blue circle,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-loading.landscape_blue circle,\n.click-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-loading.landscape_blue circle,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-loading.landscape_blue circle,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-loading.landscape_blue circle,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-loading.landscape_blue circle,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-loading.landscape_blue circle,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-loading.landscape_blue circle,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-loading.landscape_blue circle,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-loading.landscape_blue circle,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-loading.landscape_blue circle,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-loading.landscape_blue circle,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-loading.landscape_blue circle,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-loading.landscape_blue circle,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-loading.landscape_blue circle,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-loading.landscape_blue circle {\n  fill: #289cff;\n}\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-loading.plant_green circle,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-loading.plant_green circle,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-loading.plant_green circle,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-loading.plant_green circle,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-loading.plant_green circle,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-loading.plant_green circle,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-loading.plant_green circle,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-loading.plant_green circle,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-loading.plant_green circle,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-loading.plant_green circle,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-loading.plant_green circle,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-loading.plant_green circle,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-loading.plant_green circle,\n.click-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-loading.plant_green circle,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-loading.plant_green circle,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-loading.plant_green circle,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-loading.plant_green circle,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-loading.plant_green circle,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-loading.plant_green circle,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-loading.plant_green circle,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-loading.plant_green circle,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-loading.plant_green circle,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-loading.plant_green circle,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-loading.plant_green circle,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-loading.plant_green circle,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-loading.plant_green circle,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-loading.plant_green circle,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-loading.plant_green circle,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-loading.plant_green circle,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-loading.plant_green circle,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-loading.plant_green circle,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-loading.plant_green circle,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-loading.plant_green circle,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-loading.plant_green circle,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-loading.plant_green circle,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-loading.plant_green circle,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-loading.plant_green circle,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-loading.plant_green circle,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-loading.plant_green circle,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-loading.plant_green circle,\n.click-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-loading.plant_green circle,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-loading.plant_green circle,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-loading.plant_green circle,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-loading.plant_green circle,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-loading.plant_green circle,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-loading.plant_green circle,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-loading.plant_green circle,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-loading.plant_green circle,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-loading.plant_green circle,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-loading.plant_green circle,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-loading.plant_green circle,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-loading.plant_green circle,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-loading.plant_green circle,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-loading.plant_green circle,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-loading.plant_green circle,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-loading.plant_green circle,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-loading.plant_green circle,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-loading.plant_green circle,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-loading.plant_green circle,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-loading.plant_green circle,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-loading.plant_green circle,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-loading.plant_green circle,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-loading.plant_green circle,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-loading.plant_green circle,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-loading.plant_green circle,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-loading.plant_green circle,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-loading.plant_green circle,\n.click-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-loading.plant_green circle,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-loading.plant_green circle,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-loading.plant_green circle,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-loading.plant_green circle,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-loading.plant_green circle,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-loading.plant_green circle,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-loading.plant_green circle,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-loading.plant_green circle,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-loading.plant_green circle,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-loading.plant_green circle,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-loading.plant_green circle,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-loading.plant_green circle,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-loading.plant_green circle,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-loading.plant_green circle {\n  fill: #0fb799;\n}\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-loading.universe_purple circle,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-loading.universe_purple circle,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-loading.universe_purple circle,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-loading.universe_purple circle,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-loading.universe_purple circle,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-loading.universe_purple circle,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-loading.universe_purple circle,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-loading.universe_purple circle,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-loading.universe_purple circle,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-loading.universe_purple circle,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-loading.universe_purple circle,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-loading.universe_purple circle,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-loading.universe_purple circle,\n.click-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-loading.universe_purple circle,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-loading.universe_purple circle,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-loading.universe_purple circle,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-loading.universe_purple circle,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-loading.universe_purple circle,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-loading.universe_purple circle,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-loading.universe_purple circle,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-loading.universe_purple circle,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-loading.universe_purple circle,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-loading.universe_purple circle,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-loading.universe_purple circle,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-loading.universe_purple circle,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-loading.universe_purple circle,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-loading.universe_purple circle,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-loading.universe_purple circle,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-loading.universe_purple circle,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-loading.universe_purple circle,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-loading.universe_purple circle,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-loading.universe_purple circle,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-loading.universe_purple circle,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-loading.universe_purple circle,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-loading.universe_purple circle,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-loading.universe_purple circle,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-loading.universe_purple circle,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-loading.universe_purple circle,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-loading.universe_purple circle,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-loading.universe_purple circle,\n.click-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-loading.universe_purple circle,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-loading.universe_purple circle,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-loading.universe_purple circle,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-loading.universe_purple circle,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-loading.universe_purple circle,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-loading.universe_purple circle,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-loading.universe_purple circle,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-loading.universe_purple circle,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-loading.universe_purple circle,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-loading.universe_purple circle,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-loading.universe_purple circle,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-loading.universe_purple circle,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-loading.universe_purple circle,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-loading.universe_purple circle,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-loading.universe_purple circle,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-loading.universe_purple circle,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-loading.universe_purple circle,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-loading.universe_purple circle,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-loading.universe_purple circle,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-loading.universe_purple circle,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-loading.universe_purple circle,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-loading.universe_purple circle,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-loading.universe_purple circle,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-loading.universe_purple circle,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-loading.universe_purple circle,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-loading.universe_purple circle,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-loading.universe_purple circle,\n.click-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-loading.universe_purple circle,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-loading.universe_purple circle,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-loading.universe_purple circle,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-loading.universe_purple circle,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-loading.universe_purple circle,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-loading.universe_purple circle,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-loading.universe_purple circle,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-loading.universe_purple circle,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-loading.universe_purple circle,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-loading.universe_purple circle,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-loading.universe_purple circle,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-loading.universe_purple circle,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-loading.universe_purple circle,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-loading.universe_purple circle {\n  fill: #6358f0;\n}\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-loading.clothes_red circle,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-loading.clothes_red circle,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-loading.clothes_red circle,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-loading.clothes_red circle,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-loading.clothes_red circle,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-loading.clothes_red circle,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-loading.clothes_red circle,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-loading.clothes_red circle,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-loading.clothes_red circle,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-loading.clothes_red circle,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-loading.clothes_red circle,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-loading.clothes_red circle,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-loading.clothes_red circle,\n.click-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-loading.clothes_red circle,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-loading.clothes_red circle,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-loading.clothes_red circle,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-loading.clothes_red circle,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-loading.clothes_red circle,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-loading.clothes_red circle,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-loading.clothes_red circle,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-loading.clothes_red circle,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-loading.clothes_red circle,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-loading.clothes_red circle,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-loading.clothes_red circle,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-loading.clothes_red circle,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-loading.clothes_red circle,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-loading.clothes_red circle,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-loading.clothes_red circle,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-loading.clothes_red circle,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-loading.clothes_red circle,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-loading.clothes_red circle,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-loading.clothes_red circle,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-loading.clothes_red circle,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-loading.clothes_red circle,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-loading.clothes_red circle,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-loading.clothes_red circle,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-loading.clothes_red circle,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-loading.clothes_red circle,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-loading.clothes_red circle,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-loading.clothes_red circle,\n.click-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-loading.clothes_red circle,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-loading.clothes_red circle,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-loading.clothes_red circle,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-loading.clothes_red circle,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-loading.clothes_red circle,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-loading.clothes_red circle,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-loading.clothes_red circle,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-loading.clothes_red circle,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-loading.clothes_red circle,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-loading.clothes_red circle,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-loading.clothes_red circle,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-loading.clothes_red circle,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-loading.clothes_red circle,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-loading.clothes_red circle,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-loading.clothes_red circle,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-loading.clothes_red circle,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-loading.clothes_red circle,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-loading.clothes_red circle,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-loading.clothes_red circle,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-loading.clothes_red circle,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-loading.clothes_red circle,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-loading.clothes_red circle,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-loading.clothes_red circle,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-loading.clothes_red circle,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-loading.clothes_red circle,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-loading.clothes_red circle,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-loading.clothes_red circle,\n.click-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-loading.clothes_red circle,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-loading.clothes_red circle,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-loading.clothes_red circle,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-loading.clothes_red circle,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-loading.clothes_red circle,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-loading.clothes_red circle,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-loading.clothes_red circle,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-loading.clothes_red circle,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-loading.clothes_red circle,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-loading.clothes_red circle,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-loading.clothes_red circle,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-loading.clothes_red circle,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-loading.clothes_red circle,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-loading.clothes_red circle {\n  fill: #f74a4a;\n}\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-loading.animals_orange circle,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-loading.animals_orange circle,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-loading.animals_orange circle,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-loading.animals_orange circle,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-loading.animals_orange circle,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-loading.animals_orange circle,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-loading.animals_orange circle,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-loading.animals_orange circle,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-loading.animals_orange circle,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-loading.animals_orange circle,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-loading.animals_orange circle,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-loading.animals_orange circle,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-loading.animals_orange circle,\n.click-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-loading.animals_orange circle,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-loading.animals_orange circle,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-loading.animals_orange circle,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-loading.animals_orange circle,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-loading.animals_orange circle,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-loading.animals_orange circle,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-loading.animals_orange circle,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-loading.animals_orange circle,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-loading.animals_orange circle,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-loading.animals_orange circle,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-loading.animals_orange circle,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-loading.animals_orange circle,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-loading.animals_orange circle,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-loading.animals_orange circle,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-loading.animals_orange circle,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-loading.animals_orange circle,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-loading.animals_orange circle,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-loading.animals_orange circle,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-loading.animals_orange circle,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-loading.animals_orange circle,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-loading.animals_orange circle,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-loading.animals_orange circle,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-loading.animals_orange circle,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-loading.animals_orange circle,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-loading.animals_orange circle,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-loading.animals_orange circle,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-loading.animals_orange circle,\n.click-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-loading.animals_orange circle,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-loading.animals_orange circle,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-loading.animals_orange circle,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-loading.animals_orange circle,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-loading.animals_orange circle,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-loading.animals_orange circle,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-loading.animals_orange circle,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-loading.animals_orange circle,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-loading.animals_orange circle,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-loading.animals_orange circle,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-loading.animals_orange circle,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-loading.animals_orange circle,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-loading.animals_orange circle,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-loading.animals_orange circle,\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-loading.animals_orange circle,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-loading.animals_orange circle,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-loading.animals_orange circle,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-loading.animals_orange circle,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-loading.animals_orange circle,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-loading.animals_orange circle,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-loading.animals_orange circle,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-loading.animals_orange circle,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-loading.animals_orange circle,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-loading.animals_orange circle,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-loading.animals_orange circle,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-loading.animals_orange circle,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-loading.animals_orange circle,\n.click-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-loading.animals_orange circle,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-loading.animals_orange circle,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-loading.animals_orange circle,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-loading.animals_orange circle,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-loading.animals_orange circle,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-loading.animals_orange circle,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-loading.animals_orange circle,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-loading.animals_orange circle,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-loading.animals_orange circle,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-loading.animals_orange circle,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-loading.animals_orange circle,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-loading.animals_orange circle,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-loading.animals_orange circle,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-loading.animals_orange circle {\n  font: #ff6a00;\n}\n.connect-captcha-container .connect-captcha-bg .connect-captcha-question .refresh,\n.click-captcha-container .connect-captcha-bg .connect-captcha-question .refresh,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-question .refresh,\n.connect-captcha-container .click-captcha-bg .connect-captcha-question .refresh,\n.click-captcha-container .click-captcha-bg .connect-captcha-question .refresh,\n.drag-captcha-container .click-captcha-bg .connect-captcha-question .refresh,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-question .refresh,\n.click-captcha-container .drag-captcha-bg .connect-captcha-question .refresh,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-question .refresh,\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .refresh,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .refresh,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .refresh,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .refresh,\n.click-captcha-container .click-captcha-bg .click-captcha-question .refresh,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .refresh,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .refresh,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .refresh,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .refresh,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .refresh,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .refresh,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .refresh,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .refresh,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .refresh,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .refresh,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .refresh,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .refresh,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .refresh {\n  position: relative;\n  display: block;\n  font-size: 16px;\n  line-height: 16px;\n  width: 16px;\n  height: 16px;\n  margin-top: 10px;\n  margin-left: 100%;\n  left: -16px;\n  cursor: pointer;\n}\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .grid,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .grid,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .grid,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .grid,\n.click-captcha-container .click-captcha-bg .click-captcha-question .grid,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .grid,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .grid,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .grid,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .grid,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .grid,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .grid,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .grid,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .grid,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .grid,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .grid,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .grid,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .grid,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .grid {\n  cursor: pointer;\n}\n.connect-captcha-container .connect-captcha-bg .click-captcha-question .grid .bg,\n.click-captcha-container .connect-captcha-bg .click-captcha-question .grid .bg,\n.drag-captcha-container .connect-captcha-bg .click-captcha-question .grid .bg,\n.connect-captcha-container .click-captcha-bg .click-captcha-question .grid .bg,\n.click-captcha-container .click-captcha-bg .click-captcha-question .grid .bg,\n.drag-captcha-container .click-captcha-bg .click-captcha-question .grid .bg,\n.connect-captcha-container .drag-captcha-bg .click-captcha-question .grid .bg,\n.click-captcha-container .drag-captcha-bg .click-captcha-question .grid .bg,\n.drag-captcha-container .drag-captcha-bg .click-captcha-question .grid .bg,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-question .grid .bg,\n.click-captcha-container .connect-captcha-bg .drag-captcha-question .grid .bg,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-question .grid .bg,\n.connect-captcha-container .click-captcha-bg .drag-captcha-question .grid .bg,\n.click-captcha-container .click-captcha-bg .drag-captcha-question .grid .bg,\n.drag-captcha-container .click-captcha-bg .drag-captcha-question .grid .bg,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-question .grid .bg,\n.click-captcha-container .drag-captcha-bg .drag-captcha-question .grid .bg,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-question .grid .bg {\n  transition: opacity 0.05s ease-in-out, transform 0.05s ease-in-out;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n}\n.connect-captcha-container .connect-captcha-bg .connect-captcha-result,\n.click-captcha-container .connect-captcha-bg .connect-captcha-result,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-result,\n.connect-captcha-container .click-captcha-bg .connect-captcha-result,\n.click-captcha-container .click-captcha-bg .connect-captcha-result,\n.drag-captcha-container .click-captcha-bg .connect-captcha-result,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-result,\n.click-captcha-container .drag-captcha-bg .connect-captcha-result,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-result,\n.connect-captcha-container .connect-captcha-bg .click-captcha-result,\n.click-captcha-container .connect-captcha-bg .click-captcha-result,\n.drag-captcha-container .connect-captcha-bg .click-captcha-result,\n.connect-captcha-container .click-captcha-bg .click-captcha-result,\n.click-captcha-container .click-captcha-bg .click-captcha-result,\n.drag-captcha-container .click-captcha-bg .click-captcha-result,\n.connect-captcha-container .drag-captcha-bg .click-captcha-result,\n.click-captcha-container .drag-captcha-bg .click-captcha-result,\n.drag-captcha-container .drag-captcha-bg .click-captcha-result,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-result,\n.click-captcha-container .connect-captcha-bg .drag-captcha-result,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-result,\n.connect-captcha-container .click-captcha-bg .drag-captcha-result,\n.click-captcha-container .click-captcha-bg .drag-captcha-result,\n.drag-captcha-container .click-captcha-bg .drag-captcha-result,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-result,\n.click-captcha-container .drag-captcha-bg .drag-captcha-result,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-result {\n  position: absolute;\n  left: 10px;\n  text-align: center;\n  font-size: 14px;\n  color: #fff;\n  overflow: hidden;\n  display: none;\n}\n.connect-captcha-container .connect-captcha-bg .connect-captcha-result .result-mask,\n.click-captcha-container .connect-captcha-bg .connect-captcha-result .result-mask,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-result .result-mask,\n.connect-captcha-container .click-captcha-bg .connect-captcha-result .result-mask,\n.click-captcha-container .click-captcha-bg .connect-captcha-result .result-mask,\n.drag-captcha-container .click-captcha-bg .connect-captcha-result .result-mask,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-result .result-mask,\n.click-captcha-container .drag-captcha-bg .connect-captcha-result .result-mask,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-result .result-mask,\n.connect-captcha-container .connect-captcha-bg .click-captcha-result .result-mask,\n.click-captcha-container .connect-captcha-bg .click-captcha-result .result-mask,\n.drag-captcha-container .connect-captcha-bg .click-captcha-result .result-mask,\n.connect-captcha-container .click-captcha-bg .click-captcha-result .result-mask,\n.click-captcha-container .click-captcha-bg .click-captcha-result .result-mask,\n.drag-captcha-container .click-captcha-bg .click-captcha-result .result-mask,\n.connect-captcha-container .drag-captcha-bg .click-captcha-result .result-mask,\n.click-captcha-container .drag-captcha-bg .click-captcha-result .result-mask,\n.drag-captcha-container .drag-captcha-bg .click-captcha-result .result-mask,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-result .result-mask,\n.click-captcha-container .connect-captcha-bg .drag-captcha-result .result-mask,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-result .result-mask,\n.connect-captcha-container .click-captcha-bg .drag-captcha-result .result-mask,\n.click-captcha-container .click-captcha-bg .drag-captcha-result .result-mask,\n.drag-captcha-container .click-captcha-bg .drag-captcha-result .result-mask,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-result .result-mask,\n.click-captcha-container .drag-captcha-bg .drag-captcha-result .result-mask,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-result .result-mask {\n  width: 100%;\n  height: 100%;\n}\n.connect-captcha-container .connect-captcha-bg .connect-captcha-result .result-content,\n.click-captcha-container .connect-captcha-bg .connect-captcha-result .result-content,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-result .result-content,\n.connect-captcha-container .click-captcha-bg .connect-captcha-result .result-content,\n.click-captcha-container .click-captcha-bg .connect-captcha-result .result-content,\n.drag-captcha-container .click-captcha-bg .connect-captcha-result .result-content,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-result .result-content,\n.click-captcha-container .drag-captcha-bg .connect-captcha-result .result-content,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-result .result-content,\n.connect-captcha-container .connect-captcha-bg .click-captcha-result .result-content,\n.click-captcha-container .connect-captcha-bg .click-captcha-result .result-content,\n.drag-captcha-container .connect-captcha-bg .click-captcha-result .result-content,\n.connect-captcha-container .click-captcha-bg .click-captcha-result .result-content,\n.click-captcha-container .click-captcha-bg .click-captcha-result .result-content,\n.drag-captcha-container .click-captcha-bg .click-captcha-result .result-content,\n.connect-captcha-container .drag-captcha-bg .click-captcha-result .result-content,\n.click-captcha-container .drag-captcha-bg .click-captcha-result .result-content,\n.drag-captcha-container .drag-captcha-bg .click-captcha-result .result-content,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-result .result-content,\n.click-captcha-container .connect-captcha-bg .drag-captcha-result .result-content,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-result .result-content,\n.connect-captcha-container .click-captcha-bg .drag-captcha-result .result-content,\n.click-captcha-container .click-captcha-bg .drag-captcha-result .result-content,\n.drag-captcha-container .click-captcha-bg .drag-captcha-result .result-content,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-result .result-content,\n.click-captcha-container .drag-captcha-bg .drag-captcha-result .result-content,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-result .result-content {\n  position: absolute;\n  margin: auto;\n  top: 0 !important;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 67px;\n  text-align: center;\n}\n.connect-captcha-container .connect-captcha-bg .connect-captcha-result .result-content .result-icon,\n.click-captcha-container .connect-captcha-bg .connect-captcha-result .result-content .result-icon,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-result .result-content .result-icon,\n.connect-captcha-container .click-captcha-bg .connect-captcha-result .result-content .result-icon,\n.click-captcha-container .click-captcha-bg .connect-captcha-result .result-content .result-icon,\n.drag-captcha-container .click-captcha-bg .connect-captcha-result .result-content .result-icon,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-result .result-content .result-icon,\n.click-captcha-container .drag-captcha-bg .connect-captcha-result .result-content .result-icon,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-result .result-content .result-icon,\n.connect-captcha-container .connect-captcha-bg .click-captcha-result .result-content .result-icon,\n.click-captcha-container .connect-captcha-bg .click-captcha-result .result-content .result-icon,\n.drag-captcha-container .connect-captcha-bg .click-captcha-result .result-content .result-icon,\n.connect-captcha-container .click-captcha-bg .click-captcha-result .result-content .result-icon,\n.click-captcha-container .click-captcha-bg .click-captcha-result .result-content .result-icon,\n.drag-captcha-container .click-captcha-bg .click-captcha-result .result-content .result-icon,\n.connect-captcha-container .drag-captcha-bg .click-captcha-result .result-content .result-icon,\n.click-captcha-container .drag-captcha-bg .click-captcha-result .result-content .result-icon,\n.drag-captcha-container .drag-captcha-bg .click-captcha-result .result-content .result-icon,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-result .result-content .result-icon,\n.click-captcha-container .connect-captcha-bg .drag-captcha-result .result-content .result-icon,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-result .result-content .result-icon,\n.connect-captcha-container .click-captcha-bg .drag-captcha-result .result-content .result-icon,\n.click-captcha-container .click-captcha-bg .drag-captcha-result .result-content .result-icon,\n.drag-captcha-container .click-captcha-bg .drag-captcha-result .result-content .result-icon,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-result .result-content .result-icon,\n.click-captcha-container .drag-captcha-bg .drag-captcha-result .result-content .result-icon,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-result .result-content .result-icon {\n  margin: auto;\n  margin-bottom: 6px;\n  display: block;\n}\n.connect-captcha-container .connect-captcha-bg .connect-captcha-result .result-info,\n.click-captcha-container .connect-captcha-bg .connect-captcha-result .result-info,\n.drag-captcha-container .connect-captcha-bg .connect-captcha-result .result-info,\n.connect-captcha-container .click-captcha-bg .connect-captcha-result .result-info,\n.click-captcha-container .click-captcha-bg .connect-captcha-result .result-info,\n.drag-captcha-container .click-captcha-bg .connect-captcha-result .result-info,\n.connect-captcha-container .drag-captcha-bg .connect-captcha-result .result-info,\n.click-captcha-container .drag-captcha-bg .connect-captcha-result .result-info,\n.drag-captcha-container .drag-captcha-bg .connect-captcha-result .result-info,\n.connect-captcha-container .connect-captcha-bg .click-captcha-result .result-info,\n.click-captcha-container .connect-captcha-bg .click-captcha-result .result-info,\n.drag-captcha-container .connect-captcha-bg .click-captcha-result .result-info,\n.connect-captcha-container .click-captcha-bg .click-captcha-result .result-info,\n.click-captcha-container .click-captcha-bg .click-captcha-result .result-info,\n.drag-captcha-container .click-captcha-bg .click-captcha-result .result-info,\n.connect-captcha-container .drag-captcha-bg .click-captcha-result .result-info,\n.click-captcha-container .drag-captcha-bg .click-captcha-result .result-info,\n.drag-captcha-container .drag-captcha-bg .click-captcha-result .result-info,\n.connect-captcha-container .connect-captcha-bg .drag-captcha-result .result-info,\n.click-captcha-container .connect-captcha-bg .drag-captcha-result .result-info,\n.drag-captcha-container .connect-captcha-bg .drag-captcha-result .result-info,\n.connect-captcha-container .click-captcha-bg .drag-captcha-result .result-info,\n.click-captcha-container .click-captcha-bg .drag-captcha-result .result-info,\n.drag-captcha-container .click-captcha-bg .drag-captcha-result .result-info,\n.connect-captcha-container .drag-captcha-bg .drag-captcha-result .result-info,\n.click-captcha-container .drag-captcha-bg .drag-captcha-result .result-info,\n.drag-captcha-container .drag-captcha-bg .drag-captcha-result .result-info {\n  position: absolute;\n  min-width: 100%;\n  bottom: 0;\n  left: 0;\n  top: auto;\n  background-color: #58c65f;\n  border-radius: 2px;\n  white-space: nowrap;\n}\n.connect-captcha-container .connect-captcha-bg .connect-canvas-container,\n.click-captcha-container .connect-captcha-bg .connect-canvas-container,\n.drag-captcha-container .connect-captcha-bg .connect-canvas-container,\n.connect-captcha-container .click-captcha-bg .connect-canvas-container,\n.click-captcha-container .click-captcha-bg .connect-canvas-container,\n.drag-captcha-container .click-captcha-bg .connect-canvas-container,\n.connect-captcha-container .drag-captcha-bg .connect-canvas-container,\n.click-captcha-container .drag-captcha-bg .connect-canvas-container,\n.drag-captcha-container .drag-captcha-bg .connect-canvas-container,\n.connect-captcha-container .connect-captcha-bg .drag-guide-container,\n.click-captcha-container .connect-captcha-bg .drag-guide-container,\n.drag-captcha-container .connect-captcha-bg .drag-guide-container,\n.connect-captcha-container .click-captcha-bg .drag-guide-container,\n.click-captcha-container .click-captcha-bg .drag-guide-container,\n.drag-captcha-container .click-captcha-bg .drag-guide-container,\n.connect-captcha-container .drag-captcha-bg .drag-guide-container,\n.click-captcha-container .drag-captcha-bg .drag-guide-container,\n.drag-captcha-container .drag-captcha-bg .drag-guide-container {\n  position: absolute;\n  left: 10px;\n}\n.connect-captcha-container .connect-captcha-bg .connect-canvas-container canvas,\n.click-captcha-container .connect-captcha-bg .connect-canvas-container canvas,\n.drag-captcha-container .connect-captcha-bg .connect-canvas-container canvas,\n.connect-captcha-container .click-captcha-bg .connect-canvas-container canvas,\n.click-captcha-container .click-captcha-bg .connect-canvas-container canvas,\n.drag-captcha-container .click-captcha-bg .connect-canvas-container canvas,\n.connect-captcha-container .drag-captcha-bg .connect-canvas-container canvas,\n.click-captcha-container .drag-captcha-bg .connect-canvas-container canvas,\n.drag-captcha-container .drag-captcha-bg .connect-canvas-container canvas,\n.connect-captcha-container .connect-captcha-bg .drag-guide-container canvas,\n.click-captcha-container .connect-captcha-bg .drag-guide-container canvas,\n.drag-captcha-container .connect-captcha-bg .drag-guide-container canvas,\n.connect-captcha-container .click-captcha-bg .drag-guide-container canvas,\n.click-captcha-container .click-captcha-bg .drag-guide-container canvas,\n.drag-captcha-container .click-captcha-bg .drag-guide-container canvas,\n.connect-captcha-container .drag-captcha-bg .drag-guide-container canvas,\n.click-captcha-container .drag-captcha-bg .drag-guide-container canvas,\n.drag-captcha-container .drag-captcha-bg .drag-guide-container canvas {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  transform: translate(0%, 0%);\n}\n.connect-captcha-container .connect-captcha-bg .drag-guide-container,\n.click-captcha-container .connect-captcha-bg .drag-guide-container,\n.drag-captcha-container .connect-captcha-bg .drag-guide-container,\n.connect-captcha-container .click-captcha-bg .drag-guide-container,\n.click-captcha-container .click-captcha-bg .drag-guide-container,\n.drag-captcha-container .click-captcha-bg .drag-guide-container,\n.connect-captcha-container .drag-captcha-bg .drag-guide-container,\n.click-captcha-container .drag-captcha-bg .drag-guide-container,\n.drag-captcha-container .drag-captcha-bg .drag-guide-container {\n  display: none;\n}\n.connect-captcha-container .connect-captcha-bg .drag-guide-container .guide,\n.click-captcha-container .connect-captcha-bg .drag-guide-container .guide,\n.drag-captcha-container .connect-captcha-bg .drag-guide-container .guide,\n.connect-captcha-container .click-captcha-bg .drag-guide-container .guide,\n.click-captcha-container .click-captcha-bg .drag-guide-container .guide,\n.drag-captcha-container .click-captcha-bg .drag-guide-container .guide,\n.connect-captcha-container .drag-captcha-bg .drag-guide-container .guide,\n.click-captcha-container .drag-captcha-bg .drag-guide-container .guide,\n.drag-captcha-container .drag-captcha-bg .drag-guide-container .guide {\n  display: block;\n}\n.connect-captcha-container .connect-captcha-bg .guide,\n.click-captcha-container .connect-captcha-bg .guide,\n.drag-captcha-container .connect-captcha-bg .guide,\n.connect-captcha-container .click-captcha-bg .guide,\n.click-captcha-container .click-captcha-bg .guide,\n.drag-captcha-container .click-captcha-bg .guide,\n.connect-captcha-container .drag-captcha-bg .guide,\n.click-captcha-container .drag-captcha-bg .guide,\n.drag-captcha-container .drag-captcha-bg .guide {\n  display: none;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 16px;\n  margin: auto;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 70%;\n  height: 70%;\n}\n.connect-captcha-container .connect-captcha-bg .guide img,\n.click-captcha-container .connect-captcha-bg .guide img,\n.drag-captcha-container .connect-captcha-bg .guide img,\n.connect-captcha-container .click-captcha-bg .guide img,\n.click-captcha-container .click-captcha-bg .guide img,\n.drag-captcha-container .click-captcha-bg .guide img,\n.connect-captcha-container .drag-captcha-bg .guide img,\n.click-captcha-container .drag-captcha-bg .guide img,\n.drag-captcha-container .drag-captcha-bg .guide img {\n  width: 100%;\n  height: 100%;\n}\n.connect-captcha-container .connect-captcha-bg .error,\n.click-captcha-container .connect-captcha-bg .error,\n.drag-captcha-container .connect-captcha-bg .error,\n.connect-captcha-container .click-captcha-bg .error,\n.click-captcha-container .click-captcha-bg .error,\n.drag-captcha-container .click-captcha-bg .error,\n.connect-captcha-container .drag-captcha-bg .error,\n.click-captcha-container .drag-captcha-bg .error,\n.drag-captcha-container .drag-captcha-bg .error {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  display: none;\n}\n.connect-captcha-container .submit,\n.click-captcha-container .submit,\n.drag-captcha-container .submit {\n  background-color: #a0cbfa;\n  text-align: center;\n  font-size: 14px;\n  cursor: not-allowed;\n  border-radius: 8px;\n  color: #fff;\n  margin: auto;\n}\n.mobile.captchacapclick .copyright,\n.mobile.captchacapdrag .copyright,\n.mobile.captchacapconnect .copyright {\n  top: 678px !important;\n}\n.taobao-app .scratch-captcha-question-header {\n  margin: 35px 12px 15px 12px;\n}\n.taobao-app .puzzle-captcha-question-header {\n  margin: 40px 12px 20px 12px;\n}\n.taobao-app .scratch-captcha-question-header .info,\n.taobao-app .puzzle-captcha-question-header .info {\n  overflow: hidden;\n  position: relative;\n}\n.taobao-app .scratch-captcha-question-header .info .title,\n.taobao-app .puzzle-captcha-question-header .info .title {\n  font-size: 18px;\n  font-weight: 500;\n  color: #11192d;\n  position: absolute;\n  white-space: nowrap;\n  line-height: 20px;\n  height: 100%;\n  left: 0;\n  right: 0;\n}\n.taobao-app .scratch-captcha-container-bg,\n.taobao-app .puzzle-captcha-container-bg {\n  padding: 12px 0 34px 0;\n  background-color: #f3f6f8;\n}\n.taobao-app .scratch-captcha-container-bg .scratch-captcha-question,\n.taobao-app .puzzle-captcha-container-bg .scratch-captcha-question,\n.taobao-app .scratch-captcha-container-bg .puzzle-captcha-question,\n.taobao-app .puzzle-captcha-container-bg .puzzle-captcha-question {\n  margin-bottom: 16px;\n}\n.taobao-app .scratch-captcha-container-bg .puzzle-captcha-slider,\n.taobao-app .puzzle-captcha-container-bg .puzzle-captcha-slider,\n.taobao-app .scratch-captcha-container-bg .scratch-captcha-slider,\n.taobao-app .puzzle-captcha-container-bg .scratch-captcha-slider {\n  margin-bottom: 18px;\n  height: 30px !important;\n  border: 1px solid #ffffff !important;\n  background-color: #ffffff;\n}\n.taobao-app .scratch-captcha-container-bg .puzzle-captcha-slider .button,\n.taobao-app .puzzle-captcha-container-bg .puzzle-captcha-slider .button,\n.taobao-app .scratch-captcha-container-bg .scratch-captcha-slider .button,\n.taobao-app .puzzle-captcha-container-bg .scratch-captcha-slider .button {\n  height: 40px !important;\n  line-height: 40px !important;\n  background-color: #ff6a00 !important;\n}\n.taobao-app .scratch-captcha-container-bg .puzzle-captcha-slider .label,\n.taobao-app .puzzle-captcha-container-bg .puzzle-captcha-slider .label,\n.taobao-app .scratch-captcha-container-bg .scratch-captcha-slider .label,\n.taobao-app .puzzle-captcha-container-bg .scratch-captcha-slider .label {\n  color: #50607a;\n  line-height: 30px !important;\n}\n.taobao-app .scratch-captcha-container-bg .refresh,\n.taobao-app .puzzle-captcha-container-bg .refresh {\n  float: right;\n}\n.taobao-app .scratch-captcha-container-bg .refresh .icon-refresh,\n.taobao-app .puzzle-captcha-container-bg .refresh .icon-refresh {\n  font-size: 14px;\n}\n.taobao-app .scratch-captcha-container-bg .refresh span,\n.taobao-app .puzzle-captcha-container-bg .refresh span {\n  position: relative;\n  top: -1px;\n}\n.taobao-app .connect-captcha-question-header,\n.taobao-app .click-captcha-question-header,\n.taobao-app .drag-captcha-question-header {\n  opacity: 0;\n  position: relative;\n  margin-top: 24px;\n  height: auto !important;\n}\n.taobao-app .connect-captcha-question-header .question,\n.taobao-app .click-captcha-question-header .question,\n.taobao-app .drag-captcha-question-header .question {\n  width: 100%;\n  height: 100%;\n}\n.taobao-app .connect-captcha-question-header .question p,\n.taobao-app .click-captcha-question-header .question p,\n.taobao-app .drag-captcha-question-header .question p {\n  text-align: center;\n}\n.taobao-app .connect-captcha-question-header .question .h1,\n.taobao-app .click-captcha-question-header .question .h1,\n.taobao-app .drag-captcha-question-header .question .h1 {\n  margin: 0 40px;\n}\n.taobao-app .connect-captcha-question-header .question .h1,\n.taobao-app .click-captcha-question-header .question .h1,\n.taobao-app .drag-captcha-question-header .question .h1,\n.taobao-app .connect-captcha-question-header .question .h3,\n.taobao-app .click-captcha-question-header .question .h3,\n.taobao-app .drag-captcha-question-header .question .h3 {\n  font-weight: 400;\n}\n.taobao-app .connect-captcha-question-header .question .h2 canvas,\n.taobao-app .click-captcha-question-header .question .h2 canvas,\n.taobao-app .drag-captcha-question-header .question .h2 canvas {\n  width: 100%;\n  height: 100%;\n}\n.taobao-app .connect-captcha-question-header .drop,\n.taobao-app .click-captcha-question-header .drop,\n.taobao-app .drag-captcha-question-header .drop {\n  position: absolute;\n  right: 0;\n  transition: all 0.1s ease-in-out;\n}\n.taobao-app .connect-captcha-question-header .drop .arrow,\n.taobao-app .click-captcha-question-header .drop .arrow,\n.taobao-app .drag-captcha-question-header .drop .arrow {\n  position: absolute;\n}\n.taobao-app .connect-captcha-question-header .drop img,\n.taobao-app .click-captcha-question-header .drop img,\n.taobao-app .drag-captcha-question-header .drop img {\n  width: 100%;\n  height: 100%;\n}\n.taobao-app .connect-captcha-question-header .drop .count,\n.taobao-app .click-captcha-question-header .drop .count,\n.taobao-app .drag-captcha-question-header .drop .count {\n  height: 16px;\n  width: 16px;\n  background-color: #fd6542;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  border-radius: 8px;\n  color: #fff;\n  display: none;\n}\n.taobao-app .connect-captcha-question-header .drop .bg,\n.taobao-app .click-captcha-question-header .drop .bg,\n.taobao-app .drag-captcha-question-header .drop .bg {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 50%;\n  height: 50%;\n  margin: auto;\n  transition: all 0.3s ease-in-out;\n}\n.taobao-app .connect-captcha-question-header .drop .bg.drop,\n.taobao-app .click-captcha-question-header .drop .bg.drop,\n.taobao-app .drag-captcha-question-header .drop .bg.drop,\n.taobao-app .connect-captcha-question-header .drop .bg.gu-transit,\n.taobao-app .click-captcha-question-header .drop .bg.gu-transit,\n.taobao-app .drag-captcha-question-header .drop .bg.gu-transit {\n  border-radius: 8px;\n  background-size: cover;\n}\n.taobao-app .connect-captcha-container {\n  margin-top: 26px !important;\n}\n.taobao-app .connect-captcha-container,\n.taobao-app .click-captcha-container,\n.taobao-app .drag-captcha-container {\n  margin-top: 10px;\n}\n.taobao-app .connect-captcha-container .connect-captcha-bg,\n.taobao-app .click-captcha-container .connect-captcha-bg,\n.taobao-app .drag-captcha-container .connect-captcha-bg,\n.taobao-app .connect-captcha-container .click-captcha-bg,\n.taobao-app .click-captcha-container .click-captcha-bg,\n.taobao-app .drag-captcha-container .click-captcha-bg,\n.taobao-app .connect-captcha-container .drag-captcha-bg,\n.taobao-app .click-captcha-container .drag-captcha-bg,\n.taobao-app .drag-captcha-container .drag-captcha-bg {\n  background-color: #f3f6f8;\n}\n.taobao-app .connect-captcha-container .connect-captcha-bg .connect-captcha-question,\n.taobao-app .click-captcha-container .connect-captcha-bg .connect-captcha-question,\n.taobao-app .drag-captcha-container .connect-captcha-bg .connect-captcha-question,\n.taobao-app .connect-captcha-container .click-captcha-bg .connect-captcha-question,\n.taobao-app .click-captcha-container .click-captcha-bg .connect-captcha-question,\n.taobao-app .drag-captcha-container .click-captcha-bg .connect-captcha-question,\n.taobao-app .connect-captcha-container .drag-captcha-bg .connect-captcha-question,\n.taobao-app .click-captcha-container .drag-captcha-bg .connect-captcha-question,\n.taobao-app .drag-captcha-container .drag-captcha-bg .connect-captcha-question,\n.taobao-app .connect-captcha-container .connect-captcha-bg .click-captcha-question,\n.taobao-app .click-captcha-container .connect-captcha-bg .click-captcha-question,\n.taobao-app .drag-captcha-container .connect-captcha-bg .click-captcha-question,\n.taobao-app .connect-captcha-container .click-captcha-bg .click-captcha-question,\n.taobao-app .click-captcha-container .click-captcha-bg .click-captcha-question,\n.taobao-app .drag-captcha-container .click-captcha-bg .click-captcha-question,\n.taobao-app .connect-captcha-container .drag-captcha-bg .click-captcha-question,\n.taobao-app .click-captcha-container .drag-captcha-bg .click-captcha-question,\n.taobao-app .drag-captcha-container .drag-captcha-bg .click-captcha-question,\n.taobao-app .connect-captcha-container .connect-captcha-bg .drag-captcha-question,\n.taobao-app .click-captcha-container .connect-captcha-bg .drag-captcha-question,\n.taobao-app .drag-captcha-container .connect-captcha-bg .drag-captcha-question,\n.taobao-app .connect-captcha-container .click-captcha-bg .drag-captcha-question,\n.taobao-app .click-captcha-container .click-captcha-bg .drag-captcha-question,\n.taobao-app .drag-captcha-container .click-captcha-bg .drag-captcha-question,\n.taobao-app .connect-captcha-container .drag-captcha-bg .drag-captcha-question,\n.taobao-app .click-captcha-container .drag-captcha-bg .drag-captcha-question,\n.taobao-app .drag-captcha-container .drag-captcha-bg .drag-captcha-question {\n  padding: 10px;\n}\n.taobao-app .connect-captcha-container .connect-captcha-bg .connect-captcha-question .grid-container,\n.taobao-app .click-captcha-container .connect-captcha-bg .connect-captcha-question .grid-container,\n.taobao-app .drag-captcha-container .connect-captcha-bg .connect-captcha-question .grid-container,\n.taobao-app .connect-captcha-container .click-captcha-bg .connect-captcha-question .grid-container,\n.taobao-app .click-captcha-container .click-captcha-bg .connect-captcha-question .grid-container,\n.taobao-app .drag-captcha-container .click-captcha-bg .connect-captcha-question .grid-container,\n.taobao-app .connect-captcha-container .drag-captcha-bg .connect-captcha-question .grid-container,\n.taobao-app .click-captcha-container .drag-captcha-bg .connect-captcha-question .grid-container,\n.taobao-app .drag-captcha-container .drag-captcha-bg .connect-captcha-question .grid-container,\n.taobao-app .connect-captcha-container .connect-captcha-bg .click-captcha-question .grid-container,\n.taobao-app .click-captcha-container .connect-captcha-bg .click-captcha-question .grid-container,\n.taobao-app .drag-captcha-container .connect-captcha-bg .click-captcha-question .grid-container,\n.taobao-app .connect-captcha-container .click-captcha-bg .click-captcha-question .grid-container,\n.taobao-app .click-captcha-container .click-captcha-bg .click-captcha-question .grid-container,\n.taobao-app .drag-captcha-container .click-captcha-bg .click-captcha-question .grid-container,\n.taobao-app .connect-captcha-container .drag-captcha-bg .click-captcha-question .grid-container,\n.taobao-app .click-captcha-container .drag-captcha-bg .click-captcha-question .grid-container,\n.taobao-app .drag-captcha-container .drag-captcha-bg .click-captcha-question .grid-container,\n.taobao-app .connect-captcha-container .connect-captcha-bg .drag-captcha-question .grid-container,\n.taobao-app .click-captcha-container .connect-captcha-bg .drag-captcha-question .grid-container,\n.taobao-app .drag-captcha-container .connect-captcha-bg .drag-captcha-question .grid-container,\n.taobao-app .connect-captcha-container .click-captcha-bg .drag-captcha-question .grid-container,\n.taobao-app .click-captcha-container .click-captcha-bg .drag-captcha-question .grid-container,\n.taobao-app .drag-captcha-container .click-captcha-bg .drag-captcha-question .grid-container,\n.taobao-app .connect-captcha-container .drag-captcha-bg .drag-captcha-question .grid-container,\n.taobao-app .click-captcha-container .drag-captcha-bg .drag-captcha-question .grid-container,\n.taobao-app .drag-captcha-container .drag-captcha-bg .drag-captcha-question .grid-container {\n  margin-top: 0 !important;\n}\n.taobao-app .connect-captcha-container .connect-captcha-bg .connect-captcha-question .connect-guid-container,\n.taobao-app .click-captcha-container .connect-captcha-bg .connect-captcha-question .connect-guid-container,\n.taobao-app .drag-captcha-container .connect-captcha-bg .connect-captcha-question .connect-guid-container,\n.taobao-app .connect-captcha-container .click-captcha-bg .connect-captcha-question .connect-guid-container,\n.taobao-app .click-captcha-container .click-captcha-bg .connect-captcha-question .connect-guid-container,\n.taobao-app .drag-captcha-container .click-captcha-bg .connect-captcha-question .connect-guid-container,\n.taobao-app .connect-captcha-container .drag-captcha-bg .connect-captcha-question .connect-guid-container,\n.taobao-app .click-captcha-container .drag-captcha-bg .connect-captcha-question .connect-guid-container,\n.taobao-app .drag-captcha-container .drag-captcha-bg .connect-captcha-question .connect-guid-container,\n.taobao-app .connect-captcha-container .connect-captcha-bg .click-captcha-question .connect-guid-container,\n.taobao-app .click-captcha-container .connect-captcha-bg .click-captcha-question .connect-guid-container,\n.taobao-app .drag-captcha-container .connect-captcha-bg .click-captcha-question .connect-guid-container,\n.taobao-app .connect-captcha-container .click-captcha-bg .click-captcha-question .connect-guid-container,\n.taobao-app .click-captcha-container .click-captcha-bg .click-captcha-question .connect-guid-container,\n.taobao-app .drag-captcha-container .click-captcha-bg .click-captcha-question .connect-guid-container,\n.taobao-app .connect-captcha-container .drag-captcha-bg .click-captcha-question .connect-guid-container,\n.taobao-app .click-captcha-container .drag-captcha-bg .click-captcha-question .connect-guid-container,\n.taobao-app .drag-captcha-container .drag-captcha-bg .click-captcha-question .connect-guid-container,\n.taobao-app .connect-captcha-container .connect-captcha-bg .drag-captcha-question .connect-guid-container,\n.taobao-app .click-captcha-container .connect-captcha-bg .drag-captcha-question .connect-guid-container,\n.taobao-app .drag-captcha-container .connect-captcha-bg .drag-captcha-question .connect-guid-container,\n.taobao-app .connect-captcha-container .click-captcha-bg .drag-captcha-question .connect-guid-container,\n.taobao-app .click-captcha-container .click-captcha-bg .drag-captcha-question .connect-guid-container,\n.taobao-app .drag-captcha-container .click-captcha-bg .drag-captcha-question .connect-guid-container,\n.taobao-app .connect-captcha-container .drag-captcha-bg .drag-captcha-question .connect-guid-container,\n.taobao-app .click-captcha-container .drag-captcha-bg .drag-captcha-question .connect-guid-container,\n.taobao-app .drag-captcha-container .drag-captcha-bg .drag-captcha-question .connect-guid-container,\n.taobao-app .connect-captcha-container .connect-captcha-bg .connect-captcha-question .drag-guide-container,\n.taobao-app .click-captcha-container .connect-captcha-bg .connect-captcha-question .drag-guide-container,\n.taobao-app .drag-captcha-container .connect-captcha-bg .connect-captcha-question .drag-guide-container,\n.taobao-app .connect-captcha-container .click-captcha-bg .connect-captcha-question .drag-guide-container,\n.taobao-app .click-captcha-container .click-captcha-bg .connect-captcha-question .drag-guide-container,\n.taobao-app .drag-captcha-container .click-captcha-bg .connect-captcha-question .drag-guide-container,\n.taobao-app .connect-captcha-container .drag-captcha-bg .connect-captcha-question .drag-guide-container,\n.taobao-app .click-captcha-container .drag-captcha-bg .connect-captcha-question .drag-guide-container,\n.taobao-app .drag-captcha-container .drag-captcha-bg .connect-captcha-question .drag-guide-container,\n.taobao-app .connect-captcha-container .connect-captcha-bg .click-captcha-question .drag-guide-container,\n.taobao-app .click-captcha-container .connect-captcha-bg .click-captcha-question .drag-guide-container,\n.taobao-app .drag-captcha-container .connect-captcha-bg .click-captcha-question .drag-guide-container,\n.taobao-app .connect-captcha-container .click-captcha-bg .click-captcha-question .drag-guide-container,\n.taobao-app .click-captcha-container .click-captcha-bg .click-captcha-question .drag-guide-container,\n.taobao-app .drag-captcha-container .click-captcha-bg .click-captcha-question .drag-guide-container,\n.taobao-app .connect-captcha-container .drag-captcha-bg .click-captcha-question .drag-guide-container,\n.taobao-app .click-captcha-container .drag-captcha-bg .click-captcha-question .drag-guide-container,\n.taobao-app .drag-captcha-container .drag-captcha-bg .click-captcha-question .drag-guide-container,\n.taobao-app .connect-captcha-container .connect-captcha-bg .drag-captcha-question .drag-guide-container,\n.taobao-app .click-captcha-container .connect-captcha-bg .drag-captcha-question .drag-guide-container,\n.taobao-app .drag-captcha-container .connect-captcha-bg .drag-captcha-question .drag-guide-container,\n.taobao-app .connect-captcha-container .click-captcha-bg .drag-captcha-question .drag-guide-container,\n.taobao-app .click-captcha-container .click-captcha-bg .drag-captcha-question .drag-guide-container,\n.taobao-app .drag-captcha-container .click-captcha-bg .drag-captcha-question .drag-guide-container,\n.taobao-app .connect-captcha-container .drag-captcha-bg .drag-captcha-question .drag-guide-container,\n.taobao-app .click-captcha-container .drag-captcha-bg .drag-captcha-question .drag-guide-container,\n.taobao-app .drag-captcha-container .drag-captcha-bg .drag-captcha-question .drag-guide-container {\n  top: 10px !important;\n}\n.taobao-app .connect-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-result,\n.taobao-app .click-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-result,\n.taobao-app .drag-captcha-container .connect-captcha-bg .connect-captcha-question .connect-captcha-result,\n.taobao-app .connect-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-result,\n.taobao-app .click-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-result,\n.taobao-app .drag-captcha-container .click-captcha-bg .connect-captcha-question .connect-captcha-result,\n.taobao-app .connect-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-result,\n.taobao-app .click-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-result,\n.taobao-app .drag-captcha-container .drag-captcha-bg .connect-captcha-question .connect-captcha-result,\n.taobao-app .connect-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-result,\n.taobao-app .click-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-result,\n.taobao-app .drag-captcha-container .connect-captcha-bg .click-captcha-question .connect-captcha-result,\n.taobao-app .connect-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-result,\n.taobao-app .click-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-result,\n.taobao-app .drag-captcha-container .click-captcha-bg .click-captcha-question .connect-captcha-result,\n.taobao-app .connect-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-result,\n.taobao-app .click-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-result,\n.taobao-app .drag-captcha-container .drag-captcha-bg .click-captcha-question .connect-captcha-result,\n.taobao-app .connect-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-result,\n.taobao-app .click-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-result,\n.taobao-app .drag-captcha-container .connect-captcha-bg .drag-captcha-question .connect-captcha-result,\n.taobao-app .connect-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-result,\n.taobao-app .click-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-result,\n.taobao-app .drag-captcha-container .click-captcha-bg .drag-captcha-question .connect-captcha-result,\n.taobao-app .connect-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-result,\n.taobao-app .click-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-result,\n.taobao-app .drag-captcha-container .drag-captcha-bg .drag-captcha-question .connect-captcha-result,\n.taobao-app .connect-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-result,\n.taobao-app .click-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-result,\n.taobao-app .drag-captcha-container .connect-captcha-bg .connect-captcha-question .click-captcha-result,\n.taobao-app .connect-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-result,\n.taobao-app .click-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-result,\n.taobao-app .drag-captcha-container .click-captcha-bg .connect-captcha-question .click-captcha-result,\n.taobao-app .connect-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-result,\n.taobao-app .click-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-result,\n.taobao-app .drag-captcha-container .drag-captcha-bg .connect-captcha-question .click-captcha-result,\n.taobao-app .connect-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-result,\n.taobao-app .click-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-result,\n.taobao-app .drag-captcha-container .connect-captcha-bg .click-captcha-question .click-captcha-result,\n.taobao-app .connect-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-result,\n.taobao-app .click-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-result,\n.taobao-app .drag-captcha-container .click-captcha-bg .click-captcha-question .click-captcha-result,\n.taobao-app .connect-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-result,\n.taobao-app .click-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-result,\n.taobao-app .drag-captcha-container .drag-captcha-bg .click-captcha-question .click-captcha-result,\n.taobao-app .connect-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-result,\n.taobao-app .click-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-result,\n.taobao-app .drag-captcha-container .connect-captcha-bg .drag-captcha-question .click-captcha-result,\n.taobao-app .connect-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-result,\n.taobao-app .click-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-result,\n.taobao-app .drag-captcha-container .click-captcha-bg .drag-captcha-question .click-captcha-result,\n.taobao-app .connect-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-result,\n.taobao-app .click-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-result,\n.taobao-app .drag-captcha-container .drag-captcha-bg .drag-captcha-question .click-captcha-result,\n.taobao-app .connect-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-result,\n.taobao-app .click-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-result,\n.taobao-app .drag-captcha-container .connect-captcha-bg .connect-captcha-question .drag-captcha-result,\n.taobao-app .connect-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-result,\n.taobao-app .click-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-result,\n.taobao-app .drag-captcha-container .click-captcha-bg .connect-captcha-question .drag-captcha-result,\n.taobao-app .connect-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-result,\n.taobao-app .click-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-result,\n.taobao-app .drag-captcha-container .drag-captcha-bg .connect-captcha-question .drag-captcha-result,\n.taobao-app .connect-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-result,\n.taobao-app .click-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-result,\n.taobao-app .drag-captcha-container .connect-captcha-bg .click-captcha-question .drag-captcha-result,\n.taobao-app .connect-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-result,\n.taobao-app .click-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-result,\n.taobao-app .drag-captcha-container .click-captcha-bg .click-captcha-question .drag-captcha-result,\n.taobao-app .connect-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-result,\n.taobao-app .click-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-result,\n.taobao-app .drag-captcha-container .drag-captcha-bg .click-captcha-question .drag-captcha-result,\n.taobao-app .connect-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-result,\n.taobao-app .click-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-result,\n.taobao-app .drag-captcha-container .connect-captcha-bg .drag-captcha-question .drag-captcha-result,\n.taobao-app .connect-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-result,\n.taobao-app .click-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-result,\n.taobao-app .drag-captcha-container .click-captcha-bg .drag-captcha-question .drag-captcha-result,\n.taobao-app .connect-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-result,\n.taobao-app .click-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-result,\n.taobao-app .drag-captcha-container .drag-captcha-bg .drag-captcha-question .drag-captcha-result {\n  top: 10px !important;\n}\n.taobao-app .connect-captcha-container .connect-captcha-bg .connect-captcha-question .connect-canvas-container,\n.taobao-app .click-captcha-container .connect-captcha-bg .connect-captcha-question .connect-canvas-container,\n.taobao-app .drag-captcha-container .connect-captcha-bg .connect-captcha-question .connect-canvas-container,\n.taobao-app .connect-captcha-container .click-captcha-bg .connect-captcha-question .connect-canvas-container,\n.taobao-app .click-captcha-container .click-captcha-bg .connect-captcha-question .connect-canvas-container,\n.taobao-app .drag-captcha-container .click-captcha-bg .connect-captcha-question .connect-canvas-container,\n.taobao-app .connect-captcha-container .drag-captcha-bg .connect-captcha-question .connect-canvas-container,\n.taobao-app .click-captcha-container .drag-captcha-bg .connect-captcha-question .connect-canvas-container,\n.taobao-app .drag-captcha-container .drag-captcha-bg .connect-captcha-question .connect-canvas-container,\n.taobao-app .connect-captcha-container .connect-captcha-bg .click-captcha-question .connect-canvas-container,\n.taobao-app .click-captcha-container .connect-captcha-bg .click-captcha-question .connect-canvas-container,\n.taobao-app .drag-captcha-container .connect-captcha-bg .click-captcha-question .connect-canvas-container,\n.taobao-app .connect-captcha-container .click-captcha-bg .click-captcha-question .connect-canvas-container,\n.taobao-app .click-captcha-container .click-captcha-bg .click-captcha-question .connect-canvas-container,\n.taobao-app .drag-captcha-container .click-captcha-bg .click-captcha-question .connect-canvas-container,\n.taobao-app .connect-captcha-container .drag-captcha-bg .click-captcha-question .connect-canvas-container,\n.taobao-app .click-captcha-container .drag-captcha-bg .click-captcha-question .connect-canvas-container,\n.taobao-app .drag-captcha-container .drag-captcha-bg .click-captcha-question .connect-canvas-container,\n.taobao-app .connect-captcha-container .connect-captcha-bg .drag-captcha-question .connect-canvas-container,\n.taobao-app .click-captcha-container .connect-captcha-bg .drag-captcha-question .connect-canvas-container,\n.taobao-app .drag-captcha-container .connect-captcha-bg .drag-captcha-question .connect-canvas-container,\n.taobao-app .connect-captcha-container .click-captcha-bg .drag-captcha-question .connect-canvas-container,\n.taobao-app .click-captcha-container .click-captcha-bg .drag-captcha-question .connect-canvas-container,\n.taobao-app .drag-captcha-container .click-captcha-bg .drag-captcha-question .connect-canvas-container,\n.taobao-app .connect-captcha-container .drag-captcha-bg .drag-captcha-question .connect-canvas-container,\n.taobao-app .click-captcha-container .drag-captcha-bg .drag-captcha-question .connect-canvas-container,\n.taobao-app .drag-captcha-container .drag-captcha-bg .drag-captcha-question .connect-canvas-container {\n  top: 10px !important;\n}\n.taobao-app .connect-captcha-container .connect-captcha-bg .connect-captcha-button-container,\n.taobao-app .click-captcha-container .connect-captcha-bg .connect-captcha-button-container,\n.taobao-app .drag-captcha-container .connect-captcha-bg .connect-captcha-button-container,\n.taobao-app .connect-captcha-container .click-captcha-bg .connect-captcha-button-container,\n.taobao-app .click-captcha-container .click-captcha-bg .connect-captcha-button-container,\n.taobao-app .drag-captcha-container .click-captcha-bg .connect-captcha-button-container,\n.taobao-app .connect-captcha-container .drag-captcha-bg .connect-captcha-button-container,\n.taobao-app .click-captcha-container .drag-captcha-bg .connect-captcha-button-container,\n.taobao-app .drag-captcha-container .drag-captcha-bg .connect-captcha-button-container,\n.taobao-app .connect-captcha-container .connect-captcha-bg .click-captcha-button-container,\n.taobao-app .click-captcha-container .connect-captcha-bg .click-captcha-button-container,\n.taobao-app .drag-captcha-container .connect-captcha-bg .click-captcha-button-container,\n.taobao-app .connect-captcha-container .click-captcha-bg .click-captcha-button-container,\n.taobao-app .click-captcha-container .click-captcha-bg .click-captcha-button-container,\n.taobao-app .drag-captcha-container .click-captcha-bg .click-captcha-button-container,\n.taobao-app .connect-captcha-container .drag-captcha-bg .click-captcha-button-container,\n.taobao-app .click-captcha-container .drag-captcha-bg .click-captcha-button-container,\n.taobao-app .drag-captcha-container .drag-captcha-bg .click-captcha-button-container,\n.taobao-app .connect-captcha-container .connect-captcha-bg .drag-captcha-button-container,\n.taobao-app .click-captcha-container .connect-captcha-bg .drag-captcha-button-container,\n.taobao-app .drag-captcha-container .connect-captcha-bg .drag-captcha-button-container,\n.taobao-app .connect-captcha-container .click-captcha-bg .drag-captcha-button-container,\n.taobao-app .click-captcha-container .click-captcha-bg .drag-captcha-button-container,\n.taobao-app .drag-captcha-container .click-captcha-bg .drag-captcha-button-container,\n.taobao-app .connect-captcha-container .drag-captcha-bg .drag-captcha-button-container,\n.taobao-app .click-captcha-container .drag-captcha-bg .drag-captcha-button-container,\n.taobao-app .drag-captcha-container .drag-captcha-bg .drag-captcha-button-container {\n  position: relative;\n  height: 40px;\n  margin: 0 10px;\n  padding-bottom: 10px;\n}\n.taobao-app .connect-captcha-container .connect-captcha-bg .connect-captcha-button-container #click-refresh,\n.taobao-app .click-captcha-container .connect-captcha-bg .connect-captcha-button-container #click-refresh,\n.taobao-app .drag-captcha-container .connect-captcha-bg .connect-captcha-button-container #click-refresh,\n.taobao-app .connect-captcha-container .click-captcha-bg .connect-captcha-button-container #click-refresh,\n.taobao-app .click-captcha-container .click-captcha-bg .connect-captcha-button-container #click-refresh,\n.taobao-app .drag-captcha-container .click-captcha-bg .connect-captcha-button-container #click-refresh,\n.taobao-app .connect-captcha-container .drag-captcha-bg .connect-captcha-button-container #click-refresh,\n.taobao-app .click-captcha-container .drag-captcha-bg .connect-captcha-button-container #click-refresh,\n.taobao-app .drag-captcha-container .drag-captcha-bg .connect-captcha-button-container #click-refresh,\n.taobao-app .connect-captcha-container .connect-captcha-bg .click-captcha-button-container #click-refresh,\n.taobao-app .click-captcha-container .connect-captcha-bg .click-captcha-button-container #click-refresh,\n.taobao-app .drag-captcha-container .connect-captcha-bg .click-captcha-button-container #click-refresh,\n.taobao-app .connect-captcha-container .click-captcha-bg .click-captcha-button-container #click-refresh,\n.taobao-app .click-captcha-container .click-captcha-bg .click-captcha-button-container #click-refresh,\n.taobao-app .drag-captcha-container .click-captcha-bg .click-captcha-button-container #click-refresh,\n.taobao-app .connect-captcha-container .drag-captcha-bg .click-captcha-button-container #click-refresh,\n.taobao-app .click-captcha-container .drag-captcha-bg .click-captcha-button-container #click-refresh,\n.taobao-app .drag-captcha-container .drag-captcha-bg .click-captcha-button-container #click-refresh,\n.taobao-app .connect-captcha-container .connect-captcha-bg .drag-captcha-button-container #click-refresh,\n.taobao-app .click-captcha-container .connect-captcha-bg .drag-captcha-button-container #click-refresh,\n.taobao-app .drag-captcha-container .connect-captcha-bg .drag-captcha-button-container #click-refresh,\n.taobao-app .connect-captcha-container .click-captcha-bg .drag-captcha-button-container #click-refresh,\n.taobao-app .click-captcha-container .click-captcha-bg .drag-captcha-button-container #click-refresh,\n.taobao-app .drag-captcha-container .click-captcha-bg .drag-captcha-button-container #click-refresh,\n.taobao-app .connect-captcha-container .drag-captcha-bg .drag-captcha-button-container #click-refresh,\n.taobao-app .click-captcha-container .drag-captcha-bg .drag-captcha-button-container #click-refresh,\n.taobao-app .drag-captcha-container .drag-captcha-bg .drag-captcha-button-container #click-refresh,\n.taobao-app .connect-captcha-container .connect-captcha-bg .connect-captcha-button-container #drag-refresh,\n.taobao-app .click-captcha-container .connect-captcha-bg .connect-captcha-button-container #drag-refresh,\n.taobao-app .drag-captcha-container .connect-captcha-bg .connect-captcha-button-container #drag-refresh,\n.taobao-app .connect-captcha-container .click-captcha-bg .connect-captcha-button-container #drag-refresh,\n.taobao-app .click-captcha-container .click-captcha-bg .connect-captcha-button-container #drag-refresh,\n.taobao-app .drag-captcha-container .click-captcha-bg .connect-captcha-button-container #drag-refresh,\n.taobao-app .connect-captcha-container .drag-captcha-bg .connect-captcha-button-container #drag-refresh,\n.taobao-app .click-captcha-container .drag-captcha-bg .connect-captcha-button-container #drag-refresh,\n.taobao-app .drag-captcha-container .drag-captcha-bg .connect-captcha-button-container #drag-refresh,\n.taobao-app .connect-captcha-container .connect-captcha-bg .click-captcha-button-container #drag-refresh,\n.taobao-app .click-captcha-container .connect-captcha-bg .click-captcha-button-container #drag-refresh,\n.taobao-app .drag-captcha-container .connect-captcha-bg .click-captcha-button-container #drag-refresh,\n.taobao-app .connect-captcha-container .click-captcha-bg .click-captcha-button-container #drag-refresh,\n.taobao-app .click-captcha-container .click-captcha-bg .click-captcha-button-container #drag-refresh,\n.taobao-app .drag-captcha-container .click-captcha-bg .click-captcha-button-container #drag-refresh,\n.taobao-app .connect-captcha-container .drag-captcha-bg .click-captcha-button-container #drag-refresh,\n.taobao-app .click-captcha-container .drag-captcha-bg .click-captcha-button-container #drag-refresh,\n.taobao-app .drag-captcha-container .drag-captcha-bg .click-captcha-button-container #drag-refresh,\n.taobao-app .connect-captcha-container .connect-captcha-bg .drag-captcha-button-container #drag-refresh,\n.taobao-app .click-captcha-container .connect-captcha-bg .drag-captcha-button-container #drag-refresh,\n.taobao-app .drag-captcha-container .connect-captcha-bg .drag-captcha-button-container #drag-refresh,\n.taobao-app .connect-captcha-container .click-captcha-bg .drag-captcha-button-container #drag-refresh,\n.taobao-app .click-captcha-container .click-captcha-bg .drag-captcha-button-container #drag-refresh,\n.taobao-app .drag-captcha-container .click-captcha-bg .drag-captcha-button-container #drag-refresh,\n.taobao-app .connect-captcha-container .drag-captcha-bg .drag-captcha-button-container #drag-refresh,\n.taobao-app .click-captcha-container .drag-captcha-bg .drag-captcha-button-container #drag-refresh,\n.taobao-app .drag-captcha-container .drag-captcha-bg .drag-captcha-button-container #drag-refresh {\n  position: absolute;\n  width: 54px;\n  height: 40px;\n  left: 0;\n  top: 0;\n  background: #ffefe5;\n  border-radius: 4px;\n}\n.taobao-app .connect-captcha-container .connect-captcha-bg .connect-captcha-button-container #click-refresh .refresh,\n.taobao-app .click-captcha-container .connect-captcha-bg .connect-captcha-button-container #click-refresh .refresh,\n.taobao-app .drag-captcha-container .connect-captcha-bg .connect-captcha-button-container #click-refresh .refresh,\n.taobao-app .connect-captcha-container .click-captcha-bg .connect-captcha-button-container #click-refresh .refresh,\n.taobao-app .click-captcha-container .click-captcha-bg .connect-captcha-button-container #click-refresh .refresh,\n.taobao-app .drag-captcha-container .click-captcha-bg .connect-captcha-button-container #click-refresh .refresh,\n.taobao-app .connect-captcha-container .drag-captcha-bg .connect-captcha-button-container #click-refresh .refresh,\n.taobao-app .click-captcha-container .drag-captcha-bg .connect-captcha-button-container #click-refresh .refresh,\n.taobao-app .drag-captcha-container .drag-captcha-bg .connect-captcha-button-container #click-refresh .refresh,\n.taobao-app .connect-captcha-container .connect-captcha-bg .click-captcha-button-container #click-refresh .refresh,\n.taobao-app .click-captcha-container .connect-captcha-bg .click-captcha-button-container #click-refresh .refresh,\n.taobao-app .drag-captcha-container .connect-captcha-bg .click-captcha-button-container #click-refresh .refresh,\n.taobao-app .connect-captcha-container .click-captcha-bg .click-captcha-button-container #click-refresh .refresh,\n.taobao-app .click-captcha-container .click-captcha-bg .click-captcha-button-container #click-refresh .refresh,\n.taobao-app .drag-captcha-container .click-captcha-bg .click-captcha-button-container #click-refresh .refresh,\n.taobao-app .connect-captcha-container .drag-captcha-bg .click-captcha-button-container #click-refresh .refresh,\n.taobao-app .click-captcha-container .drag-captcha-bg .click-captcha-button-container #click-refresh .refresh,\n.taobao-app .drag-captcha-container .drag-captcha-bg .click-captcha-button-container #click-refresh .refresh,\n.taobao-app .connect-captcha-container .connect-captcha-bg .drag-captcha-button-container #click-refresh .refresh,\n.taobao-app .click-captcha-container .connect-captcha-bg .drag-captcha-button-container #click-refresh .refresh,\n.taobao-app .drag-captcha-container .connect-captcha-bg .drag-captcha-button-container #click-refresh .refresh,\n.taobao-app .connect-captcha-container .click-captcha-bg .drag-captcha-button-container #click-refresh .refresh,\n.taobao-app .click-captcha-container .click-captcha-bg .drag-captcha-button-container #click-refresh .refresh,\n.taobao-app .drag-captcha-container .click-captcha-bg .drag-captcha-button-container #click-refresh .refresh,\n.taobao-app .connect-captcha-container .drag-captcha-bg .drag-captcha-button-container #click-refresh .refresh,\n.taobao-app .click-captcha-container .drag-captcha-bg .drag-captcha-button-container #click-refresh .refresh,\n.taobao-app .drag-captcha-container .drag-captcha-bg .drag-captcha-button-container #click-refresh .refresh,\n.taobao-app .connect-captcha-container .connect-captcha-bg .connect-captcha-button-container #drag-refresh .refresh,\n.taobao-app .click-captcha-container .connect-captcha-bg .connect-captcha-button-container #drag-refresh .refresh,\n.taobao-app .drag-captcha-container .connect-captcha-bg .connect-captcha-button-container #drag-refresh .refresh,\n.taobao-app .connect-captcha-container .click-captcha-bg .connect-captcha-button-container #drag-refresh .refresh,\n.taobao-app .click-captcha-container .click-captcha-bg .connect-captcha-button-container #drag-refresh .refresh,\n.taobao-app .drag-captcha-container .click-captcha-bg .connect-captcha-button-container #drag-refresh .refresh,\n.taobao-app .connect-captcha-container .drag-captcha-bg .connect-captcha-button-container #drag-refresh .refresh,\n.taobao-app .click-captcha-container .drag-captcha-bg .connect-captcha-button-container #drag-refresh .refresh,\n.taobao-app .drag-captcha-container .drag-captcha-bg .connect-captcha-button-container #drag-refresh .refresh,\n.taobao-app .connect-captcha-container .connect-captcha-bg .click-captcha-button-container #drag-refresh .refresh,\n.taobao-app .click-captcha-container .connect-captcha-bg .click-captcha-button-container #drag-refresh .refresh,\n.taobao-app .drag-captcha-container .connect-captcha-bg .click-captcha-button-container #drag-refresh .refresh,\n.taobao-app .connect-captcha-container .click-captcha-bg .click-captcha-button-container #drag-refresh .refresh,\n.taobao-app .click-captcha-container .click-captcha-bg .click-captcha-button-container #drag-refresh .refresh,\n.taobao-app .drag-captcha-container .click-captcha-bg .click-captcha-button-container #drag-refresh .refresh,\n.taobao-app .connect-captcha-container .drag-captcha-bg .click-captcha-button-container #drag-refresh .refresh,\n.taobao-app .click-captcha-container .drag-captcha-bg .click-captcha-button-container #drag-refresh .refresh,\n.taobao-app .drag-captcha-container .drag-captcha-bg .click-captcha-button-container #drag-refresh .refresh,\n.taobao-app .connect-captcha-container .connect-captcha-bg .drag-captcha-button-container #drag-refresh .refresh,\n.taobao-app .click-captcha-container .connect-captcha-bg .drag-captcha-button-container #drag-refresh .refresh,\n.taobao-app .drag-captcha-container .connect-captcha-bg .drag-captcha-button-container #drag-refresh .refresh,\n.taobao-app .connect-captcha-container .click-captcha-bg .drag-captcha-button-container #drag-refresh .refresh,\n.taobao-app .click-captcha-container .click-captcha-bg .drag-captcha-button-container #drag-refresh .refresh,\n.taobao-app .drag-captcha-container .click-captcha-bg .drag-captcha-button-container #drag-refresh .refresh,\n.taobao-app .connect-captcha-container .drag-captcha-bg .drag-captcha-button-container #drag-refresh .refresh,\n.taobao-app .click-captcha-container .drag-captcha-bg .drag-captcha-button-container #drag-refresh .refresh,\n.taobao-app .drag-captcha-container .drag-captcha-bg .drag-captcha-button-container #drag-refresh .refresh {\n  font-size: 14px;\n  line-height: 40px;\n  color: #ff6200;\n}\n.taobao-app .connect-captcha-container .connect-captcha-bg .connect-captcha-button-container .submit,\n.taobao-app .click-captcha-container .connect-captcha-bg .connect-captcha-button-container .submit,\n.taobao-app .drag-captcha-container .connect-captcha-bg .connect-captcha-button-container .submit,\n.taobao-app .connect-captcha-container .click-captcha-bg .connect-captcha-button-container .submit,\n.taobao-app .click-captcha-container .click-captcha-bg .connect-captcha-button-container .submit,\n.taobao-app .drag-captcha-container .click-captcha-bg .connect-captcha-button-container .submit,\n.taobao-app .connect-captcha-container .drag-captcha-bg .connect-captcha-button-container .submit,\n.taobao-app .click-captcha-container .drag-captcha-bg .connect-captcha-button-container .submit,\n.taobao-app .drag-captcha-container .drag-captcha-bg .connect-captcha-button-container .submit,\n.taobao-app .connect-captcha-container .connect-captcha-bg .click-captcha-button-container .submit,\n.taobao-app .click-captcha-container .connect-captcha-bg .click-captcha-button-container .submit,\n.taobao-app .drag-captcha-container .connect-captcha-bg .click-captcha-button-container .submit,\n.taobao-app .connect-captcha-container .click-captcha-bg .click-captcha-button-container .submit,\n.taobao-app .click-captcha-container .click-captcha-bg .click-captcha-button-container .submit,\n.taobao-app .drag-captcha-container .click-captcha-bg .click-captcha-button-container .submit,\n.taobao-app .connect-captcha-container .drag-captcha-bg .click-captcha-button-container .submit,\n.taobao-app .click-captcha-container .drag-captcha-bg .click-captcha-button-container .submit,\n.taobao-app .drag-captcha-container .drag-captcha-bg .click-captcha-button-container .submit,\n.taobao-app .connect-captcha-container .connect-captcha-bg .drag-captcha-button-container .submit,\n.taobao-app .click-captcha-container .connect-captcha-bg .drag-captcha-button-container .submit,\n.taobao-app .drag-captcha-container .connect-captcha-bg .drag-captcha-button-container .submit,\n.taobao-app .connect-captcha-container .click-captcha-bg .drag-captcha-button-container .submit,\n.taobao-app .click-captcha-container .click-captcha-bg .drag-captcha-button-container .submit,\n.taobao-app .drag-captcha-container .click-captcha-bg .drag-captcha-button-container .submit,\n.taobao-app .connect-captcha-container .drag-captcha-bg .drag-captcha-button-container .submit,\n.taobao-app .click-captcha-container .drag-captcha-bg .drag-captcha-button-container .submit,\n.taobao-app .drag-captcha-container .drag-captcha-bg .drag-captcha-button-container .submit {\n  position: absolute;\n  right: 0;\n  height: 40px !important;\n  line-height: 40px !important;\n  margin-top: 0 !important;\n  width: calc(100% - 61px);\n  background-color: #ffb480;\n  border-radius: 4px;\n  font-weight: 500;\n}\n.taobao-app .connect-captcha-container .connect-captcha-bg .connect-captcha-button-container #connect-refresh,\n.taobao-app .click-captcha-container .connect-captcha-bg .connect-captcha-button-container #connect-refresh,\n.taobao-app .drag-captcha-container .connect-captcha-bg .connect-captcha-button-container #connect-refresh,\n.taobao-app .connect-captcha-container .click-captcha-bg .connect-captcha-button-container #connect-refresh,\n.taobao-app .click-captcha-container .click-captcha-bg .connect-captcha-button-container #connect-refresh,\n.taobao-app .drag-captcha-container .click-captcha-bg .connect-captcha-button-container #connect-refresh,\n.taobao-app .connect-captcha-container .drag-captcha-bg .connect-captcha-button-container #connect-refresh,\n.taobao-app .click-captcha-container .drag-captcha-bg .connect-captcha-button-container #connect-refresh,\n.taobao-app .drag-captcha-container .drag-captcha-bg .connect-captcha-button-container #connect-refresh {\n  float: right;\n  margin-top: 14px;\n}\n.taobao-app .connect-captcha-container .connect-captcha-bg .connect-captcha-button-container #connect-refresh .refresh,\n.taobao-app .click-captcha-container .connect-captcha-bg .connect-captcha-button-container #connect-refresh .refresh,\n.taobao-app .drag-captcha-container .connect-captcha-bg .connect-captcha-button-container #connect-refresh .refresh,\n.taobao-app .connect-captcha-container .click-captcha-bg .connect-captcha-button-container #connect-refresh .refresh,\n.taobao-app .click-captcha-container .click-captcha-bg .connect-captcha-button-container #connect-refresh .refresh,\n.taobao-app .drag-captcha-container .click-captcha-bg .connect-captcha-button-container #connect-refresh .refresh,\n.taobao-app .connect-captcha-container .drag-captcha-bg .connect-captcha-button-container #connect-refresh .refresh,\n.taobao-app .click-captcha-container .drag-captcha-bg .connect-captcha-button-container #connect-refresh .refresh,\n.taobao-app .drag-captcha-container .drag-captcha-bg .connect-captcha-button-container #connect-refresh .refresh {\n  font-size: 14px;\n}\n.taobao-app .connect-captcha-container .connect-captcha-bg .connect-captcha-button-container #connect-refresh span,\n.taobao-app .click-captcha-container .connect-captcha-bg .connect-captcha-button-container #connect-refresh span,\n.taobao-app .drag-captcha-container .connect-captcha-bg .connect-captcha-button-container #connect-refresh span,\n.taobao-app .connect-captcha-container .click-captcha-bg .connect-captcha-button-container #connect-refresh span,\n.taobao-app .click-captcha-container .click-captcha-bg .connect-captcha-button-container #connect-refresh span,\n.taobao-app .drag-captcha-container .click-captcha-bg .connect-captcha-button-container #connect-refresh span,\n.taobao-app .connect-captcha-container .drag-captcha-bg .connect-captcha-button-container #connect-refresh span,\n.taobao-app .click-captcha-container .drag-captcha-bg .connect-captcha-button-container #connect-refresh span,\n.taobao-app .drag-captcha-container .drag-captcha-bg .connect-captcha-button-container #connect-refresh span {\n  position: relative;\n  top: -1px;\n}\nbody {\n  touch-action: none;\n}\n@media screen and (min-height: 356px) {\n  .pc .connect-captcha-bg,\n  .pc-ajax .connect-captcha-bg,\n  .pc .click-captcha-bg,\n  .pc-ajax .click-captcha-bg,\n  .pc .drag-captcha-bg,\n  .pc-ajax .drag-captcha-bg {\n    background-image: linear-gradient(180deg, #ddf2fd 0%, #ebf0ff 100%);\n  }\n}\n@media screen and (max-width: 265px) {\n  .scratch-captcha-result,\n  .puzzle-captcha-result {\n    font-size: 12px !important;\n  }\n}\n@media screen and (max-height: 208px) {\n  .pc-ajax .scratch-captcha-container .info,\n  .pc-ajax .puzzle-captcha-container .info {\n    height: 20px !important;\n  }\n  .pc-ajax .scratch-captcha-container .refresh,\n  .pc-ajax .puzzle-captcha-container .refresh {\n    line-height: 20px !important;\n    font-size: 14px !important;\n  }\n}\n@media screen and (max-height: 356px) {\n  .connect-captcha-container,\n  .click-captcha-container,\n  .drag-captcha-container {\n    height: 100%;\n  }\n  .connect-captcha-container .connect-captcha-question-header,\n  .click-captcha-container .connect-captcha-question-header,\n  .drag-captcha-container .connect-captcha-question-header,\n  .connect-captcha-container .click-captcha-question-header,\n  .click-captcha-container .click-captcha-question-header,\n  .drag-captcha-container .click-captcha-question-header,\n  .connect-captcha-container .drag-captcha-question-header,\n  .click-captcha-container .drag-captcha-question-header,\n  .drag-captcha-container .drag-captcha-question-header {\n    width: 100%;\n    max-height: 44px;\n  }\n  .connect-captcha-container .connect-captcha-question-header .h1,\n  .click-captcha-container .connect-captcha-question-header .h1,\n  .drag-captcha-container .connect-captcha-question-header .h1,\n  .connect-captcha-container .click-captcha-question-header .h1,\n  .click-captcha-container .click-captcha-question-header .h1,\n  .drag-captcha-container .click-captcha-question-header .h1,\n  .connect-captcha-container .drag-captcha-question-header .h1,\n  .click-captcha-container .drag-captcha-question-header .h1,\n  .drag-captcha-container .drag-captcha-question-header .h1,\n  .connect-captcha-container .connect-captcha-question-header .h3,\n  .click-captcha-container .connect-captcha-question-header .h3,\n  .drag-captcha-container .connect-captcha-question-header .h3,\n  .connect-captcha-container .click-captcha-question-header .h3,\n  .click-captcha-container .click-captcha-question-header .h3,\n  .drag-captcha-container .click-captcha-question-header .h3,\n  .connect-captcha-container .drag-captcha-question-header .h3,\n  .click-captcha-container .drag-captcha-question-header .h3,\n  .drag-captcha-container .drag-captcha-question-header .h3 {\n    display: inline;\n    line-height: 44px !important;\n  }\n  .connect-captcha-container .connect-captcha-question-header .h2,\n  .click-captcha-container .connect-captcha-question-header .h2,\n  .drag-captcha-container .connect-captcha-question-header .h2,\n  .connect-captcha-container .click-captcha-question-header .h2,\n  .click-captcha-container .click-captcha-question-header .h2,\n  .drag-captcha-container .click-captcha-question-header .h2,\n  .connect-captcha-container .drag-captcha-question-header .h2,\n  .click-captcha-container .drag-captcha-question-header .h2,\n  .drag-captcha-container .drag-captcha-question-header .h2 {\n    display: inline-block;\n    width: 40% !important;\n    max-width: 122.5px !important;\n    height: 28px !important;\n    margin: 8px 0;\n  }\n  .connect-captcha-container .connect-captcha-question-header .drop,\n  .click-captcha-container .connect-captcha-question-header .drop,\n  .drag-captcha-container .connect-captcha-question-header .drop,\n  .connect-captcha-container .click-captcha-question-header .drop,\n  .click-captcha-container .click-captcha-question-header .drop,\n  .drag-captcha-container .click-captcha-question-header .drop,\n  .connect-captcha-container .drag-captcha-question-header .drop,\n  .click-captcha-container .drag-captcha-question-header .drop,\n  .drag-captcha-container .drag-captcha-question-header .drop {\n    max-height: 44px;\n    max-width: 44px;\n    margin-top: 0;\n  }\n  .connect-captcha-container .submit,\n  .click-captcha-container .submit,\n  .drag-captcha-container .submit {\n    position: relative;\n    top: -40px;\n    left: 162px;\n    width: 72px;\n  }\n}\n@media screen and (min-height: 356px) {\n  .connect-captcha-container,\n  .click-captcha-container,\n  .drag-captcha-container {\n    margin-top: 10px;\n  }\n}\n@media screen and (max-height: 302px) {\n  .connect-captcha-container .connect-captcha-question-header,\n  .click-captcha-container .connect-captcha-question-header,\n  .drag-captcha-container .connect-captcha-question-header,\n  .connect-captcha-container .click-captcha-question-header,\n  .click-captcha-container .click-captcha-question-header,\n  .drag-captcha-container .click-captcha-question-header,\n  .connect-captcha-container .drag-captcha-question-header,\n  .click-captcha-container .drag-captcha-question-header,\n  .drag-captcha-container .drag-captcha-question-header {\n    height: 20px !important;\n  }\n  .connect-captcha-container .connect-captcha-question-header .h1,\n  .click-captcha-container .connect-captcha-question-header .h1,\n  .drag-captcha-container .connect-captcha-question-header .h1,\n  .connect-captcha-container .click-captcha-question-header .h1,\n  .click-captcha-container .click-captcha-question-header .h1,\n  .drag-captcha-container .click-captcha-question-header .h1,\n  .connect-captcha-container .drag-captcha-question-header .h1,\n  .click-captcha-container .drag-captcha-question-header .h1,\n  .drag-captcha-container .drag-captcha-question-header .h1 {\n    display: block;\n    height: 20px;\n    line-height: 20px !important;\n  }\n  .connect-captcha-container .connect-captcha-question-header .h2,\n  .click-captcha-container .connect-captcha-question-header .h2,\n  .drag-captcha-container .connect-captcha-question-header .h2,\n  .connect-captcha-container .click-captcha-question-header .h2,\n  .click-captcha-container .click-captcha-question-header .h2,\n  .drag-captcha-container .click-captcha-question-header .h2,\n  .connect-captcha-container .drag-captcha-question-header .h2,\n  .click-captcha-container .drag-captcha-question-header .h2,\n  .drag-captcha-container .drag-captcha-question-header .h2 {\n    display: block;\n  }\n  .connect-captcha-container .connect-captcha-question-header .drop,\n  .click-captcha-container .connect-captcha-question-header .drop,\n  .drag-captcha-container .connect-captcha-question-header .drop,\n  .connect-captcha-container .click-captcha-question-header .drop,\n  .click-captcha-container .click-captcha-question-header .drop,\n  .drag-captcha-container .click-captcha-question-header .drop,\n  .connect-captcha-container .drag-captcha-question-header .drop,\n  .click-captcha-container .drag-captcha-question-header .drop,\n  .drag-captcha-container .drag-captcha-question-header .drop {\n    left: 0;\n    top: 64px !important;\n  }\n  .connect-captcha-container .grid-container,\n  .click-captcha-container .grid-container,\n  .drag-captcha-container .grid-container {\n    margin-right: 0 !important;\n  }\n  .connect-captcha-container .click-captcha-loading,\n  .click-captcha-container .click-captcha-loading,\n  .drag-captcha-container .click-captcha-loading,\n  .connect-captcha-container .drag-captcha-loading,\n  .click-captcha-container .drag-captcha-loading,\n  .drag-captcha-container .drag-captcha-loading,\n  .connect-captcha-container .connect-captcha-loading,\n  .click-captcha-container .connect-captcha-loading,\n  .drag-captcha-container .connect-captcha-loading {\n    left: auto !important;\n    right: 10px;\n  }\n  .connect-captcha-container .connect-captcha-result,\n  .click-captcha-container .connect-captcha-result,\n  .drag-captcha-container .connect-captcha-result,\n  .connect-captcha-container .click-captcha-result,\n  .click-captcha-container .click-captcha-result,\n  .drag-captcha-container .click-captcha-result,\n  .connect-captcha-container .drag-captcha-result,\n  .click-captcha-container .drag-captcha-result,\n  .drag-captcha-container .drag-captcha-result {\n    top: 38px !important;\n    right: 10px !important;\n    left: auto !important;\n  }\n  .connect-captcha-container .connect-canvas-container,\n  .click-captcha-container .connect-canvas-container,\n  .drag-captcha-container .connect-canvas-container,\n  .connect-captcha-container .drag-guide-container,\n  .click-captcha-container .drag-guide-container,\n  .drag-captcha-container .drag-guide-container {\n    left: auto !important;\n    right: 10px;\n    top: 38px !important;\n  }\n  .connect-captcha-container .refresh,\n  .click-captcha-container .refresh,\n  .drag-captcha-container .refresh {\n    position: absolute !important;\n    left: auto !important;\n    margin-left: auto !important;\n  }\n  .connect-captcha-container .submit,\n  .click-captcha-container .submit,\n  .drag-captcha-container .submit {\n    top: -10px;\n    left: auto;\n    margin-right: 10px;\n  }\n  .connect-captcha-container .refresh {\n    right: 10px;\n  }\n  .click-captcha-container .refresh,\n  .drag-captcha-container .refresh {\n    right: 98px;\n  }\n}\n@keyframes move {\n  100% {\n    transform: translateX(-50%);\n  }\n}\n@keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n.bg.gu-mirror {\n  background-size: cover;\n  cursor: pointer;\n  opacity: 0.8 !important;\n}\n.gu-mirror {\n  position: fixed !important;\n  margin: 0 !important;\n  z-index: 9999 !important;\n  opacity: 0.8;\n  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";\n  filter: alpha(opacity=80);\n}\n.gu-hide {\n  display: none !important;\n}\n.gu-unselectable {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important;\n}\n'
  );
  var n,
    e,
    i = {
      width: 320,
      renderTo: document.getElementById("nocaptcha"),
      showTitle: !0,
    };
  !(function (c) {
    (c.puzzle = "puzzle"),
      (c.connect = "connect"),
      (c.click = "click"),
      (c.select = "select"),
      (c.drag = "drag");
  })(n || (n = {})),
    (function (c) {
      (c[(c.success = 0)] = "success"),
        (c[(c.other = 300)] = "other"),
        (c[(c.timeout = 301)] = "timeout"),
        (c[(c.dragFast = 302)] = "dragFast"),
        (c[(c.deny = 303)] = "deny"),
        (c[(c.wait = 304)] = "wait"),
        (c[(c.secdataTimeout = 305)] = "secdataTimeout"),
        (c[(c.retry = 306)] = "retry"),
        (c[(c.netError = 500)] = "netError");
    })(e || (e = {}));
  var o = {
      300: "other-punish",
      301: "verify-timeout",
      302: "verify-fast",
      303: "verify-deny",
      304: "verify-wait",
      305: "secdata-timeout",
      306: "verify-fail",
      500: "verify-error",
    },
    r = [
      "fruit_yellow",
      "landscape_blue",
      "plant_green",
      "universe_purple",
      "clothes_red",
      "animals_orange",
    ],
    p = {
      yellow: "fruit_yellow",
      blue: "landscape_blue",
      green: "plant_green",
      purple: "universe_purple",
      red: "clothes_red",
      orange: "animals_orange",
    },
    h = function (c) {
      var a,
        t,
        e = c.width,
        i = c.languageConfig,
        o = c.mini,
        r = c.isTaobaoApp,
        p = n[c.type],
        h = e / (r ? 344 : 375),
        s = window.innerWidth >= 375 && 356 >= window.innerHeight;
      switch (p) {
        case "connect":
          (a =
            i["connect-question-info"] +
            (window.innerHeight > 356 ? "——" : "")),
            (t = "");
          break;
        case "click":
          (a = o
            ? i["click-question-info"]
            : window.innerHeight > 356
            ? i["click-question-info"]
            : i["click-question-info-short"]),
            (t = o
              ? ""
              : window.innerHeight > 356
              ? i["click-question-info-2"]
              : i["click-question-info-short-2"]);
          break;
        case "drag":
          (a = o ? i["drag-question-info-4"] : i["drag-question-info"]),
            (t = o
              ? ""
              : "" +
                i["drag-question-info-2"] +
                (window.innerHeight > 356 ? i["drag-question-info-3"] : ""));
      }
      return (
        '<div class="' +
        p +
        '-captcha-question-header" style="height: ' +
        ("connect" !== p || s ? 80 : 60) * h +
        "px;" +
        (r ? "width:" + e + "px;" : "") +
        '">\n        <div class="question">\n          <p class="h1" style="font-size:' +
        (r ? 14 : Math.max(14 * h, 11)) +
        "px;line-height:" +
        (r ? 16 : Math.max(16 * h, 11)) +
        'px;">' +
        a +
        '</p>\n          <p class="h2" style="height:' +
        (r ? 48 : 48 * h) +
        "px;width:" +
        ("drag" === p
          ? r
            ? e - 110
            : ((e - 20) / 355) * 280
          : e - (r ? 0 : 20)) +
        "px;" +
        (o ? "margin-top:" + 8 * (o ? 1 : h) + "px;" : "") +
        '">\n            <canvas id="' +
        p +
        '-question-canvas" width="' +
        ("drag" === p ? 280 : 355) +
        '" height="48"></canvas>\n          </p>\n          ' +
        (o
          ? ""
          : '<p class="h3" style="font-size:' +
            Math.max(14 * h, 11) +
            "px;line-height:" +
            Math.max(16 * h, 11) +
            'px;">' +
            t +
            "</p>") +
        "\n        </div>\n        " +
        ("drag" === p
          ? '<div id="' +
            p +
            '-drop" class="drop" style="height:' +
            (r ? 55 : 66) * h +
            "px;width:" +
            (r ? 55 : 66) * h +
            "px;top:" +
            (r ? 16 : 7) * h +
            'px;"><img class="arrow" draggable="false" style="height:' +
            (r ? 30 : 40) * h +
            "px;width:" +
            (r ? 30 : 40) * h +
            "px;top:" +
            (r ? -5 : -10) * h +
            "px;left:" +
            (r ? -5 : -10) * h +
            'px;" src="https://img.alicdn.com/imgextra/i4/O1CN01L7IAfp1fQy1ScbJvv_!!6000000004002-1-tps-132-132.gif"></img>\n                <img id="' +
            p +
            '-drop-img" class="img" draggable="false" src="https://img.alicdn.com/imgextra/i4/O1CN01lCxKyu1e2PAM859mf_!!6000000003813-2-tps-256-249.png"></img>\n                <div class="count"></div>\n              </div>'
          : "") +
        "\n      </div>"
      );
    },
    s = function () {
      return '\n    <svg style="width:50%;height:50%;margin:25%;" width="44px" height="29px" viewBox="0 0 44 29" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.100000001">\n            <g id="【16格】多轮轨迹简单版-拖动方式一" transform="translate(-206, -380)" fill="#000000" fill-rule="nonzero">\n                <path d="M242.836176,380.173611 L243.108976,380.739136 L249.536569,394.063801 L249.635885,394.269687 L249.635885,405.82294 C249.635885,407.479794 248.292739,408.82294 246.635885,408.82294 L209.469291,408.82294 C207.812437,408.82294 206.469291,407.479794 206.469291,405.82294 L206.469291,394.390065 L206.571222,394.181949 L213.157847,380.733757 L213.432194,380.173611 L242.836176,380.173611 Z M228,403 C223.583398,403 219.909838,399.818662 219.145871,395.622539 L208.469291,395.621611 L208.469291,405.82294 C208.469291,406.335776 208.855331,406.758447 209.35267,406.816212 L209.469291,406.82294 L246.635885,406.82294 C247.18817,406.82294 247.635885,406.375225 247.635885,405.82294 L247.635291,395.621611 L236.854129,395.622539 C236.090162,399.818662 232.416602,403 228,403 Z M241.580291,382.173611 L214.678291,382.173611 L209.072291,393.621611 L220.1,393.621803 C220.652285,393.621803 221.1,394.069518 221.1,394.621803 L221.09925,395.181268 C221.66068,398.484747 224.536605,401 228,401 C231.463625,401 234.339704,398.484412 234.900862,395.180608 L234.9,394.621803 C234.9,394.069518 235.347715,393.621803 235.9,393.621803 L247.102291,393.621611 L241.580291,382.173611 Z M218.232,385.752 C217.624,385.752 217.136,385.96 216.784,386.384 C216.416,386.8 216.24,387.312 216.24,387.928 C216.24,388.608 216.432,389.144 216.816,389.544 C217.168,389.92 217.656,390.112 218.264,390.112 C218.816,390.112 219.272,389.952 219.632,389.64 C219.92,389.384 220.104,389.056 220.2,388.672 L219.352,388.672 C219.24,388.912 219.12,389.096 218.976,389.208 C218.792,389.344 218.552,389.416 218.256,389.416 C217.92,389.416 217.656,389.304 217.464,389.096 C217.272,388.88 217.168,388.568 217.136,388.168 L220.272,388.168 C220.264,387.432 220.096,386.856 219.776,386.44 C219.424,385.976 218.904,385.752 218.232,385.752 Z M218.256,386.448 C218.928,386.448 219.304,386.808 219.384,387.528 L217.152,387.528 C217.2,387.176 217.32,386.912 217.496,386.728 C217.688,386.536 217.936,386.448 218.256,386.448 Z M222.976,385.752 C222.56,385.752 222.176,385.936 221.84,386.32 L221.84,385.864 L220.992,385.864 L220.992,390 L221.84,390 L221.84,387.512 C221.84,387.224 221.92,386.976 222.096,386.776 C222.256,386.568 222.48,386.464 222.752,386.464 C223.312,386.464 223.6,386.784 223.6,387.44 L223.6,390 L224.448,390 L224.448,387.456 C224.448,387.152 224.528,386.904 224.688,386.728 C224.848,386.552 225.04,386.464 225.28,386.464 C225.6,386.464 225.84,386.536 225.984,386.696 C226.128,386.848 226.2,387.096 226.2,387.432 L226.2,390 L227.048,390 L227.048,387.288 C227.048,386.824 226.904,386.456 226.632,386.176 C226.352,385.888 226,385.752 225.576,385.752 C225.296,385.752 225.064,385.8 224.872,385.904 C224.664,386.008 224.464,386.192 224.28,386.448 C224.024,385.984 223.584,385.752 222.976,385.752 Z M230.08,385.752 C229.52,385.752 229.088,385.952 228.8,386.36 L228.8,385.864 L228.008,385.864 L228.008,391.584 L228.856,391.584 L228.856,389.392 C229.192,389.872 229.608,390.112 230.12,390.112 C230.712,390.112 231.184,389.896 231.52,389.464 C231.832,389.064 231.992,388.56 231.992,387.952 C231.992,387.312 231.832,386.8 231.512,386.4 C231.16,385.968 230.688,385.752 230.08,385.752 Z M229.952,386.44 C230.368,386.44 230.672,386.584 230.872,386.888 C231.032,387.144 231.12,387.496 231.12,387.952 C231.12,388.408 231.024,388.76 230.848,389.016 C230.648,389.288 230.344,389.424 229.928,389.424 C229.608,389.424 229.352,389.296 229.16,389.048 C228.936,388.776 228.832,388.416 228.832,387.976 L228.832,387.904 C228.832,387.48 228.92,387.136 229.096,386.88 C229.296,386.584 229.584,386.44 229.952,386.44 Z M234.048,384.528 L233.2,384.88 L233.2,385.864 L232.432,385.864 L232.432,386.568 L233.2,386.568 L233.2,388.968 C233.2,389.296 233.272,389.544 233.432,389.72 C233.592,389.904 233.856,390 234.208,390 L234.888,390 L234.888,389.296 L234.344,389.296 C234.24,389.296 234.168,389.264 234.12,389.216 C234.072,389.16 234.048,389.08 234.048,388.968 L234.048,386.568 L234.992,386.568 L234.992,385.864 L234.048,385.864 L234.048,384.528 Z M235.232,385.864 L236.872,389.904 L236.152,391.584 L237.056,391.584 L239.304,385.864 L238.376,385.864 L237.288,388.88 L236.152,385.864 L235.232,385.864 Z" id="形状结合"></path>\n            </g>\n        </g>\n    </svg>';
    },
    g = "timeout",
    l = document.documentElement || "",
    d = document.body || "",
    u =
      location.href.indexOf("native=1") > -1 ||
      location.href.indexOf("tmd_nc=1") > -1,
    q = function () {
      var c = window.navigator.userAgent;
      return (
        /(iPhone|iPad|iPod|iOS|Android|SymbianOS|Windows Phone|ArkWeb)/i.test(
          c
        ) || u
      );
    },
    b = function (c, a, t, n) {
      var e,
        i = document.createElement("script");
      (i.src = c),
        (i.crossOrigin = n),
        (i.onload = function () {
          (i.onload = null),
            i.parentNode.removeChild(i),
            -1 != e && (clearTimeout(e), a("ok"));
        }),
        (i.onerror = function () {
          (i.onerror = null),
            i.parentNode.removeChild(i),
            -1 != e && (clearTimeout(e), a("err"));
        }),
        (e = setTimeout(function () {
          (e = -1), a(g);
        }, t || 5e3));
      var o = document.getElementsByTagName("script")[0];
      o.parentNode.insertBefore(i, o);
    },
    k = function (c, a) {
      var t = [];
      for (var n in c) t.push(n + "=" + encodeURIComponent(c[n]));
      new Image().src = a + t.join("&");
    },
    f = {
      loadScript: function (c, a, t, n, e) {
        void 0 === e && (e = !1), (n = n || 3);
        var i,
          o,
          r,
          p,
          h = 0,
          s = Date.now();
        (p = a),
          (a = function () {
            o || ((o = !0), clearTimeout(r), p.apply(null, arguments));
          }),
          (function l() {
            h++;
            var o = c.indexOf("?") > -1 ? "&" : "?",
              p = c;
            h > 1 && (p = c + o + "__retry=" + h),
              b(
                p,
                function (c) {
                  if (i) a(g, Date.now() - s);
                  else if ("ok" === c) a(c, Date.now() - s);
                  else {
                    if (c === g || h >= n) return void a(g, Date.now() - s);
                    r = setTimeout(function () {
                      l();
                    }, 3e3);
                  }
                },
                t,
                e
              );
          })(),
          setTimeout(function () {
            (i = !0), a(g, Date.now() - s);
          }, t);
      },
      isAjax: function () {
        return (
          320 === (l.clientHeight || d.clientHeight) ||
          480 === (l.clientHeight || d.clientHeight) ||
          window.frames.length !== parent.frames.length
        );
      },
      isMobile: q,
      isLandscape: function () {
        return q() && "number" == typeof window.orientation
          ? 90 === window.orientation || -90 === window.orientation
          : window.innerWidth > window.innerHeight;
      },
      landscapeFix: function () {
        if (420 >= window.innerHeight) {
          var c = document.querySelector(".scratch-captcha-title");
          c && (c.style.display = "none");
        }
      },
      addEvent: function (c, a, t, n) {
        void 0 === n && (n = !1),
          c.addEventListener
            ? c.addEventListener(a, t, n)
            : c.attachEvent && c.attachEvent("on" + a, t);
      },
      ajax: function (reqOpt) {
        reqOpt = reqOpt || {};
        var a = [];
        for (var t in reqOpt.data)
          a.push(
            encodeURIComponent(t) + "=" + encodeURIComponent(reqOpt.data[t])
          );
        a.push(("v=" + Math.random()).replace(".", ""));
        var n,
          e = a.join("&"),
          i = !1,
          o = new XMLHttpRequest();
        if (
          ((o.onreadystatechange = function () {
            if (4 == o.readyState) {
              var a = o.status;
              a >= 200 && 300 > a
                ? reqOpt.success &&
                  reqOpt.success(o.responseText, o.responseXML, o)
                : i || ((i = !0), reqOpt.error && reqOpt.error(a));
            }
          }),
          (o.onerror = function () {
            i || ((i = !0), reqOpt.error && reqOpt.error(status));
          }),
          reqOpt.sign)
        )
          try {
            n =
              window.etSign && "function" == typeof window.etSign
                ? window.etSign(
                    "GET" === reqOpt.type ? reqOpt.url + "?" + e : reqOpt.url
                  )
                : "nosgn";
          } catch (r) {
            n = "nosgn";
          }
        "GET" == reqOpt.type
          ? (o.open("GET", reqOpt.url + "?" + e, !0),
            n && o.setRequestHeader("bx_et", n),
            n && o.setRequestHeader("bx-et", "1"),
            reqOpt.ppSign && o.setRequestHeader("bx-pp", reqOpt.ppSign),
            o.send(null))
          : "POST" == reqOpt.type &&
            (o.open("POST", reqOpt.url, !0),
            n && o.setRequestHeader("bx_et", n),
            n && o.setRequestHeader("bx-et", "1"),
            reqOpt.ppSign && o.setRequestHeader("bx-pp", reqOpt.ppSign),
            o.setRequestHeader(
              "Content-Type",
              "application/x-www-form-urlencoded"
            ),
            o.send(e));
      },
      log: function (c, a, t) {
        void 0 === a && (a = 1);
        var n = {
          code: a,
          msg: c + "",
          pid: "scratch-captcha",
          page: location.href.split(/[#?]/)[0],
          query: location.search.substr(1),
          hash: location.hash,
          referrer: location.referrer,
          title: location.title,
          ua: navigator.userAgent,
          c1: t,
        };
        k(n, "//gm.mmstat.com/fsp.1.1?");
      },
      removeEvent: function (c, a, t, n) {
        void 0 === n && (n = !1),
          c.removeEventListener
            ? c.removeEventListener(a, t, n)
            : c.detachEvent && c.detachEvent("on" + a, t);
      },
      getClientRect: function (c) {
        if (c.getBoundingClientRect) {
          var a = c.getBoundingClientRect();
          return {
            left: a.left,
            right: a.right,
            top: a.top,
            bottom: a.bottom,
            width: a.width || a.right - a.left,
          };
        }
        var t = (function (c) {
            for (var a = c.offsetLeft, t = c.offsetParent; null !== t; )
              (a += t.offsetLeft), (t = t.offsetParent);
            return a;
          })(c),
          n = (function (c) {
            for (var a = c.offsetTop, t = c.offsetParent; null !== t; )
              (a += t.offsetTop), (t = t.offsetParent);
            return a;
          })(c);
        return {
          left: t,
          right: t + c.offsetWidth,
          top: n,
          bottom: n + c.offsetHeight,
          width: c.offsetWidth,
        };
      },
      animation: function (c, a, t) {
        if (
          (t && ((c.style.left = "auto"), (c.style.right = "auto")),
          (c.innerHTML.indexOf("   ") > 0 ? c.scrollWidth / 2 : c.scrollWidth) >
            a)
        ) {
          if (
            (-1 === c.innerHTML.indexOf("   ") &&
              (c.innerHTML += "   " + c.innerHTML),
            c.style.animation.indexOf("infinite") > 0)
          )
            return;
          c.style.animation =
            "move " + c.scrollWidth / 80 + "s linear infinite";
        } else {
          if (
            (t && ((c.style.left = "0"), (c.style.right = "0")),
            0 > c.style.animation.indexOf("infinite"))
          )
            return;
          (c.style.animation = "none"),
            (c.innerHTML = c.innerHTML.split("   ")[0]);
        }
      },
      drawSolidCircle: function (c, a, t, n, e) {
        (c.fillStyle = a),
          c.beginPath(),
          c.arc(t, n, e, 0, 2 * Math.PI, !0),
          c.fill();
      },
      drawHollowCircle: function (c, a, t, n, e) {
        (c.strokeStyle = a),
          (c.lineWidth = 10),
          c.beginPath(),
          c.arc(t, n, e, 0, 2 * Math.PI, !0),
          c.stroke();
      },
      drawLine: function (c, a, t, n, e, i) {
        var o, r;
        (c.strokeStyle = a),
          (c.lineWidth = 3),
          (o = navigator.userAgent.toLowerCase()),
          (r = 11),
          o.indexOf("msie") > -1 && (r = +o.match(/msie ([\d.]+)/)[1]),
          r > 10 && c.setLineDash([5, 5]),
          c.beginPath(),
          c.moveTo(t, n),
          c.lineTo(e, i),
          c.stroke();
      },
      getCanvasPoint: function (c, a, t) {
        var n = c.getBoundingClientRect();
        return { x: a - n.left, y: t - n.top };
      },
      distancePoint: function (c, a) {
        var t = a.x - c.x,
          n = a.y - c.y;
        return Math.sqrt(t * t + n * n);
      },
      createVideo: function () {
        var c = document.createElement("canvas"),
          a = document.body.appendChild(document.createElement("video"));
        (c.width = a.width = 1),
          (c.height = a.height = 1),
          (a.style.cssText = "position:fixed;top:0;left:0"),
          (a.controls = !0),
          (a.autoplay = !0),
          (a.srcObject = c.captureStream());
      },
      randomUUID: function (c, a) {
        try {
          window.crypto &&
            window.crypto.randemUUID &&
            window.crypto.randemUUID(c, a);
        } catch (t) {
          console.log(t);
        }
      },
    },
    m = {},
    v = {},
    y = {
      on: function (c, a) {
        return (v[c] || (v[c] = [])).push(a), m;
      },
      off: function (c, a) {
        if (!c && !a) return (v = {}), m;
        var t = v[c];
        if (t)
          if (a)
            for (var n = t.length - 1; n >= 0; n--)
              t[n] === a && t.splice(n, 1);
          else delete v[c];
        return m;
      },
      fire: function (c, a) {
        var t = v[c];
        if (t) for (var n = 0, e = (t = t.slice()).length; e > n; n++) t[n](a);
        return m;
      },
    },
    z = (function () {
      function c(c) {
        var a = this;
        (this.reset = function () {
          (a.resetAnimateDone = !1),
            (a.loop = !1),
            (a.resetTime = new Date().valueOf()),
            a.disableReset();
          var c = a.options,
            t = c.width,
            n = c.isTaobaoApp;
          (a.title.innerHTML = c.languageConfig["question-loading"]),
            f.animation(a.title, n ? window.innerWidth - 24 : 0.9 * t, n),
            setTimeout(function () {
              a.resetAnimateDone = !0;
            }, 300);
        }),
          (this.disableReset = function () {
            (a.disabled = !0), (a.refresh.style.cursor = "not-allowed");
          }),
          (this.enableReset = function () {
            (a.disabled = !1), (a.refresh.style.cursor = "pointer");
          }),
          (this.getQuestionSuccess = function (c) {
            a.container.className = a.container.className.replace(" fail", "");
            var t = a.options,
              e = t.languageConfig,
              i = t.type,
              o = t.width,
              r = t.SecCaptcha,
              p = t.token,
              h = t.isTaobaoApp;
            if (
              (n[i] && (a.error.style.display = "none"),
              a.enableReset(),
              a.resetAnimateDone)
            )
              if (
                ((a.title.innerHTML = n[i]
                  ? e[i + "-question-info"]
                  : '<canvas id="captcha-question"></canvas>'),
                (a.title.style.animation = "none"),
                n[i])
              )
                f.animation(a.title, h ? window.innerWidth - 24 : 0.9 * o, h),
                  (a.img.src =
                    c.data["puzzle" === i ? "answerArea" : "imageData"]);
              else {
                a.icon.style.display = "block";
                try {
                  if (0 === c.data.ques.indexOf("MERGE")) {
                    a.updateInfo(r, !0, c),
                      setTimeout(function () {
                        a.updatePos(r, p);
                      }, 20);
                    var s = c.data.ques.split("|");
                    return (
                      (a.ques1 = s[1]),
                      (a.ques2 = s[2]),
                      (a.title.innerHTML = "<img src=" + a.ques1 + " />"),
                      (a.img = a.title.querySelector("img")),
                      (a.quesIndex = 1),
                      (a.loop = !0),
                      void a.handlerLoop()
                    );
                  }
                  a.updateInfo(r, !1, c),
                    setTimeout(function () {
                      a.updatePos(r, p);
                    }, 20);
                } catch (g) {
                  f.log("混淆更新图片内容异常：" + g.message, 13, p);
                }
              }
            else
              setTimeout(function () {
                if (
                  ((a.title.innerHTML = n[i]
                    ? e[i + "-question-info"]
                    : '<canvas id="captcha-question"></canvas>'),
                  (a.title.style.animation = "none"),
                  n[i])
                )
                  f.animation(a.title, h ? window.innerWidth - 24 : 0.9 * o, h),
                    (a.img.src =
                      c.data["puzzle" === i ? "answerArea" : "imageData"]);
                else {
                  a.icon.style.display = "block";
                  try {
                    if (0 === c.data.ques.indexOf("MERGE")) {
                      a.updateInfo(r, !0, c),
                        setTimeout(function () {
                          a.updatePos(r, p);
                        }, 20);
                      var t = c.data.ques.split("|");
                      return (
                        (a.ques1 = t[1]),
                        (a.ques2 = t[2]),
                        (a.title.innerHTML = "<img src=" + a.ques1 + " />"),
                        (a.img = a.title.querySelector("img")),
                        (a.quesIndex = 1),
                        (a.loop = !0),
                        void a.handlerLoop()
                      );
                    }
                    a.updateInfo(r, !1, c),
                      setTimeout(function () {
                        a.updatePos(r, p);
                      }, 20);
                  } catch (g) {
                    f.log("混淆更新图片内容异常：" + g.message, 13, p);
                  }
                }
              }, a.resetTime + 300 - new Date().valueOf());
          }),
          (this.updateInfo = function (c, a, t) {
            f.randomUUID(null, "_$SN");
            var n = {
              encryptToken: t.data.encryptToken,
              imageData: t.data.imageData,
            };
            a ? (n.video = !0) : (n.ques = t.data.ques), c.updateInfo(n);
          }),
          (this.updatePos = function (c, t) {
            f.randomUUID(null, "_$SO"),
              c.updatePos(24 / (a.container.offsetWidth / 320) - 24);
          }),
          (this.getQuestionWait = function (c) {
            (a.container.className += " fail"),
              n[a.options.type] && (a.error.style.display = "block");
            var t = a.options,
              e = t.languageConfig,
              i = t.width,
              o = t.isTaobaoApp;
            a.enableReset(),
              (a.title.innerHTML = e["question-wait"]),
              f.animation(a.title, o ? window.innerWidth - 24 : 0.9 * i, o);
          }),
          (this.getQuestionFail = function (c) {
            (a.container.className += " fail"),
              n[a.options.type] && (a.error.style.display = "block");
            var t = a.options,
              e = t.languageConfig,
              i = t.width,
              o = t.isTaobaoApp;
            a.enableReset(),
              (a.title.innerHTML = e["question-error"]),
              f.animation(a.title, o ? window.innerWidth - 24 : 0.9 * i, o);
          }),
          (this.handlerLoop = function () {
            if (a.loop)
              if (
                (1 === a.quesIndex
                  ? ((a.img.src = a.ques2), (a.quesIndex = 2))
                  : ((a.img.src = a.ques1), (a.quesIndex = 1)),
                requestAnimationFrame &&
                  "function" == typeof requestAnimationFrame)
              )
                requestAnimationFrame(a.handlerLoop);
              else
                var c = setInterval(function () {
                  if (!a.loop) return clearInterval(c), void (c = null);
                  1 === a.quesIndex
                    ? ((a.img.src = a.ques2), (a.quesIndex = 2))
                    : ((a.img.src = a.ques1), (a.quesIndex = 1));
                }, 1e3 / 60);
          }),
          (this.clickRefresh = function () {
            a.disabled || f.randomUUID(null, "_$SQ");
          }),
          (this.resetTime = new Date().valueOf()),
          (this.resetAnimateDone = !0),
          (this.options = c);
      }
      return (
        (c.prototype.init = function (c) {
          this.render(c);
        }),
        (c.prototype.render = function (c) {
          this.template = (function (c, a) {
            var t = c.width,
              e = c.type,
              i = t / 320,
              o = n[e] || "scratch";
            return (
              '\n    <div class="' +
              o +
              '-captcha-question">\n      ' +
              (c.isTaobaoApp
                ? ""
                : '<div class="' +
                  o +
                  '-captcha-question-header">\n              <div class="info" style="height: ' +
                  ("puzzle" === e ? 20 : 30) +
                  'px">\n                  <div class="title">' +
                  ("puzzle" === e
                    ? c.languageConfig["question-loading"]
                    : '<canvas id="captcha-question"></canvas>') +
                  '</div>\n              </div>\n              <div class="' +
                  o +
                  '-refresh-btn">\n                <i class="iconfont icon-refresh refresh ' +
                  o +
                  '"></i>\n              </div>\n          </div>') +
              '\n        <div class="' +
              o +
              '-captcha-question-bg" id="' +
              o +
              '-captcha-question-container" style="height: ' +
              0.5625 * t +
              'px">\n            <img class="error" src="https://img.alicdn.com/imgextra/i4/O1CN01qmaJz31q4weSk8nm6_!!6000000005443-2-tps-1280-720.png">\n            ' +
              ("puzzle" !== e
                ? '<canvas id="captcha-answer"></canvas><div class="icon" style="width: ' +
                  134 * i +
                  "px;height: " +
                  76 * i +
                  'px"></div>'
                : '<img class="img" id="' + o + '-captcha-question-img">') +
              "\n            " +
              a +
              "\n        </div>\n    </div>"
            ).trim();
          })(this.options, c);
        }),
        (c.prototype.bindDom = function () {
          var c = this.options,
            a = c.type,
            t = c.isTaobaoApp;
          (this.container = document.querySelector(
            "." + (a || "scratch") + "-captcha-question"
          )),
            (this.bg = this.container.querySelector(
              "." + (a || "scratch") + "-captcha-question-bg"
            )),
            n[a] &&
              ((this.error = this.container.querySelector(".error")),
              (this.img = this.container.querySelector(".img"))),
            t
              ? ((this.title = document.querySelector(
                  "." + (a || "scratch") + "-captcha-question-header .title"
                )),
                (this.refresh = document.querySelector(
                  "." + (a || "scratch") + "-captcha-container .refresh"
                )))
              : ((this.title = this.container.querySelector(".title")),
                (this.refresh = this.container.querySelector(".refresh"))),
            (this.icon = this.container.querySelector(".icon"));
        }),
        (c.prototype.bindEvent = function () {
          var c = this;
          f.addEvent(this.refresh, "click", function () {
            c.clickRefresh(), c.disabled || y.fire("reset");
          }),
            y.on("reset", this.reset),
            y.on("dragging", function (a) {
              c.icon && (c.icon.style.display = "none");
            }),
            y.on("dragend", this.disableReset),
            y.on("getQuestionSuccess", this.getQuestionSuccess),
            y.on("getQuestionWait", this.getQuestionWait),
            y.on("getQuestionFail", this.getQuestionFail),
            y.on("verifyFail", this.enableReset),
            n[this.options.type] &&
              setTimeout(function () {
                f.animation(
                  c.title,
                  c.options.isTaobaoApp
                    ? window.innerWidth - 24
                    : 0.9 * c.options.width,
                  c.options.isTaobaoApp
                );
              });
        }),
        c
      );
    })(),
    w = (function () {
      function c(c) {
        var a = this;
        (this.reset = function () {
          var c = a.options.width / 320;
          (a.container.style.left = 1 > c ? (50 * (1 - c)) / 2 + "px" : "0px"),
            setTimeout(function () {
              a.container.style.transition = "none";
            }, 300);
        }),
          (this.getQuestionSuccess = function (c) {
            var t = a.options.width / 320;
            (a.container.style.top = c.data.puzzleY * t + "px"),
              (a.container.style.width = 50 * t + "px"),
              (a.container.style.height = 50 * t + "px"),
              1 > t && (a.container.style.left = (50 * (1 - t)) / 2 + "px"),
              (a.img.src = c.data.puzzle);
          }),
          (this.getQuestionFail = function (c) {}),
          (this.verifySuccess = function () {}),
          (this.verifyFail = function () {
            a.container.style.transition = "left 0.3s,top 0.3s";
          }),
          (this.options = c);
      }
      return (
        (c.prototype.init = function () {
          this.render();
        }),
        (c.prototype.render = function () {
          this.template = '<div class="puzzle-captcha-puzzle"><img /></div>';
        }),
        (c.prototype.bindDom = function () {
          (this.container = document.querySelector(".puzzle-captcha-puzzle")),
            (this.img = this.container.querySelector("img"));
        }),
        (c.prototype.bindEvent = function () {
          var c = this;
          y.on("dragging", function (a) {
            var t = c.options.width / 320;
            c.container.style.left =
              1 > t ? (50 * (1 - t)) / 2 + a + "px" : a + "px";
          }),
            y.on("reset", this.reset),
            y.on("getQuestionSuccess", this.getQuestionSuccess),
            y.on("getQuestionFail", this.getQuestionFail),
            y.on("verifySuccess", this.verifySuccess),
            y.on("verifyFail", this.verifyFail);
        }),
        c
      );
    })(),
    x = [
      "https://img.alicdn.com/imgextra/i1/O1CN01fusglK1Ogg2fkBN7Q_!!6000000001735-2-tps-1376-1160.png",
      "https://img.alicdn.com/imgextra/i1/O1CN01NQG9kG1vac7MZwgpS_!!6000000006189-2-tps-1376-1160.png",
      "https://img.alicdn.com/imgextra/i3/O1CN01wfcFOY1UF5sqPUkHP_!!6000000002487-2-tps-1376-1160.png",
      "https://img.alicdn.com/imgextra/i1/O1CN01z1h74u1C1fBTNnPTH_!!6000000000021-2-tps-1376-1160.png",
      "https://img.alicdn.com/imgextra/i4/O1CN01Ns9Thh1uameK0ePEm_!!6000000006054-2-tps-1376-1160.png",
      "https://img.alicdn.com/imgextra/i1/O1CN012fZsVq1RfFeifokkr_!!6000000002138-2-tps-1376-1160.png",
    ],
    _ = {
      universe_purple: "linear-gradient(180deg, #E6DCFF 0%, #FBF1FF 100%)",
      clothes_red: "linear-gradient(180deg, #FFE3E5 4%, #FFF3F3 100%)",
      animals_orange: "linear-gradient(180deg, #FFDAC4 0%, #FFF0E7 100%)",
      fruit_yellow: "linear-gradient(180deg, #FFE7B0 2%, #F7F3E3 100%)",
      landscape_blue: "linear-gradient(180deg, #DDF2FD 0%, #EBF0FF 100%)",
      plant_green: "linear-gradient(0deg, #E0F7F1 2%, #E3FFF8 100%)",
    },
    S = {
      universe_purple: "#6358F0",
      clothes_red: "#F74A4A",
      animals_orange: "#FF6A00",
      fruit_yellow: "#FFBC00",
      landscape_blue: "#289CFF",
      plant_green: "#0FB799",
    },
    C =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAAAXNSR0IArs4c6QAAGARJREFUeF7tXXl4VNXZ/713sgJhCZtBkE1IEKmW8jSZaK1FbVXEClLMhCUTQumnFZR9sRb9xA2stsXqV0qYsJhJ+RTrbl0odcmElo9qrXxFRFBaEYJxQRISMvftc+4QDCHLvXfOnbkzc+8/w/PkvMv5vT/uvefc97wvwblOQ8CzY1Yv5UR9dpAom5iyAbU3GBkAZTCQQYTQL1j7FcIEHGXQUe2Xof0CfBQkfpVqJt7tYt6tJqfu9o9Zc8SB/GsEKFHBmPb2gs5qXc1FKtTRzMgm5mwmygZzpqWYENUQ824m2k2E3QqUnUp65psbL3jgmKV2bao8YQg4e8/s1CPVX+VBwViwOhagXGZOtkNciOgEwNtBylao2Nqrd5eq1cNW19vBN6t9iGsCFlZ5h7FKkxh8GYjzwUi3GlAp+gl1YKok0Kuk8OPleWV7pOi1oZK4I2BJZUlmHak3MKvTGHDbEHPDLhEQIFI2prPy+9L80hrDCmwsEBcEnLVjVvLRYMM4VjEN4GvASLEx5uZdIzQA9Cwp2JjhSnluzZg1J8wrs4dkTBPQUzWzLzg4D1BLmNHTHpBGxgsifAoopSDXg/68tYciY1W+lZgkYPFfigfUBdVFxDSTwWnyYYkdjQQ6zsRr013KSt+3fQdix/OQpzFFwKmVJec2UnAJAdPtsoK1S8DFSpqBDUnsum9Tfun7dvGrIz9igoCh1SzfycBkAK6OJpXgfw8SsJkUWh4Lq2dbE3Bu5dz0Q1SzTGVaCHBqghPL4PSpXiFe1Zcz73ko/6E6g8IRG25bAk7ZXnxNUFV/DcbgiKERj4YI+1yKMuexXN+zdpye7QhYuLNkoHo8+CuAf2hHwGLXJ3pKSXPdUj669EM7zcE2BNzMm11Pbn9+ITNuB3MnO4EUN74Q1RLhrgm5V6+aTJODdpiXLQg4dcesrMYTDeVgvtQOoMS9D0TbkpJTCjeNWXMw2nONOgE9Vd4roPImBvpEG4xEsk/AYSg01Z9X9nI05x01AmqP3KoX7gR4KTMr0QQhUW0TkQrQvRPyrloerUdyVAhYsHNGPzoe9DNwSaIG307zJuA1TnN5Kkav+zjSfkWcgAWB4lwwPwNw70hP1rHXHgJUDaLxFW7f9kjiFFECTgnMuCoI9XFnlRvJEBuwRVTrgjLpMfe6FwxIhTU0YgT0VBVPZVX1AUgKy2NH2GoEGklRiv15vk1WGxL6I0JAT8A7j8EPgCNjLxLAxbUNAhNogd9d9qDV87SUgMxMhduL72eVF1o9EUe/fARIoVXlub7FRMTytYc0WkZAQT5PVfHvwFxilfOOXusRIMLa8ryyWVaR0DICeqq8K507n/UEiYQFcSf055UtssKWJQTU3vmYf2GFw47O6CBARPOteCeUTkBttcvqBmfBER2iWGZVLExImS57dSyVgNo+HwefdrZaLKNBtBU3ush1rcx9QmkE1L5wgLc6m8zR5ojF9olqARor64uJFAKKb7s4rr7lfF6zOPi2UU/VSFMulPHtOGwCalktgee2OokFtmFHRBwRCQwT3OPGhptFEzYBPYHiFczqbRGZtWPEVggQKXf73b6fheNUWATUkkkZLzr5fOGEIHZltXxCwpXhJLWaJqBIow821L/lZDLHLoFkeC4yq10pqReaTe83RUDx3rel6vlXnDMcMkIYBzqItk3Mu/pyM++DpgjoqfIuYZXvjQPonClIQoAUWurPK7vPqDrDBNTO7dYHdzn7fUahjvPxRLVKqus8o+eODRPQEyh6ihnXxjmczvRMIECEp/3u9YYKChgioFYuI6g+Y8I3RyRBEHC5lPFGyoDoJqAoFHSQat51arUkCJPMTpOwL4szR+otiKSbgIWBortURlibjmbn5MjFFgIKYUW5e/3terzWRUBRn09l/kfc1l7Wg5QzxgACVK8oGKWnPqEuAnoqi8oZ8BjwwBma4AgQ4Pfnry/sCIYOCaiVxUXjP53KpB1B6fy9BQLBJCTldFQuuEMCFgS8a52DRQ65TCFAVFrhLpvZnmy7BBTV6I8Hea9TENwU/AkvJAqnp7loaHvV+9slYEGgaDUYNyc8knEIAIFwTb+r8OqhbagN1lo3Q8LDFe71s9sy0CYBtSYwauP+RO/DYV1koqc5RUnBnGE34luZ38Ter/bh3l2rcMwiEoo+JlCSBrXVTKdtAgaK72dWLTkLGj3oHcvdkrtiYc5cDO3yde33fV/tx93/vwrHGq3pGEukrPS7fYtbQ79VAmq9107UH0y09lfxTs9+aVlYMmIeeqedWRlv37EPcc+ulfjKAhKKtmIZyalZrfW2a5WAnu3e6zjIT8Z7QBJpfjkZwzE/5xZ0Serc5rQ/PPYRVuy63xoSumiCP7fsDy2Nt0rAgoD3CTBPTKQAxfNc3T1zceO5M5GsdNyf+8NjB3D3rpU42nhULiREWyrcZdd3SEDRb/cYNR50PrvJxT9a2sb3uxqec34Eog63fE+5eKD2X1jx7v34UiYJCQ2dOSmrZb/jM7wqDBTfqLL6SLQAc+zKQUBss8wYPB2Xn/U9UwoP1P4bd++6H1+c+NKUfGtCCik3lbt9jzb/2xkELAh4A2DOk2bVURRxBFKVVMwZfiNG97gwLNv/rv0YS99ZjhOqnL7YovO7P399fpsE1LJeVH4vLK8d4agi0C25GxbnzMXgLoPC9mPT/go8d/DFsPU0V6AoNLx5lsxpd0BPZfFShnqPVIuOsoghcHZ6PywW2yypvcK2aQX5hFMEZZk/33fqQNtpBCyo9L4C8GVhe+8oiDgCI7rmYH72bHRuZ5tFr1NWkS9kn16tyC+7vMmXUwScvWd2avWRLz8DI12vo844eyBwUS83/mtoCZKU8BsQWEs+7RZY17tX1x6rh62uD90RT16eyuLvMtRt9oDU8UIvAj88exxuGDDJ0DZLW7o37vfj+YN/1Gva9DiCcqk/3/fn0wlYVXwnq+rPTWt1BCOKgAIFM4ZMx2V95TQYjRT5NNIpyn/783zLTydgoOh1ZlwcURQdY6YQENsstw7/KS7s8Q1T8i2FIkk+jXSEN/zu9d85RcBpby/o3Fh75DMn8VRKPC1V0iO5OxaOmIvBnQdKsbNxfzmeP/iSFF16lYhE1aROvXpsvOCBY9o74JSqGd8PqkHrH/56PXTGtYpA//R+WDJiPnqm9pSCUDTI1+S4S3H94LG8dS9pBHSKDUmJp6VKRnYdgXnZs9EpqZMUO9EkX+g9MFTMSCNgQcDrA7NXyswcJdIRuLhXPn4ydIaUbRbh3Ib95Xghwo/dM0AhKqtwlxWH7oCVRZUMuKUj5ygMG4EJZ4/H5HPOyGIyrdcW5Avt/2nfhZvugJ+COdP0rBxB6QiIbZaZQ734Xh95TeXX73sML37ysnRfTSkkqqlwl/Ukz45ZvbihvtqUEkfIEgTSlDTMzb4Z3+h+vjT9tiLfyVlRSmpvmhIouijIeEPaTB1FYSHQI6U7FufMw8DO54Slp7mwHckn/HMRLqaCKu8MqFwqbbaOItMIDOjUXyNfz1R5b0N2JZ8GkkIl5HGOX5omjEzB87udh7nDxTaLvFwQW5NP+yKirCRnC0YmjczpuqT3xfjxEK+0bRbhhd3JpyFFVEaegPdxZpa3zjcXg4SVur7/DzFpwASp8y/btwl//OQVqTqtUEZET1BBZZH4BPd9Kww4OttGwEUu/HhIMb7bR27+R6yQ7yQyL5GzCR35/ybprjTtfW9U95FSjfv2bcRLn7wqVaeVysRmtHgE/52ZR1lpyNH9NQKZKT20le45nQdIhSXWyBd6BaR3xCJkH5jDP0IlFc4zlY3LuhIf1R7AO1+8a7El69Sf02mAdmhIkFDm5ftgI146FDt3vlNzJ9pPnkDREbsXIbq+/3WYNOA6qKxiy7+expZ/PQUGy4yh5bpGdRupfd1Id8nbZhFOxyz5Qompn1JBoKjezmU4bhhwPa7rP/40gvz983/g4T2/lV+/xCIaXtrnEswcUgSx8JB5xTL5NBwIDbYmoKhpcu3Z41qNWU39Z/jVnkfw3tE9MmMqXdePBkzAxP6Gulfp8iHmyddEQLs+gqcO9GBcvx+0G4wgB1H+4eaInOTSxYpmg8TdTuTwfaf3RUZFOxy/7oMNePnQ1g7H2X3AyUew/RYhRYOm4MqsK3Tj99ea/8Oj769FXbBOt4yVA8V7nsheFp/XZF7MDLHajQfyhR7B2iLEXtswoqLTFWeNNRy3Q8cP45e7H8b+2o8My8oU6JmSicUj5mNAp7NlqoUg37p9G/DKoT9J1RtNZaFtmErvmwCfVrEoWk7NHOIN65xrg9qgfQPdelg78xzxa1Cnc7BoxDyIlCqZVzySL4QPVZKn0vsig9t/2ZKJZhu6ROnYFaOWo29an7CtvV79JtZ+sB6CkJG6Lug+Sjurm+ZKk2oyfsknFsH0R/Ep7n8ZmCQVNZPKRFWnO0behszU8DdqRYFF8Uj++PhBk97oFxvb57talQLZ2yzxTD7t/gc8brt0rH7pWVg+chm6JmfoZ0AbI48Hj2PNXh8Cn24PW1dbClrbp5RhLN7JpxGQ4LNlQqp4l7p95BJpZ2DFB3pxGkxs28i6xN3uxqEzcVFv+YcJE4F8IQKKhFSbpuQPzxiGZSMWINWVKoUzoiPQL9/7DY7UHwlbXydXJ60W33ndRoStq6UCQb7Sfeu1Flpxf4mUfDsfShLfTxfm3KqrvYCeYIkmLI/sWYO/ff62nuGtjumV0lMrj3F2p36mdbQlmFDkazqUZPdjmWN6jMat2T+V9oIvgvz0x8/h9x89YTihYXDnQViUcyu6S95mEYQUfomV+9bDCXDnO/k/UDuWKf5dEPDa+mD6xb3cuOncWVKKMDbdfXZ98U+s3vMoPj/xha472Te7X4A5w29CmqRXguZGE5F8aDqYLoCIhazoy/t+DyVDinSRRe+gzxu+0Ei460vREL7tS9guHjwNCil6Vesel5Dka6U0R0wUJxJdfwoHTtYdXD0DRY7h5gNb8NS/n211eHsZOXr0tzcmRL6yqH25Cdf/sORPK05U5V3CKp8qnR+WYouFfzRgIib2v1a6lb999jZ+8/6aUy1LkyhJ66+W38uanj0JTb6W5dlirUDl9EGFuCpL/kG+I/Wf4pfvPYxP6g5hQc4tyOmaLZ3oXy84EvTOdxLR0wpUxmKJ3p8MLcGlfbQyw1KvRrURn534XEqzl9YcE3e+333gw58OvybV71hSdkaJXm0hEmNFykUzPtEPLa/nt2MGe4d8oVCdUaRcI2AMtmkQn8MWZN8irVq8lUx2yPc1uq23aYjRRjWiCfOSnPk4r1uOlfwJS7cg35oPfNiWwI/d5gC22qgmllt1iYKOPxu5CEO7DAmLKFYIO+RrgWpbrbrEsFhuViia9C0fuRSixp5dLod8rUWijWaF2ntgjLdrFb1y7xi5DGel9406BzXy7V2HbdWvR90XOznQbrvWeGhYLbJV7jh/mbRmLmaC55CvbdTabVgdugvGfsuGs9L64o7zb0O35K5m+BOWjPi0J+58f652ym63BLKpNcPpC5IWowoDxTeqrD4SVhRsICwKAYmsanHYKVKXQ772kVZIuanc7Xu0XQKWVJZkHqPGg3auF6OXUOd2GYrbzlso/aRaa/Yd8nUQFUJDZ07KKs0vrWmXgNpqOOB9AswT9QbazuNEj7VFI+YiRUmxzE1Bvt/uXYfXnMdu2xgTbalwl51RCvpUx/Tmkp7t3us4yE9aFrEIKxbJpPNz5kjLqm7uvkM+fcEkF03w55b9oZX3wjMVzNoxK/noifqDdq8bqG/qoVHunrm4edhPpCaVOuTTFwFRhCgjOTVrzZg1J3QRUAyKx/4hou/arKEz9KHWwagQ+UrxWvWbUvTFsxJx/NLv9i1ubY6tPoI1AlbN7Au1cT+D5daaiDLSV2d9H9MGFYblhUM+/fAR6DiUpEH+vLWHDBEwtBgpWg3GzfrNxcbIcHpzOOQzGGPCwxXu9bPbkmrzDigEiv9SPOB4kPcyc7JBs7YfPnVgAcb1u9KQn4J8/7N3LV6vrjQkl6iDReJpmouG+r7tO2CKgKG7oHctmEviEUQj5eAc8plgAFFphbtsZnuS7d4BheDUypJzG9Eozi3KrbBtYj6yRURWtVgZd3TwyCGfKeSDSUjK2ZRf+n5YBNQWJJVF5Qx4TLlhcyHRmVyU0/1W5jdb9VSQT5T/feOI89g1EkoC/P789R2u9jq8AwqjoSwZvAOwnEpBRmYSgbHJlKx9LWlZ09khn1nwqV5RMKo8r6zDFga6CKiRMFB0l8r4mVmX7C6XqqRq342HZZyrueqQz3zEFMKKcvf62/Vo0E3AuZVz0w9SzbtgDNajOBbHiLJrPx+5RMuqfvT93+GNI4FYnEZ0fSbsy+LMkQ/lP6SrZYFuAopZTdlefE0wqD4T3Rlaa71rUgayuw7DX2t2WmsoTrW7XMr4x3J9rdc5aWXOhggo5AsqvX8AWH7rnzgNSGJNi56qyC+7zsicDROwcGfJQLU+uAvMnYwYcsbGOQJEtUqq67zy0aUfGpmpYQIK5Z4YKmZkBAxnrHkESKGl/ryy+4xqMEXAzbzZtaXq+VfAfKlRg874OESAaNvEvKsvn0yTDVeBN0VAAeHUHbOygg31bzEQfmeZOIxJokyJgMOulNQLN41ZY6ohi2kCnnwUXwHGi8wsv3RookQwhudJRCoIV/rzyl42O42wCKiRMFC8glm9zawDjlzsIkCk3O13+8L6OBE2AcX74JOB57YycEnsQul4bhQBAl6b4B431sx7X3NbYRNQ2xvcOaMfjqtvAdzb6ESc8bGIAFUjTbmwYvS6j8P1XgoBNRIGinMB3ursD4YbEpvLE9UCNLbC7ZPSgE8aAQVsUwIzrgpy8GkASTaH0XHPHAKNLnJd+5h73QvmxM+UkkrA0Mq4eCqzugEsunE6V9wgQGAiZbo/z7dJ5pwsIYkn4J3HzL+Q6aijK7oIENF8v7vsQdleWELA0J3Qu5JVXijbYUdf5BEghVb588oWWWHZMgIyMxVWedcwo91DKVZMytEpDwEirC3PK5tFRCxP69eaLCOgMKGRcHvx/c6d0IrQWa9T3PnKc32LrSKfmIGlBGyCSHsnBD/gLEysJ40UC2LBAVpgxTtfS/8iQsBTq2NV9TlbNFIoYqWSRlKUYtmr3bYcjhgBhQPaPiHUx53Naiv5E4ZuoloXlEky9/k68iaiBBTOaF9MmJ9xPtt1FJpI/52qQTRe1hcOvd5HnIAaCXfO6EfHg34ngUFvmKwdJxILOM3lkfFt16inUSGgcFLLoql64U6Alzr5hEbDJme8ls8HundC3lXLw81qMetR1Ah4aoVc5b0CKm9yMqvNhtCcnMhkhkJTw0kmNWf5dKmoE1C4I9L7G080lDtnTGSEVIcOom1JySmFZtPodVjQPcQWBDz1SN7+/EJm3O6sknXHz9hAoloi3DUh9+pV0XrktnTYNgRsckycO+b6xl8z41pj6Dqj20OACE9TatIco+d2rUbVdgRsmrBWBkRVfx3PtWisDq6mn7DPpShzjJTLiIhfJ43YloDCP1EQ6RDVLFOBRfHQuSmSgQWoXiFe1Zcz79FbKCiy/oWs2ZqApx7LVd5hrPKdDEyOx0qtkgMfJGAzKbRcT30+ybYNq4sJAjbNSisXTMElBEyPx8LphqPXTEAUBGdgQxK77uuoLG44dmTLxhQBmyYvqvfXBdVFxDQz3vqYGA2w6MPBxGvTXcrK9qrRG9UbqfExScAmcLRmOhycB6gl8dRWTE/wRfsrQCkFuR5sqwmMHj3RHhPTBGwCT+ttF2wYxyqmAXxN3C5YCA0APUsKNma4Up5rrfdatAll1H5cELD5pEW/4zpSb1DB08GcZxQQW44nqlJAG9JZ+X3Lfru29NeAU3FHwOZzF9X9WaVJDL4MxPlgpBvAJnpDCXVgqiTQq6Tw47GwmjULVlwTsDkos/fMTj1S/VUeFIwFq2MByrXLSlqsYAHeDlK2QsXWXr27VK0etrrebFBjSS5hCNgyKNPeXtBZrau5SIU6mhnZxJzNRNlgzrQ0gEQ1xLybiXYTYbcCZaeSnvnmxgseOGapXZsqT1gCthUPz45ZvZQT9dlBomxiymZwHwIymDlD/IKoCwMZBM4Qv0IPAUcZdFT8gvkrBo4S0VHtF3SYiXe7mHeryam7/WPWHLEpF6Li1n8Apdr8T5q2JYAAAAAASUVORK5CYII=",
    E =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAAAXNSR0IArs4c6QAAEtlJREFUeF7tnXtsXNWdx3/fc8c4IQlSEh5KtajQtOuWigr1H15dFnlsByihlE3oQikqBU9oykPhDYVFFAo0CSBISOtxECggWEJCgQDBicdiu0Dgn4qFLaq3DVC1alQgQSIJxGTmfFf3jm3ix3juvXPvnXMf848tzzm/3+/8zsfnfX4Hkn3GeICFhYeK2tcmFbZpsE2Eh4GYJSKzBJwlYv8+/JNi/10EsluEu0VQ/Un7p+wmnL99qIhBsTAoetogips+ylz+hQeQVmfwmq4Z8glPFuG3NdkGSJtQ2iicE6ZPINglkEFSBhUwKILfyyF4FSu37A1Tr6myUwMgLz+9VfaVT9BKt4PSLsLjSWkxoWIA2S+CNwgZUFoNyLTc61i1ecgE28K2IdEAcknn10TrRQTzInISKdPDdmgQ8gH5TEReA1ESpTagZ+ufgpBroozEAchlC+bI3soPKPwRyRNNdLpXmwBsg+BRmWE9ifv6dnnNb3L6RADIQqFFZPt3beiEOJPCg0x2ul/bIPhcwOcdGGX+CygW9/uVZUq+WAPIK/NH6M/kKohcTHKuKU6Nwg4AOynykJou9+L+0j+i0BmGjlgCyKVdR+qyvg7Ul1BkWhiOiYtMiOwj1FqVU8uxZstf42L3iJ2xApBLF3xV7y/fAPBCU2awplS4PZMmsU615O7Gmr4/m2JXPTtiAaA9m9W6chsE51Jo1StUmr+HoELheqWsW+MwezYaQC5bPF3v2XkTgGtJtqYZLK9lBzBEcoWaOfdO3PeUvaxj5MdYAHlp/kxW5AEKjzbSczExCoL3YMkV+E3peRNNNg5A/uyML/Pzofsp/J6JDourTRA8i4Nar8SDL/7FpDIYAyDXL7ak/+NrKbyF5MEmOSkptgD4FILbpWP2Cpz7VMWEchkBIAsL5pHlxyk81QSnJN0GCF4Gcuej2Lej2WVtOoBcku8k5TGShzfbGWnSD+ADQC5AT2lrM8vdNADtLlf3f3wbhDeSVM10Qlp1A9AU3KU6Zt/arC65KQDyss4v8fPKE6ScktbKN6ncgPwOB1nnYfXWv0dtV+QAstB1PFneRJHDoi5spq+2ByDyIZBbiOKWN6L0U6QAsrv9dAIbsllulFXsXpczSyYXoXdgs/tcjaWMDEAuyV9A8mFSco2ZnOUO0wOAlAFchJ7SY2HqGZEdCYBckr+KmitpX9/JPsZ7ACKEwjXoKd0btrGhAkESeknHr4S8NuyCZPJD8ACwQvX0Xw+AIUh3RIYGoANfoaNXhBeHZXwmNwIPAGtVT38hLAhDA7BSyC/PWr4IAIlCBbDCKpauC0NVKADaYz6teU8YBmcym+MBpXB1GGPCwAF0Zrua67IJR3NACUvr8MTkwqBnx4ECWF3nk+eypZawMGiuXGeJhnJWkOuEgQHo7HBIZSBbZG4uJGFrrx7pstqD2jEJBEBnb3eo8ma2vRZ29Zsh39m2a7WOC2LvuGEA7VMt7N85kB0sMAOOqKxwDjB0zG1v9BRNwwBWCh13CPXPoyp4pscgD0D90ir239yIRQ0BOHyY9KXsPF8jVRDfvPZ5QkBOa+RQq28AnWP0Un4zO8kcX4CCsNw5WS254/we7/cFoDPu27qrP7vDEUQVxl+Gc8ekc06Hn/GgPwALHTdo6rvi77qsBEF5QEHdiGL/3V7leQbQube7f+idbL3Pq6uTnd5ZH2xpPcbrvWPPAOpC+7OknJVsd2al8+MBQJ5TxQFPAQU8AWiHy9AVbvJjXJYnHR5QFhZ6CQPiGkA7UBD37PqD8bFajj1e5O1I79U0h6xvnSjy1rbm6J5CqxOLZuacb7oNiOQawEp3++0i0tCiY+jeOuOHos7+ifCVzcJ1K0NX1ywFOOcSwWnnCUtPC598sFlmTKX3Dqt34BY3hrkC0I7PR63/1+jYy8PwjRQ6qRCOwDdaTgMhtEPDAepYN/EJXQFY6W5/XETOc0N0U9KMgy+pEI6Hz2QIReQJq3fg/Ho81AXQDovL/eU/GhuZtAZ8SYOwFnymQmhHakVL7uv1wgXXBbDSnV9r7MWiOvAlBcJ68JkKoQgesnpLl0zVCk4JoB2NnuXydiMDgruEL+4QuoXPRAjtwOnI5eZPFb1/SgArhY5VQn1ZvX488u89whdXCL3CZyKEArXaKvZfXouRmgDaj8DwU75v3DscPuGLG4R+4TMNQvsdExyMo2o9plMTwEohb0c0COUuqO8Ws0H44gJho/CZBqEAy61i6frJ6n1SAO231yjbdxj1/FVA8JkOYVDwmQSh/awYZP68yd62qwFg/mxN/tZ3SxV0xqO/IerG1UFLNW7HBOd0C07798DLqR+8WeR/mrttp4Dvo1h6ZnzhJgVQF9o3knJO4J5oRGDXuaIWLWlEwqR5TdkxCbrlG20B+9YLN/YE7jevAgF5WhUH/q0ugPZ7u9xT3mHktltCIUw6fDZ09lOzmJmbN/694wktIAsdP9XUa7wSHln60CB8Ubgu+nA2aYBvhA0FtRTF/l8fyMoEAHV3fhuFJ0QGlB9FCYEwrDEfDel2J3S3wDZVLJ1UE8DhVyn/zw8TkeeJOYRpg2+0FVTWPx94SmZMC8ju/I1aeGfkMPlVGFMI0wqfXc1KcBN6S6MX2sYAqAvt/aTk/fLQlHwxgzA8+J4Ubiw2pQq8KAWkpIoDHSN5RgHk5ae3cmjoY1KmexFoRNqYQJh2+JzZMOQztLbOxqrNQ9XZ8fCH3Z3/qqXyshFA+THCcAgz+L6oVCXWqejd+l9jAKwsyd8mmv/hp+6NyWMohBl84whR+IXVU7p1DIC6kP9vkt8xBia/hhgGYQbfxIoE8Ioqlv5lFEBe0zWDn5Tt8V+L33o3Kp8hEGbwTU6Fc1D1kNxsrNyy1xkDstDZpVnpMwqiRo1pMoQZfFNXoIK1AMWtW4YBTGiwoSZBmMFXv/UYCWbkAFjpzj8swh/XzxbDFBFDmMHnlhE8YvWWLnIA1IX8ayRPdJs1dukigjCDzz0ZGN4XrgLYnd9J4Rz32WOYMmQIM/i8MQHBLtVbmgsWFh6qufdDb9ljmjosCP/2ruCfvhK4U9gXj+01vwVXmHEYeGnnybpSecWvkNjlCwnCoP2QdPhsfynL+g7Y3fETLfqhoB1otDzDIUwDfA6Aoi6Gkdcvo6DXUAjTAp9TxcByJHoJph7IhkGYKviqBD4CXchvIDnhtlK9ukvM94ZAmD747AYQG6EL7X2kdCUGKD8FaTKEaYSv2gPLFrsFTPYitFsgmwRhWuGrAohtNoBvkTzWbT0lOl3EEKYZvmEA37a74PdIOSrRYHkpXEQQph2+4S74fbsF/MioIEReYAkrbcgQZvBVK84JWqS780NGhuEICy6XcnH1PYK241ymdp+Mf3tX+Itu9xkSnNIJ15EBOLGGwzpYMKKJrzQnDIhpLFcBzLrgMfUSNnwZhF+4u9oFZ5OQUY9EBV8G4cgYUJxJSLYMYw+IQwoOWa/bS3N3DMBZhnmVlDERi+o5LWnfhxUiza2f0gohIK/Zk5CXKFzg1llJS9ds+NLcHUPQZwP4FIWLkgaWm/KYAl9aIYRgQ2qPY5kGXyohhDycygOppsKXOgjtA6lpO5JvOnxpgtA5kp+mS0lhLbVw8M1wtu0SvmNSvZSUkmuZYbV8fOk/hU/3ioR0gCHJSzTOtUy7yU/6xfTQ4RvpNzMI3Sw+OGlGL6Y7ACb4VHRk8GUQuobPAfDA0BxJvRkXOXwZhB4gPCA4EQvJC8/WNPgyCF1BOCY8W9ICVIYGn9dYLdmYsCaMYwNUJihErzHwZS1hTfgmhOgdnojEPki5cfBlEE4K4YQg5XaquD/TYCx8GYQTIZzsmYY4P1RjPHwZhGMgnPShmrg+1RUb+DIIqwvQtZ7qqo4D4/VYYezgyyC0AZz8sULbN3F6rjW28KUcwimfa43Lg9Wxhy/FEKqpHqyOw75wYuBLIYQj+78HzkjGPFjtdMOFjp9q6jWu9lMiTpQ4+FIGoYJaimL/r6cGcNmCOdxT3mFavJjEwpcSCJ0wHDNz83Bf364pARyeDW8k5ZyIG7ja6o7+huCGVfYRnkBNMi5KVddiUYsuDbSMTn2uvlnkrW2By/UiEJCnVXFgQijoSWuUhfzZmvytFwWhpz1loeCHVwYGoXHwjbaEwUKon3tE5PlHQ6+eegoU8H0US8+MT1cDwEILZfsO4+IGBgShsfAFDKF+9mGRFx6rx0bo3ztBiGT+PBSL+10BaCcy9v2QBiE0Hr6AIDQFPqc4wHKrWLp+MtJrDqp4Zf4Ifsr3KTIt9H8Rrwp8Qhgb+BqE0CT4ILIPB+Mo3F/6hycAq61gxyqhvswrH5Gk9whh7ODzCaFJ8FVbP7XaKvZfXouJKaeVXNp1JMvl7aS0RAKVVyUuIYwtfB4hNA0+5+BpLjcfa7b81ReATivYnV8rwou9shFZ+joQxh4+lxCaBl/VbDxk9ZYumYqFugtrXLrgq9xf/iOFVmRQeVVUA8LEwFcHQhPhg6CCltzXsabvzw0BWG0F2x8XkfO8chFp+nEQJg6+GhCaCN+wqU9YvQPn12OgbgtoC7BPyZD6bZKt9QQ29fthCGXLeuHGYlNNCVX58I6JqfABGALUsejZ+qd6fnAF4HAreLuI3FxPYNO//8oxIu++03QzQjfA7HLeYfUO3OLGB64B5LLF07ln1x8oPNqN4CxNOj0AwXuYOeebuO+pz9x4wDWATld8af5MXeEmN4KzNOn0gLKwEL8pPe+29J4AtIXq7vwzFH7PrYIsXXo8AMGzqrd0tpcSewaQPzvjy9w/9A7Jg70oytIm2wMAPkVL6zF48MW/eCmpZwCdrjiBwYy8OC1LO9EDI8GGvPrGH4DrF1vcuqufwlO9KszSJ88DELyMzjkdOPepitfS+QKw2goumEcpv0nycK9Ks/TJ8QCADyC541Ds2+GnVL4BdCBcku8k5SWSyo/yLE+8PQBAA3Iaekpb/ZakIQBtpZVCxx1C/XO/BmT5YuwBqF9axf6GNicaBpD2eLB/5wApp8TYlZnpHj0AyO/QMbfdz7jvQFUNA+h0xZd1folDlTcpcpjHcmTJY+gBiHyIVus4rN7690bNDwTA6qSk63hKZSBbH2y0SszO76z3idWO4pY3grA0MAAdCLvbTyfkOVJyQRiXyTDLA4CUQTkLvQObg7IsUACHZ8YXUHMd7bdIsk9iPAARQuFC9JQCvecZCiRckr9Ka96TGO9nBRGlcDV6SvcG7YpQAKwuz+SXC3lt0AZn8prgAWCFVSxdF4bm0AAkCb2koyjklJdSwihUJjNADwBrVU9/AQADlDoqKjQAnfFgFcJfZS1hGFUXgUxgherpvz4s+OwShArgiIvsMSE1V2YTkwigCUDF8ITjmjDGfOPNiwTA0dkx+XC2RBMAISGKcJZagIuCnu3WMjkyAB0InXVCbMgWq0MkqAHRziIzuSjIdb565kQKoAOhvWPC8qZs265e1UT7vbO9htzCoHY43FofOYAOhPbe8eeVJ7IDDG6rKdx0zsGCg6zzgtjb9WppUwB0IFy/2NL9H98G4Y3ZeUKv1RZMevs8HwV3qY7ZtzZ6qsWvRU0D8IAZsn2o9bHsZLXfKvSXzznJDLmgkcOk/jSPzdV0AKvjwgXzyPLj2R2TIKq0vgznDgdy5/s9Rl9fg/sURgA40iVL/8fXUnhLNkt2X4FeUlaPUuF26Zi9olld7nh7jQFwtEt27h3ve4CUs7w4N0s7tQcAeQ4t067wem83bL8aB+AoiJfmz2RFHshi0TSGgBOrxZIrvITLaEyjt9zGAuh0y8sWT9d7dt4EwXWmvdzkzc3Rp7ZDpJFcoWbOvdNtoKDorYxoL7jRgg2/4nkbBOcaHam10YIGkN+OTErheqWsW93E5wtAZUMijG4Bx5fMDhes95dvAHihsYHTG6oO/5ntgOAk1qmW3N31wuL61xJ8zlgBODo+XNp1pC7r60B9iZHvmARfTzUl2u9wEGqtyqnlU0Wjj9AkT6piCeAoiFfmj9CfyVUQudi4Z8U8VYP3xPbzVxR5SE2Xe2s9AuNdavQ5Yg3gKIiFQovI9u9S+CMhzkzqhMV+8lTA5yF4VGT+C5O9vRY9Qo1pTASAB7qAyxbMkb2VH5C8kMITGnOPGbkheB3AOplhPTn+vV0zLPRvReIAHAPjks6vidaLCOZF5CRSpvt3VXQ5AbHjK78GoiRKbYjDbNavdxIN4BgYLz+9VfaVT9BKt4PSLsLjTZlJ2zNYEbxByIDSakCm5V7Hqs1Dfis1TvlSA+CEJZ1rumbIJzxZhN/WZBsgbUJpo3BOmBUIwS6BDJIyqIBBEfxeDsGrWLllb5h6TZWdWgBrVQgLCw8Vta9NKmzToA3l4YDMEuEsEcwSkZmjv9P+u3O1a7cId4tgt4jsGfmdlN0C+UARg2JhUPS0QRQ3fWQqDM2w6/8BmE1LFN10Vm0AAAAASUVORK5CYII=",
    T = (function () {
      function c(c) {
        var a = this;
        (this.reset = function () {
          (a.container.style.display = "none"),
            (a.info.style.animation = "none");
        }),
          (this.getQuestionSuccess = function (c) {
            a.container.style.display = "none";
          }),
          (this.getQuestionFail = function (c) {
            a.container.style.display = "none";
          }),
          (this.verifySuccess = function (c) {
            var t = a.options,
              e = t.languageConfig,
              i = t.type,
              o = t.width;
            (a.icon.src = C),
              (a.msg.innerHTML = n[i]
                ? e[i + "-verify-success"]
                : e["verify-success"]),
              (a.info.style.backgroundColor = "#58c65f"),
              (a.info.innerHTML = e["puzzle-verify-success-info"]
                .replace("${time}", Math.round(c / 100) / 10)
                .replace("${ratio}", "99%")),
              (a.container.style.display = "block"),
              f.animation(a.info, o);
          }),
          (this.verifyFail = function (c) {
            var t = a.options,
              e = t.languageConfig,
              i = t.type,
              r = t.width;
            (a.icon.src = E),
              (a.msg.innerHTML = n[i] ? e[i + "-" + o[c]] : e[o[c]]),
              (a.info.style.backgroundColor = "#FD6542"),
              (a.info.innerHTML =
                305 === c
                  ? n[i]
                    ? e[i + "-" + o[c]]
                    : e[o[c]]
                  : e["puzzle-verify-fail-info"]),
              (a.container.style.display = "block"),
              f.animation(a.info, r);
          }),
          (this.options = c);
      }
      return (
        (c.prototype.init = function () {
          this.render();
        }),
        (c.prototype.render = function () {
          var c, a, t, e, i, o, r, p, h, s, g, l, d;
          this.template =
            ((t = (c = this.options).type),
            (i = c.language),
            (o = c.isTaobaoApp),
            (p =
              41 *
              (r =
                (a = c.width) / ((e = c.isCapGrid) ? (o ? 344 : 375) : 320))),
            (h = 26 * r),
            (s = n[t] || "scratch"),
            (g = window.innerWidth >= 375 && 356 >= window.innerHeight),
            (l =
              a -
              20 -
              (o
                ? 567 > window.innerHeight
                  ? 587 - window.innerHeight
                  : 615 > window.innerHeight
                  ? 615 - window.innerHeight
                  : 0
                : 0)),
            (d = e
              ? ' style="width: ' +
                l +
                "px;height: " +
                l +
                "px;" +
                (o ? "left:" + (a - l) / 2 + "px;" : "") +
                "top:" +
                (10 +
                  (g
                    ? 44 + 8 * r
                    : ("connect" === s ? 68 : 88) * r +
                      Math.max(16 * r, 12) *
                        ("ru_RU" === i || "kk_KZ" === i
                          ? 2
                          : "vi_VN" === i
                          ? 1
                          : 0))) +
                'px;"'
              : ""),
            e &&
              g &&
              (d =
                d.slice(0, -1) + "left:" + ((355 - a + 20) / 2 + 10) + 'px;"'),
            (
              '\n      <div class="' +
              s +
              '-captcha-result"' +
              d +
              '>\n          <div class="result-mask" style="background-color: rgba(0, 0, 0, ' +
              ("puzzle" === t ? 0.3 : 0.5) +
              ');"></div>\n          <div class="result-content" style="top: ' +
              57 * r +
              'px;">\n              <img class="result-icon" style="width: ' +
              p +
              "px;height: " +
              p +
              'px;">\n              <span class="result-msg"></span>\n          </div>\n          <div class="result-info" style="height: ' +
              h +
              "px;line-height: " +
              h +
              'px"></div>\n      </div>'
            ).trim());
        }),
        (c.prototype.bindDom = function () {
          (this.container = document.querySelector(
            "." + (this.options.type || "scratch") + "-captcha-result"
          )),
            (this.content = this.container.querySelector(".result-content")),
            (this.icon = this.content.querySelector(".result-icon")),
            (this.msg = this.content.querySelector(".result-msg")),
            (this.info = this.container.querySelector(".result-info"));
        }),
        (c.prototype.bindEvent = function () {
          y.on("reset", this.reset),
            y.on("getQuestionSuccess", this.getQuestionSuccess),
            y.on("getQuestionFail", this.getQuestionFail),
            y.on("verifySuccess", this.verifySuccess),
            y.on("verifyFail", this.verifyFail);
        }),
        c
      );
    })(),
    A = (function () {
      function c(c) {
        var a = this;
        (this.getQuestionSuccess = function (c) {
          var t = a.options,
            e = t.type,
            i = t.languageConfig,
            o = t.width,
            r = p[t.color] || c.data.tag;
          S[r] &&
            ((a.container.style.border = "1px solid " + S[r]),
            (a.slideButton.style.backgroundColor = S[r]),
            (a.loading.className = a.loading.className.replace(
              a.loading.className.split(" ")[1],
              r
            ))),
            (a.label.innerHTML = n[e]
              ? i[e + "-slider-info"]
              : i["slider-info"]),
            f.animation(a.label, o - 96),
            setTimeout(function () {
              a.enableDrag();
            }, 300);
        }),
          (this.getQuestionWait = function (c) {
            var t = a.options,
              n = t.width;
            (a.label.innerHTML = t.languageConfig["slider-wait"]),
              f.animation(a.label, n - 96),
              a.disableDrag();
          }),
          (this.getQuestionFail = function (c) {
            var t = a.options,
              n = t.width;
            (a.label.innerHTML = t.languageConfig["slider-error"]),
              f.animation(a.label, n - 96),
              a.disableDrag();
          }),
          (this.verifySuccess = function (c) {
            (a.info.style.display = "none"), (a.label.style.animation = "none");
          }),
          (this.verifyFail = function (c) {
            (a.info.style.display = "none"),
              (a.loading.style.display = "block"),
              (a.label.innerHTML = a.options.languageConfig["slider-loading"]),
              (a.slideButton.style.transition = "left 0.3s"),
              (a.label.style.animation = "none");
          }),
          (this.disableDrag = function () {
            (a.enable = !1), (a.slideButton.style.cursor = "not-allowed");
          }),
          (this.enableDrag = function () {
            (a.enable = !0), (a.slideButton.style.cursor = "move");
          }),
          (this.ppSuccess = function () {
            (a.info.style.display = "block"),
              (a.loading.style.display = "none"),
              f.animation(a.label, a.options.width - 96);
          }),
          (this.options = c);
      }
      return (
        (c.prototype.init = function () {
          this.render();
        }),
        (c.prototype.render = function () {
          var c, a, t, e, i, o;
          this.template =
            ((t = (c = this.options).languageConfig),
            (i = 24 * (e = (a = c.width) / 320)),
            (
              '\n    <div class="' +
              (o = n[c.type] || "scratch") +
              '-captcha-slider" style="height: ' +
              i +
              'px;">\n        <div class="button" id="' +
              o +
              '-captcha-btn" style="height: ' +
              34 * e +
              "px;line-height: " +
              34 * e +
              "px;top: " +
              -5 * e +
              'px;">\n            <i id="' +
              o +
              '-captcha-btn-icon" class="iconfont icon-slide"></i>\n        </div>\n        <div class="info" style="width: ' +
              (a - 96) +
              'px">\n            <div class="label" style="line-height: ' +
              i +
              'px">' +
              t["slider-loading"] +
              '</div>\n        </div>\n        <div class="' +
              o +
              "-captcha-loading " +
              (p[c.color] || "animals_orange") +
              '">\n            <?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="width:100%;display:block;animation-play-state:paused" ><g transform="translate(80,50)" style="transform:matrix(1, 0, 0, 1, 80, 50);animation-play-state:paused" ><g transform="rotate(0)" style="transform:matrix(1, 0, 0, 1, 0, 0);animation-play-state:paused" ><circle cx="0" cy="0" r="6" fill="#ff6a00" fill-opacity="0.125" transform="matrix(1.0625,0,0,1.0625,0,0)" style="transform:matrix(1.0625, 0, 0, 1.0625, 0, 0);animation-play-state:paused" ></circle></g></g>\n            <g transform="translate(71.21320343559643,71.21320343559643)" style="transform:matrix(1, 0, 0, 1, 71.2132, 71.2132);animation-play-state:paused" ><g transform="rotate(45)" style="transform:matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0);animation-play-state:paused" ><circle cx="0" cy="0" r="6" fill="#ff6a00" fill-opacity="0.25" transform="matrix(1.125,0,0,1.125,0,0)" style="transform:matrix(1.125, 0, 0, 1.125, 0, 0);animation-play-state:paused" ></circle></g></g>\n            <g transform="translate(50,80)" style="transform:matrix(1, 0, 0, 1, 50, 80);animation-play-state:paused" ><g transform="rotate(90)" style="transform:matrix(0, 1, -1, 0, 0, 0);animation-play-state:paused" ><circle cx="0" cy="0" r="6" fill="#ff6a00" fill-opacity="0.375" transform="matrix(1.1875,0,0,1.1875,0,0)" style="transform:matrix(1.1875, 0, 0, 1.1875, 0, 0);animation-play-state:paused" ></circle></g></g>\n            <g transform="translate(28.786796564403577,71.21320343559643)" style="transform:matrix(1, 0, 0, 1, 28.7868, 71.2132);animation-play-state:paused" ><g transform="rotate(135)" style="transform:matrix(-0.707107, 0.707107, -0.707107, -0.707107, 0, 0);animation-play-state:paused" ><circle cx="0" cy="0" r="6" fill="#ff6a00" fill-opacity="0.5" transform="matrix(1.25,0,0,1.25,0,0)" style="transform:matrix(1.25, 0, 0, 1.25, 0, 0);animation-play-state:paused" ></circle></g></g>\n            <g transform="translate(20,50.00000000000001)" style="transform:matrix(1, 0, 0, 1, 20, 50);animation-play-state:paused" ><g transform="rotate(180)" style="transform:matrix(-1, 0, 0, -1, 0, 0);animation-play-state:paused" ><circle cx="0" cy="0" r="6" fill="#ff6a00" fill-opacity="0.625" transform="matrix(1.3125,0,0,1.3125,0,0)" style="transform:matrix(1.3125, 0, 0, 1.3125, 0, 0);animation-play-state:paused" ></circle></g></g>\n            <g transform="translate(28.78679656440357,28.786796564403577)" style="transform:matrix(1, 0, 0, 1, 28.7868, 28.7868);animation-play-state:paused" ><g transform="rotate(225)" style="transform:matrix(-0.707107, -0.707107, 0.707107, -0.707107, 0, 0);animation-play-state:paused" ><circle cx="0" cy="0" r="6" fill="#ff6a00" fill-opacity="0.75" transform="matrix(1.375,0,0,1.375,0,0)" style="transform:matrix(1.375, 0, 0, 1.375, 0, 0);animation-play-state:paused" ></circle></g></g>\n            <g transform="translate(49.99999999999999,20)" style="transform:matrix(1, 0, 0, 1, 50, 20);animation-play-state:paused" ><g transform="rotate(270)" style="transform:matrix(0, -1, 1, 0, 0, 0);animation-play-state:paused" ><circle cx="0" cy="0" r="6" fill="#ff6a00" fill-opacity="0.875" transform="matrix(1.4375,0,0,1.4375,0,0)" style="transform:matrix(1.4375, 0, 0, 1.4375, 0, 0);animation-play-state:paused" ></circle></g></g>\n            <g transform="translate(71.21320343559643,28.78679656440357)" style="transform:matrix(1, 0, 0, 1, 71.2132, 28.7868);animation-play-state:paused" ><g transform="rotate(315)" style="transform:matrix(0.707107, -0.707107, 0.707107, 0.707107, 0, 0);animation-play-state:paused" ><circle cx="0" cy="0" r="6" fill="#ff6a00" fill-opacity="1" transform="matrix(1.5,0,0,1.5,0,0)" style="transform:matrix(1.5, 0, 0, 1.5, 0, 0);animation-play-state:paused" ></circle></g></g>\x3c!-- generated by https://loading.io/ --\x3e</svg>\n        </div>\n    </div>\n    ' +
              (c.isTaobaoApp
                ? '<div class="refresh">\n            <i class="iconfont icon-refresh ' +
                  o +
                  '"></i>\n            <span>' +
                  t.refresh +
                  "</span>\n          </div>"
                : "")
            ).trim());
        }),
        (c.prototype.bindDom = function () {
          (this.container = document.querySelector(
            "." + (this.options.type || "scratch") + "-captcha-slider"
          )),
            (this.loading = this.container.querySelector(
              "." + (this.options.type || "scratch") + "-captcha-loading"
            )),
            (this.slideButton = this.container.querySelector(".button")),
            (this.info = this.container.querySelector(".info")),
            (this.label = this.info.querySelector(".label")),
            this.bindBaseEvent();
        }),
        (c.prototype.bindBaseEvent = function () {
          var c = this;
          y.on("getQuestionSuccess", this.getQuestionSuccess),
            y.on("getQuestionFail", this.getQuestionFail),
            y.on("getQuestionWait", this.getQuestionWait),
            y.on("verifySuccess", this.verifySuccess),
            y.on("verifyFail", this.verifyFail),
            y.on("ppSuccess", this.ppSuccess),
            setTimeout(function () {
              f.animation(c.label, c.options.width - 96);
            });
        }),
        c
      );
    })(),
    D = (function (c) {
      function t(a) {
        var t = c.call(this, a) || this;
        if (
          ((t.reset = function () {
            var c = t.options,
              a = c.SecCaptcha,
              e = c.token,
              i = c.type;
            if (
              ((t.label.innerHTML = c.languageConfig["slider-loading"]),
              (t.slideButton.style.left = "-1px"),
              !n[i])
            )
              try {
                a.updatePos(24 / (t.container.offsetWidth / 320) - 24);
              } catch (o) {
                f.log("混淆重置图片位置异常：" + o.message, 13, e);
              }
            setTimeout(function () {
              t.slideButton.style.transition = "none";
            }, 300),
              t.disableDrag(),
              f.addEvent(t.slideButton, t.downEvent, t.onDragStart),
              f.addEvent(document, t.upEvent, t.onDragEnd);
          }),
          (t.onDragStart = function (c) {
            var a = window.FYModule;
            if (
              (a &&
                a.fyObj &&
                "function" == typeof a.fyObj.startRecord &&
                a.fyObj.startRecord(),
              !t.start && t.enable)
            ) {
              f.randomUUID(c, "_$SR"),
                (t.startTime = new Date().valueOf()),
                (t.start = !0),
                (t.originX = c.clientX || c.touches[0].clientX),
                (t.x = 0);
              var n = f.getClientRect(t.container),
                e = f.getClientRect(t.slideButton);
              (t.maxSlideWidth = n.width - e.width),
                c.stopPropagation(),
                f.addEvent(document, t.moveEvent, t.onDragging, !0);
            }
          }),
          (t.onDragging = function (c) {
            if (t.start) {
              t.isMoving || f.randomUUID(c, "_$SS"),
                (t.isMoving = !0),
                (t.x = (c.clientX || c.touches[0].clientX) - t.originX),
                0 > t.x
                  ? (t.x = 0)
                  : t.x > t.maxSlideWidth && (t.x = t.maxSlideWidth),
                (t.slideButton.style.left = t.x - 1 + "px");
              var a = t.options.width / 320;
              if (!n[t.options.type])
                try {
                  t.options.SecCaptcha.updatePos(
                    24 / (t.container.offsetWidth / 320) - 24 + t.x / a
                  );
                } catch (c) {
                  f.log(
                    "混淆更新图片位置异常：" + c.message,
                    13,
                    t.options.token
                  );
                }
              y.fire("dragging", t.x), c.stopPropagation();
            }
          }),
          (t.onDragEnd = function (c) {
            t.start &&
              (t.slideEnd(c),
              (t.endTime = new Date().valueOf()),
              (t.start = !1),
              (t.isMoving = !1),
              y.fire("dragend", {
                per: Math.round(((t.x + 24) / t.options.width) * 1e3) / 1e3,
                width: t.maxSlideWidth,
                time: t.endTime - t.startTime,
              }),
              f.removeEvent(t.slideButton, t.downEvent, t.onDragStart),
              f.removeEvent(document, t.moveEvent, t.onDragging, !0),
              f.removeEvent(document, t.upEvent, t.onDragEnd));
          }),
          (t.slideEnd = function (c) {
            f.randomUUID(c, "_$PP");
          }),
          "onpointermove" in document
            ? ((t.downEvent = "pointerdown"),
              (t.moveEvent = "pointermove"),
              (t.upEvent = "pointerup"))
            : ((t.downEvent = "mousedown"),
              (t.moveEvent = "mousemove"),
              (t.upEvent = "mouseup")),
          (t.isMoving = !1),
          !n[a.type])
        )
          try {
            a.SecCaptcha.updatePos(0);
          } catch (e) {
            f.log("混淆初始化图片位置异常：" + e.message, 13, a.token);
          }
        return t;
      }
      return (
        a(t, c),
        (t.prototype.bindEvent = function () {
          this.container.addEventListener("selectstart", function () {
            return !1;
          }),
            (document.body.ondrag = function () {
              return !1;
            }),
            f.addEvent(this.slideButton, this.downEvent, this.onDragStart),
            f.addEvent(document, this.upEvent, this.onDragEnd),
            y.on("reset", this.reset);
        }),
        t
      );
    })(A),
    I = (function (c) {
      function t(a) {
        var t = c.call(this, a) || this;
        if (
          ((t.reset = function () {
            var c = t.options,
              a = c.SecCaptcha,
              e = c.token,
              i = c.type;
            if (
              ((t.label.innerHTML = c.languageConfig["slider-loading"]),
              (t.slideButton.style.left = "-1px"),
              !n[i])
            )
              try {
                a.updatePos(24 / (t.container.offsetWidth / 320) - 24);
              } catch (o) {
                f.log("混淆重置图片位置异常：" + o.message, 13, e);
              }
            setTimeout(function () {
              t.slideButton.style.transition = "none";
            }, 300),
              t.disableDrag(),
              f.addEvent(t.slideButton, t.downEvent, t.onDragStart),
              f.addEvent(document, t.upEvent, t.onDragEnd);
          }),
          (t.onDragStart = function (c) {
            c.preventDefault();
            var a = window.FYModule;
            if (
              (a &&
                a.fyObj &&
                "function" == typeof a.fyObj.startRecord &&
                a.fyObj.startRecord(),
              !t.start && t.enable)
            ) {
              f.randomUUID(c, "_$SR"),
                (t.startTime = new Date().valueOf()),
                (t.start = !0),
                (t.originX = c.clientX || c.touches[0].clientX),
                (t.x = 0);
              var n = f.getClientRect(t.container),
                e = f.getClientRect(t.slideButton);
              (t.maxSlideWidth = n.width - e.width),
                f.addEvent(t.slideButton, t.moveEvent, t.onDragging, !0);
            }
          }),
          (t.onDragging = function (c) {
            if ((c.preventDefault(), t.start)) {
              t.isMoving || f.randomUUID(c, "_$SS"),
                (t.isMoving = !0),
                (t.x = (c.clientX || c.touches[0].clientX) - t.originX),
                0 > t.x
                  ? (t.x = 0)
                  : t.x > t.maxSlideWidth && (t.x = t.maxSlideWidth),
                (t.slideButton.style.left = t.x - 1 + "px");
              var a = t.options.width / 320;
              if (!n[t.options.type])
                try {
                  t.options.SecCaptcha.updatePos(
                    24 / (t.container.offsetWidth / 320) - 24 + t.x / a
                  );
                } catch (c) {
                  f.log(
                    "混淆更新图片位置异常：" + c.message,
                    13,
                    t.options.token
                  );
                }
              y.fire("dragging", t.x);
            }
          }),
          (t.onDragEnd = function (c) {
            t.start &&
              (t.slideEnd(c),
              (t.endTime = new Date().valueOf()),
              (t.start = !1),
              (t.isMoving = !1),
              y.fire("dragend", {
                per: Math.round(((t.x + 24) / t.options.width) * 1e3) / 1e3,
                width: t.maxSlideWidth,
                time: t.endTime - t.startTime,
              }),
              f.removeEvent(t.slideButton, t.downEvent, t.onDragStart),
              f.removeEvent(t.slideButton, t.moveEvent, t.onDragging, !0),
              f.removeEvent(t.slideButton, t.upEvent, t.onDragEnd));
          }),
          (t.slideEnd = function (c) {
            f.randomUUID(c, "_$PP");
          }),
          (t.downEvent = "touchstart"),
          (t.moveEvent = "touchmove"),
          (t.upEvent = "touchend"),
          (t.isMoving = !1),
          !n[a.type])
        )
          try {
            a.SecCaptcha.updatePos(0);
          } catch (e) {
            f.log("混淆初始化图片位置异常：" + e.message, 13, a.token);
          }
        return t;
      }
      return (
        a(t, c),
        (t.prototype.bindEvent = function () {
          this.container.addEventListener("selectstart", function () {
            return !1;
          }),
            (document.body.ondrag = function () {
              return !1;
            }),
            f.addEvent(this.slideButton, this.downEvent, this.onDragStart),
            f.addEvent(this.slideButton, this.upEvent, this.onDragEnd),
            y.on("reset", this.reset);
        }),
        t
      );
    })(A);
  !(function (c) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = c())
      : "function" == typeof define && define.amd
      ? define([], c)
      : (("undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : this
        ).dragula = c());
  })(function () {
    return (function c(a, t, n) {
      function e(o, r) {
        if (!t[o]) {
          if (!a[o]) {
            var p = "function" == typeof require && require;
            if (!r && p) return p(o, !0);
            if (i) return i(o, !0);
            throw (
              (((p = Error("Cannot find module '" + o + "'")).code =
                "MODULE_NOT_FOUND"),
              p)
            );
          }
          (p = t[o] = { exports: {} }),
            a[o][0].call(
              p.exports,
              function (c) {
                return e(a[o][1][c] || c);
              },
              p,
              p.exports,
              c,
              a,
              t,
              n
            );
        }
        return t[o].exports;
      }
      for (
        var i = "function" == typeof require && require, o = 0;
        n.length > o;
        o++
      )
        e(n[o]);
      return e;
    })(
      {
        1: [
          function (c, a, t) {
            var n = {},
              e = "(?:^|\\s)",
              i = "(?:\\s|$)";
            function o(c) {
              var a = n[c];
              return (
                a ? (a.lastIndex = 0) : (n[c] = a = RegExp(e + c + i, "g")), a
              );
            }
            a.exports = {
              add: function (c, a) {
                var t = c.className;
                t.length
                  ? o(a).test(t) || (c.className += " " + a)
                  : (c.className = a);
              },
              rm: function (c, a) {
                c.className = c.className.replace(o(a), " ").trim();
              },
            };
          },
          {},
        ],
        2: [
          function (c, a, t) {
            !(function (t) {
              var n = c("contra/emitter"),
                e = c("crossvent"),
                i = c("./classes"),
                o = document,
                r = o.documentElement;
              function p(c, a, n, i) {
                t.navigator.pointerEnabled
                  ? e[a](
                      c,
                      {
                        mouseup: "pointerup",
                        mousedown: "pointerdown",
                        mousemove: "pointermove",
                      }[n],
                      i
                    )
                  : t.navigator.msPointerEnabled
                  ? e[a](
                      c,
                      {
                        mouseup: "MSPointerUp",
                        mousedown: "MSPointerDown",
                        mousemove: "MSPointerMove",
                      }[n],
                      i
                    )
                  : (e[a](
                      c,
                      {
                        mouseup: "touchend",
                        mousedown: "touchstart",
                        mousemove: "touchmove",
                      }[n],
                      i
                    ),
                    e[a](c, n, i));
              }
              function h(c) {
                return void 0 !== c.touches
                  ? c.touches.length
                  : void 0 !== c.which && 0 !== c.which
                  ? c.which
                  : void 0 !== c.buttons
                  ? c.buttons
                  : void 0 !== (c = c.button)
                  ? 1 & c
                    ? 1
                    : 2 & c
                    ? 3
                    : 4 & c
                    ? 2
                    : 0
                  : void 0;
              }
              function s(c, a) {
                return void 0 !== t[a]
                  ? t[a]
                  : (r.clientHeight ? r : o.body)[c];
              }
              function g(c, a, t) {
                var n = (c = c || {}).className || "";
                return (
                  (c.className += " gu-hide"),
                  (t = o.elementFromPoint(a, t)),
                  (c.className = n),
                  t
                );
              }
              function l() {
                return !1;
              }
              function d() {
                return !0;
              }
              function u(c) {
                return c.width || c.right - c.left;
              }
              function q(c) {
                return c.height || c.bottom - c.top;
              }
              function b(c) {
                return c.parentNode === o ? null : c.parentNode;
              }
              function k(c) {
                return (
                  "INPUT" === c.tagName ||
                  "TEXTAREA" === c.tagName ||
                  "SELECT" === c.tagName ||
                  (function a(c) {
                    return (
                      !!c &&
                      "false" !== c.contentEditable &&
                      ("true" === c.contentEditable || a(b(c)))
                    );
                  })(c)
                );
              }
              function f(c) {
                return (
                  c.nextElementSibling ||
                  (function () {
                    for (var a = c; (a = a.nextSibling) && 1 !== a.nodeType; );
                    return a;
                  })()
                );
              }
              function m(c, a) {
                a =
                  (t = a).targetTouches && t.targetTouches.length
                    ? t.targetTouches[0]
                    : t.changedTouches && t.changedTouches.length
                    ? t.changedTouches[0]
                    : t;
                var t = { pageX: "clientX", pageY: "clientY" };
                return c in t && !(c in a) && t[c] in a && (c = t[c]), a[c];
              }
              a.exports = function (c, a) {
                var t, v, y, z, w, x, _, S, C, E, T;
                1 === arguments.length &&
                  !1 === Array.isArray(c) &&
                  ((a = c), (c = []));
                var A,
                  D = null,
                  I = a || {};
                void 0 === I.moves && (I.moves = d),
                  void 0 === I.accepts && (I.accepts = d),
                  void 0 === I.invalid &&
                    (I.invalid = function () {
                      return !1;
                    }),
                  void 0 === I.containers && (I.containers = c || []),
                  void 0 === I.isContainer && (I.isContainer = l),
                  void 0 === I.copy && (I.copy = !1),
                  void 0 === I.copySortSource && (I.copySortSource = !1),
                  void 0 === I.revertOnSpill && (I.revertOnSpill = !1),
                  void 0 === I.removeOnSpill && (I.removeOnSpill = !1),
                  void 0 === I.direction && (I.direction = "vertical"),
                  void 0 === I.ignoreInputTextSelection &&
                    (I.ignoreInputTextSelection = !0),
                  void 0 === I.mirrorContainer && (I.mirrorContainer = o.body);
                var L = n({
                  containers: I.containers,
                  start: function (c) {
                    (c = B(c)) && Q(c);
                  },
                  end: H,
                  cancel: G,
                  remove: X,
                  destroy: function () {
                    U(!0), V({});
                  },
                  canMove: function (c) {
                    return !!B(c);
                  },
                  dragging: !1,
                });
                return (
                  !0 === I.removeOnSpill &&
                    L.on("over", function (c) {
                      i.rm(c, "gu-hide");
                    }).on("out", function (c) {
                      L.dragging && i.add(c, "gu-hide");
                    }),
                  U(),
                  L
                );
                function F(c) {
                  return -1 !== L.containers.indexOf(c) || I.isContainer(c);
                }
                function U(c) {
                  p(r, (c = c ? "remove" : "add"), "mousedown", M),
                    p(r, c, "mouseup", V);
                }
                function R(c) {
                  p(r, c ? "remove" : "add", "mousemove", N);
                }
                function P(c) {
                  e[(c = c ? "remove" : "add")](r, "selectstart", O),
                    e[c](r, "click", O);
                }
                function O(c) {
                  A && c.preventDefault();
                }
                function M(c) {
                  var a, t;
                  (x = c.clientX),
                    (_ = c.clientY),
                    1 !== h(c) ||
                      c.metaKey ||
                      c.ctrlKey ||
                      ((t = B((a = c.target))) &&
                        ((A = t),
                        R(),
                        "mousedown" === c.type &&
                          (k(a) ? a.focus() : c.preventDefault())));
                }
                function N(c) {
                  if (A)
                    if (0 !== h(c)) {
                      if (
                        void 0 === c.clientX ||
                        Math.abs(c.clientX - x) > (I.slideFactorX || 0) ||
                        void 0 === c.clientY ||
                        Math.abs(c.clientY - _) > (I.slideFactorY || 0)
                      ) {
                        if (I.ignoreInputTextSelection) {
                          var a = m("clientX", c) || 0,
                            n = m("clientY", c) || 0;
                          if (k(o.elementFromPoint(a, n))) return;
                        }
                        (n = A),
                          R(!0),
                          P(),
                          H(),
                          Q(n),
                          (n = (function (c) {
                            return {
                              left:
                                (c = c.getBoundingClientRect()).left +
                                s("scrollLeft", "pageXOffset"),
                              top: c.top + s("scrollTop", "pageYOffset"),
                            };
                          })(y)),
                          (z = m("pageX", c) - n.left),
                          (w = m("pageY", c) - n.top),
                          i.add(E || y, "gu-transit"),
                          (function () {
                            if (!t) {
                              var c = y.getBoundingClientRect();
                              ((t = y.cloneNode(!0)).style.width = u(c) + "px"),
                                (t.style.height = q(c) + "px"),
                                i.rm(t, "gu-transit"),
                                i.add(t, "gu-mirror"),
                                I.mirrorContainer.appendChild(t),
                                p(r, "add", "mousemove", J),
                                i.add(I.mirrorContainer, "gu-unselectable"),
                                L.emit("cloned", t, y, "mirror");
                            }
                          })(),
                          J(c);
                      }
                    } else V({});
                }
                function B(c) {
                  if (!((L.dragging && t) || F(c))) {
                    for (var a = c; b(c) && !1 === F(b(c)); ) {
                      if (I.invalid(c, a)) return;
                      if (!(c = b(c))) return;
                    }
                    var n = b(c);
                    if (n && !I.invalid(c, a) && I.moves(c, n, a, f(c)))
                      return { item: c, source: n };
                  }
                }
                function Q(c) {
                  ("boolean" == typeof I.copy
                    ? I.copy
                    : I.copy(c.item, c.source)) &&
                    ((E = c.item.cloneNode(!0)),
                    L.emit("cloned", E, c.item, "copy")),
                    (v = c.source),
                    (y = c.item),
                    (S = C = f(c.item)),
                    (L.dragging = !0),
                    L.emit("drag", y, v);
                }
                function H() {
                  var c;
                  L.dragging && W((c = E || y), b(c));
                }
                function Y() {
                  R(!(A = !1)), P(!0);
                }
                function V(c) {
                  var a, n;
                  Y(),
                    L.dragging &&
                      ((a = E || y),
                      (n = m("clientX", c) || 0),
                      (c = m("clientY", c) || 0),
                      (c = Z(g(t, n, c), n, c)) &&
                      ((E && I.copySortSource) || !E || c !== v)
                        ? W(a, c)
                        : (I.removeOnSpill ? X : G)());
                }
                function W(c, a) {
                  var t = b(c);
                  E && I.copySortSource && a === v && t.removeChild(y),
                    j(a)
                      ? L.emit("cancel", c, v, v)
                      : L.emit("drop", c, a, v, C),
                    K();
                }
                function X() {
                  var c, a;
                  L.dragging &&
                    ((a = b((c = E || y))) && a.removeChild(c),
                    L.emit(E ? "cancel" : "remove", c, a, v),
                    K());
                }
                function G(c) {
                  var a, t, n;
                  L.dragging &&
                    ((a = arguments.length > 0 ? c : I.revertOnSpill),
                    !1 === (c = j((n = b((t = E || y))))) &&
                      a &&
                      (E ? n && n.removeChild(E) : v.insertBefore(t, S)),
                    c || a
                      ? L.emit("cancel", t, v, v)
                      : L.emit("drop", t, n, v, C),
                    K());
                }
                function K() {
                  var c = E || y;
                  Y(),
                    t &&
                      (i.rm(I.mirrorContainer, "gu-unselectable"),
                      p(r, "remove", "mousemove", J),
                      b(t).removeChild(t),
                      (t = null)),
                    c && i.rm(c, "gu-transit"),
                    T && clearTimeout(T),
                    (L.dragging = !1),
                    D && L.emit("out", c, D, v),
                    L.emit("dragend", c),
                    (v = y = E = S = C = T = D = null);
                }
                function j(c, a) {
                  return (
                    (a = void 0 !== a ? a : t ? C : f(E || y)),
                    c === v && a === S
                  );
                }
                function Z(c, a, t) {
                  for (
                    var n = c;
                    n &&
                    !(function () {
                      if (!1 === F(n)) return !1;
                      var e = $(n, c);
                      e = cc(n, e, a, t);
                      return !!j(n, e) || I.accepts(y, n, v, e);
                    })();

                  )
                    n = b(n);
                  return n;
                }
                function J(c) {
                  if (t) {
                    c.preventDefault();
                    var a = m("clientX", c) || 0,
                      n = m("clientY", c) || 0,
                      e = n - w;
                    (t.style.left = (i = a - z) + "px"),
                      (t.style.top = e + "px");
                    var i,
                      o = E || y,
                      r = null !== (i = Z((c = g(t, a, n)), a, n)) && i !== D;
                    if (
                      ((!r && null !== i) ||
                        (D && h("out"), (D = i), r && h("over")),
                      (e = b(o)),
                      i !== v || !E || I.copySortSource)
                    ) {
                      var p;
                      if (null !== (c = $(i, c))) p = cc(i, c, a, n);
                      else {
                        if (!0 !== I.revertOnSpill || E)
                          return void (E && e && e.removeChild(o));
                        (p = S), (i = v);
                      }
                      ((null === p && r) || (p !== o && p !== f(o))) &&
                        ((C = p),
                        i.insertBefore(o, p),
                        L.emit("shadow", o, i, v));
                    } else e && e.removeChild(o);
                  }
                  function h(c) {
                    L.emit(c, o, D, v);
                  }
                }
                function $(c, a) {
                  for (var t = a; t !== c && b(t) !== c; ) t = b(t);
                  return t === r ? null : t;
                }
                function cc(c, a, t, n) {
                  var e = "horizontal" === I.direction;
                  return (
                    a !== c
                      ? function () {
                          var c = a.getBoundingClientRect();
                          return i(
                            e ? t > c.left + u(c) / 2 : n > c.top + q(c) / 2
                          );
                        }
                      : function () {
                          var a,
                            i,
                            o,
                            r = c.children.length;
                          for (a = 0; r > a; a++) {
                            if (
                              ((o = (i =
                                c.children[a]).getBoundingClientRect()),
                              e && o.left + o.width / 2 > t)
                            )
                              return i;
                            if (!e && o.top + o.height / 2 > n) return i;
                          }
                          return null;
                        }
                  )();
                  function i(c) {
                    return c ? f(a) : a;
                  }
                }
              };
            })(
              "undefined" != typeof global
                ? global
                : "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                ? window
                : {}
            );
          },
          { "./classes": 1, "contra/emitter": 5, crossvent: 6 },
        ],
        3: [
          function (c, a, t) {
            a.exports = function (c, a) {
              return Array.prototype.slice.call(c, a);
            };
          },
          {},
        ],
        4: [
          function (c, a, t) {
            var n = c("ticky");
            a.exports = function (c, a, t) {
              c &&
                n(function () {
                  c.apply(t || null, a || []);
                });
            };
          },
          { ticky: 10 },
        ],
        5: [
          function (c, a, t) {
            var n = c("atoa"),
              e = c("./debounce");
            a.exports = function (c, a) {
              var t = a || {},
                i = {};
              return (
                void 0 === c && (c = {}),
                (c.on = function (a, t) {
                  return i[a] ? i[a].push(t) : (i[a] = [t]), c;
                }),
                (c.once = function (a, t) {
                  return (t._once = !0), c.on(a, t), c;
                }),
                (c.off = function (a, t) {
                  var n = arguments.length;
                  if (1 === n) delete i[a];
                  else if (0 === n) i = {};
                  else {
                    if (!(a = i[a])) return c;
                    a.splice(a.indexOf(t), 1);
                  }
                  return c;
                }),
                (c.emit = function () {
                  var a = n(arguments);
                  return c.emitterSnapshot(a.shift()).apply(this, a);
                }),
                (c.emitterSnapshot = function (a) {
                  var o = (i[a] || []).slice(0);
                  return function () {
                    var i = n(arguments),
                      r = this || c;
                    if ("error" === a && !1 !== t.throws && !o.length)
                      throw 1 === i.length ? i[0] : i;
                    return (
                      o.forEach(function (n) {
                        t.async ? e(n, i, r) : n.apply(r, i),
                          n._once && c.off(a, n);
                      }),
                      c
                    );
                  };
                }),
                c
              );
            };
          },
          { "./debounce": 4, atoa: 3 },
        ],
        6: [
          function (c, a, t) {
            !(function (t) {
              var n = c("custom-event"),
                e = c("./eventmap"),
                i = t.document,
                o = function (c, a, t, n) {
                  return c.addEventListener(a, t, n);
                },
                r = function (c, a, t, n) {
                  return c.removeEventListener(a, t, n);
                },
                p = [];
              function h(c, a, t) {
                if (
                  (a = (function (c, a, t) {
                    var n, e;
                    for (n = 0; p.length > n; n++)
                      if (
                        (e = p[n]).element === c &&
                        e.type === a &&
                        e.fn === t
                      )
                        return n;
                  })(c, a, t))
                )
                  return (t = p[a].wrapper), p.splice(a, 1), t;
              }
              t.addEventListener ||
                ((o = function (c, a, n) {
                  return c.attachEvent(
                    "on" + a,
                    (function (c, a, n) {
                      var e =
                        h(c, a, n) ||
                        (function (c, a) {
                          return function (n) {
                            var e = n || t.event;
                            (e.target = e.target || e.srcElement),
                              (e.preventDefault =
                                e.preventDefault ||
                                function () {
                                  e.returnValue = !1;
                                }),
                              (e.stopPropagation =
                                e.stopPropagation ||
                                function () {
                                  e.cancelBubble = !0;
                                }),
                              (e.which = e.which || e.keyCode),
                              a.call(c, e);
                          };
                        })(c, n);
                      return (
                        p.push({ wrapper: e, element: c, type: a, fn: n }), e
                      );
                    })(c, a, n)
                  );
                }),
                (r = function (c, a, t) {
                  if ((t = h(c, a, t))) return c.detachEvent("on" + a, t);
                })),
                (a.exports = {
                  add: o,
                  remove: r,
                  fabricate: function (c, a, t) {
                    var o =
                      -1 === e.indexOf(a)
                        ? new n(a, { detail: t })
                        : (function () {
                            var c;
                            return (
                              i.createEvent
                                ? (c = i.createEvent("Event")).initEvent(
                                    a,
                                    !0,
                                    !0
                                  )
                                : i.createEventObject &&
                                  (c = i.createEventObject()),
                              c
                            );
                          })();
                    c.dispatchEvent
                      ? c.dispatchEvent(o)
                      : c.fireEvent("on" + a, o);
                  },
                });
            })(
              "undefined" != typeof global
                ? global
                : "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                ? window
                : {}
            );
          },
          { "./eventmap": 7, "custom-event": 8 },
        ],
        7: [
          function (c, a, t) {
            !(function (c) {
              var t = [],
                n = "",
                e = /^on/;
              for (n in c) e.test(n) && t.push(n.slice(2));
              a.exports = t;
            })(
              "undefined" != typeof global
                ? global
                : "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                ? window
                : {}
            );
          },
          {},
        ],
        8: [
          function (c, a, t) {
            !(function (c) {
              var t = c.CustomEvent;
              a.exports = (function () {
                try {
                  var c = new t("cat", { detail: { foo: "bar" } });
                  return "cat" === c.type && "bar" === c.detail.foo;
                } catch (c) {}
              })()
                ? t
                : "undefined" != typeof document &&
                  "function" == typeof document.createEvent
                ? function (c, a) {
                    var t = document.createEvent("CustomEvent");
                    return (
                      a
                        ? t.initCustomEvent(
                            c,
                            a.bubbles,
                            a.cancelable,
                            a.detail
                          )
                        : t.initCustomEvent(c, !1, !1, void 0),
                      t
                    );
                  }
                : function (c, a) {
                    var t = document.createEventObject();
                    return (
                      (t.type = c),
                      a
                        ? ((t.bubbles = !!a.bubbles),
                          (t.cancelable = !!a.cancelable),
                          (t.detail = a.detail))
                        : ((t.bubbles = !1),
                          (t.cancelable = !1),
                          (t.detail = void 0)),
                      t
                    );
                  };
            })(
              "undefined" != typeof global
                ? global
                : "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                ? window
                : {}
            );
          },
          {},
        ],
        9: [
          function (c, a, t) {
            var n, e;
            a = a.exports = {};
            function i() {
              throw Error("setTimeout has not been defined");
            }
            function o() {
              throw Error("clearTimeout has not been defined");
            }
            function r(a) {
              if (n === setTimeout) return setTimeout(a, 0);
              if ((n === i || !n) && setTimeout)
                return (n = setTimeout), setTimeout(a, 0);
              try {
                return n(a, 0);
              } catch (c) {
                try {
                  return n.call(null, a, 0);
                } catch (c) {
                  return n.call(this, a, 0);
                }
              }
            }
            !(function () {
              try {
                n = "function" == typeof setTimeout ? setTimeout : i;
              } catch (c) {
                n = i;
              }
              try {
                e = "function" == typeof clearTimeout ? clearTimeout : o;
              } catch (c) {
                e = o;
              }
            })();
            var p,
              h = [],
              s = !1,
              g = -1;
            function l() {
              s &&
                p &&
                ((s = !1),
                p.length ? (h = p.concat(h)) : (g = -1),
                h.length && d());
            }
            function d() {
              if (!s) {
                var c = r(l);
                s = !0;
                for (var a = h.length; a; ) {
                  for (p = h, h = []; ++g < a; ) p && p[g].run();
                  (g = -1), (a = h.length);
                }
                (p = null),
                  (s = !1),
                  (function (a) {
                    if (e === clearTimeout) return clearTimeout(a);
                    if ((e === o || !e) && clearTimeout)
                      return (e = clearTimeout), clearTimeout(a);
                    try {
                      e(a);
                    } catch (c) {
                      try {
                        return e.call(null, a);
                      } catch (c) {
                        return e.call(this, a);
                      }
                    }
                  })(c);
              }
            }
            function u(c, a) {
              (this.fun = c), (this.array = a);
            }
            function q() {}
            (a.nextTick = function (c) {
              var a = arguments,
                t = Array(arguments.length - 1);
              if (arguments.length > 1)
                for (var n = 1; arguments.length > n; n++) t[n - 1] = a[n];
              h.push(new u(c, t)), 1 !== h.length || s || r(d);
            }),
              (u.prototype.run = function () {
                this.fun.apply(null, this.array);
              }),
              (a.title = "browser"),
              (a.browser = !0),
              (a.env = {}),
              (a.argv = []),
              (a.version = ""),
              (a.versions = {}),
              (a.on = q),
              (a.addListener = q),
              (a.once = q),
              (a.off = q),
              (a.removeListener = q),
              (a.removeAllListeners = q),
              (a.emit = q),
              (a.prependListener = q),
              (a.prependOnceListener = q),
              (a.listeners = function (c) {
                return [];
              }),
              (a.binding = function (c) {
                throw Error("process.binding is not supported");
              }),
              (a.cwd = function () {
                return "/";
              }),
              (a.chdir = function (c) {
                throw Error("process.chdir is not supported");
              }),
              (a.umask = function () {
                return 0;
              });
          },
          {},
        ],
        10: [
          function (c, a, t) {
            !(function (c) {
              a.exports =
                "function" == typeof c
                  ? function (a) {
                      c(a);
                    }
                  : function (c) {
                      setTimeout(c, 0);
                    };
            })(c("timers").setImmediate);
          },
          { timers: 11 },
        ],
        11: [
          function (c, a, t) {
            !(function (a, n) {
              var e = c("process/browser.js").nextTick,
                i = Function.prototype.apply,
                o = Array.prototype.slice,
                r = {},
                p = 0;
              function h(c, a) {
                (this._id = c), (this._clearFn = a);
              }
              (t.setTimeout = function () {
                return new h(
                  i.call(setTimeout, window, arguments),
                  clearTimeout
                );
              }),
                (t.setInterval = function () {
                  return new h(
                    i.call(setInterval, window, arguments),
                    clearInterval
                  );
                }),
                (t.clearTimeout = t.clearInterval =
                  function (c) {
                    c.close();
                  }),
                (h.prototype.unref = h.prototype.ref = function () {}),
                (h.prototype.close = function () {
                  this._clearFn.call(window, this._id);
                }),
                (t.enroll = function (c, a) {
                  clearTimeout(c._idleTimeoutId), (c._idleTimeout = a);
                }),
                (t.unenroll = function (c) {
                  clearTimeout(c._idleTimeoutId), (c._idleTimeout = -1);
                }),
                (t._unrefActive = t.active =
                  function (c) {
                    clearTimeout(c._idleTimeoutId);
                    var a = c._idleTimeout;
                    a >= 0 &&
                      (c._idleTimeoutId = setTimeout(function () {
                        c._onTimeout && c._onTimeout();
                      }, a));
                  }),
                (t.setImmediate =
                  "function" == typeof a
                    ? a
                    : function (c) {
                        var a = p++,
                          n = !(2 > arguments.length) && o.call(arguments, 1);
                        return (
                          (r[a] = !0),
                          e(function () {
                            r[a] &&
                              (n ? c.apply(null, n) : c.call(null),
                              t.clearImmediate(a));
                          }),
                          a
                        );
                      }),
                (t.clearImmediate =
                  "function" == typeof n
                    ? n
                    : function (c) {
                        delete r[c];
                      });
            })(c("timers").setImmediate, c("timers").clearImmediate);
          },
          { "process/browser.js": 9, timers: 11 },
        ],
      },
      {},
      [2]
    )(2);
  });
  for (
    var L = (function () {
        function c(c) {
          var a = this;
          (this.clickGrid = function (c) {
            f.randomUUID(c, "_$SH");
          }),
            (this.onDrag = function (c) {
              f.randomUUID(c, "_$SI"),
                (a.guide.style.display = "none"),
                0 === a.r && (a.startTime = new Date().valueOf()),
                (c.style.transform = "scale(" + 55 / 96 + ")"),
                setTimeout(function () {
                  c.style.transform = "scale(1)";
                }, 50),
                (c.style.opacity = 0);
              for (var t = 0, e = a.resData.images; e.length > t; t++) {
                var i = e[t];
                if (c.getAttribute("data-id") === i.imageId) {
                  a.dragImage = i.content;
                  break;
                }
              }
              setTimeout(function () {
                var c = document.querySelector(".bg.gu-mirror");
                if (c)
                  try {
                    a.options.SecCaptcha.updateImg(c, {
                      token: a.resData.encryptToken,
                      data: a.dragImage,
                    });
                  } catch (t) {
                    f.log(
                      n[a.options.type] + " on drag updateImg：" + t.message,
                      13,
                      a.options.token
                    );
                  }
              });
            }),
            (this.onOver = function (c, t, e) {
              f.randomUUID(c, "_$SJ"),
                (t.style.width = 76 * e + "px"),
                (t.style.height = 76 * e + "px"),
                (t.style.top = 2 * e + "px"),
                (t.style.right = -5 * e + "px");
              var i = document.querySelector(".bg.gu-mirror");
              if (i) {
                i.style.display = "none";
                try {
                  a.options.SecCaptcha.updateImg(c, {
                    token: a.resData.encryptToken,
                    data: a.dragImage,
                  });
                } catch (o) {
                  f.log(
                    n[a.options.type] + " on over updateImg：" + o.message,
                    13,
                    a.options.token
                  );
                }
              }
            }),
            (this.onOut = function (c, t, e) {
              c.className.indexOf("gu-transit") > -1 && f.randomUUID(c, "_$SK"),
                (t.style.width = (a.options.isTaobaoApp ? 55 : 66) * e + "px"),
                (t.style.height = (a.options.isTaobaoApp ? 55 : 66) * e + "px"),
                (t.style.top = (a.options.isTaobaoApp ? 12.5 : 7) * e + "px"),
                (t.style.right = "0px");
              try {
                a.options.SecCaptcha.deleteImg(c);
              } catch (o) {
                f.log(
                  n[a.options.type] + " on out deleteImg：" + o.message,
                  13,
                  a.options.token
                );
              }
              var i = document.querySelector(".bg.gu-mirror");
              if (i) {
                i.style.display = "block";
                try {
                  a.options.SecCaptcha.updateImg(i, {
                    token: a.resData.encryptToken,
                    data: a.dragImage,
                  });
                } catch (o) {
                  f.log(
                    n[a.options.type] + " on out updateImg：" + o.message,
                    13,
                    a.options.token
                  );
                }
              }
            }),
            (this.onDrop = function (c, t, e, i, o) {
              var r = document.querySelector(".bg.gu-mirror");
              try {
                a.options.SecCaptcha.deleteImg(r);
              } catch (p) {
                f.log(
                  n[a.options.type] + " on drop deleteImg：" + p.message,
                  13,
                  a.options.token
                );
              }
              t && "drop" === t.className
                ? (f.randomUUID(c, "_$SL"),
                  (c.className += " drop"),
                  (c.style.width = 16 * i + "px"),
                  (c.style.height = 16 * i + "px"),
                  (c.style.top = 50 * i + "px"),
                  (c.style.left = 50 * i + "px"),
                  (a.r += 1),
                  setTimeout(function () {
                    (c.style.display = "none"),
                      (a.count.style.display = "block"),
                      (a.count.innerHTML = "" + a.r);
                    var t = a.drop.querySelectorAll(".bg.drop");
                    if (t[0]) {
                      try {
                        a.options.SecCaptcha.deleteImg(t[0]);
                      } catch (p) {
                        f.log(
                          n[a.options.type] +
                            " on drop deleteImg：" +
                            p.message,
                          13,
                          a.options.token
                        );
                      }
                      a.drop.removeChild(t[0]);
                    }
                  }, 300),
                  1 === a.r &&
                    ((a.canSubmit = !0),
                    (a.submit.style.backgroundColor = a.options.isTaobaoApp
                      ? "#FF6A00"
                      : "#289cff"),
                    (a.submit.style.cursor = "pointer")))
                : (e.children[0].style.opacity = 1);
            }),
            (this.doSubmit = function (c) {
              a.canSubmit &&
                a.powSuccess &&
                a.enable &&
                (f.randomUUID(c, "_$SM"), (a.endTime = new Date().valueOf()));
            }),
            (this.getQuestionSuccess = function (c) {
              a.enableDrag(),
                (a.loading.style.display = "none"),
                (a.error.style.display = "none"),
                (a.header.style.opacity = "1"),
                (a.resData = c.data);
              try {
                a.updateImg(c);
              } catch (p) {
                f.log(
                  n[a.options.type] +
                    " on getQuestionSuccess updateImg：" +
                    p.message,
                  13,
                  a.options.token
                );
              }
              for (var t = 0, e = c.data.images; e.length > t; t++) {
                var i = e[t];
                if (
                  (a.questionList.push(i.imageId),
                  "connect" !== n[a.options.type])
                ) {
                  a.gridList[i.index].children[0].setAttribute(
                    "data-id",
                    i.imageId
                  );
                  try {
                    a.updateImgGrid(c, i);
                  } catch (p) {
                    f.log(
                      n[a.options.type] +
                        " on getQuestionSuccess updateImg：" +
                        p.message,
                      13,
                      a.options.token
                    );
                  }
                  (a.gridList[i.index].children[0].style.opacity = 1),
                    (a.gridList[i.index].children[0].style.display = "block"),
                    (a.gridList[i.index].children[0].style.cursor =
                      "click" === n[a.options.type] ? "pointer" : "move");
                } else {
                  a.gridList[i.index].setAttribute("data-id", i.imageId);
                  try {
                    a.updateImgGridConnect(c, i);
                  } catch (p) {
                    f.log(
                      n[a.options.type] +
                        " on getQuestionSuccess updateImg：" +
                        p.message,
                      13,
                      a.options.token
                    );
                  }
                  (a.gridList[i.index].style.opacity = 1),
                    (a.gridList[i.index].style.cursor = "pointer");
                }
                var o = a.gridList[i.index].querySelector(".empty");
                o && a.gridList[i.index].removeChild(o);
              }
              if ("drag" === n[a.options.type]) {
                var r = a.guide.querySelector("img");
                r.src || (a.guide.style.display = "block"),
                  f.addEvent(r, "load", function () {
                    setTimeout(function () {
                      a.guide.style.display = "none";
                    }, 3e3);
                  }),
                  (r.src =
                    "https://img.alicdn.com/imgextra/i1/O1CN01gwuHY61awVGYdFUVX_!!6000000003394-1-tps-400-367.gif"),
                  setTimeout(function () {
                    a.guide.style.display = "none";
                  }, 3100);
              }
            }),
            (this.getQuestionWait = function (c) {
              (a.error.style.display = "block"), a.enableDrag();
            }),
            (this.getQuestionFail = function (c) {
              (a.error.style.display = "block"), a.enableDrag();
            }),
            (this.getReplaceSuccess = function (c) {
              a.enableDrag(), (a.resData.encryptToken = c.data.encryptToken);
              for (var t = 0, e = c.data.images; e.length > t; t++) {
                var i = e[t];
                if (
                  ((a.questionList[i.index] = i.imageId),
                  (a.resData.images[i.index] = i),
                  i.content)
                ) {
                  a.gridList[i.index].children[0].setAttribute(
                    "data-id",
                    i.imageId
                  );
                  try {
                    a.replaceUpdateImgGrid(c, i);
                  } catch (p) {
                    f.log(
                      n[a.options.type] +
                        " on getReplaceSuccess updateImg：" +
                        p.message,
                      13,
                      a.options.token
                    );
                  }
                  (a.gridList[i.index].children[0].style.opacity = 1),
                    (a.gridList[i.index].children[0].style.cursor =
                      "click" === n[a.options.type] ? "pointer" : "move");
                } else if (!a.gridList[i.index].querySelector(".empty")) {
                  (a.gridList[i.index].style.cursor = "not-allowed"),
                    (a.gridList[i.index].children[0].style.display = "none");
                  var o = document.createElement("div");
                  o.className = "empty";
                  var r = Math.sqrt(
                    +a.options.captchaConfigInfo.gridType || 16
                  );
                  (o.style.width =
                    (a.options.width - 20 - 2 * (r - 1)) / r + "px"),
                    (o.style.height = o.style.width),
                    (o.innerHTML = s()),
                    a.gridList[i.index].appendChild(o),
                    (a.questionList[i.index] = "");
                }
              }
            }),
            (this.getReplaceFail = function () {
              (a.powSuccess = !1),
                setTimeout(function () {
                  a.powSuccess = !0;
                }, 3e3);
            }),
            (this.verifySuccess = function () {
              a.reset();
            }),
            (this.verifyFail = function () {
              (a.powSuccess = !1),
                setTimeout(function () {
                  a.powSuccess = !0;
                }, 3e3);
            }),
            (this.reset = function () {
              if (
                ((a.r = 0),
                (a.questionList = []),
                (a.canSubmit = !1),
                (a.loading.style.display = "block"),
                a.disableDrag(),
                "connect" !== n[a.options.type])
              ) {
                if ("drag" === n[a.options.type]) {
                  (a.count.style.display = "none"), (a.count.innerHTML = "0");
                  for (
                    var c = a.drop.querySelectorAll(".bg.drop"), t = 0;
                    c.length > t;
                    t++
                  )
                    a.drop.removeChild(c[t]);
                }
                (a.submit.style.backgroundColor = a.options.isTaobaoApp
                  ? "#FFB480"
                  : "#A0CBFA"),
                  (a.submit.style.cursor = "not-allowed");
              }
            }),
            (this.disableDrag = function () {
              if (
                ((a.enable = !1),
                (a.refresh.style.cursor = "not-allowed"),
                "connect" !== n[a.options.type])
              ) {
                (a.submit.style.cursor = "not-allowed"),
                  (a.submit.style.backgroundColor = a.options.isTaobaoApp
                    ? "#FFB480"
                    : "#A0CBFA");
                for (var c = 0; a.gridList.length > c; c++)
                  (a.gridList[c].style.cursor = "not-allowed"),
                    "drag" === n[a.options.type] &&
                      (a.gridList[c].children[0].style.cursor = "not-allowed");
              }
            }),
            (this.enableDrag = function () {
              if (
                ((a.enable = !0),
                (a.refresh.style.cursor = "pointer"),
                "connect" !== n[a.options.type])
              ) {
                a.canSubmit &&
                  ((a.submit.style.cursor = "pointer"),
                  (a.submit.style.backgroundColor = a.options.isTaobaoApp
                    ? "#FF6A00"
                    : "#289cff"));
                for (var c = 0; a.gridList.length > c; c++)
                  a.gridList[c].querySelector(".empty") ||
                    ((a.gridList[c].style.cursor =
                      "drag" === n[a.options.type] ? "move" : "pointer"),
                    "drag" === n[a.options.type] &&
                      (a.gridList[c].children[0].style.cursor = "move"));
              }
            }),
            (this.ppSuccess = function () {
              a.powSuccess = !0;
            }),
            (this.updateImg = function (c) {
              f.randomUUID(null, "_$SN"),
                a.options.SecCaptcha.updateImg(a.text.children[0], {
                  token: c.data.encryptToken,
                  data: c.data.questionText,
                });
            }),
            (this.updateImgGrid = function (c, t) {
              f.randomUUID(a.gridList[t.index].children[0], "_$SO"),
                a.options.SecCaptcha.updateImg(
                  a.gridList[t.index].children[0],
                  { token: c.data.encryptToken, data: t.content }
                );
            }),
            (this.updateImgGridConnect = function (c, t) {
              f.randomUUID(a.gridList[t.index], "_$SO"),
                a.options.SecCaptcha.updateImg(a.gridList[t.index], {
                  token: c.data.encryptToken,
                  data: t.content,
                });
            }),
            (this.replaceUpdateImgGrid = function (c, t) {
              f.randomUUID(a.gridList[t.index].children[0], "_$SP"),
                a.options.SecCaptcha.updateImg(
                  a.gridList[t.index].children[0],
                  { token: c.data.encryptToken, data: t.content }
                );
            }),
            (this.clickGuide = function () {
              f.randomUUID(null, "_$SE"), (a.guide.style.display = "none");
            }),
            (this.clickRefresh = function () {
              a.enable && f.randomUUID(null, "_$SQ");
            }),
            (this.options = c),
            (this.r = 0),
            (this.questionList = []),
            (this.canSubmit = !1),
            (this.powSuccess = !1),
            setTimeout(function () {
              a.powSuccess = !0;
            }, 3e3),
            "connect" === n[c.type] && (this.enable = !0),
            f.isMobile()
              ? ((this.downEvent = "touchstart"),
                (this.moveEvent = "touchmove"),
                (this.upEvent = "touchend"))
              : ("onpointermove" in document)
              ? ((this.downEvent = "pointerdown"),
                (this.moveEvent = "pointermove"),
                (this.upEvent = "pointerup"))
              : ((this.downEvent = "mousedown"),
                (this.moveEvent = "mousemove"),
                (this.upEvent = "mouseup"));
        }
        return (
          (c.prototype.init = function (c) {
            this.render(c);
            try {
              navigator.userAgent.match(/bdhonorbrowser/i) && f.createVideo();
            } catch (a) {
              f.log("视频元素添加失败：" + a.message, 13, this.options.token);
            }
          }),
          (c.prototype.render = function (c) {
            this.template = (function (c, a) {
              var t = c.type,
                e = c.width,
                i = c.captchaConfigInfo,
                o = c.color,
                r = c.languageConfig,
                s = c.language,
                g = c.mini,
                l = c.isTaobaoApp,
                d = +(void 0 === i ? {} : i).gridType || 16,
                u = Math.sqrt(d),
                q = n[t],
                b = e / (l ? 344 : 375),
                k =
                  e -
                  20 -
                  (l
                    ? 567 > window.innerHeight
                      ? 587 - window.innerHeight
                      : 615 > window.innerHeight
                      ? 615 - window.innerHeight
                      : 0
                    : 0),
                f = (k - 2 * (u - 1)) / u,
                m = l ? k : e - 20,
                v = l ? k : e - 20,
                y = p[o] || "animals_orange",
                z = "";
              window.innerWidth >= 375 &&
                356 >= window.innerHeight &&
                (z = "left:" + ((355 - e + 20) / 2 + 10) + 'px;"');
              for (
                var w =
                    window.innerHeight > 356 ? "" : "width:" + (e - 20) + "px;",
                  x = Array(d),
                  _ = 0;
                d > _;
                _++
              )
                x[_] = "";
              return (
                '\n  <div class="' +
                q +
                '-captcha-bg">\n    <div class="' +
                q +
                '-captcha-question"' +
                (l ? 'style="padding: 10px ' + (e - k) / 2 + 'px;"' : "") +
                ">\n      " +
                (l ? "" : h(c)) +
                '\n      <div class="grid-container" id="' +
                q +
                '-captcha-question-container" style="margin-top: ' +
                8 * (g ? 1 : b) +
                "px;" +
                w +
                '">\n        ' +
                x
                  .map(function (c, a) {
                    var t = "",
                      n = "";
                    return (
                      (a + 1) % u != 0 && (t = "margin-right: 2px;"),
                      d - u > a && (n = "margin-bottom: 2px;"),
                      "<" +
                        ("connect" !== q
                          ? "div"
                          : "canvas id='" + q + "-grid-" + a + "'") +
                        ' class="grid" width="120" height="120" style="width: ' +
                        f +
                        "px;height: " +
                        f +
                        "px;" +
                        t +
                        n +
                        '">\n            ' +
                        ("connect" !== q
                          ? "<canvas id='" +
                            q +
                            "-grid-" +
                            a +
                            "' width='120' height='120' class='bg'></canvas>"
                          : "") +
                        "\n          </" +
                        ("connect" !== q ? "div" : "canvas") +
                        ">"
                    );
                  })
                  .join("") +
                "\n      </div>\n      " +
                ("drag" === q
                  ? '<div class="drag-guide-container" style="width:' +
                    v +
                    "px;height:" +
                    v +
                    "px;" +
                    (l ? "left:" + (e - k) / 2 + "px;" : "") +
                    "top:" +
                    (88 * b + 10) +
                    "px;" +
                    z +
                    '"><div class="guide"><img></img></div></div>'
                  : "") +
                '\n      <div class="' +
                q +
                "-captcha-loading " +
                y +
                '" style="width:' +
                (e - 20) +
                "px;top:" +
                (l
                  ? k / 2 - 14 + "px;"
                  : ("connect" === q ? 68 : 88) * b + 10 - 14 + (e - 20) / 2) +
                "px;" +
                (w && window.innerWidth >= 375
                  ? "left:" + ((355 - e + 20) / 2 + 10) + "px;"
                  : "") +
                '">\n        <?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="width:100%;display:block;animation-play-state:paused" ><g transform="translate(80,50)" style="transform:matrix(1, 0, 0, 1, 80, 50);animation-play-state:paused" ><g transform="rotate(0)" style="transform:matrix(1, 0, 0, 1, 0, 0);animation-play-state:paused" ><circle cx="0" cy="0" r="6" fill="#ff6a00" fill-opacity="0.125" transform="matrix(1.0625,0,0,1.0625,0,0)" style="transform:matrix(1.0625, 0, 0, 1.0625, 0, 0);animation-play-state:paused" ></circle></g></g>\n        <g transform="translate(71.21320343559643,71.21320343559643)" style="transform:matrix(1, 0, 0, 1, 71.2132, 71.2132);animation-play-state:paused" ><g transform="rotate(45)" style="transform:matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0);animation-play-state:paused" ><circle cx="0" cy="0" r="6" fill="#ff6a00" fill-opacity="0.25" transform="matrix(1.125,0,0,1.125,0,0)" style="transform:matrix(1.125, 0, 0, 1.125, 0, 0);animation-play-state:paused" ></circle></g></g>\n        <g transform="translate(50,80)" style="transform:matrix(1, 0, 0, 1, 50, 80);animation-play-state:paused" ><g transform="rotate(90)" style="transform:matrix(0, 1, -1, 0, 0, 0);animation-play-state:paused" ><circle cx="0" cy="0" r="6" fill="#ff6a00" fill-opacity="0.375" transform="matrix(1.1875,0,0,1.1875,0,0)" style="transform:matrix(1.1875, 0, 0, 1.1875, 0, 0);animation-play-state:paused" ></circle></g></g>\n        <g transform="translate(28.786796564403577,71.21320343559643)" style="transform:matrix(1, 0, 0, 1, 28.7868, 71.2132);animation-play-state:paused" ><g transform="rotate(135)" style="transform:matrix(-0.707107, 0.707107, -0.707107, -0.707107, 0, 0);animation-play-state:paused" ><circle cx="0" cy="0" r="6" fill="#ff6a00" fill-opacity="0.5" transform="matrix(1.25,0,0,1.25,0,0)" style="transform:matrix(1.25, 0, 0, 1.25, 0, 0);animation-play-state:paused" ></circle></g></g>\n        <g transform="translate(20,50.00000000000001)" style="transform:matrix(1, 0, 0, 1, 20, 50);animation-play-state:paused" ><g transform="rotate(180)" style="transform:matrix(-1, 0, 0, -1, 0, 0);animation-play-state:paused" ><circle cx="0" cy="0" r="6" fill="#ff6a00" fill-opacity="0.625" transform="matrix(1.3125,0,0,1.3125,0,0)" style="transform:matrix(1.3125, 0, 0, 1.3125, 0, 0);animation-play-state:paused" ></circle></g></g>\n        <g transform="translate(28.78679656440357,28.786796564403577)" style="transform:matrix(1, 0, 0, 1, 28.7868, 28.7868);animation-play-state:paused" ><g transform="rotate(225)" style="transform:matrix(-0.707107, -0.707107, 0.707107, -0.707107, 0, 0);animation-play-state:paused" ><circle cx="0" cy="0" r="6" fill="#ff6a00" fill-opacity="0.75" transform="matrix(1.375,0,0,1.375,0,0)" style="transform:matrix(1.375, 0, 0, 1.375, 0, 0);animation-play-state:paused" ></circle></g></g>\n        <g transform="translate(49.99999999999999,20)" style="transform:matrix(1, 0, 0, 1, 50, 20);animation-play-state:paused" ><g transform="rotate(270)" style="transform:matrix(0, -1, 1, 0, 0, 0);animation-play-state:paused" ><circle cx="0" cy="0" r="6" fill="#ff6a00" fill-opacity="0.875" transform="matrix(1.4375,0,0,1.4375,0,0)" style="transform:matrix(1.4375, 0, 0, 1.4375, 0, 0);animation-play-state:paused" ></circle></g></g>\n        <g transform="translate(71.21320343559643,28.78679656440357)" style="transform:matrix(1, 0, 0, 1, 71.2132, 28.7868);animation-play-state:paused" ><g transform="rotate(315)" style="transform:matrix(0.707107, -0.707107, 0.707107, 0.707107, 0, 0);animation-play-state:paused" ><circle cx="0" cy="0" r="6" fill="#ff6a00" fill-opacity="1" transform="matrix(1.5,0,0,1.5,0,0)" style="transform:matrix(1.5, 0, 0, 1.5, 0, 0);animation-play-state:paused" ></circle></g></g>\x3c!-- generated by https://loading.io/ --\x3e</svg>\n      </div>\n      <img class="error" style="width: ' +
                m +
                "px;height: " +
                (l
                  ? m
                  : m +
                    (8 +
                      ("connect" === q
                        ? 60
                        : 80 +
                          Math.max(16 * b, 12) *
                            ("ru_RU" === s || "kk_KZ" === s
                              ? 2
                              : "vi_VN" === s
                              ? 1
                              : 0))) *
                      b) +
                "px;" +
                (l ? "left: " + (e - k) / 2 + "px;" : "") +
                '" src="https://img.alicdn.com/imgextra/i4/O1CN01rnhEoO1p04vY35Jd0_!!6000000005297-2-tps-644-792.png"></img>\n      ' +
                a +
                "\n            " +
                (l
                  ? ""
                  : '<i id="' +
                    q +
                    '-refresh" class="iconfont icon-refresh refresh ' +
                    q +
                    '" style="' +
                    (w && window.innerWidth >= 375
                      ? "left:" + -((355 - e + 20) / 2 + 16) + "px !important;"
                      : "") +
                    '"></i>') +
                "\n    </div>\n      " +
                (l
                  ? "<div class=" +
                    q +
                    '-captcha-button-container>\n              <div id="' +
                    q +
                    '-refresh"' +
                    ("connect" === q
                      ? 'style="margin-right:' + ((e - k) / 2 - 10) + 'px;"'
                      : "") +
                    '>\n                <i class="iconfont icon-refresh refresh ' +
                    q +
                    '"></i>\n                ' +
                    ("connect" === q ? "<span>" + r.refresh + "</span>" : "") +
                    "\n              </div>\n              " +
                    ("connect" !== q
                      ? '<div id="' +
                        q +
                        '-submit" class="submit" style="height:' +
                        (g ? 28 : 43 * b) +
                        "px;line-height:" +
                        (g ? 28 : 43 * b) +
                        "px;margin-top:" +
                        (g ? 5 : 11 * b) +
                        'px;">' +
                        r.submit +
                        "</div>"
                      : "") +
                    "\n            </div>"
                  : "") +
                "\n  </div>\n  " +
                ("connect" === q || l
                  ? ""
                  : '<div id="' +
                    q +
                    '-submit" class="submit" style="height:' +
                    (g ? 28 : 43 * b) +
                    "px;line-height:" +
                    (g ? 28 : 43 * b) +
                    "px;margin-top:" +
                    (g ? 5 : 11 * b) +
                    'px;">' +
                    r.submit +
                    "</div>")
              ).trim();
            })(this.options, c);
          }),
          (c.prototype.bindDom = function () {
            var c = this.options,
              a = c.type,
              t = c.isTaobaoApp;
            if (
              ((this.container = document.querySelector(
                "." + n[a] + "-captcha-container"
              )),
              (this.question = this.container.querySelector(
                "." + n[a] + "-captcha-question"
              )),
              (this.submit = this.container.querySelector(".submit")),
              (this.header = t
                ? document.querySelector(
                    "." + n[a] + "-captcha-question-header"
                  )
                : this.question.querySelector(
                    "." + n[a] + "-captcha-question-header"
                  )),
              (this.text = this.header.querySelector(".h2")),
              "drag" === n[a] &&
                ((this.guide = this.container.querySelector(
                  ".drag-guide-container"
                )),
                (this.drop = this.header.querySelector(".drop")),
                (this.arrow = this.drop.querySelector(".arrow")),
                (this.img = this.drop.querySelector(".img")),
                (this.count = this.header.querySelector(".count"))),
              (this.gridList = this.question.getElementsByClassName("grid")),
              (this.loading = this.question.querySelector(
                "." + n[a] + "-captcha-loading"
              )),
              (this.error = this.question.querySelector(".error")),
              (this.refresh = this.container.querySelector(
                t ? "#" + a + "-refresh" : ".refresh"
              )),
              ("ru_RU" === this.options.language ||
                "vi_VN" === this.options.language) &&
                "click" === n[this.options.type])
            ) {
              if (356 >= window.innerHeight)
                return (
                  (this.header.querySelector(".h1").style.width = "200px"),
                  (this.header.querySelector(".h1").style.display =
                    "inline-block"),
                  this.header
                    .querySelector(".h1")
                    .style.setProperty("line-height", "12px", "important"),
                  void this.header
                    .querySelector(".h3")
                    .style.setProperty("line-height", "12px", "important")
                );
              f.isMobile() &&
                (this.header
                  .querySelector(".h1")
                  .style.setProperty("line-height", "12px", "important"),
                this.header
                  .querySelector(".h3")
                  .style.setProperty("line-height", "12px", "important"));
            }
            if (
              (t ||
                ((this.question.style.backgroundSize = "cover"),
                (this.question.style.backgroundColor = "transparent"),
                (this.question.style.backgroundImage =
                  'url("' + x[Math.floor(6 * Math.random())] + '")')),
              ("ru_RU" === this.options.language ||
                "vi_VN" === this.options.language ||
                "kk_KZ" === this.options.language) &&
                "click" === n[this.options.type] &&
                ((this.container.style.marginTop = "0"),
                (this.header.style.height = "auto"),
                (this.header.querySelector(".question").style.height = "auto"),
                (this.header.querySelector(".question").style.position =
                  "static"),
                (this.submit.style.marginTop = "5px"),
                (document.querySelector(".bx-pu-qrcode-wrap").style.marginTop =
                  "5px"),
                t))
            ) {
              var e = document.getElementById("bx-feedback-btn");
              e && (e.style.marginTop = "0");
            }
          }),
          (c.prototype.bindEvent = function () {
            var c = this;
            if (
              (this.container.addEventListener("selectstart", function () {
                return !1;
              }),
              (document.body.ondrag = function () {
                return !1;
              }),
              this.container.addEventListener(
                "touchmove",
                function (c) {
                  c.preventDefault();
                },
                { passive: !1 }
              ),
              "connect" !== n[this.options.type] &&
                f.addEvent(this.submit, "click", function (a) {
                  c.doSubmit(a),
                    c.canSubmit &&
                      c.powSuccess &&
                      c.enable &&
                      y.fire("dragend", {
                        displayedImages: JSON.stringify(c.questionList),
                        time: c.endTime - c.startTime,
                      });
                }),
              f.addEvent(this.refresh, "click", function () {
                c.clickRefresh(), c.enable && y.fire("reset");
              }),
              "drag" === n[this.options.type])
            ) {
              f.addEvent(this.guide, this.downEvent, function () {
                c.clickGuide();
              });
              for (
                var a = this.options.width / 375,
                  t = function (t) {
                    window
                      .dragula([e.gridList[t], e.drop], {
                        moves: function (a, t) {
                          return (
                            "drop" !== t.className &&
                            "empty" !== a.className &&
                            c.enable
                          );
                        },
                        copy: !0,
                      })
                      .on("drag", function (a, t) {
                        c.onDrag(a);
                      })
                      .on("over", function (t, n) {
                        "drop" === n.className && c.onOver(t, n, a);
                      })
                      .on("out", function (t, n) {
                        "drop" === n.className && c.onOut(t, n, a);
                      })
                      .on("drop", function (n, e, i) {
                        c.onDrop(n, e, i, a, t),
                          e && "drop" === e.className
                            ? y.fire("getReplace", {
                                selectedImageId: n.getAttribute("data-id"),
                                selectedImageIndex: t,
                                displayedImages: JSON.stringify(c.questionList),
                              })
                            : (i.children[0].style.opacity = 1);
                      });
                  },
                  e = this,
                  i = 0;
                this.gridList.length > i;
                i++
              )
                t(i);
            } else if ("click" === n[this.options.type]) {
              var o = function (a) {
                  f.addEvent(
                    r.gridList[a].children[0],
                    "click",
                    function (t) {
                      c.enable &&
                        (t.currentTarget.parentElement.querySelector(
                          ".empty"
                        ) ||
                          (c.clickGrid(t),
                          0 === c.r && (c.startTime = new Date().valueOf()),
                          (c.r += 1),
                          (t.target.style.opacity = 0),
                          (c.canSubmit = !0),
                          (c.submit.style.backgroundColor = c.options
                            .isTaobaoApp
                            ? "#FF6A00"
                            : "#289cff"),
                          (c.submit.style.cursor = "pointer"),
                          y.fire("getReplace", {
                            selectedImageId: t.target.getAttribute("data-id"),
                            selectedImageIndex: a,
                            displayedImages: JSON.stringify(c.questionList),
                          })));
                    },
                    !0
                  );
                },
                r = this;
              for (i = 0; this.gridList.length > i; i++) o(i);
            }
            y.on("getQuestionSuccess", this.getQuestionSuccess),
              y.on("getQuestionFail", this.getQuestionFail),
              y.on("getQuestionWait", this.getQuestionWait),
              y.on("getReplaceSuccess", this.getReplaceSuccess),
              y.on("getReplaceFail", this.getReplaceFail),
              y.on("verifySuccess", this.verifySuccess),
              y.on("verifyFail", this.verifyFail),
              y.on("reset", this.reset),
              y.on("getReplace", this.disableDrag),
              y.on("dragend", this.disableDrag),
              y.on("ppSuccess", this.ppSuccess);
          }),
          c
        );
      })(),
      F = (function () {
        function c(c, a) {
          var t = this;
          (this.getQuestionSuccess = function (c) {
            t.initPath(),
              t.enableDrag(),
              t.guide.children[0].src || (t.guide.style.display = "block"),
              f.addEvent(t.guide.children[0], "load", function () {
                setTimeout(function () {
                  t.guide.style.display = "none";
                }, 3e3);
              }),
              (t.guide.children[0].src =
                "https://img.alicdn.com/imgextra/i3/O1CN01ewhslY1iyoBQHyazL_!!6000000004482-1-tps-250-250.gif"),
              setTimeout(function () {
                t.guide.style.display = "none";
              }, 3100);
          }),
            (this.verifySuccess = function () {
              t.reset();
            }),
            (this.reset = function () {
              (t.records = []),
                (t.selectedImageIds = []),
                t.clearPath(),
                t.disableDrag(),
                f.addEvent(t.circleCanvas, t.downEvent, t.onDragStart),
                f.addEvent(
                  t.isMobile ? t.circleCanvas : document,
                  t.upEvent,
                  t.onDragEnd
                );
            }),
            (this.onDragStart = function (c) {
              var a = window.FYModule;
              a &&
                a.fyObj &&
                "function" == typeof a.fyObj.startRecord &&
                a.fyObj.startRecord(),
                !t.start &&
                  t.enable &&
                  (t.connectStart(c),
                  (t.guide.style.display = "none"),
                  (t.startTime = new Date().valueOf()),
                  (t.start = !0),
                  c.stopPropagation(),
                  t.drawCircle(c),
                  f.addEvent(c.target, t.moveEvent, t.onDragging, !0));
            }),
            (this.onDragging = function (c) {
              t.start &&
                (t.isMobile ? c.preventDefault() : c.stopPropagation(),
                t.drawCircle(c));
            }),
            (this.onDragEnd = function (c) {
              if (
                t.start &&
                (t.connectEnd(c),
                (t.endTime = new Date().valueOf()),
                (t.start = !1),
                t.moveCtx.clearRect(
                  0,
                  0,
                  t.moveCanvas.width,
                  t.moveCanvas.height
                ),
                t.records.length)
              ) {
                t.disableDrag();
                var a = t.container.getBoundingClientRect(),
                  n = a.top,
                  e = a.left,
                  i = a.width,
                  o = a.height;
                y.fire("dragend", {
                  displayedImages: JSON.stringify(t.parent.grid.questionList),
                  selectedImageIds: JSON.stringify(t.selectedImageIds),
                  si: JSON.stringify({ top: n, left: e, width: i, height: o }),
                  time: t.endTime - t.startTime,
                }),
                  f.removeEvent(c.target, t.downEvent, t.onDragStart),
                  f.removeEvent(c.target, t.moveEvent, t.onDragging, !0),
                  f.removeEvent(c.target, t.upEvent, t.onDragEnd);
              }
            }),
            (this.initPath = function () {
              for (
                var c = t.circleCanvas.width,
                  a = Math.sqrt(+t.options.captchaConfigInfo.gridType || 16),
                  n = Math.round((c - 2 * (a - 1)) / a),
                  e = [],
                  i = 0,
                  o = 1;
                a >= o;
                o++
              )
                for (var r = 1; a >= r; r++) {
                  var p = n / 2 + (1 === o ? 0 : (n + 2) * (o - 1)),
                    h = n / 2 + (1 === r ? 0 : (n + 2) * (r - 1));
                  f.drawSolidCircle(t.circleCtx, "transparent", h, p, 4);
                  var s = { x: h, y: p };
                  (s.pos = [o, r]), (s.index = i), e.push(s), i++;
                }
              (t.circles = e), (t.records = []);
            }),
            (this.clearPath = function () {
              var c = t.circleCanvas.width;
              t.circleCtx.clearRect(0, 0, c, c),
                t.lineCtx.clearRect(0, 0, c, c),
                t.moveCtx.clearRect(0, 0, c, c);
            }),
            (this.gridDispatchEvent = function (c, a, n) {
              var e, i, o, r, p, h, s, g;
              try {
                if (
                  !document.elementsFromPoint &&
                  !document.msElementsFromPoint
                )
                  return;
                var l = document.elementsFromPoint
                  ? document.elementsFromPoint(
                      c.clientX ||
                        (null === (e = c.touches[0]) || void 0 === e
                          ? void 0
                          : e.clientX) ||
                        (null === (i = c.changedTouches[0]) || void 0 === i
                          ? void 0
                          : i.clientX),
                      c.clientY ||
                        (null === (o = c.touches[0]) || void 0 === o
                          ? void 0
                          : o.clientY) ||
                        (null === (r = c.changedTouches[0]) || void 0 === r
                          ? void 0
                          : r.clientY)
                    )
                  : document.msElementsFromPoint(
                      c.clientX ||
                        (null === (p = c.touches[0]) || void 0 === p
                          ? void 0
                          : p.clientX) ||
                        (null === (h = c.changedTouches[0]) || void 0 === h
                          ? void 0
                          : h.clientX),
                      c.clientY ||
                        (null === (s = c.touches[0]) || void 0 === s
                          ? void 0
                          : s.clientY) ||
                        (null === (g = c.changedTouches[0]) || void 0 === g
                          ? void 0
                          : g.clientY)
                    );
                if (l)
                  for (var d = 0, u = l; u.length > d; d++) {
                    var q = u[d];
                    if (q.id.indexOf("connect-grid-") >= 0) {
                      var b = void 0;
                      (b = t.isMobile
                        ? new TouchEvent(a, {
                            view: window,
                            bubbles: !0,
                            cancelable: !1,
                            touches: c.touches,
                          })
                        : new MouseEvent(n, {
                            view: window,
                            bubbles: !0,
                            cancelable: !1,
                            screenX: c.screenX,
                            screenY: c.screenY,
                            clientX: c.clientX,
                            clientY: c.clientY,
                            button: c.button,
                            buttons: c.buttons,
                          })),
                        q.dispatchEvent(b);
                      break;
                    }
                  }
              } catch (c) {
                f.log(c, 1, t.options.token);
              }
            }),
            (this.drawCircle = function (c) {
              for (
                var a = f.getCanvasPoint(
                    t.circleCanvas,
                    c.clientX || c.touches[0].clientX,
                    c.clientY || c.touches[0].clientY
                  ),
                  n = 0;
                t.circles.length > n;
                n++
              ) {
                var e = (p = t.circles[n]).x,
                  i = p.y;
                if (20 > f.distancePoint(p, a)) {
                  if (
                    (f.randomUUID(c, "_$SD"),
                    f.drawSolidCircle(t.circleCtx, "#fff", e, i, 4),
                    f.drawHollowCircle(
                      t.circleCtx,
                      "rgba(0,0,0,0.3)",
                      e,
                      i,
                      10
                    ),
                    t.records.length)
                  ) {
                    var o = t.records[t.records.length - 1];
                    f.drawLine(t.lineCtx, "#fff", (h = o.x), (s = o.y), e, i);
                  }
                  var r = t.circles.splice(n, 1);
                  t.records.push(r[0]),
                    t.selectedImageIds.push(
                      t.parent.grid.questionList[r[0].index]
                    );
                  break;
                }
              }
              if (t.records.length) {
                (e = (p = t.records[t.records.length - 1]).x), (i = p.y);
                var p,
                  h = a.x,
                  s = a.y;
                t.moveCtx.clearRect(
                  0,
                  0,
                  t.moveCanvas.width,
                  t.moveCanvas.height
                ),
                  f.drawLine(t.moveCtx, "#fff", e, i, h, s);
              }
            }),
            (this.disableDrag = function () {
              (t.enable = !1), (t.circleCanvas.style.cursor = "not-allowed");
            }),
            (this.enableDrag = function () {
              (t.enable = !0), (t.circleCanvas.style.cursor = "pointer");
            }),
            (this.clickGuide = function () {
              f.randomUUID(null, "_$SE"), (t.guide.style.display = "none");
            }),
            (this.connectStart = function (c) {
              f.randomUUID(c, "_$SF");
            }),
            (this.connectEnd = function (c) {
              f.randomUUID(c, "_$SG");
            }),
            (this.options = c),
            (this.parent = a),
            (this.selectedImageIds = []),
            (this.isMobile = !!f.isMobile()),
            this.isMobile
              ? ((this.downEvent = "touchstart"),
                (this.moveEvent = "touchmove"),
                (this.upEvent = "touchend"))
              : ("onpointermove" in document)
              ? ((this.downEvent = "pointerdown"),
                (this.moveEvent = "pointermove"),
                (this.upEvent = "pointerup"))
              : ((this.downEvent = "mousedown"),
                (this.moveEvent = "mousemove"),
                (this.upEvent = "mouseup"));
        }
        return (
          (c.prototype.init = function () {
            this.render();
          }),
          (c.prototype.render = function () {
            var c, a, t, n, e;
            this.template =
              ((n =
                (a = (c = this.options).width) -
                20 -
                ((t = c.isTaobaoApp)
                  ? 567 > window.innerHeight
                    ? 587 - window.innerHeight
                    : 615 > window.innerHeight
                    ? 615 - window.innerHeight
                    : 0
                  : 0)),
              (e = ""),
              window.innerWidth >= 375 &&
                356 >= window.innerHeight &&
                (e = "left:" + ((355 - a + 20) / 2 + 10) + 'px;"'),
              (
                '<div class="connect-canvas-container" style="width:' +
                n +
                "px;height:" +
                n +
                "px;" +
                (t ? "left:" + (a - n) / 2 + "px;" : "") +
                "top:" +
                ((a / (t ? 344 : 375)) * 68 + 10) +
                "px;" +
                e +
                '">\n    <canvas id="connect-canvas-move" width=' +
                n +
                " height=" +
                n +
                ' class="move"></canvas>\n    <canvas id="connect-canvas-line" width=' +
                n +
                " height=" +
                n +
                ' class="line"></canvas>\n     <canvas id="connect-canvas-circle" width=' +
                n +
                " height=" +
                n +
                ' class="circle"></canvas>\n     <div class="guide">\n      <img></img>\n     </div>\n  </div>'
              ).trim());
          }),
          (c.prototype.bindDom = function () {
            (this.container = document.querySelector(
              "." + n[this.options.type] + "-canvas-container"
            )),
              (this.circleCanvas = this.container.querySelector(".circle")),
              (this.circleCtx = this.circleCanvas.getContext("2d")),
              (this.lineCanvas = this.container.querySelector(".line")),
              (this.lineCtx = this.lineCanvas.getContext("2d")),
              (this.moveCanvas = this.container.querySelector(".move")),
              (this.moveCtx = this.moveCanvas.getContext("2d")),
              (this.guide = this.container.querySelector(".guide"));
          }),
          (c.prototype.bindEvent = function () {
            var c = this;
            this.container.addEventListener("selectstart", function () {
              return !1;
            }),
              this.container.addEventListener(
                "touchmove",
                function (c) {
                  c.preventDefault();
                },
                { passive: !1 }
              ),
              f.addEvent(this.circleCanvas, this.downEvent, this.onDragStart),
              f.addEvent(
                this.isMobile ? this.circleCanvas : document,
                this.upEvent,
                this.onDragEnd
              ),
              f.addEvent(this.guide, this.downEvent, function () {
                c.clickGuide();
              }),
              y.on("getQuestionSuccess", this.getQuestionSuccess),
              y.on("verifySuccess", this.verifySuccess),
              y.on("reset", this.reset);
          }),
          c
        );
      })(),
      U = (function () {
        function c(c) {
          var cThis = this;
          (this.getRand = function (c, t) {
            var n = (window._config_ || {}).nonce;
            if (
              !window.crypto ||
              !window.crypto.genRandomValues ||
              "function" != typeof window.crypto.genRandomValues
            )
              return n && "###nonce###" !== n
                ? "load_success" === window._config_._rand
                  ? "empty"
                  : window._config_._rand || "not_loaded"
                : "no_nonce";
            try {
              return window.crypto.genRandomValues(c, t);
            } catch (e) {
              return f.log(e.message, 14, cThis.options.token), "run_error";
            }
          }),
            (this.getQuestion = function (c) {
              var aOpt = cThis.options,
                n = aOpt.questionUrl,
                i = aOpt.token,
                o = aOpt.appKey,
                x5secdata = aOpt.x5secdata,
                s = aOpt.initFail,
                g = aOpt.language,
                l = aOpt.color,
                d = aOpt.isCapGrid,
                u = aOpt.captchaConfigInfo,
                q = aOpt.mini;
              if (c && !cThis.FYModule && cThis.penddingTime < 1e3)
                setTimeout(function () {
                  (cThis.penddingTime += 100), cThis.getQuestion(!0);
                }, 100);
              else {
                cThis.resetTimer &&
                  (clearTimeout(cThis.resetTimer), (cThis.resetTimer = null));
                var b = cThis.getData(!0).ua,
                  k = {
                    token: i,
                    appKey: o,
                    ua: b,
                    x5secdata: x5secdata,
                    language: g,
                  };
                d && ((k.captchaConfigInfo = JSON.stringify(u)), (k.n = 1)),
                  d && q && (k.mini = !0),
                  (k._rand = cThis.getRand(b, 1)),
                  f.randomUUID(null, "_$SU"),
                  f.ajax({
                    url: "" + n,
                    type: "GET",
                    dataType: "json",
                    data: k,
                    success: function (c) {
                      return (
                        c && "string" == typeof c && (c = JSON.parse(c)),
                        c && c.success
                          ? c.code === e.success
                            ? ((cThis.encryptToken = c.data.encryptToken),
                              c.data.tag ||
                                (c.data.tag =
                                  p[l] || r[Math.floor(6 * Math.random())]),
                              void y.fire("getQuestionSuccess", c))
                            : c.code === e.wait
                            ? (y.fire("getQuestionWait"), void (s && s(c.code)))
                            : (y.fire("getQuestionFail", c.code),
                              void (s && s(c.code)))
                          : (y.fire("getQuestionFail", 500), void (s && s(500)))
                      );
                    },
                    error: function (c) {
                      y.fire("getQuestionFail", 500), s && s(500);
                    },
                  });
              }
            }),
            (this.getReplace = function (c) {
              var t = c.selectedImageId,
                n = c.selectedImageIndex,
                i = c.displayedImages,
                oOpt = cThis.options,
                r = oOpt.replaceUrl,
                p = oOpt.token,
                h = oOpt.appKey,
                sX5secdata = oOpt.x5secdata,
                g = oOpt.ppFun,
                l = oOpt.language,
                d = oOpt.isCapGrid,
                u = oOpt.mini,
                q = cThis.getData(),
                b = q.ua,
                k = {
                  token: p,
                  appKey: h,
                  ua: b,
                  umidToken: q.umidToken,
                  encryptToken: cThis.encryptToken,
                  x5secdata: sX5secdata,
                  language: l,
                  selectedImageId: t,
                  selectedImageIndex: n,
                  displayedImages: i,
                },
                m = window._config_ || {},
                v = m.partitionedLabel,
                z = m.cookieDisabled,
                w = m.ppt;
              v && (k.partitionedLabel = v),
                z && (k.cookieDisabled = z),
                w !== undefined && (k.ppt = w),
                d && u && (k.mini = !0),
                (k._rand = cThis.getRand(b, 2)),
                cThis.replaceRequest(),
                f.ajax({
                  url: "" + r,
                  type: "GET",
                  dataType: "json",
                  data: k,
                  sign: !0,
                  ppSign: window._config_.ppSign,
                  success: function (c, t, n) {
                    var i;
                    return (
                      c && "string" == typeof c && (c = JSON.parse(c)),
                      c && c.success
                        ? c.code === e.success
                          ? ((cThis.encryptToken = c.data.encryptToken),
                            cThis.replaceSuccess(),
                            void y.fire("getReplaceSuccess", c))
                          : (cThis.replaceFail(),
                            y.fire("getReplaceFail", c.code),
                            cThis.replaceRePow(),
                            g &&
                              g(
                                p,
                                h,
                                null === (i = c.result) || void 0 === i
                                  ? void 0
                                  : i.pp,
                                "1",
                                "1",
                                "1",
                                function () {
                                  y.fire("ppSuccess");
                                }
                              ),
                            void (305 !== c.code
                              ? setTimeout(function () {
                                  cThis.replaceRefresh(), y.fire("reset");
                                }, 300)
                              : location.reload()))
                        : (cThis.replaceFail(),
                          y.fire("getReplaceFail", 500),
                          void setTimeout(function () {
                            cThis.replaceRefresh(), y.fire("reset");
                          }, 300))
                    );
                  },
                  error: function (c) {
                    cThis.replaceFail(),
                      y.fire("getReplaceFail", 500),
                      setTimeout(function () {
                        y.fire("reset");
                      }, 300);
                  },
                });
            }),
            (this.verify = function (c) {
              var t = c.width,
                n = c.per,
                i = c.time,
                o = c.si,
                r = c.displayedImages,
                p = c.selectedImageIds,
                h = void 0 === p ? "[]" : p,
                sOpt = cThis.options,
                g = sOpt.verifyUrl,
                l = sOpt.token,
                d = sOpt.appKey,
                uX5secdata = sOpt.x5secdata,
                q = sOpt.verifySuccess,
                b = sOpt.verifyFail,
                k = sOpt.ppFun,
                m = sOpt.isCapGrid,
                v = sOpt.mini,
                z = cThis.getData(),
                w = z.ua,
                x = {
                  token: l,
                  appKey: d,
                  ua: w,
                  umidToken: z.umidToken,
                  encryptToken: cThis.encryptToken,
                  x5secdata: uX5secdata,
                  time: i,
                };
              m
                ? ((x.displayedImages = r),
                  (x.selectedImageIds = h),
                  v && (x.mini = !0),
                  o && (x.si = o))
                : ((x.width = t), (x.per = n));
              var _ = window._config_ || {},
                S = _.partitionedLabel,
                C = _.cookieDisabled,
                E = _.ppt;
              S && (x.partitionedLabel = S),
                C && (x.cookieDisabled = C),
                E !== undefined && (x.ppt = E),
                (x._rand = cThis.getRand(w, 3)),
                f.randomUUID(null, "_$PS"),
                f.ajax({
                  url: "" + g,
                  type: "GET",
                  dataType: "json",
                  data: x,
                  sign: !0,
                  ppSign: window._config_.ppSign,
                  success: function (c, t, n) {
                    var o;
                    return (
                      c && "string" == typeof c && (c = JSON.parse(c)),
                      c && c.success
                        ? c.code === e.success
                          ? (y.fire("verifySuccess", i),
                            void (q && q(c.code, n)))
                          : (cThis.verifyFail(),
                            y.fire("verifyFail", c.code),
                            (cThis.resetTimer = setTimeout(function () {
                              305 !== c.code
                                ? (cThis.verifyRefresh(), y.fire("reset"))
                                : //  失败
                                  location.reload();
                            }, 3e3)),
                            b && b(c.code),
                            cThis.verifyRePow(),
                            void (
                              k &&
                              k(
                                l,
                                d,
                                null === (o = c.result) || void 0 === o
                                  ? void 0
                                  : o.pp,
                                "1",
                                "1",
                                "1",
                                function () {
                                  y.fire("ppSuccess");
                                }
                              )
                            ))
                        : (cThis.verifyFail(),
                          y.fire("verifyFail", 500),
                          (cThis.resetTimer = setTimeout(function () {
                            cThis.verifyRefresh(), y.fire("reset");
                          }, 3e3)),
                          void (b && b(500)))
                    );
                  },
                  error: function (c) {
                    cThis.verifyFail(),
                      y.fire("verifyFail", 500),
                      (cThis.resetTimer = setTimeout(function () {
                        y.fire("reset");
                      }, 3e3)),
                      b && b(500);
                  },
                });
            }),
            (this.replaceRequest = function () {
              f.randomUUID(null, "_$SV");
            }),
            (this.replaceSuccess = function () {
              f.randomUUID(null, "_$SW");
            }),
            (this.replaceFail = function () {
              f.randomUUID(null, "_$SX");
            }),
            (this.replaceRefresh = function () {
              f.randomUUID(null, "_$SY");
            }),
            (this.replaceRePow = function () {
              f.randomUUID(null, "_$SZ");
            }),
            (this.verifyRefresh = function () {
              f.randomUUID(null, "_$S1");
            }),
            (this.verifyRePow = function () {
              f.randomUUID(null, "_$PO");
            }),
            (this.verifyFail = function () {
              f.randomUUID(null, "_$PU");
            }),
            (this.options = c),
            (this.penddingTime = 0);
        }
        return (
          (c.prototype.loadET = function () {
            var c = this;
            f.randomUUID(null, "_$PF");
            var a = Date.now();
            window.AWSC.use("et", function (t, n) {
              "loaded" === t
                ? c.options.jsLoadReport &&
                  c.options.jsLoadReport(
                    "Success",
                    "Et",
                    "et.js_load_" + t + ":" + (Date.now() - a)
                  )
                : c.options.jsLoadReport &&
                  c.options.jsLoadReport(
                    "Error",
                    "Et",
                    "et.js_load_" + t + ":" + (Date.now() - a)
                  );
            });
          }),
          (c.prototype.loadFireye = function () {
            var c = this,
              a = {
                MaxMTLog: 300,
                MTInterval: 4,
                MinMTDwnLog: 30,
                MaxKSLog: 14,
                MaxFocusLog: 6,
                MaxNGPLog: 200,
                NGPInterval: 4,
                Enable: 3,
                location: "cn",
                _umopt_npfp: 1,
              };
            "connect" === n[c.options.type] && (a.isConnect = !0),
              f.randomUUID(null, "_$ST");
            var t = Date.now();
            window.AWSC.configFYEx(
              function (a) {
                if (((c.FYModule = a), (window.FYModule = a), a && a.fyObj)) {
                  var n = c.getData().ua,
                    e = c.getRand(n, 4);
                  c.options.jsLoadReport &&
                    c.options.jsLoadReport(
                      "Success",
                      "Fireye",
                      "fireye.js_load_success:" + (Date.now() - t),
                      n,
                      e
                    );
                } else
                  c.options.jsLoadReport &&
                    c.options.jsLoadReport(
                      "Error",
                      "Fireye",
                      "fireye.js_load_error:" + (Date.now() - t)
                    );
              },
              a,
              3e3
            );
          }),
          (c.prototype.getData = function (c) {
            return (
              void 0 === c && (c = !1),
              this.FYModule
                ? {
                    umidToken: this.FYModule.getUidToken
                      ? this.FYModule.getUidToken()
                      : "not_loaded",
                    ua: this.FYModule.getFYToken
                      ? this.FYModule.getFYToken()
                      : c
                      ? ""
                      : "not_loaded",
                  }
                : { umidToken: "not_loaded", ua: c ? "" : "not_loaded" }
            );
          }),
          (c.prototype.init = function () {
            var cThis = this,
              aOpt = this.options;
            window.AWSC
              ? (this.loadET(), this.loadFireye())
              : f.loadScript(
                  "//g.alicdn.com/AWSC/CAPTCHA/0.0.1/awsc.js",
                  function (t, n) {
                    if ("ok" === t) {
                      try {
                        aOpt.jsLoadReport &&
                          aOpt.jsLoadReport(
                            "Success",
                            "AWSC",
                            "AWSC.js_load_success:" + n
                          ),
                          cThis.loadET(),
                          cThis.loadFireye();
                      } catch (e) {
                        f.log(
                          "初始化awsc失败：" + e.message,
                          "action",
                          cThis.options.token
                        );
                      }
                      return !1;
                    }
                    aOpt.jsLoadReport &&
                      aOpt.jsLoadReport(
                        "Error",
                        "AWSC",
                        "AWSC.js_load_" + t + ":" + n
                      ),
                      f.log("加载awsc出错", "action", cThis.options.token);
                  },
                  1e4,
                  3
                );
          }),
          (c.prototype.bindEvent = function () {
            var c, a;
            y.on("reset", this.getQuestion),
              y.on("getReplace", this.getReplace),
              y.on("dragend", this.verify),
              (null === (c = this.options) || void 0 === c
                ? void 0
                : c.nativeReport) &&
                "function" ==
                  typeof (null === (a = this.options) || void 0 === a
                    ? void 0
                    : a.nativeReport) &&
                y.on("dragend", this.options.nativeReport);
          }),
          c
        );
      })(),
      R = {
        "puzzle-question-info": "Slide to complete the puzzle",
        "puzzle-slider-info": "Drag to compelete the puzzle",
        "click-question-info": "Please select all images that contain",
        "click-question-info-2":
          "If no matched pictures, please click “Submit”",
        "click-question-info-short": "Please select all images containing",
        "click-question-info-short-2": "",
        "drag-question-info": "Please drag all",
        "drag-question-info-2": "into the cart",
        "drag-question-info-3": " and click “Submit”",
        "connect-question-info": "Please connect them in order",
        submit: "Submit",
      },
      P = {
        "zh-CN": {
          title: "亲，请按照说明进行验证哦",
          "question-info": "<img src='${question}'/>",
          "question-loading": "正在加载验证码信息，请稍等",
          "question-wait": "请稍等片刻再点击刷新哦",
          "slider-loading": "正在加载验证码信息",
          "question-error": "加载失败，请点击刷新按钮重试",
          "slider-error": "网络异常",
          "slider-wait": "操作太频繁了，请稍后再试",
          "slider-info": "请按照说明拖动滑块",
          "verify-success": "验证通过",
          "other-punish": "验证不通过，请再试一次",
          "verify-timeout": "我等的太久了，请再试一次",
          "verify-fast": "你的操作太快啦，请再试一次",
          "verify-deny": "验证不通过，请再试一次",
          "verify-wait": "操作太频繁了，请稍后再试",
          "secdata-timeout": "哎我等的太久了，请刷新页面重试",
          "verify-fail": "滑动位置不对哦，请再试一次",
          "verify-error": "系统异常，请再试一次",
          "puzzle-question-info": "请拖动下方滑块还原拼图",
          "puzzle-slider-info": "拖动左侧滑块完成上方拼图",
          "puzzle-verify-success-info": "${time} 秒的速度超过 ${ratio} 的用户",
          "puzzle-verify-fail-info": "请等待题目刷新后重新尝试~",
          "click-question-info": "请选择包含以下内容的所有图片",
          "click-question-info-2": "没有新图片可以点后，请点击“提交”",
          "click-question-info-short": "请选择包含",
          "click-question-info-short-2": "的所有图片",
          "drag-question-info": "请把所有的",
          "drag-question-info-2": "拖到购物车里",
          "drag-question-info-3": "后点击“提交”",
          "connect-question-info": "请依次连出",
          submit: "提交",
        },
        "zh-TW": {
          title: "親，請按照說明進行驗證哦",
          "question-info": "<img src='${question}'/>",
          "question-loading": "正在加載驗證碼信息，請稍等",
          "question-wait": "請稍等片刻再點擊刷新哦",
          "slider-loading": "正在加載驗證碼信息",
          "question-error": "載入失敗，請點選刷新按鈕重試",
          "slider-error": "網路例外",
          "slider-wait": "操作太頻繁了，請稍後再試",
          "slider-info": "請依照說明拖曳滑塊",
          "verify-success": "驗證通過",
          "other-punish": "驗證不通過，請再試一次",
          "verify-timeout": "我等的太久了，請再試一次",
          "verify-fast": "你的操作太快啦，請再試一次",
          "verify-deny": "驗證不通過，請再試一次",
          "verify-wait": "操作太頻繁了，請稍後再試",
          "secdata-timeout": "哎我等的太久了，請刷新頁面重試",
          "verify-fail": "滑動位置不對哦，請再試一次",
          "verify-error": "系統異常，請再試一次",
          "puzzle-question-info": "請拖曳下方滑桿還原拼圖",
          "puzzle-slider-info": "拖曳左側滑桿完成上方拼圖",
          "puzzle-verify-success-info": "${time} 秒的速度超過 ${ratio} 的用戶",
          "puzzle-verify-fail-info": "請等待題目刷新後重新嘗試~",
          "click-question-info": "請選擇包含以下內容的所有圖片",
          "click-question-info-2": "沒有新圖片可以點後，請點擊“提交”",
          "click-question-info-short": "請選擇包含",
          "click-question-info-short-2": "的所有圖片",
          "drag-question-info": "請把所有的",
          "drag-question-info-2": "拖到購物車裡",
          "drag-question-info-3": "後點選“提交”",
          "connect-question-info": "請依序連出",
          submit: "提交",
        },
        "en-US": t(
          t(
            {
              title: "Dear, please follow the instructions to verify",
              "question-info": "<img src='${question}'/>",
              "question-loading": "Loading, please wait",
              "question-wait": "Please wait a moment and refresh again",
              "slider-loading": "Loading...",
              "question-error": "Loading failed, please refresh again",
              "slider-error": "Network error",
              "slider-wait": "Frequent operation, please retry later",
              "slider-info": "Please drag the slider as instructed",
              "verify-success": "Verification passed",
              "other-punish": "Verification failed, please try again",
              "verify-timeout": "I waited too long, please try again",
              "verify-fast": "You slide too fast, please try again",
              "verify-deny": "Verification failed, please try again",
              "verify-wait": "Frequent operation, please retry later",
              "secdata-timeout": "I waited too long, please refresh page",
              "verify-fail": "The Position is wrong, please try again",
              "verify-error": "System error, please try again",
            },
            R
          ),
          {
            "puzzle-verify-success-info":
              "${time}s. you have exceeded ${ratio} users",
            "puzzle-verify-fail-info": "Click refresh to try again",
          }
        ),
        "vi-VN": {
          title: "Bạn thân mến, vui lòng làm theo hướng dẫn để xác minh",
          "question-info": "<img src='${question}'/>",
          "question-loading": "Đang tải thông tin mã xác minh, vui lòng đợi",
          "question-wait":
            "Vui lòng đợi trong giây lát và nhấp vào làm mới lại",
          "slider-loading": "Đang tải thông tin mã xác minh",
          "question-error":
            "Tải không thành công, vui lòng nhấp vào nút làm mới để thử lại mạng bất thường",
          "slider-error": "mạng bất thường",
          "slider-wait": "Hoạt động quá thường xuyên, vui lòng thử lại sau",
          "slider-info": "Vui lòng làm theo hướng dẫn để kéo thanh trượt",
          "verify-success": "Xác minh thông qua",
          "other-punish": "Mã xác nhận thất bại. Vui lòng thử lại",
          "verify-timeout": "Tôi đã đợi quá lâu, vui lòng thử lại",
          "verify-fast": "Thao tác của bạn quá nhanh, vui lòng thử lại",
          "verify-deny": "Mã xác nhận thất bại. Vui lòng thử lại",
          "verify-wait": "Hoạt động quá thường xuyên, vui lòng thử lại sau",
          "secdata-timeout":
            "Xin chào, tôi đã đợi quá lâu, vui lòng làm mới trang và thử lại",
          "verify-fail": "Vị trí trượt sai, vui lòng thử lại",
          "verify-error": "Ngoại lệ hệ thống, vui lòng thử lại",
          "puzzle-question-info": "Slide to complete the puzzle",
          "puzzle-slider-info": "Drag to compelete the puzzle",
          "puzzle-verify-success-info":
            "${time}s. Bạn đã đánh bại ${ratio} người dùng",
          "puzzle-verify-fail-info": "Bấm vào làm mới để thử lại",
          "click-question-info": "Vui lòng chọn tất cả các ảnh nội dung sau",
          "click-question-info-2":
            "Nếu không có hình ảnh mới, vui lòng nhấn vào “Hãy gửi”",
          "click-question-info-short": "Vui lòng chọn tất cả các ảnh có",
          "click-question-info-short-2": "",
          "drag-question-info": "Vui lòng kéo tất cả",
          "drag-question-info-2": "vào giỏ hàng",
          "drag-question-info-3": "và nhấn vào “Hãy gửi”",
          "connect-question-info": "Vui lòng kết nối theo thứ tự",
          submit: "Hãy gửi",
        },
        "in-ID": t(
          t(
            {
              title: "Mohon ikuti petunjuk untuk proses verifikasi",
              "question-info": "<img src='${question}'/>",
              "question-loading": "Memuat kode verifikasi, harap tunggu",
              "question-wait": "Mohon tunggu lalu tekan tombol memuat ulang",
              "slider-loading": "Memuat kode verifikasi",
              "question-error":
                "Gagal memuat, silahkan tekan tombol memuat ulang",
              "slider-error": "Jaringan bermasalah",
              "slider-wait": "Gerakan terlalu cepat, harap coba kembali",
              "slider-info": "Silakan ikuti petunjuk untuk menggeser",
              "verify-success": "Verifikasi berhasil",
              "other-punish": "Verifikasi gagal, harap coba kembali",
              "verify-timeout": "Sesi sudah berakhir, harap coba kembali",
              "verify-fast": "Gerakan terlalu cepat, harap coba kembali",
              "verify-deny": "Verifikasi gagal, harap coba kembali",
              "verify-wait": "Gerakan terlalu cepat, harap coba kembali",
              "secdata-timeout": "Silahkan tekan tombol memuat ulang",
              "verify-fail": "Posisi geser tidak tepat, harap coba kembali",
              "verify-error": "Kesalahan system, harap coba kembali",
            },
            R
          ),
          {
            "puzzle-verify-success-info":
              "${time}s. Anda mengalahkan ${ratio} pengguna",
            "puzzle-verify-fail-info": "Klik segarkan untuk mencoba lagi",
          }
        ),
        "ms-MY": t(
          t(
            {
              title: "Sayang, sila ikut arahan untuk mengesahkan",
              "question-info": "<img src='${question}'/>",
              "question-loading":
                "Memuatkan maklumat kod pengesahan, sila tunggu",
              "question-wait": "Sila tunggu sebentar dan klik muat semula",
              "slider-loading": "Memuatkan maklumat kod pengesahan",
              "question-error":
                "Gagal memuatkan, sila klik butang muat semula untuk mencuba lagi",
              "slider-error": "anomali rangkaian",
              "slider-wait": "Operasi terlalu kerap, sila cuba sebentar lagi",
              "slider-info": "Sila ikut arahan untuk menyeret peluncur",
              "verify-success": "Pengesahan lulus",
              "other-punish": "Pengesahan gagal, sila cuba lagi",
              "verify-timeout": "Saya menunggu terlalu lama, sila cuba lagi",
              "verify-fast": "Operasi anda terlalu pantas, sila cuba lagi",
              "verify-deny": "Pengesahan gagal, sila cuba lagi",
              "verify-wait": "Operasi terlalu kerap, sila cuba sebentar lagi",
              "secdata-timeout":
                "Hei, saya telah menunggu terlalu lama, sila muat semula halaman dan cuba lagi",
              "verify-fail": "Kedudukan gelongsor adalah salah, sila cuba lagi",
              "verify-error": "Pengecualian sistem, sila cuba lagi",
            },
            R
          ),
          {
            "puzzle-verify-success-info":
              "${time}s. Anda mengalahkan ${ratio} pengguna",
            "puzzle-verify-fail-info": "Klik muat semula untuk mencuba lagi",
          }
        ),
        "th-TH": t(
          t(
            {
              title: "เรียน โปรดทำตามคำแนะนำเพื่อตรวจสอบ",
              "question-info": "<img src='${question}'/>",
              "question-loading": "กำลังโหลดข้อมูลรหัสยืนยัน โปรดรอสักครู่",
              "question-wait": "โปรดรอสักครู่แล้วคลิกรีเฟรชอีกครั้ง",
              "slider-loading": "กำลังโหลดข้อมูลรหัสยืนยัน",
              "question-error":
                "การโหลดล้มเหลว โปรดคลิกปุ่มรีเฟรชเพื่อลองอีกครั้ง",
              "slider-error": "ความผิดปกติของเครือข่าย",
              "slider-wait": "การดำเนินการบ่อยเกินไป โปรดลองอีกครั้งในภายหลัง",
              "slider-info": "โปรดทำตามคำแนะนำเพื่อลากแถบเลื่อน",
              "verify-success": "ผ่านการตรวจสอบแล้ว",
              "other-punish": "การยืนยันล้มเหลว โปรดลองอีกครั้ง",
              "verify-timeout": "ฉันรอนานเกินไป โปรดลองอีกครั้ง",
              "verify-fast": "การดำเนินการของคุณเร็วเกินไป โปรดลองอีกครั้ง",
              "verify-deny": "การยืนยันล้มเหลว โปรดลองอีกครั้ง",
              "verify-wait": "การดำเนินการบ่อยเกินไป โปรดลองอีกครั้งในภายหลัง",
              "secdata-timeout":
                "สวัสดี ฉันรอนานเกินไป โปรดรีเฟรชหน้านี้แล้วลองอีกครั้ง",
              "verify-fail": "ตำแหน่งการเลื่อนไม่ถูกต้อง โปรดลองอีกครั้ง",
              "verify-error": "ข้อยกเว้นของระบบ โปรดลองอีกครั้ง",
            },
            R
          ),
          {
            "puzzle-question-info": "ลากแถบเลื่อนด้านล่างเพื่อทำให้ภาพสมบูรณ์",
            "puzzle-slider-info":
              "ลากแถบเลื่อนไปทางด้านซ้ายเพื่อทำให้ภาพข้างบนสมบูรณ์",
            "puzzle-verify-success-info":
              "${time} s. คุณเอาชนะผู้ใช้ได้ ${ratio}",
            "puzzle-verify-fail-info": "รีเฟรชด้านบนขวาเพื่อลองอีกครั้ง",
          }
        ),
        "fil-PH": t(
          t(
            {
              title:
                "Mahal, mangyaring sundin ang mga tagubilin upang i-verify",
              "question-info": "<img src='${question}'/>",
              "question-loading":
                "Nilo-load ang impormasyon ng verification code, mangyaring maghintay",
              "question-wait":
                "Mangyaring maghintay ng ilang sandali at i-click muli ang i-refresh",
              "slider-loading":
                "Nilo-load ang impormasyon ng verification code",
              "question-error":
                "Nabigo ang pag-load, mangyaring i-click ang refresh button upang subukang muli",
              "slider-error": "Anomalya sa network",
              "slider-wait":
                "Masyadong madalas ang operasyon, pakisubukang muli sa ibang pagkakataon",
              "slider-info":
                "Mangyaring sundin ang mga tagubilin upang i-drag ang slider",
              "verify-success": "Lumipas ang pag-verify",
              "other-punish": "Nabigo ang pag-verify, pakisubukang muli",
              "verify-timeout":
                "Naghintay ako ng napakatagal, pakisubukang muli",
              "verify-fast":
                "Masyadong mabilis ang iyong operasyon, pakisubukang muli",
              "verify-deny": "Nabigo ang pag-verify, pakisubukang muli",
              "verify-wait":
                "Masyadong madalas ang operasyon, pakisubukang muli sa ibang pagkakataon",
              "secdata-timeout":
                "Uy, naghintay ako ng napakatagal, paki-refresh ang page at subukang muli",
              "verify-fail": "Mali ang sliding position, pakisubukang muli",
              "verify-error": "System exception, pakisubukang muli",
            },
            R
          ),
          {
            "puzzle-verify-success-info": "Tinalo mo ang ${ratio} ng mga user",
            "puzzle-verify-fail-info":
              "I-click ang i-refresh upang subukang muli",
          }
        ),
        "ru-RU": {
          title: "Нужно убедиться, что вы не робот",
          "question-info": "<img src='${question}'/>",
          "question-loading":
            "Загрузка информации о коде подтверждения, пожалуйста, подождите",
          "question-wait":
            "Пожалуйста, подождите немного и снова нажмите «Обновить».",
          "slider-loading": "Загрузка информации о коде подтверждения",
          "question-error":
            "Загрузка не удалась, нажмите кнопку обновления, чтобы повторить попытку.",
          "slider-error": "Сетевая аномалия",
          "slider-wait":
            "Операции выполняются слишком часто, повторите попытку позже.",
          "slider-info":
            "Пожалуйста, следуйте инструкциям, чтобы перетащить ползунок",
          "verify-success": "Проверка пройдена",
          "other-punish": "Проверка не удалась. Пожалуйста, попробуйте еще раз",
          "verify-timeout":
            "Время ожидания истекло. Пожалуйста, попробуйте еще раз",
          "verify-fast": "Слишком быстро двигаете ползунок, попробуйте еще раз",
          "verify-deny": "Проверка не удалась. Пожалуйста, попробуйте еще раз",
          "verify-wait":
            "Операции выполняются слишком часто, повторите попытку позже.",
          "secdata-timeout":
            "Время ожидания истекло, обновите страницу и повторите попытку.",
          "verify-fail": "Неверное положение ползунка, попробуйте еще раз",
          "verify-error": "Ошибка системы, попробуйте еще раз",
          "puzzle-question-info":
            "Переместите слайдером деталь, чтобы сложить пазл",
          "puzzle-slider-info": "Перетащите ползунок, чтобы пазл совпал",
          "puzzle-verify-success": "Проверка пройдена",
          "puzzle-other-punish":
            "Проверка не удалась. Пожалуйста, попробуйте еще раз",
          "puzzle-verify-timeout":
            "Я ждал слишком долго, пожалуйста, попробуйте еще раз",
          "puzzle-verify-fast":
            "Ваша операция выполняется слишком быстро, попробуйте еще раз",
          "puzzle-verify-deny":
            "Проверка не удалась. Пожалуйста, попробуйте еще раз",
          "puzzle-verify-wait":
            "Операции выполняются слишком часто, повторите попытку позже.",
          "puzzle-secdata-timeout":
            "Эй, я слишком долго ждал, обновите страницу и повторите попытку.",
          "puzzle-verify-fail": "Проверка не пройдена. Паззл не совпал",
          "puzzle-verify-error": "Системное исключение, попробуйте еще раз",
          "puzzle-verify-success-info":
            "${time} s. вы превзошли ${ratio} пользователей",
          "puzzle-verify-fail-info":
            "Чтобы повторить попытку, обновите справа вверху",
          "click-question-info":
            "Пожалуйста, выберите все изображения, которые включают следующее содержимое",
          "click-question-info-2":
            "Если новых изображений нет, нажмите “Отправить”",
          "click-question-info-short":
            "Пожалуйста, выберите все изображения, содержащие",
          "click-question-info-short-2": "",
          "drag-question-info": "Перетащите все",
          "drag-question-info-2": "в корзину",
          "drag-question-info-3": " и нажмите ”Отправить“",
          "connect-question-info": "Пожалуйста, подключитесь по порядку",
          submit: "Отправить",
        },
        "es-ES": t(
          t(
            {
              title:
                "Estimado, por favor siga las instrucciones para verificar",
              "question-info": "<img src='${question}'/>",
              "question-loading":
                "Cargando información del código de verificación, por favor espere",
              "question-wait":
                "Espere un momento y haga clic en Actualizar de nuevo.",
              "slider-loading":
                "Cargando información del código de verificación",
              "question-error":
                "Error al cargar, haga clic en el botón Actualizar para volver a intentarlo",
              "slider-error": "anomalía de la red",
              "slider-wait":
                "La operación es demasiado frecuente, inténtelo de nuevo más tarde",
              "slider-info":
                "Siga las instrucciones para arrastrar el control deslizante.",
              "verify-success": "Verificación superada",
              "other-punish":
                "Verificación fallida. Por favor intenta de nuevo",
              "verify-timeout": "Esperé demasiado, inténtalo de nuevo",
              "verify-fast":
                "Su operación es demasiado rápida, inténtelo de nuevo",
              "verify-deny": "Verificación fallida. Por favor intenta de nuevo",
              "verify-wait":
                "La operación es demasiado frecuente, inténtelo de nuevo más tarde",
              "secdata-timeout":
                "Oye, he esperado demasiado, actualiza la página e inténtalo de nuevo.",
              "verify-fail":
                "La posición de deslizamiento es incorrecta, intente nuevamente",
              "verify-error": "Excepción del sistema, inténtalo de nuevo",
            },
            R
          ),
          {
            "puzzle-question-info":
              "Arrastra el deslizador de abajo para completar el puzzle",
            "puzzle-slider-info":
              "Arrastra el control deslizante de la izquierda para completar el puzzle anterior",
            "puzzle-verify-success-info": "Has superado a ${ratio} de usuarios",
            "puzzle-verify-fail-info":
              "Haga clic en actualizar para intentarlo de nuevo",
          }
        ),
        "ur-PK": t(
          t(
            {
              title: " عزیز، تصدیق کرنے کے لیے ہدایات پر عمل کریں۔",
              "question-info": "<img src='${question}'/>",
              "question-loading": "لوڈ ہو رہا ہے انتظار کرے",
              "question-wait":
                "براہ کرم تھوڑا انتظار کریں اور دوبارہ ریفریش کریں",
              "slider-loading": "لوڈ ہو رہا ہے",
              "question-error": "لوڈنگ ناکام، براہ کرم دوبارہ ریفریش کریں",
              "slider-error": "نیٹ ورک کی خرابی",
              "slider-wait":
                "آپریشن بہت تیز ہے، براہ کرم بعد میں دوبارہ کوشش کریں",
              "slider-info": "براہ کرم سلائیڈر کو ہدایت کے مطابق کھینچیں",
              "verify-success": "تصدیق پاس ہوگئی",
              "other-punish": "تصدیق ناکام ہوگئی، براہ کرم دوبارہ کوشش کریں",
              "verify-timeout":
                "میں نے کافی دیر تک انتظار کیا، براہ کرم دوبارہ کوشش کریں",
              "verify-fast":
                "آپ بہت تیزی سے سلائیڈ کر رہے ہیں، براہ کرم دوبارہ کوشش کریں",
              "verify-deny": "تصدیق ناکام ہوگئی، براہ کرم دوبارہ کوشش کریں",
              "verify-wait":
                "آپریشن بہت تیز ہے، براہ کرم بعد میں دوبارہ کوشش کریں",
              "secdata-timeout":
                "میں نے کافی دیر تک انتظار کیا، براہ کرم صفحہ ریفریش کریں",
              "verify-fail": "پوزیشن غلط ہے، براہ کرم دوبارہ کوشش کریں",
              "verify-error": "سسٹم کی خرابی، براہ کرم دوبارہ کوشش کریں",
            },
            R
          ),
          {
            "puzzle-verify-success-info": "${ratio} سے زیادہ صارفین",
            "puzzle-verify-fail-info":
              "دوبارہ کوشش کرنے کے لیے ریفریش پر کلک کریں۔",
          }
        ),
        "bn-BD": t(
          t(
            {
              title:
                "প্রিয় গ্রাহক, তথ্য যাচাই করার জন্য নির্দেশাবলী অনুসরণ করুন ",
              "question-info": "<img src='${question}'/>",
              "question-loading": "লোডিং হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন",
              "question-wait": "কিছু সময় অপেক্ষা করে রিফ্রেশ করুন",
              "slider-loading": "লোডিং হচ্ছে",
              "question-error": "লোডিং ব্যর্থ, অনুগ্রহ করে রিলোড করুন",
              "slider-error": "নেটওয়ার্ক ত্রুটি",
              "slider-wait":
                "অপারেশন খুব দ্রুত হয়েছে, অনুগ্রহ করে কিছু সময় পরে আবার চেষ্টা করুন",
              "slider-info":
                "অনুগ্রহপূর্বক নির্দেশনা অনুযায়ী স্লাইডারটি টানুন",
              "verify-success": "ভেরিফিকেশন সফল হয়েছে",
              "other-punish":
                "ভেরিফিকেশন ব্যর্থ হয়েছে, অনুগ্রহ করে আবার চেষ্টা করুন",
              "verify-timeout":
                "আমি অনেক সময় অপেক্ষা করেছি, অনুগ্রহ করে আবার চেষ্টা করুন",
              "verify-fast":
                "আপনি অনেক দ্রুত স্লাইড করেছেন, অনুগ্রহ করে আবার চেষ্টা করুন",
              "verify-deny":
                "ভেরিফিকেশন ব্যর্থ হয়েছে, অনুগ্রহ করে আবার চেষ্টা করুন",
              "verify-wait":
                "অপারেশন খুব দ্রুত হয়েছে, অনুগ্রহ করে কিছু সময় পরে আবার চেষ্টা করুন",
              "secdata-timeout":
                "আমি অনেক সময় অপেক্ষা করেছি, অনুগ্রহ করে পেইজ রিফ্রেশ করুন",
              "verify-fail":
                "অবস্থানটি ভুল হয়েছে, অনুগ্রহ করে আবার চেষ্টা করুন",
              "verify-error": "সিস্টেমে ত্রুটি, অনুগ্রহ করে আবার চেষ্টা করুন",
            },
            R
          ),
          {
            "puzzle-verify-success-info":
              "${time} s.  আপনি ব্যবহারকারীদের ${ratio} কে হারান।",
            "puzzle-verify-fail-info": "আবার চেষ্টা করতে রিফ্রেশ ক্লিক করুন",
          }
        ),
        "my-MM": t(
          t(
            {
              title:
                "လေးစားအပ်ပါသော သုံးစွဲသူ၊ အချက်အလက်ကို အတည်ပြုရန် ညွှန်ကြားချက်များကို လိုက်နာပါ။",
              "question-info": "<img src='${question}'/>",
              "question-loading": "တင်နေသည်၊ ခဏစောင့်ပါ။",
              "question-wait": "ခဏစောင့်ပြီး ပြန်စပါ။",
              "slider-loading": "တင်နေသည်",
              "question-error":
                "ဒေါင်းလုဒ်လုပ်ခြင်း မအောင်မြင်ပါ၊ ကျေးဇူးပြု၍ ပြန်စပါ။",
              "slider-error": "ကွန်ရက် အမှားအယွင်း",
              "slider-wait":
                "လုပ်ဆောင်ချက် မြန်ဆန်လွန်းသည်၊ ကျေးဇူးပြု၍ နောက်မှ ထပ်ကြိုးစားပါ။",
              "slider-info": "ညွှန်ကြားချက်အတိုင်း ဆလိုက်ဒါကို ဆွဲယူပါ။",
              "verify-success": "အတည်ပြုမှုအောင်မြင်ပါသည်",
              "other-punish":
                "အတည်ပြုမှုမအောင်မြင်ပါ, ကျေးဇူးပြု၍ ပြန်လည်ကြိုးစားကြည့်ပါ။",
              "verify-timeout": "စောင့်ချိန် အလွန်ကြာပါပြီ၊ ထပ်စမ်းကြည့်ပါ။",
              "verify-fast":
                "သင်ဆလိုက်ဒါဆွဲတာအလွန်မြန်လွန်သည်၊ ထပ်မံကြိုးစားကြည့်ပါ။",
              "verify-deny":
                "အတည်ပြုမှုမအောင်မြင်ပါ, ကျေးဇူးပြု၍ ပြန်လည်ကြိုးစားကြည့်ပါ။",
              "verify-wait":
                "လုပ်ဆောင်ချက် မြန်ဆန်လွန်းသည်၊ ကျေးဇူးပြု၍ နောက်မှ ထပ်ကြိုးစားပါ။",
              "secdata-timeout": "စောင့်ချိန် အလွန်ကြာပါပြီ၊ ထပ်စမ်းကြည့်ပါ။",
              "verify-fail": "နေရာမှားယွင်းနေသည်၊ ထပ်မံကြိုးစားကြည့်ပေးပါ။",
              "verify-error": "စနစ်အမှားဖြစ်နေသည်၊ ထပ်စမ်းကြည့်ပါ။",
            },
            R
          ),
          {
            "puzzle-verify-success-info":
              "${time} s. သင်သည် သုံးစွဲသူများ၏ ${ratio} ကို အနိုင်ယူခဲ့သည်။",
            "puzzle-verify-fail-info": "ထပ်စမ်းကြည့်ရန် refresh ကိုနှိပ်ပါ။",
          }
        ),
        "ne-NP": t(
          t(
            {
              title:
                "आदरणीय, कृपया भेरिफाई गर्नको लागि दिईएको निर्देशनहरू पालना गर्नुहोस्। ",
              "question-info": "<img src='${question}'/>",
              "question-loading": "लोड हुँदै छ, कृपया प्रतीक्षा गर्नुहोस्।",
              "question-wait":
                "कृपया केहि क्षण पर्खनुहोस् र फेरि रिफ्रेस गर्नुहोस्। ",
              "slider-loading": "लोडिंग",
              "question-error": "लोड गर्न सकिएन, कृपया फेरि रिफ्रेस गर्नुहोस्",
              "slider-error": "नेटवर्कमा समस्या ",
              "slider-wait":
                "एप धेरै छिटो चलाउनु भयो , कृपया पछि फेरि प्रयास गर्नुहोस्।",
              "slider-info": "कृपया निर्देशन अनुसार स्लाइडर तान्नुहोस्।",
              "verify-success": "भेरिफिकेसन पूरा भयो। ",
              "other-punish":
                "भेरिफिकेसन असफल भयो, कृपया फेरि प्रयास गर्नुहोस्।",
              "verify-timeout":
                "मैले धेरै समय प्रतीक्षा गरें, कृपया फेरि प्रयास गर्नुहोस्",
              "verify-fast":
                "तपाईंले धेरै छिटो स्लाइड गर्नुभयो, कृपया फेरि प्रयास गर्नुहोस्",
              "verify-deny":
                "भेरिफिकेसन असफल भयो, कृपया फेरि प्रयास गर्नुहोस्।",
              "verify-wait":
                "एप धेरै छिटो चलाउनु भयो , कृपया पछि फेरि प्रयास गर्नुहोस्।",
              "secdata-timeout":
                "मैले धेरै समय प्रतीक्षा गरें, कृपया पेज रिफ्रेस गर्नुहोस्।",
              "verify-fail": "पोजिसन गलत छ, कृपया फेरि प्रयास गर्नुहोस्।",
              "verify-error": "सिस्टममा समस्या, कृपया फेरि प्रयास गर्नुहोस्।",
            },
            R
          ),
          {
            "puzzle-verify-success-info":
              "${time} s. तपाईंले ${ratio} प्रयोगकर्ताहरूलाई हराउनुभयो।",
            "puzzle-verify-fail-info":
              "पुन: प्रयास गर्न रिफ्रेस क्लिक गर्नुहोस्",
          }
        ),
        si: t(
          t(
            {
              title: "හිතවත්, තහවුරු කිරීමට කරුණාකර මෙම උපදෙස් අනුගමනය කරන්න",
              "question-info": "<img src='${question}'/>",
              "question-loading": "පූරණය වෙමින් පවතී, කරුණාකර රැඳී සිටින්න",
              "question-wait": "කරුණාකර මොහොතක් රැඳී සිට නැවත උත්සහ කරන්න",
              "slider-loading": "පුරණය වෙමින් පවතී ",
              "question-error": "පූරණය අසාර්ථක විය, කරුණාකර නැවත උත්සහ කරන්න",
              "slider-error": "අන්තර්ජාල දෝෂයකි ",
              "slider-wait": "මෙහෙයුම වේගවත් වැඩියි, කරුණාකර නැවත උත්සාහ කරන්න",
              "slider-info": "කරුණාකර උපදෙස් අනුව ස්ලයිඩරය හසුරුවන්න",
              "verify-success": "තහවුරු කිරීම සම්පුර්ණයි ",
              "other-punish":
                "තහවුරු කිරීම අසාර්ථක විය, කරුණාකර නැවත උත්සාහ කරන්න",
              "verify-timeout":
                "මම බොහෝ වේලාවක් බලා සිටියෙමි, කරුණාකර නැවත උත්සාහ කරන්න",
              "verify-fast":
                "ඔබ ස්ලයිඩරය වේගයෙන් හසුරවා ඇත, කරුණාකර නැවත උත්සාහ කරන්න",
              "verify-deny":
                "තහවුරු කිරීම අසාර්ථක විය, කරුණාකර නැවත උත්සාහ කරන්න",
              "verify-wait": "මෙහෙයුම වේගවත් වැඩියි, කරුණාකර නැවත උත්සාහ කරන්න",
              "secdata-timeout":
                "මම බොහෝ වේලාවක් බලා සිටියෙමි, කරුණාකර පිටුව යාවත්කාලීන කරන්න",
              "verify-fail": "ස්ථානය වැරදියි, කරුණාකර නැවත උත්සාහ කරන්න",
              "verify-error": "පද්ධතියේ දෝෂයකි කරුණාකර නැවත උත්සාහ කරන්න ",
            },
            R
          ),
          {
            "puzzle-verify-success-info":
              "${time} s. ඔබ පරිශීලකයින්ගෙන් ${ratio} අභිබවා ඇත",
            "puzzle-verify-fail-info": "නැවත උත්සාහ කිරීමට නැවුම් ක්ලික් කරන්න",
          }
        ),
        "kk-KZ": {
          title: "Түсініктеме бойынша көрсетілгендей нұсқауларды орындаңыз.",
          "question-info": "<img src='${question}'/>",
          "question-loading": "Код нұсқасын жуктеұ үстынде , біраз күтіңіз.",
          "question-wait": "Біраз турып жаңарту кнопкасын қайта басыңыз.",
          "slider-loading": "Код нұсқасын жүктеп жатыр.",
          "question-error":
            "Жүктеу орындалмады. Жаңарту кнопкасын басып, қайтадан сынауға уақыт алады.",
          "slider-error": "Интернет қателігі.",
          "slider-wait":
            "Операция тым жиі жасалануда, кейінірек қайталап көріңіз.",
          "slider-info": "Жүгірткіні сүйреу үшін нұсқауларды орындаңыз",
          "verify-success": "Растау сәтті өтті!",
          "other-punish": "Тексеру сәтсіз аяқталды, әрекетті қайталаңыз.",
          "verify-timeout": "Мен тым көп күттім, қайталап көріңіз",
          "verify-fast":
            "Сіздің операцияңыз тым жылдам болды, қайталап көріңіз",
          "verify-deny": "Тексеру сәтсіз аяқталды, әрекетті қайталаңыз.",
          "verify-wait":
            "Операция тым жиі жасалануда, кейінірек қайталап көріңіз.",
          "secdata-timeout":
            "Ой, мен тым көп күттім, бетті жаңартып, әрекетті қайталаңыз.",
          "verify-fail": "Сырғыту орны дұрыс емес, әрекетті қайталаңыз",
          "verify-error": "Жүйе ақаулығы, әрекетті қайталаңыз",
          "puzzle-question-info": "Slide to complete the puzzle",
          "puzzle-slider-info": "Drag to compelete the puzzle",
          "puzzle-verify-success-info":
            "${time} секундта ${ratio} жылдамдығынан жылдамырақ пайдаланушылар",
          "puzzle-verify-fail-info":
            "Сұрақтың жаңартылуын күтіп, әрекетті қайталаңыз.",
          "click-question-info":
            "Келесі мазмұнды қамтитын барлық кескіндерді таңдаңыз.",
          "click-question-info-2":
            "Жаңа кескіндер болмаса, «Жіберу» түймесін басыңыз.",
          "click-question-info-short": "",
          "click-question-info-short-2": "бар барлық кескіндерді таңдаңыз.",
          "drag-question-info": "Барлық",
          "drag-question-info-2": "себетіне апарып",
          "drag-question-info-3": "Жіберу түймесін басыңыз.",
          "connect-question-info": "Кезекті түрде жалғастырыңыз",
          submit: "Жіберу",
        },
      },
      O = function (c) {
        ["puzzle", "click", "drag", "connect"].forEach(function (a) {
          ("ru-RU" === c && "puzzle" === a) ||
            ((P[c][a + "-verify-success"] = P[c]["verify-success"]),
            (P[c][a + "-other-punish"] = P[c]["other-punish"]),
            (P[c][a + "-verify-timeout"] = P[c]["verify-timeout"]),
            (P[c][a + "-verify-fast"] = P[c]["verify-fast"]),
            (P[c][a + "-verify-deny"] = P[c]["verify-deny"]),
            (P[c][a + "-verify-wait"] = P[c]["verify-wait"]),
            (P[c][a + "-secdata-timeout"] = P[c]["secdata-timeout"]),
            (P[c][a + "-verify-fail"] = P[c]["other-punish"]),
            (P[c][a + "-verify-error"] = P[c]["verify-error"]),
            "zh-CN" === c
              ? (P[c][a + "-verify-fail"] =
                  "puzzle" === a ? "没有移到对应位置哦!" : "选错了呦!")
              : "en-US" === c
              ? (P[c][a + "-verify-fail"] =
                  "puzzle" === a
                    ? "Not move to the right position!"
                    : "Wrong choice!")
              : "kk-KZ" === c &&
                (P[c][a + "-verify-fail"] =
                  "puzzle" === a
                    ? "Not move to the right position!"
                    : "Қате тандау!"));
        });
      },
      M = 0,
      N = Object.keys(P);
    N.length > M;
    M++
  ) {
    O(N[M]);
  }
  (P.zh = P["zh-CN"]),
    (P["zh-cn"] = P["zh-CN"]),
    (P.zh_CN = P["zh-CN"]),
    (P.cn = P["zh-CN"]),
    (P.tw = P["zh-TW"]),
    (P.en_US = P["en-US"]),
    (P.en = P["en-US"]),
    (P.vi_VN = P["vi-VN"]),
    (P.vi = P["vi-VN"]),
    (P.in_ID = P["in-ID"]),
    (P["id-ID"] = P["in-ID"]),
    (P.id_ID = P["in-ID"]),
    (P.id = P["in-ID"]),
    (P.ms_MY = P["ms-MY"]),
    (P.ms = P["ms-MY"]),
    (P.th_TH = P["th-TH"]),
    (P.th = P["th-TH"]),
    (P.fil_PH = P["fil-PH"]),
    (P.fil = P["fil-PH"]),
    (P.ph = P["fil-PH"]),
    (P.ru_RU = P["ru-RU"]),
    (P.ru = P["ru-RU"]),
    (P.es_ES = P["es-ES"]),
    (P.es = P["es-ES"]),
    (P.ur_PK = P["ur-PK"]),
    (P.ur = P["ur-PK"]),
    (P.bn_BD = P["bn-BD"]),
    (P.bn = P["bn-BD"]),
    (P.my_MM = P["my-MM"]),
    (P.my = P["my-MM"]),
    (P.ne_NP = P["ne-NP"]),
    (P.ne = P["ne-NP"]),
    (P.kk_KZ = P["kk-KZ"]),
    (P.kk = P["kk-KZ"]);
  var B,
    Q,
    H,
    Y = (function () {
      function c(c) {
        var a = this;
        if (
          ((this.resize = function () {
            if (-1 >= location.href.indexOf("bxresize=true")) {
              var c = a.options,
                t = c.type,
                e = c.isCapGrid,
                i = c.isTaobaoApp;
              e &&
                f.isMobile() &&
                window.innerWidth > 375 &&
                setTimeout(function () {
                  document.documentElement.style.fontSize = "37.5px";
                }, 1e3);
              var o = window.innerWidth - 52;
              if (e) {
                var r = "connect" === n[t] ? 525 : 599;
                o =
                  window.innerHeight > r
                    ? Math.min(window.innerWidth, a.options.width)
                    : 375 / r < window.innerWidth / window.innerHeight
                    ? ((window.innerHeight -
                        (window.innerHeight > 356 ? 56 : 0)) /
                        (window.innerHeight > 356 ? r - 56 : 500)) *
                      375
                    : Math.min(window.innerWidth, a.options.width);
              }
              if (
                (e ? (i ? 344 : 375) : 320) > o ||
                a.options.width !== (e ? (i ? 344 : 375) : 320)
              )
                if (e) window.location.reload();
                else {
                  var p = n[t] || "scratch";
                  a.options.width = Math.min(
                    o,
                    a.options.isCapGrid ? 375 : 320
                  );
                  var h = a.options.width / (a.options.isCapGrid ? 375 : 320);
                  (document.querySelector(
                    "." + p + "-captcha-container"
                  ).style.width = a.options.width + "px"),
                    ("scratch" !== p && "puzzle" !== p) ||
                      (a.question.bg.style.height = 180 * h + "px"),
                    "scratch" === p &&
                      ((a.question.icon.style.width = 134 * h + "px"),
                      (a.question.icon.style.height = 76 * h + "px")),
                    (a.result.content.style.top = 57 * h + "px"),
                    (a.result.info.style.height = 26 * h + "px"),
                    (a.result.info.style.lineHeight = 26 * h + "px"),
                    (a.result.icon.style.width = 41 * h + "px"),
                    (a.result.icon.style.height = 41 * h + "px");
                  var s = 24 * h;
                  (a.slider.container.style.height = s + "px"),
                    (a.slider.label.style.lineHeight = s + "px"),
                    (a.slider.slideButton.style.top = -5 * h + "px"),
                    (a.slider.slideButton.style.height = 34 * h + "px"),
                    (a.slider.slideButton.style.lineHeight = 34 * h + "px"),
                    (a.slider.info.style.width = a.options.width - 96 + "px"),
                    f.animation(a.question.title, 0.9 * a.options.width),
                    f.animation(a.slider.label, a.options.width - 96);
                }
            }
          }),
          (this.getQuestionSuccess = function (c) {
            var t = p[a.options.color] || c.data.tag;
            !_[t] ||
              a.options.isCapGrid ||
              a.options.isTaobaoApp ||
              ((document.querySelector("html").style.backgroundImage = _[t]),
              (document.body.style.backgroundSize = "cover"),
              (document.body.style.backgroundColor = "transparent"),
              (document.body.style.backgroundImage =
                'url("' + x[Math.floor(6 * Math.random())] + '")'));
          }),
          (c.language =
            c.language ||
            (navigator.browserLanguage
              ? navigator.browserLanguage
              : navigator.language)),
          (c.languageConfig = t(
            t({}, P[c.language] || P["en-US"]),
            (c.languageConfigJson &&
              (c.languageConfigJson[c.language] ||
                c.languageConfigJson["en-US"])) ||
              {}
          )),
          c.isTaobaoApp && (c.showTitle = !1),
          c.isCapGrid && !c.isTaobaoApp)
        ) {
          window.innerHeight > 302 || (c.mini = !0);
          var e = "connect" === n[c.type] ? 525 : 599;
          window.innerHeight > e
            ? (c.width = Math.min(window.innerWidth, c.width))
            : ((c.width =
                375 / e < window.innerWidth / window.innerHeight
                  ? ((window.innerHeight -
                      (window.innerHeight > 356 ? 56 : 0)) /
                      (window.innerHeight > 356 ? e - 56 : 500)) *
                    375
                  : Math.min(window.innerWidth, c.width)),
              "click" === n[c.type] &&
                "ru_RU" === c.language &&
                (c.width = c.width - 8)),
            (c.showTitle = !1);
        } else
          c.isTaobaoApp ||
            (c.width = Math.min(
              window.innerWidth - (f.isAjax() && !f.isMobile() ? 60 : 30),
              c.width
            ));
        (this.options = c),
          (this.request = new U(c)),
          (this.question = new z(c)),
          "connect" === n[c.type] ||
          "click" === n[c.type] ||
          "drag" === n[c.type]
            ? ((this.grid = new L(c)),
              "connect" === n[c.type] && (this.canvas = new F(c, this)))
            : ("puzzle" === n[c.type] && (this.puzzle = new w(c)),
              (this.slider = f.isMobile() ? new I(c) : new D(c))),
          (this.result = new T(c));
      }
      return (
        (c.prototype.init = function () {
          var cThis = this,
            a = cThis.question,
            t = cThis.puzzle,
            e = cThis.result,
            i = cThis.slider,
            o = cThis.grid,
            r = cThis.canvas,
            p = cThis.request,
            h = cThis.options,
            s = "";
          e.init(),
            "connect" === n[h.type] ||
            "click" === n[h.type] ||
            "drag" === n[h.type]
              ? ((s = e.template),
                "connect" === n[h.type] && (r.init(), (s += r.template)),
                o.init(s))
              : ("puzzle" === n[h.type]
                  ? (t.init(), (s = t.template + e.template))
                  : (s = e.template),
                a.init(s),
                i.init()),
            p.init(),
            p.getQuestion(!0),
            this.startRenderCaptcha(),
            this.render(),
            this.bindDom(),
            this.bindEvent(),
            f.isLandscape() && f.landscapeFix(),
            !h.isCapGrid ||
              (!f.isMobile() && window.innerHeight > 356) ||
              h.isTaobaoApp ||
              ((document.querySelector("html").style.backgroundImage =
                "linear-gradient(180deg, #ddf2fd 0%, #ebf0ff 100%)"),
              (document.body.style.backgroundSize = "cover"),
              (document.body.style.backgroundImage =
                'url("' + x[Math.floor(6 * Math.random())] + '")'));
        }),
        (c.prototype.startRenderCaptcha = function () {
          f.randomUUID(null, "_$PL");
        }),
        (c.prototype.renderCaptchaSuccess = function () {
          f.randomUUID(null, "_$PM");
        }),
        (c.prototype.render = function () {
          var c = this;
          try {
            var a = this.options,
              t = a.type,
              e = a.initSuccess,
              i = a.token,
              o = a.appKey,
              r = a.ppFun;
            if (
              ((a.renderTo.innerHTML = (function (c, a) {
                var t = c.width,
                  e = c.showTitle,
                  i = c.languageConfig,
                  o = c.type,
                  r = c.isCapGrid,
                  p = c.isTaobaoApp,
                  s = n[o] || "scratch",
                  g = t + "px;";
                r && 356 >= window.innerHeight && (g = "100%");
                var l = "";
                return (
                  0 >
                    ["zh-cn", "zh-CN", "zh_cn", "zh_CN", "zh", "cn"].indexOf(
                      c.language
                    ) && (l = " en"),
                  (
                    "\n    " +
                    (e
                      ? '<div class="' +
                        s +
                        '-captcha-title">' +
                        i.title +
                        "</div>"
                      : "") +
                    "\n    " +
                    (p && !r
                      ? '<div class="' +
                        s +
                        '-captcha-question-header">\n            <div class="info" style="height: ' +
                        ("puzzle" === o ? 20 : 30) +
                        'px">\n                <div class="title">' +
                        ("puzzle" === o
                          ? i["question-loading"]
                          : '<canvas id="captcha-question"></canvas>') +
                        '</div>\n            </div>\n        </div><div class="' +
                        s +
                        '-captcha-container-bg" style="width:' +
                        (t + 24) +
                        'px">'
                      : "") +
                    "\n    " +
                    (p && r ? h(c) : "") +
                    '\n    <div class="' +
                    s +
                    "-captcha-container" +
                    l +
                    '" style="width:' +
                    (p ? t + "px" : g) +
                    '">\n        ' +
                    a +
                    "\n    </div>"
                  ).trim()
                );
              })(
                this.options,
                "connect" === n[t] || "click" === n[t] || "drag" === n[t]
                  ? this.grid.template
                  : "" + this.question.template + this.slider.template
              )),
              this.renderCaptchaSuccess(),
              e && e(),
              r)
            )
              var p = 0,
                s = setInterval(function () {
                  (window._config_.ppModule || 5 === ++p) &&
                    (clearInterval(s),
                    (s = null),
                    c.runPow(),
                    r(i, o, null, "1", "1", "", function () {
                      y.fire("ppSuccess");
                    }));
                }, 200);
          } catch (g) {
            f.log("界面渲染失败：" + g.message, "action", this.options.token);
          }
        }),
        (c.prototype.runPow = function () {
          f.randomUUID(null, "_$PN");
        }),
        (c.prototype.bindDom = function () {
          "connect" === n[this.options.type] ||
          "click" === n[this.options.type] ||
          "drag" === n[this.options.type]
            ? (this.grid.bindDom(),
              "connect" === n[this.options.type] && this.canvas.bindDom())
            : (this.question.bindDom(),
              "puzzle" === n[this.options.type] && this.puzzle.bindDom(),
              this.slider.bindDom()),
            this.result.bindDom(),
            f.randomUUID(null, "_$SB");
        }),
        (c.prototype.bindEvent = function () {
          this.request.bindEvent(),
            "connect" === n[this.options.type] ||
            "click" === n[this.options.type] ||
            "drag" === n[this.options.type]
              ? (this.grid.bindEvent(),
                "connect" === n[this.options.type] && this.canvas.bindEvent())
              : (this.question.bindEvent(),
                "puzzle" === this.options.type && this.puzzle.bindEvent(),
                this.slider.bindEvent()),
            this.result.bindEvent(),
            (f.isAjax() || (f.isMobile() && this.options.isCapGrid)) &&
              y.on("getQuestionSuccess", this.getQuestionSuccess),
            f.addEvent(window, "resize", this.resize),
            f.randomUUID(null, "_$SC");
        }),
        c
      );
    })(),
    V = {
      0: function (c) {
        return j(K(c).length);
      },
      5: function (c, a, t) {
        return j(K(c).addEventListener(K(a), K(t)));
      },
      8: function () {
        return Z(new Image());
      },
      9: function (c) {
        return j(K(c).width);
      },
      10: function (c) {
        return j(K(c).height);
      },
      11: function (c, a) {
        K(c).width = G(a);
      },
      12: function (c, a) {
        K(c).height = G(a);
      },
      13: function (c, a) {
        K(c).src = K(a);
      },
      14: function (c, a, t) {
        return Z(new ImageData(K(c), G(a), G(t)));
      },
      15: function (c) {
        return Z(K(c).data);
      },
      17: function (c, a, t, n, e) {
        return Z(K(c).getImageData(G(a), G(t), G(n), G(e)));
      },
      18: function (c, a, t, n) {
        return j(K(c).putImageData(K(a), G(t), G(n)));
      },
      19: function (c, a, t, n) {
        return j(K(c).drawImage(K(a), G(t), G(n)));
      },
      22: function (c, a) {
        return Z(K(c).getContext(K(a)));
      },
      24: function (c, a) {
        return Z(K(c).getElementById(K(a)));
      },
    },
    W = [undefined, null, !0, !1, 0, function () {}, self, self.document],
    X = W.length,
    G = function (c) {
      return c;
    },
    K = function (c) {
      return W[c];
    },
    j = function (c) {
      return c;
    },
    Z = function (c) {
      return (W[X] = c), X++;
    },
    J = [];
  var $ = {
    10001: function () {
      return (W[X] = void 0), X++;
    },
    10002: function (c) {
      W[c] = void 0;
    },
    10003: function (c, a) {
      W[c] = W[a];
    },
    10010: function (c, a) {
      return (W[X] = W[c][W[a]]), X++;
    },
    10011: function (c, a, t) {
      W[c][W[a]] = W[t];
    },
    10020: function (c) {
      return +!W[c];
    },
    10030: function (c) {
      return (W[X] = c), X++;
    },
    10031: function (c) {
      return +W[c];
    },
    10032: function (c, a) {
      W[c] = a;
    },
    10033: function (c) {
      return (W[X] = !!c), X++;
    },
    10034: function (c, a) {
      return W[c] === W[a];
    },
    10040: function (c, a) {
      for (var t = "", n = c; c + a > n; n++) t += String.fromCharCode(Q[n]);
      return (W[X] = t), X++;
    },
    10041: function () {
      for (var c = "", a = H; ; ) {
        var t = 34 ^ Q[a++];
        if (0 === t) break;
        c += String.fromCharCode(t);
      }
      return (W[X] = c), X++;
    },
    10050: function (c) {
      return (W[X] = J[c]), X++;
    },
    10051: function () {
      return J.length;
    },
    10060: function (c, a) {
      return (function (c, a) {
        for (var t = c.length, n = 0; t > n; n++) Q[a + n] = c.charCodeAt(n);
        return t;
      })(W[c], a);
    },
    10061: function (c, a, t, n) {
      var e = W[c],
        i = Q.subarray(t, t + n);
      e.set(i, a);
    },
    10062: function (c, a, t, n) {
      var e = W[c].subarray(a, a + t);
      Q.subarray(n, n + t).set(e);
    },
    10063: function (c, a) {
      return (W[X] = new Uint8ClampedArray(Q.buffer, c, a)), X++;
    },
    10070: function (c) {
      return (
        (W[X] = (function (c) {
          return function () {
            (J = arguments), (W[4] = this);
            var a = X,
              t = B(0, c, 0);
            return (X = a), t;
          };
        })(c)),
        X++
      );
    },
    20000: function (c) {
      console.log(W[c]);
    },
    20001: function (c, a) {
      console.log(W[c], W[a]);
    },
    20002: function (c, a, t) {
      console.log(W[c], W[a], W[t]);
    },
    30000: function () {},
  };
  for (var cc in V) $[cc] = V[cc];
  var ac = "a";
  function tc(c, a, t) {
    var n = new XMLHttpRequest();
    (n.onload = function () {
      a(n.response);
    }),
      (n.onerror = function () {
        t
          ? setTimeout(function () {
              tc(c, a, t - 1);
            }, 1e3)
          : a();
      }),
      n.open("GET", c),
      (n.responseType = "arraybuffer"),
      n.send();
  }
  var nc = "0.0.5",
    ec = "https://g.alicdn.com/secdev/sec-captcha";
  function ic(c) {
    tc(
      ec + "/" + nc + "/program-js.bin",
      function (a) {
        if (!a) return console.warn("failed to load js mod"), void c(!1);
        var t = new Uint8Array(a),
          n = (function (c, a) {
            if (c.indexOf) return c.indexOf(a);
            for (var t = 0, n = c.length; n > t; t++) if (c[t] === a) return t;
            return -1;
          })(t, 0);
        if (-1 === n) return console.warn("invalid js program"), void c(!1);
        var e,
          i = (function (c, a, t) {
            var n = window.TextDecoder;
            if (n) return new n().decode(c.subarray(a, t));
            for (var e = "", i = a; t > i; i++) e += String.fromCharCode(c[i]);
            return e;
          })(t, 0, n),
          o = t.subarray(n + 1);
        try {
          e = Function("return " + i)()(o, $);
        } catch (r) {
          return void console.warn(r);
        }
        (B = e[0]), (Q = e[1]), c(!0);
      },
      10
    );
  }
  var oc = [
    "INVALID_BASE64",
    "INVALID_IMAGE",
    "INVALID_VERSION",
    "CANVAS_NOT_FOUND",
  ];
  var rc,
    pc,
    hc,
    sc = {
      init: function (c) {
        !(function (c) {
          var a = !1,
            t = new Uint32Array([
              1836278016, 1, 1610679297, 33751040, 84148225, 33648641, 17040642,
              104873985, 25100550, 118161729, 1627456269, 1644232705,
              1661009922, 118030336, 21037057, 167772427, 196869, 268438273,
              1835101700, 17039717, 36765952, 259,
            ]);
          try {
            new WebAssembly.Module(t), (a = !0);
          } catch (N) {}
          a
            ? tc(
                ec + "/" + nc + "/program.wasm",
                function (a) {
                  if (!a)
                    return console.warn("failed to load wasm mod"), void c(!1);
                  WebAssembly.compile(a)
                    .then(function (c) {
                      var a;
                      return WebAssembly.instantiate(
                        c,
                        (((a = {})[ac] = $), a)
                      );
                    })
                    .then(function (a) {
                      var t = a.exports;
                      t._initialize(),
                        (Q = new Uint8Array(t.memory.buffer)),
                        (B = t[0]),
                        c(!0);
                    })
                    ["catch"](function (a) {
                      console.log(a), ic(c);
                    });
                },
                10
              )
            : ic(c);
        })(function (a) {
          if (a) {
            H = B(1);
            var t = W.length;
            B(2), (X = t);
          }
          c(a);
        });
      },
      setCdnPath: function (c) {
        ec = c;
      },
      updateInfo: function (c) {
        var a = document.__update_info(c);
        if (a > 0) throw Error(oc[a - 1] || "ERROR_UNKNOWN");
      },
      updatePos: function (c) {
        document.__update_pos(c);
      },
    },
    gc = {
      0: function (c) {
        return bc(qc(c).length);
      },
      5: function (c, a, t) {
        return bc(qc(c).addEventListener(qc(a), qc(t)));
      },
      8: function () {
        return kc(new Image());
      },
      9: function (c) {
        return bc(qc(c).width);
      },
      10: function (c) {
        return bc(qc(c).height);
      },
      11: function (c, a) {
        qc(c).width = uc(a);
      },
      12: function (c, a) {
        qc(c).height = uc(a);
      },
      13: function (c, a) {
        qc(c).src = qc(a);
      },
      14: function (c, a, t) {
        return kc(new ImageData(qc(c), uc(a), uc(t)));
      },
      15: function (c) {
        return kc(qc(c).data);
      },
      17: function (c, a, t, n, e) {
        return kc(qc(c).getImageData(uc(a), uc(t), uc(n), uc(e)));
      },
      18: function (c, a, t, n) {
        return bc(qc(c).putImageData(qc(a), uc(t), uc(n)));
      },
      19: function (c, a, t, n) {
        return bc(qc(c).drawImage(qc(a), uc(t), uc(n)));
      },
      22: function (c, a) {
        return kc(qc(c).getContext(qc(a)));
      },
      23: function (c, a) {
        return kc(qc(c).createElement(qc(a)));
      },
      27: function (c) {
        return bc(window.requestAnimationFrame(qc(c)));
      },
    },
    lc = [undefined, null, !0, !1, 0, function () {}, self, self.document],
    dc = lc.length,
    uc = function (c) {
      return c;
    },
    qc = function (c) {
      return lc[c];
    },
    bc = function (c) {
      return c;
    },
    kc = function (c) {
      return (lc[dc] = c), dc++;
    },
    fc = [];
  var mc = {
    10001: function () {
      return (lc[dc] = void 0), dc++;
    },
    10002: function (c) {
      lc[c] = void 0;
    },
    10003: function (c, a) {
      lc[c] = lc[a];
    },
    10010: function (c, a) {
      return (lc[dc] = lc[c][lc[a]]), dc++;
    },
    10011: function (c, a, t) {
      lc[c][lc[a]] = lc[t];
    },
    10020: function (c) {
      return +!lc[c];
    },
    10030: function (c) {
      return (lc[dc] = c), dc++;
    },
    10031: function (c) {
      return +lc[c];
    },
    10032: function (c, a) {
      lc[c] = a;
    },
    10033: function (c) {
      return (lc[dc] = !!c), dc++;
    },
    10034: function (c, a) {
      return lc[c] === lc[a];
    },
    10040: function (c, a) {
      for (var t = "", n = c; c + a > n; n++) t += String.fromCharCode(pc[n]);
      return (lc[dc] = t), dc++;
    },
    10041: function () {
      for (var c = "", a = hc; ; ) {
        var t = 34 ^ pc[a++];
        if (0 === t) break;
        c += String.fromCharCode(t);
      }
      return (lc[dc] = c), dc++;
    },
    10050: function (c) {
      return (lc[dc] = fc[c]), dc++;
    },
    10051: function () {
      return fc.length;
    },
    10060: function (c, a) {
      return (function (c, a) {
        for (var t = c.length, n = 0; t > n; n++) pc[a + n] = c.charCodeAt(n);
        return t;
      })(lc[c], a);
    },
    10061: function (c, a, t, n) {
      var e = lc[c],
        i = pc.subarray(t, t + n);
      e.set(i, a);
    },
    10062: function (c, a, t, n) {
      var e = lc[c].subarray(a, a + t);
      pc.subarray(n, n + t).set(e);
    },
    10063: function (c, a) {
      return (lc[dc] = new Uint8ClampedArray(pc.buffer, c, a)), dc++;
    },
    10070: function (c) {
      return (
        (lc[dc] = (function (c) {
          return function () {
            (fc = arguments), (lc[4] = this);
            var a = dc,
              t = rc(0, c, 0);
            return (dc = a), t;
          };
        })(c)),
        dc++
      );
    },
    20000: function (c) {
      console.log(lc[c]);
    },
    20001: function (c, a) {
      console.log(lc[c], lc[a]);
    },
    20002: function (c, a, t) {
      console.log(lc[c], lc[a], lc[t]);
    },
    30000: function () {},
  };
  for (var vc in gc) mc[vc] = gc[vc];
  var yc = "a";
  function zc(c, a, t) {
    var n = new XMLHttpRequest();
    (n.onload = function () {
      a(n.response);
    }),
      (n.onerror = function () {
        t
          ? setTimeout(function () {
              zc(c, a, t - 1);
            }, 1e3)
          : a();
      }),
      n.open("GET", c),
      (n.responseType = "arraybuffer"),
      n.send();
  }
  var wc = "0.0.20",
    xc = "https://g.alicdn.com/secdev/sec-captcha";
  function _c(c) {
    zc(
      xc + "/" + wc + "/program-js.bin",
      function (a) {
        if (!a) return console.warn("failed to load js mod"), void c(!1);
        var t = new Uint8Array(a),
          n = (function (c, a) {
            if (c.indexOf) return c.indexOf(a);
            for (var t = 0, n = c.length; n > t; t++) if (c[t] === a) return t;
            return -1;
          })(t, 0);
        if (-1 === n) return console.warn("invalid js program"), void c(!1);
        var e,
          i = (function (c, a, t) {
            var n = window.TextDecoder;
            if (n) return new n().decode(c.subarray(a, t));
            for (var e = "", i = a; t > i; i++) e += String.fromCharCode(c[i]);
            return e;
          })(t, 0, n),
          o = t.subarray(n + 1);
        try {
          e = Function("return " + i)()(o, mc);
        } catch (r) {
          return void console.warn(r);
        }
        (rc = e[0]), (pc = e[1]), c(!0);
      },
      10
    );
  }
  var Sc = [
      "INVALID_BASE64",
      "INVALID_IMAGE",
      "INVALID_VERSION",
      "CANVAS_NOT_FOUND",
    ],
    Cc = [];
  var Ec = {
    init: function (c) {
      !(function (c) {
        var a = !1,
          t = new Uint32Array([
            1836278016, 1, 1610679297, 33751040, 84148225, 33648641, 17040642,
            104873985, 25100550, 118161729, 1627456269, 1644232705, 1661009922,
            118030336, 21037057, 167772427, 196869, 268438273, 1835101700,
            17039717, 36765952, 259,
          ]);
        try {
          new WebAssembly.Module(t), (a = !0);
        } catch (N) {}
        a
          ? zc(
              xc + "/" + wc + "/program.wasm",
              function (a) {
                if (!a)
                  return console.warn("failed to load wasm mod"), void c(!1);
                WebAssembly.compile(a)
                  .then(function (c) {
                    var a;
                    return WebAssembly.instantiate(c, (((a = {})[yc] = mc), a));
                  })
                  .then(function (a) {
                    var t = a.exports;
                    t._initialize(),
                      (pc = new Uint8Array(t.memory.buffer)),
                      (rc = t[0]),
                      c(!0);
                  })
                  ["catch"](function (a) {
                    console.log(a), _c(c);
                  });
              },
              10
            )
          : _c(c);
      })(function (a) {
        if (a) {
          hc = rc(1);
          var t = lc.length;
          rc(2), (dc = t);
        }
        c(a);
      });
    },
    setCdnPath: function (c) {
      xc = c;
    },
    updateImg: function (c, a) {
      var t = Cc.indexOf(c);
      -1 === t &&
        (-1 === (t = Cc.indexOf(null)) && (t = Cc.length), (Cc[t] = c));
      var n = document.__update_img(t, c, a);
      if (n > 0) throw Error(Sc[n - 1] || "ERROR_UNKNOWN");
    },
    deleteImg: function (c) {
      var a = Cc.indexOf(c);
      -1 !== a && ((Cc[a] = null), document.__delete_img(a));
    },
    updatePos: function (c) {
      document.__update_pos(c);
    },
  };
  return (
    (Y.init = function (c) {
      try {
        if (
          ((i.width = c.isTaobaoApp
            ? c.isCapGrid
              ? Math.min(window.innerWidth, 344)
              : Math.min(window.innerWidth - 24, 320)
            : c.isCapGrid
            ? 375
            : 320),
          !(c = t(t({}, i), c)).renderTo)
        )
          return void f.log("初始化出错：未指定验证码渲染位置", 1, c.token);
        if ((f.log("i,c;v:0.0.51", 11, c.token), "puzzle" !== n[c.type])) {
          try {
            f.randomUUID(null, "_$SA"),
              (c.SecCaptcha = c.isCapGrid ? Ec : sc),
              c.SecCaptcha.init(function (a) {
                if (a) return new Y(c).init();
                f.log("混淆脚本加载失败", 13, c.token);
              });
          } catch (a) {
            f.log("混淆初始化异常：" + a.message, 13, c.token);
          }
          return;
        }
        return new Y(c).init();
      } catch (a) {
        f.log("初始化出错：" + a.message, 1, c.token);
      }
    }),
    Y
  );
})();
//# sourceMappingURL=index.js.map
