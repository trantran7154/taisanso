<template>
  <div
    class="d-flex align-center justify-center forgot mt-5"
    style="font-size: 14px"
  >
    <v-sheet width="300" class="mx-auto">
      <!-- <v-img src="../../img/forgot-password.png"></v-img> -->

      <v-img
        v-if="size.onsize <= 860"
        width="200"
        height="70"
        style="margin-left: -31px"
        src="../../img/logo.jpg"
      ></v-img>

      <h3 style="font-size: 24px">Quên mật khẩu?</h3>
      <div class="text--secondary mt-4">
        Chúng tôi sẽ gửi hướng dẫn cài đặt lại qua email của bạn
      </div>
      <v-form ref="form" v-model="formForgot.valid" lazy-validation fast-fail>
        <!-- <h3
          class="text-center font-weight-regular mt-5"
          style="font-size: 24px"
        >
          Đặt lại mật khẩu của bạn nếu quên mật khẩu
        </h3> -->

        <div class="mt-4">
          <label style="color: #6d7a82" class="font-weight-bold">Email</label>
          <v-text-field
            label="example@gmail.com"
            v-model="formForgot.value.email"
            :rules="formForgot.validate.email"
            persistent-hint
            outlined
            dense
          ></v-text-field>

          <v-btn
            @click="forgotPassword()"
            class="white--text btn-forgot mb-5"
            type="submit"
            color="var(--color-5)"
            block
            depressed
            large
            >Hướng dẫn qua email</v-btn
          >

          <div style="color: #6d7a82">
            <router-link style="color: #6d7a82" :to="{ path: '/login' }"
              >Quay lại Đăng nhập?</router-link
            >
          </div>

          <!-- <div class="text-center font-weight-bold">
            <a href="/login" class="forgot" style="color: blue"
              >Trở lại trang đăng nhập</a
            >
          </div> -->
        </div>
      </v-form>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer",
  created() {
    document.title = "Quên mật khẩu" + " ~ TaiSanSo";
  },
  props: ["size"],
  data() {
    return {
      formForgot: {
        valid: true,
        value: {
          email: "",
        },
        validate: {
          email: [
            (v: any) => !!v || "Vui lòng nhập email",
            (v: any) => /.+@.+\..+/.test(v) || "Email chưa đúng",
          ],
        },
      },
    };
  },
  methods: {
    forgotPassword() {
      let that = this;
      that.$refs.formForgot as Vue & { validate: () => boolean };
    },
  },
});
</script>

<style lang="scss" scoped>
.forgot {
  font-family: Muli, sans-serif;
  padding: 50px 0px 50px 0px;

  .btn {
    align-items: center !important;
    justify-content: center !important;
  }

  .button {
    border: 1px solid #dadce0;
    border-radius: 4px;
    padding: 12px 24px;
  }

  p {
    margin-top: -29px;
    color: #979797;
    font-size: 17px;
  }

  .btn-forgot {
    font-size: 14px;
    text-transform: none;
    font-weight: bold;
  }

  .forgot {
    text-decoration: none;
    color: black;
    font-size: 16px;
  }
}
</style>
