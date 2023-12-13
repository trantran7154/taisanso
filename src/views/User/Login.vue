<template>
  <div class="d-flex align-center justify-center login" style="font-size: 14px">
    <v-sheet width="300" class="mx-auto">
      <v-form ref="formLogin" v-model="formLogin.valid" lazy-validation fast-fail>
        <v-img v-if="size.onsize <= 860" width="200" height="70" style="margin-left: -31px"
          src="../../img/logo.jpg"></v-img>

        <h3 style="font-size: 24px">Đăng nhập</h3>

        <p>Chào mừng bạn đến với taisanso!</p>

        <v-alert v-if="message" class="mt-5" style="border: 1px solid red; font-size: 12px" border="right" colored-border
          type="error" elevation="0">
          {{ message }}
        </v-alert>

        <div class="mt-5">
          <label style="color: #6d7a82" class="font-weight-bold">Email</label>
          <v-text-field class="mt-2" placeholder="exampe@gmail.com" v-model="formLogin.value.email"
            :rules="formLogin.validate.email" persistent-hint outlined></v-text-field>

          <div style="color: #6d7a82">
            <!-- <router-link
              style="color: #6d7a82"
              :to="{ path: '/forgot-password' }"
              >Quên mật khẩu?</router-link
            > -->
          </div>

          <v-btn class="white--text btn-login mb-5 mt-3" color="var(--color-5)" block depressed large @click="login()"
            :loading="isLoading">Đăng nhập</v-btn>

          <!-- <div class="mt-5" style="color: #6d7a82">
            Bạn chưa có tài khoản?
            <router-link style="color: #6d7a82" :to="{ path: '/sign-up' }"
              >Đăng ký</router-link
            >
          </div> -->

          <div class="mt-10 d-flex">
            <v-divider></v-divider>
            <span class="pa-4 or">hoặc là</span>
            <v-divider></v-divider>
          </div>

          <v-btn block outlined x-large class="text-none" disabled>
            <img src="https://assets.hostinger.com/images/login/google-213cd1c446.svg" />

            <span class="ml-2">Login google</span>
          </v-btn>
        </div>
      </v-form>
    </v-sheet>
  </div>
</template>

<script>
import Vue from "vue";
import authApi from "@/api/auth.api";

export default Vue.extend({
  name: "Footer",
  created() { },
  props: ["size", "user"],
  data() {
    return {
      isLoading: false,
      isError: false,
      message: "",
      formLogin: {
        valid: true,
        showPassword: false,
        value: {
          email: "",
        },
        validate: {
          email: [
            (v) => !!v || "Vui lòng nhập email",
            (v) => /.+@.+\..+/.test(v) || "Email chưa đúng",
          ],
        },
      },
    };
  },
  methods: {
    async login() {
      let that = this;
      that.isLoading = true;
      const valid = that.$refs.formLogin.validate();

      if (valid) {
        const login = await authApi.Login(that.formLogin.value.email);

        if (login.status == 200) {
          localStorage.setItem("email", that.formLogin.value.email);
          window.location.href = "/verify";
        } else {
          that.message = login.message;
        }
      }

      that.isLoading = false;
    },
  },
});
</script>

<style lang="scss" scoped>
.login {
  font-family: Muli, sans-serif;
  padding: 50px 0px 50px 0px;
  width: 380px;
  height: 500px;
  border: 1px solid #CCC;
  margin: 30px auto;
  border-radius: 20px;

  p {
    white-space: nowrap;
    overflow: hidden;
    font-family: 'Source Code Pro', monospace;
    font-size: 17px;
    color: #979797;
  }

  /* Animation */
  p {
    animation: animated-text 2s steps(30, end) 0s 1 normal both;
  }

  /* text animation */

  @keyframes animated-text {
    from {
      width: 0;
    }

    to {
      width: 100%;
    }
  }

  .btn {
    align-items: center !important;
    justify-content: center !important;
  }

  .button {
    border: 1px solid #dadce0;
    border-radius: 4px;
    padding: 12px 24px;
  }

  .or {
    margin-top: -29px;
    color: #979797;
    font-size: 17px;
  }

  .btn-login {
    font-size: 14px;
    text-transform: none;
    font-weight: bold;
  }
}
</style>
