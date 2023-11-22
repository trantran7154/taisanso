<template>
  <div class="slider" :style="`padding: 0px ${size.onsize < 1260 ? size.onsize < 640 ? 10 : 50 : 100}px;`">
    <vueper-slides
      class="no-shadow"
      :visible-slides="size.onsize < 1260 ? size.onsize < 640 ? 1 : 2 : 3"
      slide-multiple
      :gap="1"
      :slide-ratio="size.onsize < 1260 ? size.onsize < 640 ?  1 / 2 : 2 / 8 : 1 / 6"
      :autoplay="true"
      :dragging-distance="300"
    >
      <vueper-slide
        style="border-radius: 10px"
        v-for="item in items"
        :key="item.text"
        :image="item.url"
      >
        <template #arrow-left>
          <v-btn> sasas </v-btn>
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
        text: "vuetify-loader 1",
        url: slider1,
      },
      {
        text: "vuetify-loader 2",
        url: slider2,
      },
      {
        text: "vuetify-loader 3",
        url: slider3,
      },
      {
        text: "vuetify-loader 4",
        url: slider3,
      },
      {
        text: "vuetify-loader 5",
        url: slider1,
      },
      {
        text: "vuetify-loader 6",
        url: slider2,
      },
    ],
  }),
});
</script>

<style lang="scss" scoped>
.slider {
  margin-top: -40px;
}
</style>
