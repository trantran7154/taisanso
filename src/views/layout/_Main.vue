<template>
  <v-app id="inspire" v-resize="onResize">
    <HeaderComponent :color="color" :user="user" :size="size" />

    <v-main>
      <div style="padding: 10px 10px">
        <router-view
          @snackbarEmit="snackbar = $event"
          :color="color"
          :user="user"
          :size="size"
        />
      </div>
    </v-main>

    <v-snackbar v-model="snackbar.snackbar" :timeout="timeout">
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          v-if="snackbar.status == 'error'"
          color="red"
          text
          v-bind="attrs"
          @click="snackbar.snackbar = false"
        >
          Close
        </v-btn>

        <v-btn
          v-else-if="snackbar.status == 'success'"
          color="green"
          text
          v-bind="attrs"
          @click="snackbar.snackbar = false"
        >
          Close
        </v-btn>

        <v-btn
          v-else
          color="yellow"
          text
          v-bind="attrs"
          @click="snackbar.snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import HeaderComponent from "@/components/main/Header.vue";
import AuthApi from "@/api/auth.api";

export default {
  async created() {
    const user = await AuthApi.GetProfile();

    if (user.status != 200) {
      this.$router.push({
        path: "/login",
      });
    }

    this.user = user.data;
  },
  data: () => ({
    snackbar: {
      snackbar: false,
      text: "My timeout is set to 2000.",
      status: "error",
    },
    timeout: 2000,
    user: {},
    drawer: null,
    color: {
      main: "#004D40",
    },
    size: {
      onsize: 0,
      xs: false,
      sm: false,
      md: false,
      lg: false,
      xl: false,
    },
    windowSize: {
      x: 0,
      y: 0,
    },
  }),
  components: {
    HeaderComponent,
  },
  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
      this.resetOnResize();
      this.size.onsize = this.windowSize.x;
      if (this.windowSize.x < 600) {
        this.size.xs = true;
      } else if (this.windowSize.x < 960) {
        this.size.sm = true;
      } else if (this.windowSize.x < 1264) {
        this.size.md = true;
      } else if (this.windowSize.x < 2104) {
        this.size.lg = true;
      } else {
        this.size.xl = true;
      }
    },
    resetOnResize() {
      this.size = {
        onsize: 0,
        xs: false,
        sm: false,
        md: false,
        lg: false,
        xl: false,
      };
    },
  },
};
</script>

<style>
.v-main {
  font-family: "Maven Pro", sans-serif;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #f5f5f5;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #f5f5f5;
}
</style>
