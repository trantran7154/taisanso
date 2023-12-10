<template>
  <div>
    <v-row>
      <v-col cols="12" md="4" lg="4">
        <div v-if="loading.diemdanh">
          <v-skeleton-loader
            style="border-radius: 2px"
            type="image, list-item-two-line, list-item-two-line, list-item-two-line, list-item-two-line"
            height="460"
          ></v-skeleton-loader>
        </div>
        <v-card v-else class="bg-r" style="height: 460px">
          <div>
            <div class="center white--text">
              <h3 class="mt-4">Điểm danh nhận TSS xu</h3>
            </div>
            <div class="pa-2">
              <v-sheet style="padding: 20px; border-radius: 5px">
                <p style="font-size: 12px" class="text--secoddary">
                  Bạn sẽ nhận được đồng TSS này hàng ngày, bạn có thể sử dụng để
                  mua voucher, dịch vụ, quy đổi rút tiền,... và được bảo mật bởi
                  công nghệ Blockchain.
                </p>

                <v-row no-gutters>
                  <v-col cols="4" sm="3" md="3" v-for="n in 7" :key="n">
                    <div class="pa-1">
                      <div
                        style="background: #f5f5f5; border-radius: 10px"
                        class="pa-3"
                      >
                        <div class="text-center pa-1" style="font-size: 10px">
                          <div class="font-weight-bold">+100</div>

                          <center class="mt-1">
                            <v-img
                              width="25"
                              src="@/assets/tss-tss.png"
                            ></v-img>
                          </center>
                        </div>
                      </div>
                      <div
                        class="text-center"
                        style="font-size: 12px"
                        v-if="n != 1"
                      >
                        Ngày {{ n }}
                      </div>
                      <div class="text-center" style="font-size: 12px" v-else>
                        Hôm nay
                      </div>
                    </div>
                  </v-col>
                </v-row>

                <div class="center">
                  <v-btn dark color="#7f7fd5" class="mt-3" rounded depressed
                    >Nhận ngay 100 TSS xu</v-btn
                  >
                </div>
              </v-sheet>
            </div>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" md="8" lg="8">
        <div>
          <div v-if="loading.slider">
            <v-skeleton-loader
              style="border-radius: 0px"
              type="image, list-item-two-line"
              height="335"
            ></v-skeleton-loader>
          </div>

          <div v-else>
            <vueper-slides
              autoplay
              :dragging-distance="1"
              fade
              :slide-ratio="0.9 / 2"
              :touchable="false"
            >
              <vueper-slide
                style="background-size: 100% 100%; border-radius: 8px"
                v-for="(slide, i) in slides"
                :key="i"
                :image="slide.src"
              />
            </vueper-slides>
          </div>
        </div>

        <div>
          <div v-if="loading.menu">
            <v-skeleton-loader
              class="mt-2"
              type="image"
              height="118"
            ></v-skeleton-loader>
          </div>

          <div v-else>
            <v-row class="mt-2" style="font-size: 12px">
              <v-col cols="3" v-for="n in 4" :key="n">
                <v-card
                  class="text-center"
                  style="
                    box-shadow: 0px 0px 0px 0px;
                    border: 1px solid #f5f5f5;
                    border-radius: 8px;
                  "
                >
                  <div style="padding: 13px 0px">
                    <center>
                      <v-img width="50" src="@/assets/gift-box.png"></v-img>
                    </center>
                    <h4 class="mt-3">Đổi quà</h4>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>

      <v-col cols="12">
        <div v-if="loading.nhiemvu">
          <v-skeleton-loader
            type="list-item-two-line, image, list-item-two-line, image"
          ></v-skeleton-loader>
        </div>

        <div v-else>
          <div>
            <div>
              <table style="margin-left: -2px">
                <tr>
                  <td>
                    <v-img width="30" src="@/assets/mission.png"></v-img>
                  </td>
                  <td><h3 class="mt-1 ml-2">Nhiệm vụ</h3></td>
                </tr>
              </table>
            </div>
          </div>

          <p class="text--secondary mt-1" style="font-size: 14px">
            Hoàn thành nhiệm vụ để nhận nhiều đồng TSS xu, nhiệm vụ sẽ cập nhật
            hàng ngày và làm mới sau 24h. Nhiệm vụ VIP sẽ chỉ làm 1 lần duy nhất
            và thường sẽ nhiều TSS xu, TSS xu là một token trên nền tảng
            Blockchain nên rất an toàn và thanh toán nhanh chóng.
          </p>

          <div style="margin-top: -10px">
            <v-radio-group v-model="category" row>
              <v-radio color="#7f7fd5" value="1" label="Tất cả"></v-radio>
              <v-radio
                color="#7f7fd5"
                value="2"
                label="Nhiệm vụ hàng ngày"
              ></v-radio>
              <v-radio color="#7f7fd5" value="3" label="Nhiệm vụ VIP"></v-radio>
            </v-radio-group>
          </div>

          <v-row>
            <v-col cols="12" sm="4" md="3" lg="3" v-for="n in 10" :key="n">
              <v-card style="font-size: 13px">
                <div class="pa-4">
                  <div class="font-weight-bold">
                    Tích lũy 1000 TSS xu và quy đổi xu thành quà tiền rút
                    <span class="text--secondary">(1000/9)</span>
                  </div>

                  <div style="padding: 10px 0px">
                    <v-progress-linear
                      color="#7f7fd5"
                      rounded
                      :value="Math.floor(Math.random() * 101)"
                    ></v-progress-linear>
                  </div>

                  <v-row>
                    <v-col cols="6">
                      <div
                        style="margin-top: 5px; color: #7f7fd5"
                        class="font-weight-bold price"
                      >
                        <ul style="margin-left: -25px; font-size: 16px">
                          <li>10.000</li>
                          <li style="margin-top: 3px">
                            <img
                              class="ml-1"
                              width="18"
                              src="@/assets/tss-tss.png"
                            />
                          </li>
                        </ul>
                      </div>
                    </v-col>

                    <v-col cols="6">
                      <v-btn
                        disabled
                        color="#7f7fd5"
                        depressed
                        small
                        class="float-end"
                      >
                        Nhận
                      </v-btn>
                    </v-col>
                  </v-row>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-col>

      <v-col cols="12">
        <div v-if="loading.gift">
          <v-skeleton-loader
            type="list-item-two-line, image, list-item-two-line, image"
          ></v-skeleton-loader>
        </div>

        <div v-else>
          <div>
            <div>
              <table>
                <tr>
                  <td>
                    <v-img width="30" src="@/assets/gift-box.png"></v-img>
                  </td>
                  <td><h3 class="mt-2 ml-2">Đổi quà bằng TSS xu</h3></td>
                </tr>
              </table>
            </div>
          </div>

          <p class="text--secondary mt-1" style="font-size: 14px">
            Các phần thưởng Quy đổi bao gồm dịch vụ, sản phẩm số, quần, áo, vật
            phẩm, thẻ điện thoại, voucher,...từ tài sản số. Bạn có thể dùng TSS
            xu để quy đổi các vật phẩm bên dưới. Các vật phẩm sẽ có giới hạn và
            phải mất 1 tuần để tài sản số cập nhật phần quà mới
          </p>

          <div style="margin-top: -10px">
            <v-radio-group v-model="category" row>
              <v-radio color="#7f7fd5" value="1" label="Tất cả"></v-radio>
              <v-radio color="#7f7fd5" value="2" label="Dịch vụ"></v-radio>
              <v-radio color="#7f7fd5" value="3" label="Sản phẩm số"></v-radio>
              <v-radio
                color="#7f7fd5"
                value="4"
                label="Thẻ điện thoại"
              ></v-radio>
            </v-radio-group>
          </div>

          <v-row>
            <v-col cols="12" sm="6" md="4" lg="3" v-for="n in 10" :key="n">
              <v-card style="font-size: 16px">
                <v-img
                  src="https://cdn.coccoc.com/points/1621936053_TheDienThoai10K.jpg"
                ></v-img>
                <div class="pa-4">
                  <div class="font-weight-bold text--secondary">10/1000</div>
                  <div class="font-weight-bold">Thẻ điện thoại 10K</div>
                  <p class="text--secondary">Hiệu lực: 14/05/21 - 31/12/23</p>
                  <v-row>
                    <v-col cols="6">
                      <div
                        style="margin-top: 5px; color: #7f7fd5"
                        class="font-weight-bold price"
                      >
                        <ul style="margin-left: -25px">
                          <li>10.000</li>
                          <li style="margin-top: 3px">
                            <img
                              class="ml-1"
                              width="18"
                              src="@/assets/tss-tss.png"
                            />
                          </li>
                        </ul>
                      </div>
                    </v-col>

                    <v-col cols="6">
                      <v-btn
                        dark
                        color="#7f7fd5"
                        depressed
                        small
                        class="float-end"
                      >
                        Đổi
                      </v-btn>
                    </v-col>
                  </v-row>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-col>

      <v-col cols="12">
        <div v-if="loading.claim">
          <v-skeleton-loader
            type="list-item-two-line, image, list-item-two-line, image"
          ></v-skeleton-loader>
        </div>

        <div v-else>
          <div>
            <div>
              <table>
                <tr>
                  <td>
                    <v-img width="30" src="@/assets/swap.png"></v-img>
                  </td>
                  <td><h3 class="mt-2 ml-2">Quy đổi TSS xu</h3></td>
                </tr>
              </table>
            </div>
          </div>

          <p class="text--secondary mt-1" style="font-size: 14px">
            TSS xu là một token do taisanso phát hành và có giá trị quy đổi ra
            tiền mặt, tỷ giá có thể thay đổi tùy thuộc vào mức độ sử dụng từ các
            người dùng. Quá trình thực hiện chuyển đổi và rút điều được ghi chép
            trên nền tảng Blockchain.
          </p>

          <div>
            <div style="font-size: 15px; color: #d50000">
              Rút tối thiểu 500 TSS và tối đa 20.000 TSS
            </div>
            <v-row>
              <v-col cols="12" lg="5">
                <v-text-field
                  v-model="tss"
                  hint="1 TSS ~ 0.002$"
                  persistent-hint
                  placeholder="Vui lòng nhập số TSS xu"
                  outlined
                  dense
                >
                  <template v-slot:append>
                    <v-btn
                      dark
                      color="#7f7fd5"
                      style="margin-top: -2px"
                      small
                      depressed
                      >Tối đa</v-btn
                    >
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="12" lg="5">
                <v-text-field
                  :hint="`${tss * 0.02}$ ~ ${tss * 0.02 * 24000}vnd`"
                  persistent-hint
                  :value="tss * 0.02"
                  disabled
                  outlined
                  dense
                >
                </v-text-field>
              </v-col>

              <v-col cols="12" lg="2">
                <v-btn block depressed height="39" color="#7f7fd5" dark
                  >Quy đổi</v-btn
                >
              </v-col>
            </v-row>
          </div>

           <VueTradingView class="mt-2" :options="options" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import VueTradingView from "vue-trading-view";

