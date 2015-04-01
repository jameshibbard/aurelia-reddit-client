System.register(["aurelia-http-client"], function (_export) {
  var HttpClient, _createClass, _classCallCheck, Gifs;

  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Gifs = _export("Gifs", (function () {
        function Gifs(http) {
          _classCallCheck(this, Gifs);

          this.http = http;
          this.posts = [];
          this.subreddit_url = "http://reddit.com/r/gifs.json";
        }

        _createClass(Gifs, {
          loadPosts: {
            value: function loadPosts() {
              var _this = this;

              return this.http.jsonp(this.subreddit_url, "jsonp").then(function (r) {
                _this.posts = r.response.data.children;
              });
            }
          },
          activate: {
            value: function activate() {
              return this.loadPosts();
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [HttpClient];
            }
          }
        });

        return Gifs;
      })());
    }
  };
});
