<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  export default {
    components :{
      Header,
      Footer,
    }
  }
</script>

<style lang="sass">
*
  margin: 0
  padding: 0
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  text-align: center
.container
  width: 1920px
  margin: 0 auto
  max-width: 100%
  box-sizing: border-box
  overflow: hidden
  @media (max-width: 360px)
    width: 360px
    
  // color: #2c3e50


// nav 
//   padding: 30px

//   a 
//     font-weight: bold
//     color: #2c3e50

//     &.router-link-exact-active 
//       color: #42b983
    
  
</style>
