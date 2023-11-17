<template>
    <div class="d-flex align-center justify-center signup">
        <v-sheet width="300" class="mx-auto">
            <v-form ref="form" v-model="formSignUp.valid" lazy-validation fast-fail>
                <h3 class="text-center" style="font-size: 24px;">Đăng ký</h3>
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

                <v-text-field label="Email" v-model="formSignUp.value.email" :rules="formSignUp.validate.email"
                    persistent-hint outlined dense></v-text-field>

                <v-text-field label="Họ và tên" v-model="formSignUp.value.fullName" :rules="formSignUp.validate.fullName"
                    persistent-hint outlined dense></v-text-field>

                <v-text-field label="Số điện thoại" v-model="formSignUp.value.phone" :rules="formSignUp.validate.phone"
                    persistent-hint outlined dense></v-text-field>

                <v-text-field :append-icon="formSignUp.showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="formSignUp.showPassword ? 'text' : 'password'"
                    @click:append="formSignUp.showPassword = !formSignUp.showPassword" label="Mật khẩu"
                    v-model="formSignUp.value.password" :rules="formSignUp.validate.password" persistent-hint outlined
                    dense></v-text-field>

                <v-text-field :append-icon="formSignUp.showPasswordConfirm ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="formSignUp.showPasswordConfirm ? 'text' : 'password'"
                    @click:append="formSignUp.showPasswordConfirm = !formSignUp.showPasswordConfirm"
                    label="Xác nhận mật khẩu" v-model="formSignUp.value.confirmPassword"
                    :rules="[(formSignUp.value.password === formSignUp.value.confirmPassword) || 'Xác nhận mật khẩu chưa đúng']"
                    persistent-hint outlined dense></v-text-field>

                <v-btn @click="signup()" class="white--text btn-signup mb-5" type="submit" color="#000" block x-large>Đăng
                    ký</v-btn>
            </v-form>
        </v-sheet>
    </div>
</template>
  
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'Footer',

    data() {
        return {
            formSignUp: {
                valid: true,
                showPassword: false,
                showPasswordConfirm: false,
                value: {
                    email: '',
                    fullName: '',
                    phone: '',
                    password: '',
                    confirmPassword: '',
                },
                validate: {
                    email: [
                        (v: any) => !!v || 'Vui lòng nhập email',
                        (v: any) => /.+@.+\..+/.test(v) || 'Email chưa đúng'
                    ],
                    fullName: [
                        (v: any) => !!v || 'Vui lòng nhập họ và tên',
                    ],
                    phone: [
                        (v: any) => !!v || 'Vui lòng nhập số điện thoại',
                        (v: any) => /(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test(v) || 'Số điện thoại chưa đúng'
                    ],
                    password: [
                        (v: any) => !!v || 'Vui lòng nhập mật khẩu',
                        (v: any) => (v && v.length > 6) || 'Mật khẩu phải trên 6 ký tự',
                    ],
                    confirmPassword: [
                        (v: any) => !!v || 'Vui lòng nhập xác nhận mật khẩu',
                    ],
                },
            }

        }
    },
    methods: {
        signup() {
            let that = this;
            that.$refs.formSignUp as Vue & { validate: () => boolean };
        },
    },
})
</script>
  
<style lang="scss" scoped>
.signup {
    font-family: Muli, sans-serif;
    padding: 50px 0px 50px 0px;

    .btn {
        align-items: center !important;
        justify-content: center !important
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
  