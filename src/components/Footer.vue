<template>
    <div class="footerColor">
      <footer class="footer container">
        <div class="footerTables">
        <div class="footerTable"
        v-for="tableItem in tableList"
      >
          <h4 class="post">{{ tableItem.post }}</h4>
          <p class="director">{{ tableItem.director }}</p>
          <a class="number" :href="`tel:${tableItem.phoneNumber}`">{{ tableItem.phoneNumber }}</a>
        </div>
        </div>
        <div class="adress">
          <h4>Адрес:</h4>
          <a>ТРК “Лето”</a>
          <img src="/logoLeto.svg" alt="Логотип ТРК 'Лето'" class="logoLeto"
          @click="replace('https://letotomsk.com/')"
          >
        </div>
        <img src="/logoLeto.svg" alt="Логотип ТРК 'Лето'" class="logoLetoMobile"
        @click="replace('https://letotomsk.com/')"
        >
        <img src="/vkLogoMobile.svg" alt="Группа ВКонтакте" class="vkLogoMobile"
        @click="replace('https://vk.com/festival_est')"
        >
      </footer>
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
    },
    methods: {
        replace(link){
            window.location.href= `${link}`
        }
     }
  }
</script>

<style lang="sass" scoped>
// @import url('@/stylesApp.sass')
.container
  @media  (max-width: 875px)
    max-width: 360px
.footerColor
  background: #FFC500
.logoLetoMobile
  display: none
  width: 125px
  height: 46px
  &:hover
    cursor: pointer
  @media  (max-width: 875px)
    display: block
    width: 54px
    height: 20px
    margin: 16px 16px 0 30%
.logoLeto
  width: 125px
  height: 46px
  &:hover
    cursor: pointer
  @media  (max-width: 875px)
    display: none
.footer
  display: flex
  flex-direction: row
  flex-wrap: wrap
  // width: 100%
  .footerTables
    display: flex
    flex-direction: row
    width: 60%
    max-width: 1920px
    justify-content: start
    @media  (max-width: 875px)
      width: 100%
      justify-content: space-between
    .footerTable
      width: 23%
      margin: 64px 120px 64px 72px
      min-width: 258px
      p
        font-size: 24px
      .number
        text-decoration: none
        color: #1C1C1A
      .director
        margin: 16px 0
        line-height: 24px
      @media  (max-width: 875px)
        width: 128px
        min-width: 128px
        margin: 20px 
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
  margin: 20px
  a
    margin: 16px 0
  @media  (max-width: 875px)
    margin: 16px 20
.vkLogoMobile
  display: none
  &:hover
    cursor: pointer
  @media  (max-width: 875px)
    display: flex
    margin-top: 8px
    width: 33px
    height: 33px

</style>
  