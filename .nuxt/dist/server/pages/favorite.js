exports.ids = [8,2,3,4,5,6];
exports.modules = Array(31).concat([
/* 31 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMiAyMkMxNy41IDIyIDIyIDE3LjUgMjIgMTJDMjIgNi41IDE3LjUgMiAxMiAyQzYuNSAyIDIgNi41IDIgMTJDMiAxNy41IDYuNSAyMiAxMiAyMloiIHN0cm9rZT0iIzI5MkQzMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTggMTJIMTYiIHN0cm9rZT0iIzI5MkQzMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTEyIDE2VjgiIHN0cm9rZT0iIzI5MkQzMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC9zdmc+"

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("76f27cce", content, true, context)
};

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VModalError.vue?vue&type=template&id=67c6f54a&scoped=true&lang=pug&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "modal",
    class: {
      'hide': !_vm.$store.state.errorModal.errorModal
    }
  }, [_vm._ssrNode("<div class=\"modal__wrapper\" data-v-67c6f54a></div><div class=\"modal__content\" data-v-67c6f54a><p class=\"modal__content-text\" data-v-67c6f54a>The maximum number of cards is 5, please remove one of the cards </p><div class=\"modal__content-buttons\" data-v-67c6f54a><button class=\"modal__content-buttons\" data-v-67c6f54a>OK</button></div><img" + _vm._ssrAttr("src", __webpack_require__(31)) + " alt=\"Close\" class=\"modal__content-close\" data-v-67c6f54a></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/VModalError.vue?vue&type=template&id=67c6f54a&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VModalError.vue?vue&type=script&lang=js&
/* harmony default export */ var VModalErrorvue_type_script_lang_js_ = ({
  data() {
    return {
      isShowModal: false
    };
  },
  methods: {
    closeModal() {
      document.querySelector("body").style = "overflow-y: unset";
      this.$store.dispatch("errorModal/close");
    }
  }
});
// CONCATENATED MODULE: ./components/VModalError.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VModalErrorvue_type_script_lang_js_ = (VModalErrorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/VModalError.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_VModalErrorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "67c6f54a",
  "d2961986"
  
)

/* harmony default export */ var VModalError = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VChart.vue?vue&type=template&id=6c324382&scoped=true&lang=pug&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chart"
  }, [_c('client-only', [_c('line-chart', {
    attrs: {
      "chart-data": _vm.chartData,
      "options": _vm.chartOptions
    }
  })], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/VChart.vue?vue&type=template&id=6c324382&scoped=true&lang=pug&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VChart.vue?vue&type=script&lang=js&

/* harmony default export */ var VChartvue_type_script_lang_js_ = ({
  computed: {
    ...Object(external_vuex_["mapGetters"])({
      weather: "weather/getWeather"
    })
  },
  data() {
    return {
      chartData: {
        labels: ["9:00", '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
        datasets: [{
          label: "K",
          backgroundColor: '#f87979',
          data: [267, 267, 268, 270, 272, 270, 268]
        }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              boxWidth: 0
            }
          }
        }
      }
    };
  }
});
// CONCATENATED MODULE: ./components/VChart.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VChartvue_type_script_lang_js_ = (VChartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/VChart.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_VChartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6c324382",
  "4e677a6c"
  
)

