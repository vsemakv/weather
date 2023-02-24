export { default as VCardsList } from '../../components/VCardsList.vue'
export { default as VChart } from '../../components/VChart.vue'
export { default as VLogo } from '../../components/VLogo.vue'
export { default as VModal } from '../../components/VModal.vue'
export { default as VModalError } from '../../components/VModalError.vue'
export { default as VNavigation } from '../../components/VNavigation.vue'
export { default as VSelect } from '../../components/VSelect.vue'

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
