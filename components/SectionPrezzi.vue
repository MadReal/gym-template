<template lang="pug">
section.section#abbonamenti
	.container 
		h2.is-size-3.has-text-centered.has-text-weight-bold Gli Abbonamenti
		hr.title-decor

		.plans
			.plans__row
				Plan(:timePeriod="1", :price="gymInfo.prices.one", :colorType="1", :iscrizione="false")
				ObliqueBar.is-hidden-mobile(:colorType="1")
				Plan(:timePeriod="3", :price="gymInfo.prices.three", :colorType="1", :iscrizione="false")
				ObliqueBar.is-hidden-mobile(:colorType="1")
				Plan(:timePeriod="6", :price="gymInfo.prices.six", :colorType="1", :iscrizione="false")
				ObliqueBar.is-hidden-mobile(:colorType="1")
				Plan(:timePeriod="12", :price="gymInfo.prices.year", :colorType="0" :iscrizione="true")


	.container.has-text-centered
		p.info-box + Iscrizione Annuale €{{ gymInfo.prices.iscrizione }}

		p.is-size-6 Tutti i nostri abbonamenti comprendono una scheda personalizzata, che verrà aggiornata dal trainer ogni mese circa. #[br]#[br]
			| Tre sono gli obiettivi che puoi raggiungere con i nostri allenamenti: bruciare grasso, creare muscoli ed essere più flessibile con una postura migliore.
			| Ogni scheda punta a raggiungere uno di questi tre obiettivi in modo specifico, così che tu possa programmare i tuoi allenamenti per arrivare al tuo traguardo!

		.mt-6.mb-6
			a.button.is-rounded.is-black(:href="`tel:${formattedPhone}`") CHIAMA ORA
</template>


<script setup lang="ts">
import { gymInfo } from "~/gymInfo";

import { formattedPhone } from '~/sharedMixin';
</script>


<style lang="sass" scoped>
@import @/assets/style/_bulma-variables.sass
@import "../node_modules/bulma/sass/utilities/mixins.sass"
@import "../node_modules/bulma/sass/helpers/visibility.sass"

hr.title-decor
	width: 5.5rem
	height: 3px
	margin: 20px auto
	opacity: 0.4	


.plans
	margin-top: 1.6rem

	@include mobile
		margin-bottom: 3rem
	
	&__title
		display: flex
		align-items: center
		margin-bottom: 0.5rem

		&--text
			font-weight: 500

		&--decor
			flex: 1
			margin-left: 2rem
			color: $grey-light

			@include mobile
				margin-left: 1rem


	&__row
		display: flex
		align-items: center
		margin: 4rem auto

		@include mobile
			align-items: start

.info-box
	font-size: 0.9rem
	font-weight: 500
	text-transform: uppercase
	width: fit-content
	border: 1px solid $grey-light
	background-color: rgba($grey-light, 0.1)
	border-radius: 4px
	padding: 0.3rem 0.6rem
	margin: 2.6rem auto
		
</style>
~/gymInfo