<template lang="pug">
span(v-if="icon" :class="'icon-svg ' + iconName" v-html="icon")
</template>

<script setup lang="ts">
const props = defineProps<{ iconName: string }>()

// Auto-load icons
const icons = Object.fromEntries(
    Object.entries(import.meta.glob('~/assets/icons/*.svg', { as: 'raw' })).map(
        ([key, value]) => {
            const filename = key.split('/').pop()!.split('.').shift()
            return [filename, value]
        },
    ),
)

// Lazily load the icon
const icon = props.iconName && (await icons?.[props.iconName]?.())
</script>