import Vue from "vue";
import imgXu1 from "@/assets/xu1.jpg";

export default Vue.extend({
  name: "xu",
  components: { VueperSlides, VueperSlide, VueTradingView },
  props: ["size"],
  data() {
    return {
      options: {
        width: "100%",
      },
      loading: {
        diemdanh: true,
        slider: true,
        menu: true,
        nhiemvu: true,
        gift: true,
        claim: true,
      },
      category: "1",
      model: 0,
      tss: 0,
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
      slides: [
        {
          src: imgXu1,
        },
        {
          src: imgXu1,
        },
        {
          src: imgXu1,
        },
      ],
    };
  },
  created() {
    setTimeout((x) => {
      this.loading.diemdanh = false;
      this.loading.slider = false;
      this.loading.menu = false;
      this.loading.nhiemvu = false;
      this.loading.gift = false;
      this.loading.claim = false;
    }, 1000);
  },
});
</script>

<style lang="scss" scoped>
.bg-r {
  border-radius: 5px;
  box-shadow: 0px 0px 0px 0px !important;
  background: #7f7fd5; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #91eae4,
    #86a8e7,
    #7f7fd5
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #91eae4,
    #86a8e7,
    #7f7fd5
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.center {
  display: flex;
  justify-content: center;
  align-content: center;
}

.price ul li {
  float: left;
  list-style: none;
}
</style>
