<template lang="pug">
    .nav    
        .nav__buttons 
            n-link(to="/").nav__buttons-link
                img(src="@/assets/images/icons/home.svg", alt="Home").nav__buttons-icon
            n-link(to="/favorite" ).nav__buttons-link
                img(src="@/assets/images/icons/favorite1.svg", alt="Favorite").nav__buttons-icon
    </template>
    
<script>
export default {
}
</script>
    
<style lang="scss" scoped>
.nav {

    width: 100%;

    &__buttons {
        margin-top: 20px;

        display: flex;
        justify-content: space-around;

        &-link {
            position: relative;
        }

        &-icon {
            width: 50px;
            height: 50px;
        }

    }
}

.nuxt-link-exact-active {
    &::after {
        position: absolute;
        content: "";
        bottom: 0;
        left: 0;
        background-color: black;
        width: 100%;
        height: 3px;
        border-radius: 2px;
    }
}
</style>