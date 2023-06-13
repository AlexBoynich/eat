<template>
  <div class="home">
    <main>
      <StartBlock/>
      <MainInfo/>
    </main>
  </div>
</template>

<script>
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
