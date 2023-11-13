<template>
  <div class="d-flex align-center justify-center login">
    <v-sheet width="300" class="mx-auto">
      <v-form fast-fail @submit.prevent="login">
        <h3 class="text-center" style="font-size: 24px;">Đăng nhập</h3>
        <div class="d-flex pa-4 btn">
          <a href="#" class="button"><v-img
              src="https://assets.hostinger.com/images/login/google-213cd1c446.svg"></v-img></a>
          <a href="#" class="button ml-5" style="background-color: #1877f2"><v-img
              src="https://assets.hostinger.com/images/login/facebook-7fcb46c06e.svg"></v-img></a>
        </div>
        <div class="mt-4 d-flex">
          <v-divider></v-divider>
          <p class="pa-4">hoặc là</p>
          <v-divider></v-divider>
        </div>

        <v-text-field label="Email" v-model="username" persistent-hint outlined dense></v-text-field>
        <v-text-field label="Mật khẩu" v-model="password" persistent-hint outlined dense></v-text-field>

        <v-btn class="white--text btn-login mb-5" type="submit" color="#000" block x-large>Đăng nhập</v-btn>
        <div class="text-center font-weight-bold">
          <a href="#" class="forgot">Bạn quên mật khẩu?</a>
        </div>
        <div class="text-center font-weight-bold mt-6">
          <a href="#" class="forgot">Bạn chưa là thành viên? Chọn gói <a style="color: blue;">web hosting</a> và bắt đầu ngay!</a>
        </div>
      </v-form>
      <!-- <div class="mt-2">
        <p class="text-body-2">Don't have an account? <a href="#">Sign Up</a></p>
      </div> -->
    </v-sheet>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Footer',

  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login() {

    }
  },
})
</script>

<style scoped>
.login {
  font-family: Muli, sans-serif;
  padding: 50px 0px 50px 0px;
}

.login .btn {
  align-items: center !important;
  justify-content: center !important
}

.login .button {
  border: 1px solid #dadce0;
  border-radius: 4px;
  padding: 12px 24px;
}

.login p {
  margin-top: -29px;
  color: #979797;
  font-size: 17px;
}

.login .btn-login {
  font-size: 14px;
  text-transform: none;
  font-weight: bold;
}

.login .forgot {
  text-decoration: none;
  color: black;
  font-size: 16px;
}
</style>
