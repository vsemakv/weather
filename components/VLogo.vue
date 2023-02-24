<template lang="pug">
    .logo   
      n-link(to="/").logo__title
        h1.logo__title-text PANDA
          span Weather.ua
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.logo { 

    &__title { 
      text-align: center;
      color: black;
      text-align: center;
      font-weight: 600;
      font-size: 34px;
      line-height: 37px;
      text-decoration: none;

      &-text { 
        
        & > span { 
          font-weight: 500;
        }
      }
  }
}
</style>