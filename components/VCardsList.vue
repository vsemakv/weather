<template lang="pug">
.cards
    ul.cards__list
        li(v-for="(weather, idx) of weathers").cards__list-item 
            .card(:class="{'hideButton': isHide}")
                img(src="@/assets/images/icons/close.svg", alt="Close" @click="deleteCard(idx)" ).card__button-close 
                img(src="@/assets/images/icons/favorite1.svg", v-if="!weather.isFavorite" alt="Add to favorite" @click="chooseFavorite(idx, weather)").card__button-favorite
                img(src="@/assets/images/icons/favorite2.svg", v-else alt="Your favorite" @click="chooseFavorite(idx, weather)").card__button-favorite
                p.card__title City: {{ weather.name }} 
                p.card__temp() Temp: {{ weather.main.temp }} K;
                p.card__feels Feels like: {{ weather.main.feels_like }} K;
                VChart
                VModalError(v-if="isFull")
                pre(v-else)
</template>

<script>
import { mapGetters } from "vuex";
import VModalError from "./VModalError.vue";
import VChart from "@/components/VChart.vue";
    export default {
        mounted () {
        },
        components: {
            VChart,VModalError
        },
        created(){
            this.$nuxt.$on('call-delete', this.callDelete)
        },
        data() {
            return {
                isHide: false,
                isDelete: false,
                tmpIdx: null,
                isFull: false,
            }
        },
        computed: {
            ...mapGetters({
                weathers: "weather/getWeather",
                showModal: "modal/showModal",
                showError: "modal/showError",
                favoritesList: "favorites/getFavorite",
                favorite: "weather/getFavorite" 
            }),
        },
        methods: {
            callDelete(idx) {
                this.isDelete = idx;
                this.deleteCard(this.tmpIdx)
            },
            deleteCard(idx) {

                this.tmpIdx = idx;      

                if (!this.showModal && !this.isDelete) {
                    document.querySelector("body").style = "overflow-y: hidden";
                    this.$store.dispatch("modal/toggle");
                } else {
                    if(this.weathers.length < 6){
                        const data = {
                            weathers: this.weathers,
                            idx: idx
                        }

                        this.$store.commit('weather/updateWeathers', data)

                        this.tmpIdx = false;
                        this.isDelete = false;
                        

                        this.$store.dispatch("modal/toggle", false);
                        document.querySelector("body").style = "overflow-y: unset";
                    }else {
                        this.isFull = true
                    }
                    
                }

            },
            chooseFavorite(idx, city){
                this.$store.commit('weather/updateFavorite', idx)
                this.$store.dispatch("favorites/setFavorite", city);
            }
        }
    }
</script>

<style lang="scss" scoped>
.cards { 
    font-weight: 700;
    &__list { 
        display: flex;
        flex-direction: column;
        width: 100%;
        max-height: 400px;
        overflow-y: scroll;
        @media screen and (min-width: 1200px){
            max-height: 500px;
        }
        
        &-item { 
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 16px;

            
        }
    }
}

.card {
    background-color: white;
    width: 80%;
    border-radius: 20px;
    padding: 10px;
    position: relative;

    @media screen and (min-width: 900px){
        width: 50%;
    }

    &__button{ 

        &-close { 
            position: absolute;
            right: 0px;
            top: 0px;
            width: 32px;
            height: 32px;
            transform: rotate(45deg);
            cursor: pointer;
        }
        &-favorite { 
          position: absolute;
          right: 40px;
          top: 0px;
          width: 32px;
          height: 32px;
          cursor: pointer;

          &-active { 
            display: none;
            position: absolute;
            right: 40px;
            top: 0px;
            width: 32px;
            height: 32px;
          }
        }

    }
}
.hideButton {
  display: none;
}
.favorite { 
  display: block;
}
</style>