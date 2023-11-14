<template>
    <div class="d-flex align-center justify-center forgot mt-5">
        <v-sheet width="300" class="mx-auto">
            <v-img src="../../img/forgot-password.png"></v-img>
            <v-form ref="form" v-model="formForgot.valid" lazy-validation fast-fail>
                <h3 class="text-center font-weight-regular mt-5" style="font-size: 24px;">Đặt lại mật khẩu của bạn nếu quên
                    mật khẩu</h3>

                <v-text-field class="mt-4" label="Điền địa chỉ Email" v-model="formForgot.value.email"
                    :rules="formForgot.validate.email" persistent-hint outlined dense></v-text-field>

                <v-btn @click="forgotPassword()" class="white--text btn-forgot mb-5" type="submit" color="#000" block
                    x-large>Gửi tới Email</v-btn>

                <div class="text-center font-weight-bold">
                    <a href="/login" class="forgot" style="color: blue;">Trở lại trang đăng nhập</a>
                </div>
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
            formForgot: {
                valid: true,
                value: {
                    email: '',
                },
                validate: {
                    email: [
                        (v: any) => !!v || 'Vui lòng nhập email',
                        (v: any) => /.+@.+\..+/.test(v) || 'Email chưa đúng'
                    ],
                },
            }

        }
    },
    methods: {
        forgotPassword() {
            let that = this;
            that.$refs.formForgot as Vue & { validate: () => boolean };
        }
    },
})
</script>
  
<style scoped>
.forgot {
    font-family: Muli, sans-serif;
    padding: 50px 0px 50px 0px;
}

.forgot .btn {
    align-items: center !important;
    justify-content: center !important
}

.forgot .button {
    border: 1px solid #dadce0;
    border-radius: 4px;
    padding: 12px 24px;
}

.forgot p {
    margin-top: -29px;
    color: #979797;
    font-size: 17px;
}

.forgot .btn-forgot {
    font-size: 14px;
    text-transform: none;
    font-weight: bold;
}

.forgot .forgot {
    text-decoration: none;
    color: black;
    font-size: 16px;
}
</style>
  