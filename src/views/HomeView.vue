<template>
  <div class="home">
    <StartBlock/>
    <MainInfo/>
  </div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import MainInfo from '@/components/MainInfo.vue';
  import StartBlock from '@/components/StartBlock.vue';

  export default {
    name: 'Home',

    components: {
      MainInfo,
      StartBlock
    },
  }
</script>

<style lang="sass">

</style>
