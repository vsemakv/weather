<template lang="pug">
    .modal(:class="{'hide': !$store.state.errorModal.errorModal}")
        .modal__wrapper(@click="closeModal")
        .modal__content
            p.modal__content-text The maximum number of cards is 5, please remove one of the cards 
            .modal__content-buttons
                button(@click="closeModal").modal__content-buttons OK
            img(src="@/assets/images/icons/close.svg", alt="Close" @click="closeModal").modal__content-close
</template>
    
    
<script>
export default {
    data() {
        return {
            isShowModal: false
        }
    },
    methods: {
        closeModal() {
            document.querySelector("body").style = "overflow-y: unset";
            this.$store.dispatch("errorModal/close");
        },
    },
}
</script>
    
<style lang="scss" scoped>
.modal {
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 100%;
    z-index: 4;
    width: 100vw;
    background: rgba(4, 4, 4, 0.5);

    &__wrapper {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 50vh;
        height: 50vh;
        border-radius: 20px;

        background-color: white;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        z-index: 5;


        &-text {
            font-size: 24px;
            font-weight: 700;
            text-align: center;
            padding: 15px;

        }

        &-buttons {
            margin-top: 10px;

            &>button {
                margin: 20px;
                border-radius: 15px;
                padding: 10px 20px;
                border: none;
                color: white;

                &:first-child {
                    background-color: green;
                }
            }
        }

        &-close {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 4;
            width: 40px;
            height: 40px;
            transform: rotate(45deg);
        }

    }
}

.hide {
    display: none;
}
</style>