/* harmony default export */ var VChart = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0iTTQuNDUwNjcgMTMuOTA4MkwxMS40MDMzIDIwLjQzOTVDMTEuNjQyOCAyMC42NjQ0IDExLjc2MjUgMjAuNzc2OSAxMS45MDM3IDIwLjgwNDZDMTEuOTY3MyAyMC44MTcxIDEyLjAzMjcgMjAuODE3MSAxMi4wOTYzIDIwLjgwNDZDMTIuMjM3NSAyMC43NzY5IDEyLjM1NzIgMjAuNjY0NCAxMi41OTY3IDIwLjQzOTVMMTkuNTQ5MyAxMy45MDgyQzIxLjUwNTUgMTIuMDcwNiAyMS43NDMgOS4wNDY2IDIwLjA5NzggNi45MjYwN0wxOS43ODg1IDYuNTI3MzRDMTcuODIwMyAzLjk5MDU4IDEzLjg2OTYgNC40MTYwMSAxMi40ODY3IDcuMzEzNjVDMTIuMjkxMyA3LjcyMjk2IDExLjcwODcgNy43MjI5NiAxMS41MTMzIDcuMzEzNjVDMTAuMTMwNCA0LjQxNjAxIDYuMTc5NzIgMy45OTA1OCA0LjIxMTU0IDYuNTI3MzVMMy45MDIxOSA2LjkyNjA3QzIuMjU2OTUgOS4wNDY2IDIuNDk0NSAxMi4wNzA2IDQuNDUwNjcgMTMuOTA4MloiIHN0cm9rZT0iIzMzMzYzRiIgc3Ryb2tlLXdpZHRoPSIyIi8+DQo8L3N2Zz4="

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("04670612", content, true, context)
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("1f023c78", content, true, context)
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("47d52e7f", content, true, context)
};

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VModalError_vue_vue_type_style_index_0_id_67c6f54a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VModalError_vue_vue_type_style_index_0_id_67c6f54a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VModalError_vue_vue_type_style_index_0_id_67c6f54a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VModalError_vue_vue_type_style_index_0_id_67c6f54a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VModalError_vue_vue_type_style_index_0_id_67c6f54a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal[data-v-67c6f54a]{background:rgba(4,4,4,.5);height:100vh;left:0;position:fixed;top:0;width:100%;width:100vw;z-index:4}.modal__wrapper[data-v-67c6f54a]{height:100vh}.modal__content[data-v-67c6f54a],.modal__wrapper[data-v-67c6f54a]{align-items:center;display:flex;justify-content:center}.modal__content[data-v-67c6f54a]{background-color:#fff;border-radius:20px;flex-direction:column;height:50vh;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:50vh;z-index:5}.modal__content-text[data-v-67c6f54a]{font-size:24px;font-weight:700;padding:15px;text-align:center}.modal__content-buttons[data-v-67c6f54a]{margin-top:10px}.modal__content-buttons>button[data-v-67c6f54a]{border:none;border-radius:15px;color:#fff;margin:20px;padding:10px 20px}.modal__content-buttons>button[data-v-67c6f54a]:first-child{background-color:green}.modal__content-close[data-v-67c6f54a]{height:40px;position:absolute;right:0;top:0;transform:rotate(45deg);width:40px;z-index:4}.hide[data-v-67c6f54a]{display:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VNavigation.vue?vue&type=template&id=065ff756&scoped=true&lang=pug&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "nav"
  }, [_vm._ssrNode("<div class=\"nav__buttons\" data-v-065ff756>", "</div>", [_c('n-link', {
    staticClass: "nav__buttons-link",
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "nav__buttons-icon",
    attrs: {
      "src": __webpack_require__(44),
      "alt": "Home"
    }
  })]), _c('n-link', {
    staticClass: "nav__buttons-link",
    attrs: {
      "to": "/favorite"
    }
  }, [_c('img', {
    staticClass: "nav__buttons-icon",
    attrs: {
      "src": __webpack_require__(35),
      "alt": "Favorite"
    }
  })])], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/VNavigation.vue?vue&type=template&id=065ff756&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VNavigation.vue?vue&type=script&lang=js&
/* harmony default export */ var VNavigationvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/VNavigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VNavigationvue_type_script_lang_js_ = (VNavigationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/VNavigation.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(45)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_VNavigationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "065ff756",
  "048a6d76"
  
)

