<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  colorType: Number,
}>()

const finalColor = computed(() => {
  if (props.colorType && props.colorType === 1)
    return '#E3C98B'
  else if (props.colorType && props.colorType === 2)
    return '#38AAFD'
  else
    return '#C2AAB8'
})

</script>

<template>
  <svg width="48px" height="80px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Desktop" transform="translate(-389.000000, -1259.000000)" :fill="finalColor">
      <g id="Section-Gli-Abbonamenti" transform="translate(131.000000, 1101.000000)">
        <g id="Group-3" transform="translate(101.000000, 118.000000)">
          <g id="Plans-UOMINI" transform="translate(0.000000, 40.000000)">
            <polygon id="Rectangle" points="192 -1.77635684e-14 205 -1.77635684e-14 170 80 157 80"></polygon>
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>
