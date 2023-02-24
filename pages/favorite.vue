<template lang="pug">
.favorite   
    .container 
        VLogo
        VNavigation    
        ul(v-for="(favorite, idx) of list").favorite__cards
            li.favorite__cards-item
                .card(:class="{'hideButton': isHide}")
                    img(src="@/assets/images/icons/close.svg", alt="Close" @click="deleteCard(idx)" ).card__button-close 
                    p.card__title City: {{ favorite.name }}
                    p.card__temp Temp: {{ favorite.main.temp }} &#8490;
                    p.card__feels Feels like: {{ favorite.main.feels_like }} &#8490;
                    VChart
                    VModalError(v-if="isFull")
                    pre(v-else)
                    VModal
</template>

<script>
import VNavigation from '@/components/VNavigation.vue';
import VLogo from '@/components/VLogo.vue';
import VChart from  '@/components/VChart.vue';
import VModalError from '@/components/VModalError.vue';
import VModal from '@/components/VModal.vue';
import { mapGetters } from "vuex";

    export default {
        components: {
            VNavigation,VLogo,VChart,VModalError,VModal
        },
        data() {
            return {
                isHide: false,
                isDelete: false,
                tmpIdx: null,
                isFull: false,
                list: []
            }
        },
        computed: {
            ...mapGetters({
                showModal: "modal/showModal",
                showError: "modal/showError",
                favoritesList: "favorites/getFavorite"
            }),
        },
        created(){
            this.$nuxt.$on('call-delete', this.callDelete)
        },
        methods: {
            callDelete(idx) {
                this.isDelete = idx;
                this.deleteCard(this.tmpIdx)
            },
            
            deleteCard(idx) {
                this.$store.commit('favorites/updateFavorite', idx)
            },
        },
        mounted () {
            this.list = JSON.parse(localStorage.getItem('card'))
        },
    }
</script>

<style lang="scss" scoped>
.favorite { 
    font-weight: 700;
        max-height: 400px;
    &__cards { 
        display: flex;
        flex-direction: column;
        width: 100%;
        overflow-y: scroll;
        margin-top: 20px;
        
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

    }
}
.hideButton {
  display: none;
}
.favorite { 
  display: block;
}
</style>