<template>
  <div
    class="d-flex align-center justify-center signup"
    style="font-size: 14px"
  >
    <v-sheet width="300" class="mx-auto">
      <v-form ref="form" v-model="formSignUp.valid" lazy-validation fast-fail>
        <v-img
          v-if="size.onsize <= 860"
          width="200"
          height="70"
          style="margin-left: -31px"
          src="../../img/logo.jpg"
        ></v-img>
        <h3 style="font-size: 24px">Đăng ký tài khoản</h3>

        <div class="mt-5">
          <label style="color: #6d7a82" class="font-weight-bold">Email</label>
          <v-text-field
            class="mt-1"
            v-model="formSignUp.value.email"
            :rules="formSignUp.validate.email"
            persistent-hint
            placeholder="exampe@gmail.com"
            outlined
            dense
          ></v-text-field>

          <label style="color: #6d7a82" class="font-weight-bold"
            >Mật khẩu</label
          >
          <v-text-field
            class="mt-1"
            :append-icon="formSignUp.showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="formSignUp.showPassword ? 'text' : 'password'"
            @click:append="formSignUp.showPassword = !formSignUp.showPassword"
            placeholder="Mật khẩu"
            v-model="formSignUp.value.password"
            :rules="formSignUp.validate.password"
            persistent-hint
            outlined
            dense
          ></v-text-field>

          <label style="color: #6d7a82" class="font-weight-bold"
            >Xác nhận mật khẩu</label
          >
          <v-text-field
            class="mt-1"
            :append-icon="
              formSignUp.showPasswordConfirm ? 'mdi-eye' : 'mdi-eye-off'
            "
            :type="formSignUp.showPasswordConfirm ? 'text' : 'password'"
            @click:append="
              formSignUp.showPasswordConfirm = !formSignUp.showPasswordConfirm
            "
            placeholder="Xác nhận mật khẩu"
            v-model="formSignUp.value.confirmPassword"
            :rules="[
              formSignUp.value.password === formSignUp.value.confirmPassword ||
                'Xác nhận mật khẩu chưa đúng',
            ]"
            persistent-hint
            outlined
            dense
          ></v-text-field>

          <v-btn
            depressed
            @click="signup()"
            class="white--text btn-signup mb-5"
            type="submit"
            color="var(--color-5)"
            block
            large
            >Đăng ký</v-btn
          >

          <div class="mt-5" style="color: #6d7a82">
            Bạn đã có tài khoản?
            <router-link style="color: #6d7a82" :to="{ path: 'login' }"
              >Đăng nhập</router-link
            >
          </div>

          <div class="mt-10 d-flex">
            <v-divider></v-divider>
            <p class="pa-4">hoặc là</p>
            <v-divider></v-divider>
          </div>

          <v-btn block outlined x-large class="text-none" disabled>
            <img
              src="https://assets.hostinger.com/images/login/google-213cd1c446.svg"
            />

            <span class="ml-2">Login google</span>
          </v-btn>
        </div>
      </v-form>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer",
  props: ["size"],
  created() {
    document.title = "Đăng ký" + " ~ TaiSanSo";
  },
  data() {
    return {
      formSignUp: {
        valid: true,
        showPassword: false,
        showPasswordConfirm: false,
        value: {
          email: "",
          fullName: "",
          phone: "",
          password: "",
          confirmPassword: "",
        },
        validate: {
          email: [
            (v: any) => !!v || "Vui lòng nhập email",
            (v: any) => /.+@.+\..+/.test(v) || "Email chưa đúng",
          ],
          fullName: [(v: any) => !!v || "Vui lòng nhập họ và tên"],
          phone: [
            (v: any) => !!v || "Vui lòng nhập số điện thoại",
            (v: any) =>
              /(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test(v) ||
              "Số điện thoại chưa đúng",
          ],
          password: [
            (v: any) => !!v || "Vui lòng nhập mật khẩu",
            (v: any) => (v && v.length > 6) || "Mật khẩu phải trên 6 ký tự",
          ],
          confirmPassword: [
            (v: any) => !!v || "Vui lòng nhập xác nhận mật khẩu",
          ],
        },
      },
    };
  },
  methods: {
    signup() {
      let that = this;
      that.$refs.formSignUp as Vue & { validate: () => boolean };
    },
  },
});
</script>

<style lang="scss" scoped>
.signup {
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

  .btn-signup {
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
