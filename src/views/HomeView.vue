<template>
  <div>
    <Bannerhome :size="size" />
    <Sliderhome :size="size" />
    <ProductHome :size="size" />
  </div>
</template> 

<script lang="ts">
import Vue from "vue";
import Bannerhome from "../components/home/Banner.vue";
import Sliderhome from "../components/home/Slider.vue";
import ProductHome from "../components/home/Product.vue";

export default Vue.extend({
  name: "Home",
  props: ["size"],
  components: {
    Bannerhome,
    Sliderhome,
    ProductHome
  },
});
</script>
