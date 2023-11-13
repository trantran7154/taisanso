<template>
  <div class="slider">
    <vueper-slides
      class="no-shadow"
      :visible-slides="3"
      slide-multiple
      :gap="1"
      :slide-ratio="1 / 6"
      :autoplay="true"
      :arrows="false"
      :dragging-distance="300"
      :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
    >
      <vueper-slide
        style="border-radius: 10px"
        v-for="item in items"
        :key="item.text"
        :image="item.url"
      >
        <template #arrow-left>
          <i class="icon icon-arrow-left" />
        </template>

        <template #arrow-right>
          <i class="icon icon-arrow-right" />
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import Vue from "vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";

export default Vue.extend({
  props: ["size"],
  components: {
    VueperSlides,
    VueperSlide,
  },
  data: () => ({
    items: [
      {
        text: "vuetify-loader",
        url: slider1,
      },
      {
        text: "vuetify-loader",
        url: slider2,
      },
      {
        text: "vuetify-loader",
        url: slider3,
      },
      {
        text: "vuetify-loader",
        url: slider3,
      },
      {
        text: "vuetify-loader",
        url: slider1,
      },
      {
        text: "vuetify-loader",
        url: slider2,
      },
    ],
  }),
});
</script>

<style lang="scss" scoped>
.slider {
  margin-top: -40px;
  padding: 0px 100px;
}
</style>
