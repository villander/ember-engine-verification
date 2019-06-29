define("engine-a-lazy/addon-a/tests/addon.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | addon');
  QUnit.test('addon/components/component-a.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/component-a.js should pass ESLint\n\n');
  });
});
define("engine-a-lazy/addon-a/tests/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app/components/component-a.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/component-a.js should pass ESLint\n\n');
  });
});
define("engine-a-lazy/addon-a/tests/templates.template.lint-test", [], function () {
  "use strict";
});
define.alias("addon-a/components/component-a", "engine-a-lazy/components/component-a");
define("engine-a-lazy/config/environment", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var config;

  try {
    var metaName = 'engine-a-lazy/config/environment';
    var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
    config = JSON.parse(unescape(rawConfig));
  } catch (err) {
    throw new Error('Could not read config from meta tag with name "' + metaName + '" due to error: ' + err);
  }

  var _default = config;
  _exports.default = _default;
});
define("engine-a-lazy/engine", ["exports", "ember-engines/engine", "ember-load-initializers", "engine-a-lazy/resolver", "engine-a-lazy/config/environment"], function (_exports, _engine, _emberLoadInitializers, _resolver, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    modulePrefix
  } = _environment.default;

  const Eng = _engine.default.extend({
    modulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(Eng, modulePrefix);
  var _default = Eng;
  _exports.default = _default;
});
define("engine-a-lazy/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
define("engine-a-lazy/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "EmikFnbV",
    "block": "{\"symbols\":[],\"statements\":[[1,[23,\"outlet\"],false],[0,\"\\n\"],[21,[]],[0,\"\\nidfsdkldsljfjlfl\\n\"],[1,[23,\"hello-name\"],false]],\"hasEval\":true}",
    "meta": {
      "moduleName": "engine-a-lazy/templates/application.hbs"
    }
  });

  _exports.default = _default;
});//# sourceMappingURL=engine.map
