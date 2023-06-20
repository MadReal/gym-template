<template lang="pug">
section.section.section-palestra
	.container
		.wrapper
			.column.is-one-third
				h3.is-size-2.is-color-secondary.has-text-weight-bold Palestra
				p {{ gymInfo.addressLine1 }}, {{ gymInfo.addressLine2 }}
				p.mt-4.mb-4 #[strong Lunedi-Venerdi] 09-21 #[br]           
					| #[strong Sabato] 09:30-15 #[br]
					| #[strong Domenica] Chiuso
				p #[strong Tel.] #[a(:href="`tel:${formattedPhone}`") {{ gymInfo.phone }}] #[br]
					| #[strong Email] #[a.email(:href="`mailto:${gymInfo.email}`") {{ gymInfo.email }}]

			.column.is-two-thirds
				p Pulita, dinamica e professionale, #[strong(style="font-weight: 500") con ambiente tranquillo e cordiale].#[br]#[br]
					| Da oltre vent'anni mette a disposizione degli appassionati del settore, le proprie attrezzature e tutta 
					| l'esperienza di personale qualificato, pronto ad aiutarti nel tuo percorso fitness e nei tuoi allenamenti.#[br]#[br]
				.breadcrumb.mb-0
					ul
						li • Due sale corsi
						li • Ambiente climatizzato
						li • Schede personalizzate
</template>

<script setup lang="ts">
import { gymInfo } from '~/plugins/gym-info';
import { formattedPhone } from '~/sharedMixin';
</script>


<style lang="sass" scoped>
@import @/assets/style/_bulma-variables.sass
@import "../node_modules/bulma/sass/utilities/mixins.sass"

.email
	color: $black
	&:hover
		text-decoration: underline

.section-palestra
	padding: 0
	border-bottom: 4px solid $color-secondary

.wrapper
	display: flex	

	// Styles applied above $tablet
	@include tablet
		align-items: center

	// Styles applied below $tablet
	@include mobile
		flex-direction: column

.column
	padding: 3rem 0 4rem

	@include mobile
		padding: 3rem 2rem

	&:first-child
		border-right: 4px solid $color-secondary
		// Styles applied below $tablet
		@include mobile
			border-right: none
			border-bottom: 4px solid $color-secondary			

	&:last-child
		line-height: 1.8
		// Styles applied below $tablet
		@include tablet
			padding-left: 5rem

ul li
		margin-right: 2rem
		& + li::before
			content: none
</style>
