<template>
    <div class="footer container">
      <div class="footerTables">
        <div class="footerTable"
        v-for="tableItem in tableList"

      >
        <h3>{{ tableItem.post }}</h3>
        <p>{{ tableItem.director }}</p>
        <p style="text-decoration: underline">{{ tableItem.phoneNumber }}</p>
      </div>
      </div>
      <h4 class="adress">Адрес:</h4>
    </div>
  </template>
  
<script>
  export default {
    name: 'Footer',
    data() {
      return {
        tableList: [
          {post:'СПОНСОРЫ И ПРОДВИЖЕНИЕ', director: 'АБДРАШИТОВА ДАРЬЯ' , phoneNumber: '8 (964) 090 73-38',},
          {post: 'ОБЩИЕ ВОПРОСЫ', director: 'БЕРЕЗИНА ОКСАНА', phoneNumber: '8 (913) 862 14-35',},
          {post: 'ФУД-КОРТ', director: 'РУПП ЕЛИЗАВЕТА', phoneNumber: '8 (923) 416 15-54',},
          {post: 'МАРКЕТ', director: 'КРЕЕР ДИНАРА', phoneNumber: '8 (923) 433 87-63',}
        ]
      }
    }
  }
</script>

<style lang="sass" scoped>
.footer
  display: flex
  // background: $primary-color
  flex-direction: row
  flex-wrap: wrap
  .footerTables
    display: flex
    flex-direction: row
    width: 100%
    max-width: 1920px
    justify-content: space-around
    @media  (max-width: 360px) 
      flex-wrap: wrap
  @media (max-width: 360px )    
    .footerTable
      width: 138px
      height: 84px
      margin: 16px
      text-align: start
    .vkLogo
      width: 44px
      height: 44px
      object-fit: cover
      margin: 0 141px 16px 16px
    h4
      margin-bottom: 20px  
    p
      font-size: 12px
</style>
  