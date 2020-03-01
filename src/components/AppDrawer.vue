<template>
    <v-navigation-drawer
      v-model="drawer"
      app
      expand-on-hover
      fixed
      floating
      mini-variant
      dark
      color="grey darken-4"
    >
    <v-list nav dense
       class="py-0" >
      <v-list-item two-line class="px-0">
            <v-list-item-avatar small>
                wk
           </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>weeknd</v-list-item-title>
              <v-list-item-subtitle>weeknd.su@hotmail.com</v-list-item-subtitle>
            </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      </v-list>
   <v-list shaped dense>
      <v-list-item-group v-model="item">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.component"
          color="deep-orange lighten-1"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon" small></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text" class="caption"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>
</template>

<script>
import menu from "@/api/Menu"

export default {
    name: "AppDrawer",
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      item: 0,
      items: menu,
    }),
  }
</script>