<template lang="pug">
section.section#attrezzatura
    .container 
    .columns
        .column
            p.column__title ALLENAMENTO CARDIOVASCOLARE            
            .column__pic#pic1            
        .column
            p.column__title SOLLEVAMENTO PESI            
            .column__pic#pic2                        
        .column
            p.column__title STRETCHING E MOBILITÀ            
            .column__pic#pic3                        
        .column
            p.column__title CIRCUITO FUNZIONALE            
            .column__pic#pic4                        

</template>

<style lang="sass" scoped>
@import @/assets/style/_bulma-variables.sass
@import "../node_modules/bulma/sass/utilities/mixins.sass"

#pic1
    background-image: url('@/assets/images/workout1.webp')
#pic2
    background-image: url('@/assets/images/workout2.webp')
#pic3
    background-image: url('@/assets/images/workout3.webp')
#pic4
    background-image: url('@/assets/images/workout4.webp')    
    
.section
    padding: 0

.column
    height: 40rem
    padding: 0
    overflow: hidden
    position: relative
    display: flex
    align-items: center
    justify-content: center    

    @include mobile
        height: 12rem

    &__pic
        width: 100%
        height: 100%
        background-position: center
        background-repeat: no-repeat
        background-size: cover
        transition: all .5s

        &::before
            background-color: rgba(#0F233A, 0.2)
            content: ''
            display: block
            height: 100%
            position: absolute
            width: 100%

        // &:hover, &:focus
        //     transform: scale(1.1)

    &__title
        font-size: 1.6rem
        height: 100%
        position: absolute
        width: 80%
        display: flex
        align-items: center
        justify-content: center
        color: $white
        font-weight: 700
        z-index: 99
        text-align: center
        
        &:hover + .column__pic, &:focus + .column__pic
            transform: scale(1.1)
</style>
