<template>
    <div class="d-flex align-center justify-center changepassword">
        <v-sheet width="300" class="mx-auto">
            <v-form ref="form" v-model="formChangePassword.valid" lazy-validation fast-fail>
                <h3 class="text-center mb-5" style="font-size: 24px;">Đổi mật khẩu</h3>

                <v-text-field label="Mật khẩu cũ" v-model="formChangePassword.value.passwordOld"  :append-icon="formChangePassword.showPasswordOld ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="formChangePassword.showPasswordOld ? 'text' : 'password'"
                    @click:append="formChangePassword.showPasswordOld = !formChangePassword.showPasswordOld" 
                    :rules="formChangePassword.validate.passwordOld" persistent-hint outlined dense></v-text-field>

                <v-text-field :append-icon="formChangePassword.showPasswordNew ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="formChangePassword.showPasswordNew ? 'text' : 'password'"
                    @click:append="formChangePassword.showPasswordNew = !formChangePassword.showPasswordNew" label="Mật khẩu"
                    v-model="formChangePassword.value.passwordNew" :rules="formChangePassword.validate.passwordNew"
                    persistent-hint outlined dense></v-text-field>

                <v-text-field :append-icon="formChangePassword.showPasswordNewConfirm ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="formChangePassword.showPasswordNewConfirm ? 'text' : 'password'"
                    @click:append="formChangePassword.showPasswordNewConfirm = !formChangePassword.showPasswordNewConfirm"
                    label="Xác nhận mật khẩu" v-model="formChangePassword.value.confirmPasswordNew"
                    :rules="[(formChangePassword.value.passwordNew === formChangePassword.value.confirmPasswordNew) || 'Xác nhận mật khẩu chưa đúng']"
                    persistent-hint outlined dense></v-text-field>

                <v-btn @click="changePassword()" class="white--text btn-change-password mb-5" type="submit" color="#000"
                    block x-large>Cập nhật</v-btn>
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
    font-family: Muli, sans-serif;
    padding: 50px 0px 50px 0px;

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
  