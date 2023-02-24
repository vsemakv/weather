<template lang="pug">
  .page
    .container
      VLogo
      VNavigation
      VSelect    
      VCardsList(v-if="weather")
      pre(v-else)
      VModal
      VModalError
</template>

<script>
import VLogo from '@/components/VLogo.vue';
import VSelect from '@/components/VSelect.vue';
import VNavigation from '@/components/VNavigation.vue';
import VModal from '@/components/VModal.vue';
import VModalError from '@/components/VModalError.vue';
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      list: []
    }
  },
  components: {
    VSelect, VNavigation, VLogo, VModal, VModalError
  },
  computed: {
    ...mapGetters({
      weather: "weather/getWeather",
    }),
  },
  created() {
    const newCard = {
      lat: '49.842957',
      lng: '24.031111',
    }

    if (this.weather.length < 1) {
      this.$store.dispatch('weather/get', newCard)
    }
  }
}
</script>

<style lang="scss" scoped></style>