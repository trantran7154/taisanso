<template>
  <div>
    <v-row>
      <v-col cols="12" md="4">
        <div class="pa-2">
          <h4 style="color: #806ce8 ;"># Nạp tiền</h4>
          <div style="padding: 3px 0px">
            <v-divider></v-divider>
          </div>
          <p class="mt-1" style="font-size: 16px;">Số tiền được nạp thêm vào taisanso Balance của bạn.</p>
        </div>
      </v-col>

      <v-col cols="12" md="8">
        <v-card class="elevation-0" style="border-radius: 10px;">
          <div class="pa-6">
            <v-row>
              <v-col cols="12" sm="3">
                <v-btn class="font-weight-bold" rounded
                  style="background: linear-gradient( to right, #6480ef, #7775e8, #806ce8 ); color: white; font-family: system-ui;"
                  block large depressed :to="{ path: '/deposit' }"><v-icon class="mr-1">mdi-tray-arrow-down</v-icon>Nạp
                  tiền</v-btn>
              </v-col>

              <v-col cols="12" sm="3">
                <v-btn class="font-weight-bold"
                  style="border-color:#806ce8; border: 2px solid; color: #806ce8; font-family: system-ui;" rounded
                  outlined large block depressed> <v-icon class="mr-1">mdi-eye</v-icon> Xem khoản nạp</v-btn>
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
}</style>
