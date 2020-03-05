<template>
  <v-container
    grid-list-xl
    fluid
    style="background: linear-gradient(to right, #24243e, #141E30, #0f0c29);"
  >
    <v-row align="center" class="mx-auto white--text" justify="center">
      <v-col md="10" xs="10" sm="10">
        <v-chip text dark color="transparent">
          <v-icon small color="teal" left>fa-sort</v-icon>过滤检索
        </v-chip>
        <v-chip
          small
          :disabled="loading"
          v-model="selected"
          text-color="white"
          color="cyan"
          class="ma-2"
        >
          <v-icon left v-text="selected.icon" small></v-icon>
          {{ selected.text }}
        </v-chip>
        <v-divider dark></v-divider>
      </v-col>
    </v-row>
    <v-row no-gutters align="center" class="mx-auto white--text" justify="center">
      <v-col md="10" xs="12" sm="12">
        <v-subheader dark>节点列表</v-subheader>
        <v-chip
          outlined
          v-for="(item, i) in items"
          :key="item.text"
          class="ma-2"
          small
          color="cyan"
          @click="filter(i)"
        >
          <v-icon left v-text="item.icon" small></v-icon>
          {{ item.text }}
        </v-chip>
        <v-divider dark></v-divider>
      </v-col>
    </v-row>

    <v-row align="center" class="mx-auto white--text" justify="center">
      <v-col md="5" xs="12" sm="12">
        <v-row>
          <v-col cols="4" v-for="itemstatics in statics" :key="itemstatics.type">
            <v-card color="transparent" dark>
              <v-card-subtitle class="pb-0 title font-weight-bold white--text">
                <v-icon
                  small
                  :color="itemstatics.icon == 'fa-arrow-up'? 'red':'cyan'"
                >{{ itemstatics.icon }}</v-icon>
                {{ itemstatics.cnt }}
              </v-card-subtitle>
              <v-card-text class="grep--text caption">{{ itemstatics.type }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-card flat height="200">
              <pie name="name" />
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card flat height="200">
              <pie name="name" />
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col md="5" xs="12" sm="12">
        <v-card flat color="transparent" dark height="400">
          <histogram :histogram="showcode" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>



<script>
export default {
  name: "watch",
  components: {
    histogram: () => import("./watch/Histogram"),
    pie: () => import("./watch/Pie")
  },
  data: () => ({
    items: [
      {
        text: "DATABASE1",
        icon: "fa-database"
      },
      {
        text: "DATABASE2",
        icon: "fa-database"
      },
      {
        text: "DATABASE3",
        icon: "fa-database"
      },
      {
        text: "DATABASE4",
        icon: "fa-database"
      },
      {
        text: "DATABASE5",
        icon: "fa-database"
      }
    ],
    loading: false,
    selected: { text: "DATABASE1", icon: "fa-database" },
    statics: [],
    showcode: []
  }),

  created: function() {
    this.init();
    this.getcode();
  },
  computed: {},

  watch: {},

  methods: {
    filter(i) {
      this.selected = this.items[i];
    },

    getcode() {
      const code = [];

      for (let i = 0; i <= 360; i++) {
        let t = (i / 180) * Math.PI;
        let r = Math.sin(2 * t) * Math.cos(2 * t);
        code.push([r, i]);
      }

      this.showcode = code;
    },
    init() {
      let that = this;
      this.$http.get("/watch").then(res => {
        if (res.data.code === 200) {
          this.statics = res.data.data.statics;
          this.$store.commit("snackbar/setSnackbar", {
            show: true,
            message: res.data.msg,
            color: "black",
            top: true
          });
        } else {
          this.$store.commit("snackbar/setSnackbar", {
            show: true,
            message: res.data.msg,
            color: "error",
            top: true
          });
        }
      });
    }
  }
};
</script>