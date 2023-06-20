<template lang="pug">
nav.navbar.is-transparent.is-uppercase(role="navigation" aria-label="main navigation")
  .container
    .navbar-brand
      NuxtLink.navbar-item(to="/") {{ gymInfo.name }}
      div.navbar-burger(role="button" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample")
        a.navbar-item.navbar-item--social#first(href="https://www.facebook.com/newbiocenter/", target="_blank")
          SVGIcon(iconName="icon-facebook")
        a.navbar-item.navbar-item--social(href="https://www.instagram.com/new_bio_center/", target="_blank")
          SVGIcon(iconName="icon-instagram")

    .navbar-menu
      .navbar-end
        NuxtLink.navbar-item(:to="{ path: '/', hash: '#abbonamenti' }", :external="true") GLI ABBONAMENTI
        NuxtLink.navbar-item(:to="{ path: '/', hash: '#attrezzatura' }", :external="true") ATTREZZATURA E SERVIZI
        NuxtLink.navbar-item(:to="{ path: '/', hash: '#corsi' }", :external="true") CORSI
        // social networks
        a.navbar-item.navbar-item--social#first(href="https://www.facebook.com/newbiocenter/", target="_blank")
          SVGIcon(icon-name="icon-facebook")
        a.navbar-item.navbar-item--social(href="https://www.instagram.com/new_bio_center/", target="_blank")
          SVGIcon(icon-name="icon-instagram")
</template>


<script setup lang="ts">
import { gymInfo } from '~/plugins/gym-info';
</script>


<style lang="sass" scoped>
@import "../node_modules/bulma/sass/utilities/mixins.sass"

.navbar-brand
  font-family: 'Gotham Black', sans-serif
  font-size: 1.3rem
  letter-spacing: 2px
  &:hover
    .navbar-item
      color: white

.navbar-item
  padding: 0.5rem 1.2rem

  @include mobile
    &:last-child
      padding-right: 0

  &--social
    padding: 0.6rem
      
    &#first
      padding-left: 1.2rem


@include mobile
  .navbar-burger
    width: auto
    height: auto
    display: flex
    align-items: center
    padding-right: 1.2rem
  
</style>
