<template>
  <div class="home">
    <StartBlock/>
    <MainInfoBlock/>
  </div>
</template>

<script>
// @ is an alias to /src
import StartBlock from '@/components/StartBlock.vue'
import MainInfoBlock from '@/components/MainInfo.vue'

export default {
  name: 'HomeView',
  components: {
    StartBlock,
    MainInfoBlock
  }
}
</script>
