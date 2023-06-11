<template>
    <div class="footerColor">
      <div class="footer container">
        <div class="footerTables">
        <div class="footerTable"
        v-for="tableItem in tableList"
      >
          <h4 class="post">{{ tableItem.post }}</h4>
          <p class="director">{{ tableItem.director }}</p>
          <p class="number">{{ tableItem.phoneNumber }}</p>
        </div>
        </div>
        <div class="adress">
          <h4>Адрес:</h4>
          <a >cекрет :)</a>
        </div>
        <img src="/vkLogoMobile.png" alt="" class="vkLogoMobile">
      </div>
    </div>
  </template>
  
<script>
  export default {
    name: 'Footer',
    data() {
      return {
        tableList: [
          {post:'Спонсоры и продвижение', director: 'Абдрашитова Дарья' , phoneNumber: '8 (964) 090 73-38',},
          {post: 'Общие вопросы', director: 'Березина Оксана', phoneNumber: '8 (913) 862 14-35',},
          // {post: 'Фуд-корт', director: 'Рупп Елизавета', phoneNumber: '8 (923) 416 15-54',},
          // {post: 'Маркет', director: 'Креер Динара', phoneNumber: '8 (923) 433 87-63',}
        ]
      }
    }
  }
</script>

<style lang="sass" scoped>
.footerColor
  background: #FFC500
.footer
  display: flex
  flex-direction: row
  flex-wrap: wrap
  .footerTables
    display: flex
    flex-direction: row
    width: 60%
    max-width: 1920px
    justify-content: start
    @media  (max-width: 360px)
      width: 100%
      justify-content: space-between
    .footerTable
      width: 23%
      margin: 30px
      p
        font-size: 24px
      @media  (max-width: 360px)
        width: 128px
        margin: 0 
        .post
          height: 44px
        .director
          font-size: 12px
          margin: 8px 0 2px
        .number
          font-size: 12px
.adress
  display: flex
  flex-direction: column
  margin: 30px 50px 30px 70px
  @media  (max-width: 360px)
    margin: 16px 0
.vkLogoMobile
  display: none
  @media  (max-width: 360px)
    display: flex
    width: 33px
    height: 33px
    margin: 16px 0 16px 70%

</style>
  