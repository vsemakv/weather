export const VCardsList = () => import('../../components/VCardsList.vue' /* webpackChunkName: "components/v-cards-list" */).then(c => wrapFunctional(c.default || c))
export const VChart = () => import('../../components/VChart.vue' /* webpackChunkName: "components/v-chart" */).then(c => wrapFunctional(c.default || c))
export const VLogo = () => import('../../components/VLogo.vue' /* webpackChunkName: "components/v-logo" */).then(c => wrapFunctional(c.default || c))
export const VModal = () => import('../../components/VModal.vue' /* webpackChunkName: "components/v-modal" */).then(c => wrapFunctional(c.default || c))
export const VModalError = () => import('../../components/VModalError.vue' /* webpackChunkName: "components/v-modal-error" */).then(c => wrapFunctional(c.default || c))
export const VNavigation = () => import('../../components/VNavigation.vue' /* webpackChunkName: "components/v-navigation" */).then(c => wrapFunctional(c.default || c))
export const VSelect = () => import('../../components/VSelect.vue' /* webpackChunkName: "components/v-select" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
