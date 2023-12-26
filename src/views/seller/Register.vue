<template>
  <v-container>
    <v-sheet style="border: 1px solid #f5f5f5; border-radius: 10px">
      <div class="pa-4">
        <h2>Thông tin cửa hàng</h2>

        <v-form
          ref="formRegister"
          class="mt-5"
          lazy-validation
          v-model="formRegister.valid"
        >
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="formRegister.value.phone"
                :rules="formRegister.rules.phone"
                required
                color="#7f7fd5"
                persistent-hint
                hint="Vui lòng nhập đúng số điện thoại để taisanso có thể liên hệ bạn lúc cần thiết"
                placeholder="Vui lòng nhập số điện thoại"
                outlined
                label="Số điện thoại"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="formRegister.value.linkFacebook"
                :rules="formRegister.rules.linkFacebook"
                required
                persistent-hint
                hint="Vui lòng cung cấp link Fakebook chính xác"
                placeholder="Vui lòng nhập Fakebook"
                outlined
                label="Fakebook"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="formRegister.value.nameBank"
                :rules="formRegister.rules.nameBank"
                required
                persistent-hint
                hint="Taisanso cần biết chính xác tên ngân hàng của bạn nhầm mục đích chuyển tiền và tính các phí giao dịch"
                placeholder="Vui lòng nhập tên ngân hàng"
                outlined
                label="Tên ngân hàng"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-checkbox
                v-model="formRegister.isApcept"
                label="Chấp nhận thông tin là chính xác"
                color="#7f7fd5"
                hide-details
              ></v-checkbox>
            </v-col>

            <v-col cols="12">
              <v-btn
                :disabled="!formRegister.isApcept"
                @click="register()"
                depressed
                color="#7f7fd5"
                :dark="formRegister.isApcept"
                x-large
                >Đăng ký</v-btn
              >
            </v-col>
          </v-row>
        </v-form>
      </div>
    </v-sheet>

    <v-sheet class="mt-5 text--secondary">
      <ul style="font-size: 15px">
        <li>
          Thông tin này hoàn toàn được bảo mật, được dùng để bên mình liên lạc
          với bên bạn trong những lúc cần thiết (xác thực người bán, khi có
          tranh chấp xảy ra...).
        </li>
        <li>
          Cùng nhau kết nối, hợp tác, cùng phát triển cộng đồng kiếm tiền
          online.
        </li>
        <li>
          <b>Tối ưu hóa</b> <br />Đội ngũ hỗ trợ sẽ liên lạc để giúp bạn tối ưu
          khả năng bán hàng.
        </li>
        <li>
          <b>Đẩy tin nhắn</b> <br />Hãy vào phần thông tin tài khoản (profile),
          cập nhật thêm phần đẩy tin nhắn của khách về Telegram để không bỏ lỡ
          khách nào nhé..
        </li>
        <li>
          <b>Bật bảo mật 2 lớp (2FA)</b> <br />Đây là quy định bắt buộc trước
          khi đăng ký bán hàng, vui lòng cập nhật thêm trong profile.
        </li>
      </ul>
    </v-sheet>
  </v-container>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "register",
  props: ["size"],
  data() {
    return {
      formRegister: {
        valid: true,
        isApcept: false,
        value: {
          phone: "",
          linkFacebook: "",
          nameBank: "",
        },
        rules: {
          phone: [
            (v) => !!v || "Bắt buộc",
            (v) => /(84|0[3|5|7|8|9])+([0-9]{8})\b/ || "Không hợp lệ",
          ],
          linkFacebook: [
            (v) => !!v || "Bắt buộc",
            (v) =>
              /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/.test(
                v
              ) || "Không hợp lệ",
          ],
          nameBank: [
            (v) => !!v || "Bắt buộc"
          ],
        },
      },
    };
  },
  components: {},
  methods: {
    register() {
      const valid = this.$refs.formRegister.validate();
      console.log(valid);
      if (valid) {
        alert("asasasa");
      }
    },
  },
});
</script>

<style lang="scss" scoped></style>
