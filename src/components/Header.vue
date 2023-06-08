<template>
    <div class="header container">
      <div class="date">
        <img src="/header2.png" alt="2" class="header2">
        <img src="/header.png" alt="-" class="header1">
        <img src="/header3.png" alt="3" class="header3">
        <h6>Сентября</h6>
      </div>
      <img src="/vkLogo.png" alt="Перейти в группу Вконтакте" class="vkLogo">
    </div>
  </template>
  
<script>
  export default {
    name: 'Header',
  }
</script>

<style lang="sass" scoped>
  .header
    display: flex
    justify-content: space-between
    background: #D9D9D9
    width: 100%
    height: 72px
    max-width: 1920px
    align-items: center
    background: center / 86px 55px no-repeat url("/public/headerLogo.png")  #D9D9D9           
    .vkLogo
      width: 44px
      height: 44px
      margin-right: 15px
      @media (max-width: 360px )
        width: 34px
        height: 35px
    .date
      display: flex
      align-items: center  
      padding: 0 8px
      img
        margin: 8px
      h6
        font-size: 16px
        font-weight: 457
        line-height: 19px
        letter-spacing: 0em
        text-align: left
        margin: 26px 25px 27px
        @media (max-width: 360px )
          margin: 16px 15px

  @media (max-width: 360px )
    .header
      max-width: 360px
      width: 100%
      height: 44px
      background:   right 25% center / 53px 34px no-repeat url("/public/headerLogo.png")  #D9D9D9
    .header2,.header3
      width: 16px
      height: 30px  
    .header1
      width: 16px
      height: 8px  

</style>
  