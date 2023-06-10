<template>
    <div class="mainBlock container">
        <h2 class="title">О ФЕСТИВАЛЕ</h2>
        <div class="mainText"><p>ЕСТЬ! - ЭТО ГАСТРОНОМИЧЕСКИЙ ФЕСТИВАЛЬ ГОРОДСКИХ РЕСТОРАНОВ.<br/><br/>ВПЕРВЫЕ ОН БЫЛ ОРГАНИЗОВАН ГРУППОЙ ИНИЦИАТИВНЫХ ЛЮДЕЙ В 2019 ГОДУ. И ВОТ, СПУСТЯ 
            2 ГОДА ВЫНУЖДЕННОГО ПЕРЕРЫВА, МЫ ВЕРНУЛИСЬ, ЧТОБЫ СДЕЛАТЬ ЕЩЕ МАСШТАБНЕЕ, ЕЩЕ ВКУСНЕЕ И ЕЩЕ ИНТЕРЕСНЕЕ!</p>
        </div>
        <h2 class="title">ВАС ЖДУТ:</h2>
        <div class="program"
        >
            <div class="item"
            v-for="item in programList">
                <img :src='item.link'  alt="" class="itemImg">
                <h6 class="itemText">{{ item.text }}</h6>
            </div>
        </div>  
    </div>
</template>

<script>
    export default {
        data() {
            return {
                programList: [
                    {text: 'ЛЮБИМЫЕ ЗАВЕДЕНИЯ', link: '/purePhoto.png'},
                    {text: 'МАРКЕТ', link: '/purePhoto.png'},
                    {text: 'МАСТЕР-КЛАСЫ И ЛЕКТОРИЙ', link: '/purePhoto.png'},
                    {text: 'БОЛЬШАЯ ДЕТСКАЯ ИГРОВАЯ', link: '/purePhoto.png'},
                    {text: 'РАЗВЛЕКАТЕЛЬНАЯ ПРОГРАММА', link: '/purePhoto.png'},
                    {text: 'И ЕЩЕ МНОГО ДРУГИХ СЮРПРИЗОВ', link: '/purePhoto.png'},
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
    .mainBlock
        display: flex
        flex-direction: column
        align-items: center
        padding: 12px 9px
        .title
            font-size: 80px
            margin: 40px
            @media (max-width: 360px )
                font-size: 24px
                margin: 12px
    .mainText
        display: flex
        width: 1556px
        @media (max-width: 360px )
            width: 100%
        p
            font-size: 41px
            @media (max-width: 360px )
                font-size: 16px

    .item
        display: flex
        flex-direction: row
        justify-content: space-between
        align-items: center
        width: 568px
        height: 207px
        border: 1px solid #d9d9d9
        border-radius: 40px
        margin: 20px
        @media (max-width: 360px )
            width: 270px
            height: 100px
            border-radius: 20px
            margin: 15px
            padding: 0 15px
    .program
        display: flex
        max-width: 1920px
        flex-wrap: wrap
        justify-content: center
        img
            width: 150px
            height: 150px
            @media (max-width: 360px )
                width: 70px
                height: 70px
                object-fit: cover

</style>