/* harmony default export */ var VNavigation = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VLogo.vue?vue&type=template&id=1e040f47&scoped=true&lang=pug&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "logo"
  }, [_c('n-link', {
    staticClass: "logo__title",
    attrs: {
      "to": "/"
    }
  }, [_c('h1', {
    staticClass: "logo__title-text"
  }, [_vm._v("PANDA"), _c('span', [_vm._v("Weather.ua")])])])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/VLogo.vue?vue&type=template&id=1e040f47&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VLogo.vue?vue&type=script&lang=js&
/* harmony default export */ var VLogovue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/VLogo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VLogovue_type_script_lang_js_ = (VLogovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/VLogo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(47)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_VLogovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1e040f47",
  "3e77e50d"
  
)

/* harmony default export */ var VLogo = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VModal.vue?vue&type=template&id=e7308816&scoped=true&lang=pug&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "modal",
    class: {
      'hide': !_vm.$store.state.modal.showModal
    }
  }, [_vm._ssrNode("<div class=\"modal__wrapper\" data-v-e7308816></div><div class=\"modal__content\" data-v-e7308816><p class=\"modal__content-text\" data-v-e7308816>Are u sure about this ? </p><div class=\"modal__content-buttons\" data-v-e7308816><button class=\"modal__content-buttons\" data-v-e7308816>Yes</button><button class=\"modal__content-buttons\" data-v-e7308816>No</button></div><img" + _vm._ssrAttr("src", __webpack_require__(31)) + " alt=\"Close\" class=\"modal__content-close\" data-v-e7308816></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/VModal.vue?vue&type=template&id=e7308816&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VModal.vue?vue&type=script&lang=js&
/* harmony default export */ var VModalvue_type_script_lang_js_ = ({
  methods: {
    closeModal() {
      document.querySelector("body").style = "overflow-y: unset";
      this.$store.dispatch("modal/close");
    }
  }
});
// CONCATENATED MODULE: ./components/VModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VModalvue_type_script_lang_js_ = (VModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/VModal.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(49)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_VModalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e7308816",
  "717b9dbb"
  
)

/* harmony default export */ var VModal = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0zLjk5OTk5IDEwTDEyIDNMMjAgMTBMMjAgMjBIMTVWMTZDMTUgMTUuMjA0NCAxNC42ODM5IDE0LjQ0MTMgMTQuMTIxMyAxMy44Nzg3QzEzLjU1ODcgMTMuMzE2MSAxMi43OTU2IDEzIDEyIDEzQzExLjIwNDMgMTMgMTAuNDQxMyAxMy4zMTYxIDkuODc4NjggMTMuODc4N0M5LjMxNjA3IDE0LjQ0MTMgOSAxNS4yMDQzIDkgMTZWMjBINEwzLjk5OTk5IDEwWiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8L3N2Zz4="

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VNavigation_vue_vue_type_style_index_0_id_065ff756_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VNavigation_vue_vue_type_style_index_0_id_065ff756_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VNavigation_vue_vue_type_style_index_0_id_065ff756_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VNavigation_vue_vue_type_style_index_0_id_065ff756_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VNavigation_vue_vue_type_style_index_0_id_065ff756_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nav[data-v-065ff756]{width:100%}.nav__buttons[data-v-065ff756]{display:flex;justify-content:space-around;margin-top:20px}.nav__buttons-link[data-v-065ff756]{position:relative}.nav__buttons-icon[data-v-065ff756]{height:50px;width:50px}.nuxt-link-exact-active[data-v-065ff756]:after{background-color:#000;border-radius:2px;bottom:0;content:\"\";height:3px;left:0;position:absolute;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VLogo_vue_vue_type_style_index_0_id_1e040f47_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VLogo_vue_vue_type_style_index_0_id_1e040f47_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VLogo_vue_vue_type_style_index_0_id_1e040f47_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VLogo_vue_vue_type_style_index_0_id_1e040f47_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VLogo_vue_vue_type_style_index_0_id_1e040f47_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".logo__title[data-v-1e040f47]{color:#000;font-size:34px;font-weight:600;line-height:37px;text-align:center;-webkit-text-decoration:none;text-decoration:none}.logo__title-text>span[data-v-1e040f47]{font-weight:500}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VModal_vue_vue_type_style_index_0_id_e7308816_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VModal_vue_vue_type_style_index_0_id_e7308816_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VModal_vue_vue_type_style_index_0_id_e7308816_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VModal_vue_vue_type_style_index_0_id_e7308816_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VModal_vue_vue_type_style_index_0_id_e7308816_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal[data-v-e7308816]{background:rgba(4,4,4,.5);height:100vh;left:0;position:fixed;top:0;width:100%;width:100vw;z-index:4}.modal__wrapper[data-v-e7308816]{height:100vh}.modal__content[data-v-e7308816],.modal__wrapper[data-v-e7308816]{align-items:center;display:flex;justify-content:center}.modal__content[data-v-e7308816]{background-color:#fff;border-radius:20px;flex-direction:column;height:50vh;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:50vh;z-index:5}.modal__content-text[data-v-e7308816]{font-size:24px;font-weight:700}.modal__content-buttons[data-v-e7308816]{margin-top:10px}.modal__content-buttons>button[data-v-e7308816]{border:none;border-radius:15px;color:#fff;margin:20px;padding:10px 20px}.modal__content-buttons>button[data-v-e7308816]:first-child{background-color:green}.modal__content-buttons>button[data-v-e7308816]:last-child{background-color:red}.modal__content-close[data-v-e7308816]{height:40px;position:absolute;right:0;top:0;transform:rotate(45deg);width:40px;z-index:4}.hide[data-v-e7308816]{display:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("2060db76", content, true, context)
};

/***/ }),
/* 61 */,
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_favorite_vue_vue_type_style_index_0_id_14de5738_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_favorite_vue_vue_type_style_index_0_id_14de5738_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_favorite_vue_vue_type_style_index_0_id_14de5738_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_favorite_vue_vue_type_style_index_0_id_14de5738_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_favorite_vue_vue_type_style_index_0_id_14de5738_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".favorite[data-v-14de5738]{font-weight:700;max-height:400px}.favorite__cards[data-v-14de5738]{display:flex;flex-direction:column;margin-top:20px;overflow-y:scroll;width:100%}@media screen and (min-width:1200px){.favorite__cards[data-v-14de5738]{max-height:500px}}.favorite__cards-item[data-v-14de5738]{align-items:center;display:flex;flex-direction:column;margin-bottom:16px;width:100%}.card[data-v-14de5738]{background-color:#fff;border-radius:20px;padding:10px;position:relative;width:80%}@media screen and (min-width:900px){.card[data-v-14de5738]{width:50%}}.card__button-close[data-v-14de5738]{cursor:pointer;height:32px;position:absolute;right:0;top:0;transform:rotate(45deg);width:32px}.hideButton[data-v-14de5738]{display:none}.favorite[data-v-14de5738]{display:block}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/favorite.vue?vue&type=template&id=14de5738&scoped=true&lang=pug&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "favorite"
  }, [_vm._ssrNode("<div class=\"container\" data-v-14de5738>", "</div>", [_c('VLogo'), _c('VNavigation'), _vm._l(_vm.favoritesList, function (favorite, idx) {
    return _vm._ssrNode("<ul class=\"favorite__cards\" data-v-14de5738>", "</ul>", [_vm._ssrNode("<li class=\"favorite__cards-item\" data-v-14de5738>", "</li>", [_vm._ssrNode("<div" + _vm._ssrClass("card", {
      'hideButton': _vm.isHide
    }) + " data-v-14de5738>", "</div>", [_vm._ssrNode("<img" + _vm._ssrAttr("src", __webpack_require__(31)) + " alt=\"Close\" class=\"card__button-close\" data-v-14de5738><p class=\"card__title\" data-v-14de5738>" + _vm._ssrEscape("City: " + _vm._s(favorite.name)) + "</p><p class=\"card__temp\" data-v-14de5738>" + _vm._ssrEscape("Temp: " + _vm._s(favorite.main.temp) + " K") + "</p><p class=\"card__feels\" data-v-14de5738>" + _vm._ssrEscape("Feels like: " + _vm._s(favorite.main.feels_like) + " K") + "</p>"), _c('VChart'), _vm.isFull ? _c('VModalError') : _c('pre'), _c('VModal')], 2)])]);
  })], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/favorite.vue?vue&type=template&id=14de5738&scoped=true&lang=pug&

// EXTERNAL MODULE: ./components/VNavigation.vue + 4 modules
var VNavigation = __webpack_require__(41);

// EXTERNAL MODULE: ./components/VLogo.vue + 4 modules
var VLogo = __webpack_require__(42);

// EXTERNAL MODULE: ./components/VChart.vue + 4 modules
var VChart = __webpack_require__(34);

// EXTERNAL MODULE: ./components/VModalError.vue + 4 modules
var VModalError = __webpack_require__(33);

// EXTERNAL MODULE: ./components/VModal.vue + 4 modules
var VModal = __webpack_require__(43);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/favorite.vue?vue&type=script&lang=js&






/* harmony default export */ var favoritevue_type_script_lang_js_ = ({
  components: {
    VNavigation: VNavigation["default"],
    VLogo: VLogo["default"],
    VChart: VChart["default"],
    VModalError: VModalError["default"],
    VModal: VModal["default"]
  },
  data() {
    return {
      isHide: false,
      isDelete: false,
      tmpIdx: null,
      isFull: false,
      list: []
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])({
      showModal: "modal/showModal",
      showError: "modal/showError",
      favoritesList: "favorites/getFavorite"
    })
  },
  created() {
    this.$nuxt.$on('call-delete', this.callDelete);
  },
  methods: {
    callDelete(idx) {
      this.isDelete = idx;
      this.deleteCard(this.tmpIdx);
    },
    deleteCard(idx) {
      this.$store.commit('favorites/updateFavorite', idx);
    }
  },
  mounted() {
    this.list = JSON.parse(localStorage.getItem('card'));
  }
});
// CONCATENATED MODULE: ./pages/favorite.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_favoritevue_type_script_lang_js_ = (favoritevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/favorite.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(62)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_favoritevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "14de5738",
  "7c39756c"
  
)

/* harmony default export */ var favorite = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {VLogo: __webpack_require__(42).default,VNavigation: __webpack_require__(41).default,VChart: __webpack_require__(34).default,VModalError: __webpack_require__(33).default,VModal: __webpack_require__(43).default})


/***/ })
]);;
//# sourceMappingURL=favorite.js.map