<template lang="pug">
section.section
	.container
		.columns
			.column
				SVGIcon(iconName="icon-map").column__icon
				.column__text: a(href="", target="_blank").column__text #[strong Giovanni Manardo, 20 #[br] Ferrara, 44124]

			.column
				SVGIcon(iconName="icon-clock").column__icon
				p.column__text #[strong Lunedi-Venerdi] 09–21 #[br] #[strong Sabato] 09:30–15 #[br] #[strong Domenica] Chiuso #[br]

			.column
				SVGIcon(iconName="icon-phone").column__icon               
				p.column__text #[a(href="tel:05321861904", target="_blank") #[strong Telefono] 0532 1861904] #[br]
					| #[a(href="https://wa.me/3279059876", target="_blank") #[strong WhatsApp] 327 9059876]
</template>


<style lang="sass" scoped>
@import @/assets/style/_bulma-variables.sass
@import "../node_modules/bulma/sass/utilities/mixins.sass"

.section
	background-color: $black-bis
	padding: 5rem 0
	
	@include mobile
		padding: 3rem 0

.column
	color: $white
	display: flex
	align-items: center
	justify-content: center

	// Styles applied below $tablet
	@include mobile
		padding: 2rem 4rem
		justify-content: start

	&:hover
		.column__icon
			color: darken($color-secondary, 18%)

	&__icon
		margin-right: 2rem
		color: $color-secondary
		transition: all .5s
	
	&__text
		font-weight: 500    

		strong
			font-weight: 600
			color: $white

		a
			color: $white

			&:hover
				text-decoration: underline

</style>
