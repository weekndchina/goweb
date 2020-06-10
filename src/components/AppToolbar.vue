<template>
  <v-app-bar
      fixed
      dark
      dense
      clipped-left
      app
      color="#212121"
      hide-on-scroll
      >
      <v-btn icon color="black" tile @click.stop="show = !show">
           <v-icon small color="cyan">fa-braille</v-icon>
      </v-btn>
    <v-subheader class="font-weight-bold white--text">weekndCN</v-subheader>
    <v-spacer></v-spacer>
    <v-text-field
    dense
    placeholder="检索"
    hide-details
    filled
    rounded
    color="grey"
    class="caption"
    height="40"
    ></v-text-field>
<v-spacer></v-spacer>

<v-menu bottom origin="center center" offset-y
      transition="scale-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="black"
                text
                tile
                height="48"
                v-bind="attrs"
                v-on="on"
                class="caption white--text"
              >
                更新日志<v-icon small color="white" right>fa-angle-down</v-icon>
              </v-btn>
            </template>

            <v-list dense class="caption">
            <v-list-item-group v-model="item" color="cyan">
            <v-list-item
              v-for="(item, i) in updates"
              :key="i"
              @click="item.path"
              two-line
            >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              <v-list-item-subtitle class="overline">{{ item.subtitle }}</v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
            </v-list-item-group>
            </v-list>
</v-menu>

<v-menu offset-y bottom origin="center center"
      transition="scale-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                tile
                height="48"
                v-bind="attrs"
                v-on="on"
                class="caption white--text"
              >
                技术支持<v-icon small color="white" right>fa-angle-down</v-icon>
              </v-btn>
            </template>

            <v-list dense class="caption">
            <v-list-item-group v-model="item" color="cyan">
              <v-list-item
                v-for="(item, i) in supports"
                :key="i"
                @click="item.path"
                two-line
              >
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                <v-list-item-subtitle class="overline">{{ item.subtitle }}</v-list-item-subtitle>
              </v-list-item-content>
              </v-list-item>
              </v-list-item-group>
            </v-list>
</v-menu>

    <v-btn icon tile color="black">
        <v-icon small color="grey">fa-ellipsis-v</v-icon>
    </v-btn>
  </v-app-bar>


</template>
<script>

export default {
  name: "AppToolbar",
  components: {
  },
  data() {
    return {
        item: 0,
        show: false,
        updates: [
          { title: 'changelogs', subtitle:'追踪最新产品更新日志',path:'/changelog',},
          { title: 'features' , subtitle:'追踪最新版本特性以及待开发的功能',path:'/changelog',},
        ],
        supports: [
          { title: 'Docs', subtitle:'使用文档介绍',path:'/changelog',},
          { title: 'Support' , subtitle:'获取技术支持',path:'/changelog',},
          { title: 'Issues' , subtitle:'提交Issues',path:'/changelog',},
          { title: 'Subcribe' , subtitle:'订阅RWPLUS',path:'/changelog',},
        ],
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>
