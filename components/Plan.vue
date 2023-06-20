<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
	timePeriod: Number,
	price: Number,
	colorType: Number,
	iscrizione: Boolean
}>()

const finalColor = computed(() => {
	if (props.colorType && props.colorType === 1)
		return '#E3C98B'
	else if (props.colorType && props.colorType === 2)
		return '#38AAFD'
	else if (props.colorType && props.colorType === 3)
		return '#C2AAB8'
	else
		return ''
})
</script>

<template lang="pug">
.plan
	h5.plan__month(:style="{color: finalColor}") {{ timePeriod }} #[span mes{{ timePeriod === 1 ? 'e' : 'i' }}]
	p.plan__price €{{ price }}
	p.plan__info.is-hidden-mobile(v-show="iscrizione") (ISCRIZIONE INCLUSA)
	p.plan__info.is-hidden-tablet(v-show="iscrizione") (ISCR. INCLUSA)
</template>

<style lang="sass" scoped>
@import @/assets/style/_bulma-variables.sass
@import "../node_modules/bulma/sass/utilities/mixins.sass"
@import "../node_modules/bulma/sass/helpers/visibility.sass"

.plan
	flex: 0 1 calc(25% - 40px)
	text-align: center

	@include mobile
		flex: 0 1 calc(25%)
	

	&__month
		font-size: 1.6rem
		font-weight: 700
		text-transform: uppercase
		white-space: nowrap

		span
			font-size: 1.1rem

	&__price
		font-weight: 500
		font-size: 1.2rem

	&__info
		font-size: 0.6rem
	
		@include tablet	
			letter-spacing: 0.5px
</style>
