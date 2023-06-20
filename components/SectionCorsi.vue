<template lang="pug">
section.section.courses#corsi
	.courses__background

	.container.courses__container
		img.courses__background-img(src="~/assets/images/fitness-classes.jpg", alt="fitness-classes", title="fitness-classes", loading="lazy")

		.courses__info
			h2.is-size-3.has-text-weight-bold.mb-2 I Nostri Corsi
			p.is-size-5 Potrai scegliere tra vari corsi di gruppo tenuti nelle sale corsi con il nostro staff. Ne troverai di adatti sia ai principianti che ai livelli pro.

			ul.courses__list 
				li.courses__list-item(v-for="(course, index) in gymInfo.courses", :key="index")
					SVGIcon(iconName="icon-check")
					p.is-size-5 {{ course }}

			.mt-5
				a.button.is-rounded.is-black(:href="`tel:${formattedPhone}`") CHIAMA ORA
</template>


<script setup lang="ts">
import { gymInfo } from '~/plugins/gym-info';
import { formattedPhone } from '~/sharedMixin';
</script>


<style lang="sass" scoped>
@import @/assets/style/_bulma-variables.sass
@import @/assets/style/_mixins.sass
@import "../node_modules/bulma/sass/utilities/mixins.sass"

$height-mobile: 260px

.courses
	position: relative
	z-index: 1

	&__container
		display: grid
		grid-template-columns: 52% 48%
		align-items: center
		
		@include mobile
			grid-template-columns: 1fr

	&__background
		@include position(absolute, 0, 0, 0, 0)
		background-color: $color-primary
		width: 45%
		z-index: -1

		@include mobile
			width: 100%
	
	&__background-img
		padding: 2rem 0
		width: 52vw
		height: 520px
		object-fit: cover
				
		@include mobile
			padding: 0
			width: 100%
			height: $height-mobile

	&__info
		padding: 1.4rem 3rem

		@include mobile
			padding: 1.4rem 0

	&__list
		columns: 2
		list-style-position: inside
		margin: 1rem 0 2rem

	&__list-item
		display: flex
		align-items: center
		padding: 1rem 0

		.icon-svg
			@include size(24px)
			margin-right: 0.6rem
			color: $color-primary
			
			@include mobile
				color: $grey-dark
</style>
