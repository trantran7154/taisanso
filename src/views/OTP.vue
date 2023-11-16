<template>
    <v-sheet border class="pt-8 pb-12 px-6 ma-4 mx-auto" max-width="350" width="100%"
        style="background-image: url('https://wapi.lunaproxy.com/static/index/img/help/help_search_bg.png');">
        <h3 class="text-h6 mb-1">Xác minh bằng số điện thoại</h3>

        <div class="text-body-2 font-weight-light">
            Nhập mã chúng tôi vừa gửi đến điện thoại di động của bạn <span class="font-weight-black text-primary">0123 456
                789</span>
        </div>
        <v-otp-input v-model="otp" type="number" class="mt-3" placeholder="0" length="6" :disabled="loading"
            @finish="onFinish"></v-otp-input>
        <v-overlay absolute :value="loading">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </v-overlay>

        <v-snackbar v-model="snackbar" top :color="snackbarColor" :timeout="3000" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            <v-icon>{{ icon }}</v-icon> {{ text }}

            <template v-slot:action="{ attrs }">
                <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
                    Đóng
                </v-btn>
            </template>
        </v-snackbar>
        <v-divider class="mt-3 mb-6"></v-divider>

        <div class="mb-2 text-body-2">
            Chưa nhận được <strong>mã</strong> xác minh?
        </div>

        <v-btn class="font-weight-bold" color="dark" small outlined @click="otp = ''"
            style="text-transform: none; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">Gửi lại</v-btn>
    </v-sheet>
</template>

<script lang="ts">
export default {
    data: () => ({
        otp: '',
        text: '',
        icon: '',
        loading: false,
        snackbar: false,
        snackbarColor: 'default',
        notification: '',
        expectedOtp: '123456',
    }),
    methods: {
        onFinish(rsp: any) {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
                this.snackbarColor = (rsp === this.expectedOtp) ? 'success' : 'error';
                this.notification = (rsp === this.expectedOtp) ? 'Xác minh thành công' : 'Mã xác minh chưa đúng';
                this.icon = (rsp === this.expectedOtp) ? 'mdi-check-circle-outline' : 'mdi-alert-circle-outline';
                this.text = `${this.notification}`;
                this.snackbar = true;
            }, 2000)
        },
    },
}
</script>