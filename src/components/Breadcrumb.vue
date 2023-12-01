<template>
  <div style="padding: 20px 0px">
    <v-btn small depressed outlined class="text-none">
      <v-icon size="20">i fi-rr-arrow-small-left</v-icon>
      <span>{{ content_back }}</span>
    </v-btn>
    
    <h2 style="padding: 10px 0px">{{ name }}</h2>

    <v-divider></v-divider>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["name", "url_back", "content_back"],
  data: () => ({}),
  components: {},
  methods: {},
});
</script>
