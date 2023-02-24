exports.ids = [2];
exports.modules = {

/***/ 34:
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

/***/ })

};;
//# sourceMappingURL=v-chart.js.map