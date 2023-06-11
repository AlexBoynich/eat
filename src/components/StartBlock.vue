<template>
    <div class="startBlock container">
        <img src="/vkLogo.png" alt="Группа ВКонтакте" class="vkLogo">
        <h3 class="city">Томск</h3>
        <img src="/purePhoto.png" alt="Логотип фестиваля ЕСТЬ!" class="logo">
        <p class="title">Фестиваль городских ресторанов</p>
        <div class="buttonsBlock">
            <div class="participantBlock">
                <button class="becomings"><a>Стать Участником</a></button>
                <button class="conditions"><a>Условия участия</a></button>
            </div>
            <div class="sponsorBlock">
                <button class="becomings"><a>Стать спонсором</a></button>
                <button class="conditions"><a href="">Условия спонсорства</a></button>
            </div>
        </div>
        <hr>
    </div>
</template>

<script>

</script>

<style lang="sass" scoped>
    .startBlock
        display: flex
        flex-direction: column
        align-items: center
        .title
            margin: 24px 0 12px
    .logo
        width: 58%
        height: width/2
        @media (max-width: 360px )
            width: 300px
            height: 200px
            object-fit: cover
    hr
        width: 100%
        border: 1px solid #949494
        margin: 12px 0
    .participantBlock, .sponsorBlock
        display: flex
        flex-direction: column    
        align-items: center
        margin: 50px 70px
        overflow: hidden
        @media (max-width: 360px )
            margin: 0
        .becomings
            width: 448px
            height: 144px
            background: #d9d9d9
            border: transparent
            border-radius: 69px
            @media (max-width: 360px )
                width: 193px
                height: 62px
                margin: 12px 0
        .conditions
            width: 358px
            height: 89px
            background: #fff
            border: 1px solid #000000
            border-radius: 69px 
            margin: 92px 0  
            @media (max-width: 360px )
                width: 146px
                height: 36px
                margin: 0 0 12px
    .buttonsBlock
        display: flex
        flex-direction: row
        justify-content: space-between
        max-width: 100%
        @media (max-width: 360px )
            flex-direction: column
    .city
        margin: 24px 0 16px
    .vkLogo
        display: flex
        justify-content: flex-end
</style>