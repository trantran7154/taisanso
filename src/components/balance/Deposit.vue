<template>
  <div>
    <v-row>
      <v-col cols="12" md="4">
        <h4>Nạp tiền</h4>
        <p>Số tiền được nạp thêm vào taisanso Balance của bạn.</p>
      </v-col>

      <v-col cols="12" md="8">
        <v-card class="elevation-0 border" style="border-radius: 10px">
          <div class="pa-6">
            <v-row>
              <v-col cols="12" sm="3">
                <v-btn color="primary" block  depressed :to="{path: '/deposit'}">Nạp tiền</v-btn>
              </v-col>

              <v-col cols="12" sm="3">
                <v-btn block  depressed>Xem khoản nạp</v-btn>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>
    </v-row>
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

<style scoped>
.border {
  border: 1px solid #f5f5f5;
}
</style>
