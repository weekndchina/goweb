<template>
 <v-container grid-list-xl fluid style="background: linear-gradient(to right, #24243e, #141E30, #0f0c29);">
     <v-row
      align="center"
      class="mx-auto white--text"
      justify="center"
      >
        <v-col
          md=10 xs=10 sm=10
        >
        <v-chip  text dark color="transparent">
           <v-icon small color="teal" left>fa-sort</v-icon>
          过滤检索
          </v-chip>
          <v-chip
            small
            :disabled="loading"
            v-model="selected"
            text-color="white"
            color="cyan"
            class="ma-2"
          >
            <v-icon
              left
              v-text="selected.icon"
              small
            ></v-icon>
            {{ selected.text }}
          </v-chip>
          <v-divider dark></v-divider>
        </v-col>
      </v-row>
      <v-row
      no-gutters
      align="center"
      class="mx-auto white--text"
      justify="center"
      >
      <v-col md=10 xs=12 sm=12>
      <v-subheader dark>节点列表</v-subheader>
      <v-chip outlined  v-for="(item, i) in items" :key="item.text"
        class="ma-2" small color="cyan" @click="filter(i)">
      <v-icon
       left
       v-text="item.icon"
              small
       ></v-icon>
      {{ item.text  }}
      </v-chip>
                <v-divider dark></v-divider>

      </v-col>
      </v-row>

     <v-row
      align="center"
      class="mx-auto white--text"
      justify="center"
      >

      <v-col md=5 xs=12 sm=12>
        <v-row>
            <v-col cols=4 v-for="i in 3">
            <v-card  color="transparent" dark>
             <v-card-subtitle class="pb-0 title font-weight-bold white--text">315</v-card-subtitle>
              <v-card-text class="grep--text caption">控制器数量</v-card-text>
             </v-card>
           </v-col>
        </v-row>
        <v-row>
           <v-col cols=4 v-for="i in 3">
            <v-card  color="transparent" dark>
             <v-card-subtitle class="pb-0 title font-weight-bold white--text">15</v-card-subtitle>
              <v-card-text class="grep--text caption">损坏数量</v-card-text>
             </v-card>
           </v-col>
        </v-row>
      </v-col>

      <v-col md=5 xs=12 sm=12 style="background:#f60">

      </v-col>
      </v-row>
  </v-container>
</template>



<script>
  export default {
    data: () => ({
      items: [
        {
          text: 'DATABASE1',
          icon: 'fa-database',
        },
        {
          text: 'DATABASE2',
          icon: 'fa-database',
        },
        {
          text: 'DATABASE3',
          icon: 'fa-database',
        },
        {
          text: 'DATABASE4',
         icon: 'fa-database',
        },
        {
          text: 'DATABASE5',
          icon: 'fa-database',
        },
      ],
      loading: false,
      selected: {text: 'DATABASE1',icon: 'fa-database'},
    }),

    computed: {
    },

    watch: {
    },

    methods: {
        filter(i) {
            this.selected = this.items[i]
        }
    },
  }
</script>