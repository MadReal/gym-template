<template lang="pug">
header.hero.is-large
  .container
    .hero-body
      //- h1.title.is-2 Il Fitness a vostra disposizione
      h1.title.is-2 Il Fitness a vostra disposizione
      h2.subtitle Coniughiamo esperienza e innovazione, per aiutarti a raggiungere in modo efficace e sostenibile i tuoi obiettivi.
      .field.is-grouped
        .control
          a.button.is-rounded.is-primary(:href="`tel:${formattedPhone}`") CHIAMA ORA
        .control
          NuxtLink.button.is-white.is-rounded.is-outlined(:to="{ path: '/', hash: '#abbonamenti' }", :external="true") ABBONAMENTI
</template>

<script setup lang="ts">
import { gymInfo } from '~/plugins/gym-info';
import { formattedPhone } from '~/sharedMixin';
</script>

<style lang="sass" scoped>
@import @/assets/style/_bulma-variables.sass
@import "../node_modules/bulma/sass/utilities/mixins.sass"

.hero
  background-image: url('@/assets/images/hero-image.jpg')
  background-position: center
  background-repeat: no-repeat
  background-size: cover
  margin-top: -$navbar-height
    
@include mobile
  .hero
    padding: 6rem 0
  .title.is-2
    font-size: 1.8rem
</style>
