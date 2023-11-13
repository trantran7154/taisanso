<template>
  <div>
    <Bannerhome :size="size" />
    <Sliderhome :size="size" />
  </div>
</template> 

<script lang="ts">
import Vue from "vue";
import Bannerhome from "../components/home/Banner.vue";
import Sliderhome from "../components/home/Slider.vue";

export default Vue.extend({
  name: "Home",
  props: ["size"],
  components: {
    Bannerhome,
    Sliderhome,
  },
});
</script>
