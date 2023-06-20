<template lang="pug">
.view
    Navbar
    Header
    SectionPalestra
    SectionPrezzi
    SectionTipiAllenamento
    SectionCorsi(v-show="gymInfo.courses.length > 0")
    SectionContact
    Footer
</template>


<script setup lang="ts">
import { gymInfo } from "~/gymInfo";
</script>