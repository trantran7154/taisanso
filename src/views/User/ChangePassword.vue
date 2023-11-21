<template>
    <div class="d-flex align-center justify-center changepassword">
        <v-sheet width="350" class="mx-auto frame">
            <v-form ref="form" v-model="formChangePassword.valid" lazy-validation fast-fail>
                <h3 class="text-center" style="font-size: 24px;">Đổi mật khẩu</h3>
                <center>
                    <svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21 8.5V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V11C3 12.1046 3.89543 13 5 13H10.875M19 14V12C19 10.8954 18.1046 10 17 10C15.8954 10 15 10.8954 15 12V14M14 20H20C20.5523 20 21 19.5523 21 19V15C21 14.4477 20.5523 14 20 14H14C13.4477 14 13 14.4477 13 15V19C13 19.5523 13.4477 20 14 20Z"
                            stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <circle cx="7.5" cy="8.5" r="1.5" fill="#000000" />
                        <circle cx="12" cy="8.5" r="1.5" fill="#000000" />
                    </svg>
                </center>
                <v-text-field label="Mật khẩu cũ" v-model="formChangePassword.value.passwordOld"
                    :append-icon="formChangePassword.showPasswordOld ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="formChangePassword.showPasswordOld ? 'text' : 'password'"
                    @click:append="formChangePassword.showPasswordOld = !formChangePassword.showPasswordOld"
                    :rules="formChangePassword.validate.passwordOld" persistent-hint outlined dense></v-text-field>

                <v-text-field :append-icon="formChangePassword.showPasswordNew ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="formChangePassword.showPasswordNew ? 'text' : 'password'"
                    @click:append="formChangePassword.showPasswordNew = !formChangePassword.showPasswordNew"
                    label="Mật khẩu" v-model="formChangePassword.value.passwordNew"
                    :rules="formChangePassword.validate.passwordNew" persistent-hint outlined dense></v-text-field>

                <v-text-field :append-icon="formChangePassword.showPasswordNewConfirm ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="formChangePassword.showPasswordNewConfirm ? 'text' : 'password'"
                    @click:append="formChangePassword.showPasswordNewConfirm = !formChangePassword.showPasswordNewConfirm"
                    label="Xác nhận mật khẩu" v-model="formChangePassword.value.confirmPasswordNew"
                    :rules="[(formChangePassword.value.passwordNew === formChangePassword.value.confirmPasswordNew) || 'Xác nhận mật khẩu chưa đúng']"
                    persistent-hint outlined dense></v-text-field>

                <v-btn @click="changePassword()" class="white--text btn-change-password mb-5 mt-1" type="submit"
                    color="#000" block x-large>Cập nhật</v-btn>
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
            formChangePassword: {
                valid: true,
                showPasswordOld: false,
                showPasswordNew: false,
                showPasswordNewConfirm: false,
                value: {
                    passwordOld: '',
                    passwordNew: '',
                    confirmPasswordNew: '',
                },
                validate: {
                    passwordOld: [
                        (v: any) => !!v || 'Vui lòng nhập mật khẩu cũ',
                        (v: any) => (v && v.length > 6) || 'Mật khẩu cũ phải trên 6 ký tự',
                    ],
                    passwordNew: [
                        (v: any) => !!v || 'Vui lòng nhập mật khẩu mới',
                        (v: any) => (v && v.length > 6) || 'Mật khẩu mới phải trên 6 ký tự',
                    ],
                    confirmPasswordNew: [
                        (v: any) => !!v || 'Vui lòng nhập xác nhận mật khẩu mới',
                    ],
                },
            }

        }
    },
    methods: {
        changePassword() {
            let that = this;
            that.$refs.formChangePassword as Vue & { validate: () => boolean };
        },
    },
})
</script>
  
<style lang="scss" scoped>
.changepassword {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 80px 0px 80px 0px;

    .frame {
        border: 1px solid #CFD8DC;
        padding: 30px;
        border-radius: 10px;
        box-shadow: #B0BEC5 4.95px 5.95px 2.6px;
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

    .btn-change-password {
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

.v-messages__message {
    line-height: normal;
    word-break: break-word;
    overflow-wrap: break-word;
    word-wrap: break-word;
    -webkit-hyphens: auto;
    hyphens: auto;
}
</style>
  