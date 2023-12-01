<template>
  <v-tooltip top max-width="300">
    <template v-slot:activator="{ on, attrs }">
      <v-icon style="cursor: pointer" v-bind="attrs" v-on="on" size="12"
        >fi fi-rr-info</v-icon
      >
    </template>
    <span>{{ content }}</span>
  </v-tooltip>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["content"],
  data: () => ({}),
  components: {},
  methods: {},
});
</script>
