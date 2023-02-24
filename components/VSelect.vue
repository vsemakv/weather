<template lang="pug">
    .select
        input(type="text" v-model="city" autocomplete="off" @input="filterCities()" @focus="isHideList = false" placeholder="Add city").select__input
        ul(v-if="filteredCities" :class="{'hide': !isHideList}").select__list
            li(v-for="city in filteredCities" @click="selectCity(city)" ).select__list-item {{ city }}
</template>

<script>
import { mapGetters } from "vuex";
import ua from "@/assets/ua.json"
    export default {
        data() {
            return {
                city: "",
                citiesInfoList: ua,
                filteredCities: [],
                citiesList: [],
                isHideList: false,
            }
        },
        computed: { 
            ...mapGetters({
                weather: "weather/getWeather",
                showError: "errorModal/showError",
            }),
        },
        methods: {
            async selectCity(city) {
                if(this.weather.length < 5){
                    await this.citiesInfoList.forEach(el => {
                        if(el.city == city) {
                            this.$store.dispatch('weather/get', el)
                        }
                    })
                    this.city = ""
                    this.isHideList = true
                }else {
                    this.$store.dispatch('errorModal/toggle')
                    document.querySelector("body").style = "overflow-y: hidden";
                }
                
            },
            filterCities() {
                this.filteredCities = this.citiesList.filter(city => city.toLowerCase().startsWith(this.city));
            },
            closeList() { 
                this.isHideList = true
            }
        },
        mounted(){
            this.isHideList = true 
            
            this.citiesInfoList.forEach(city => {
                this.citiesList.push(city.city)
            });
            document.addEventListener('click', (event) => {
                if (!event.target.classList.contains('select__input') && !this.isHideList) {
                    this.isHideList = true
                }
            })
        },
    }
</script>

<style lang="scss" scoped>
.select { 
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin: 32px 0px;

    &__input { 
        width: 80%;
        height: 50px;

        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        padding-left: 10px;

        border-radius: 15px;
        border: none;

    }
    &__list {
        position: absolute;
        top: 100%;
        left: -120%;
        width: 80%;
        height: 400px;
        overflow: hidden;
        overflow-y: scroll;
        z-index: 2;



        &-item { 
            background-color: white;
            border: 1px solid grey;
            border-top: none;
            padding: 5px 5px;
        }
    }
}
.hide { 
    transform: translateX(0%);
    left: 10%;
}
</style>