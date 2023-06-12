<template>
    <div class="mainBlock">
        <h2 class="title">О ФЕСТИВАЛЕ</h2>
        <div class="mainText"><p>Фестиваль городских ресторанов «<span class="wordEat">ЕСТЬ!</span>» - уникальное событие городского масштаба, туристический бренд Томска, который объединяет участников индустрии
             гостеприимства: рестораны, кафе, бары, производители и поставщики сырья.</p>
        </div>
        <h2 class="title">ВАС ЖДУТ</h2>
        <div class="program"
        >
            <div class="item"
            v-for="item in programList"
            v-bind:class="{ orangeItem: item.class==='0', yellowItem: item.class==='1', redItem: item.class==='2' }"
            >
                <!-- <img :src='item.link'  alt="" class="itemImg"> -->
                <p class="itemText">{{ item.text }}</p>
            </div>
        </div>  
    </div>
</template>

<script>
    export default {
        data() {
            return {
                programList: [
                    {text: 'ЛЮБИМЫЕ ЗАВЕДЕНИЯ ТОМСКА', link: '/purePhoto.png', class: '0'},
                    {text: 'МАРКЕТ', link: '/purePhoto.png', class: '1'},
                    {text: 'МАСТЕР-КЛАСЫ И ЛЕКТОРИЙ', link: '/purePhoto.png', class: '2'},
                    {text: 'БОЛЬШАЯ ДЕТСКАЯ ИГРОВАЯ', link: '/purePhoto.png', class: '2'},
                    {text: 'РАЗВЛЕКАТЕЛЬНАЯ ПРОГРАММА', link: '/purePhoto.png', class: '0'},
                    {text: 'И ЕЩЕ МНОГО ДРУГИХ СЮРПРИЗОВ', link: '/purePhoto.png', class: '1'},
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
            margin: 40px
            color: #FF7A00
            @media (max-width: 875px )
                margin: 48px 12px 12px 12px
    .mainText
        display: flex
        width: 1556px
        text-align: center
        @media (max-width: 875px )
            width: 100%
        p
            @media (max-width: 875px )
        .wordEat
            color: #FF7A00
    .item
        display: flex
        flex-direction: row
        justify-content: center
        align-items: center
        width: 576px
        height: 207px
        border: 1px solid #d9d9d9
        border-radius: 40px
        margin: 10px
        padding: 35px
        .itemText
            text-align: center
        @media (max-width: 875px )
            width: 320px
            height: 100px
            border-radius: 40px
            margin: 5px
            padding: 0 15px

    .program
        display: flex
        max-width: 1920px
        flex-wrap: wrap
        justify-content: center
        img
            width: 150px
            height: 150px
            @media (max-width: 875px )
                width: 70px
                height: 70px
                object-fit: cover
    .orangeItem
        border: 1px solid #FF7A00
    .redItem
        border: 1px solid #D02D22
    .yellowItem
        border: 1px solid #FFC500
</style>