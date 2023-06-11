<template>
  <div class="app">
    <!-- <Header/> -->
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import MainInfo from './components/MainInfo.vue';
import startBlock from './components/StartBlock.vue';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="sass">
@import "../src/stylesApp.sass"
</style>
