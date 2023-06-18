<template>
    <div class="block container">
        <div class="vkBlock"
        @click="replace('https://vk.com/festival_est')"
        >
            <img src="/vkLogo.png" alt="Группа ВКонтакте" class="vkLogo">
        </div>
        <img src="/handWithBurger.png" alt="" class="handWithBurger">
        <img src="/handWithSusi.png" alt="" class="handWithSusi">
        <img src="/handWithCoffee.png" class="handWithCoffee" alt="">
        <img src="/handWithDrink.png" class="handWithDrink" alt="">
        <div class="startBlock container">
            <div class="cityAndDate">
                <h3 class="city">Томск</h3>
                <h3 class="date"> 2-3 cентября</h3>
            </div>
            <img src="/logo.png" alt="Логотип фестиваля ЕСТЬ!" class="logo">

            <p class="title">Фестиваль городских ресторанов</p>
            <div class="buttonsBlock">
                <div class="participantBlock">
                    <button class="becomings" href="https://docs.google.com/forms/d/e/1FAIpQLSdQUWmsh4_gJgj0jJ4geCYnfYNORGfKUjFjZs3vmkTKLyDM2A/viewform"
                    @click="replace('https://docs.google.com/forms/d/e/1FAIpQLSdQUWmsh4_gJgj0jJ4geCYnfYNORGfKUjFjZs3vmkTKLyDM2A/viewform')"><a>Стать участником</a></button>
                    <button class="conditions"
                    @click="replace('https://drive.google.com/file/d/1IhhwiZJ9VrccXa0U53iYTkT64p99VEFg/view?usp=drive_link')"><a >Условия  <img src="/angle.png" alt="" class="angle"></a></button>
                </div>
                <div class="rightBlock">
                    <button class="becomings" href="https://docs.google.com/forms/d/e/1FAIpQLSeGtG3cA4Q2glTf1ZFQRUnPd1MW5hoap0MWibR0fERXzUc1qg/viewform"
                    @click="replace('https://docs.google.com/forms/d/e/1FAIpQLSeGtG3cA4Q2glTf1ZFQRUnPd1MW5hoap0MWibR0fERXzUc1qg/viewform')"><a>Стать спонсором</a></button>
                    <button class="conditions"
                    @click="replace('https://drive.google.com/file/d/1lAihWCJhJiTuSru0WxAISMfyvY6aVLG9/view?usp=drive_link')"><a>Условия  <img src="/angle.png" alt="" class="angle"></a></button>
                </div>
            </div>
        </div>
        <img src="/handWithHotDog.png" alt="" class="handWithHotDog">
        <img src="/handWithDonut.png" alt="" class="handWithDonut">
        <hr>
    </div>
</template>

<script>
export default {
    data: () => {
        return {

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
    .angle
        @media (max-width: 875px )
            width: 6px
            height: 11px
            margin-left: 10px
    .block
        position: relative
    .startBlock
        display: flex
        flex-direction: column
        align-items: center
        .title
            margin: 24px 0 12px
    .logo
        width: 32%
        object-fit: cover
        min-width: 320px
        @media (max-width: 875px )
            width: 221px
            height: 140px
            object-fit: cover
            min-width: auto
    hr
        width: 100%
        border: 1px solid #949494
        margin: 0 0 12px
        position: relative
    .participantBlock
        .becomings
            background: #FF7A00
            &:hover
                filter: brightness(90%)
            &:active
                filter: brightness(80%)
            a
                color: #FFFFFF
                
    .rightBlock
        .becomings
            &:hover
                background: #FF7A001A
            &:active
                background: #FF7A0080
                
    .participantBlock, .rightBlock
        display: flex
        flex-direction: column    
        align-items: center
        margin: 50px 70px
        overflow: hidden
        @media (max-width: 875px )
            margin: 0
        .becomings
            width: 274px
            height: 88px
            border: 2px solid #FF7A00
            border-radius: 69px
            @media (max-width: 875px )
                width: 193px
                height: 62px
                margin: 12px 0
        .conditions
            width: 193px
            height: 56px
            background: #fff
            border-radius: 24px 
            margin: 40px 0  
            &:hover
                background: #FF7A001A
            &:active
                background: #FF7A0080
            @media (max-width: 875px )
                width: 146px
                height: 36px
                margin: 0 0 12px
    .buttonsBlock
        display: flex
        flex-direction: row
        justify-content: space-between
        max-width: 100%
        @media (max-width: 875px )
            flex-direction: column
    .cityAndDate
        display: flex
        justify-content: space-between
        width: 32%
        margin-bottom: 27px
        color: #D02D22
        min-width: 320px

        @media (max-width: 875px )
            flex-direction: column
            min-width: auto
            width: auto
            align-items: center
    .vkBlock
        display: flex
        width: 261px
        height: 72px
        border-radius: 48px
        float: right
        justify-content: center
        margin: 20px 87px 0 0
        align-items: center
        &:hover
            background: #FF7A001A
            cursor: pointer
        &:active
            background: #FF7A0080
            
        @media (max-width: 875px )
            display: none

    .vkLogo
        width: 228px
        height: 40px

    .handWithBurger
        width: 24%
        position: absolute
        top: 0
        @media (max-width: 875px )
            left: -80px
            width: 180px
            object-fit: cover
    .handWithSusi
        position: absolute
        right: 0
        top: 140px
        width: 18%
        @media (max-width: 875px )
            width: 101px
            height: 87px
            top: 0
            right: -10px
            object-fit: cover
    .handWithCoffee
        position: absolute
        left: 0
        top: 300px
        width: 16%
        @media (max-width: 875px )
            width: 105px
            height: 99px
            left: -40px
            object-fit: cover
    .handWithDrink
        position: absolute
        right: 0
        top: 370px
        width: 15%
        @media (max-width: 875px )
            width: 90px
            height: 129px
            top: 300px
            right: -30px
            object-fit: cover
    .handWithHotDog
        position: absolute
        right: 100px
        bottom: 12px
        width: 19%
        @media (max-width: 1200px )
            right: 0
        @media (max-width: 875px )
            width: 84px
            height: 88px
            right: -30px
            object-fit: cover
        
    .handWithDonut
        position: absolute
        bottom: 12px
        width: 19%
        @media (max-width: 875px )
            width: 85px
            height: 88px
            left: -25px
            object-fit: cover
</style>