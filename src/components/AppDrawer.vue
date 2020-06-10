<template>
    <v-navigation-drawer
      app
      expand-on-hover
      floating
      mini-variant
      clipped
      color="#f3f2f1"
    >
   <v-list shaped dense>
      <v-list-item-group v-model="item">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.component"
          color="black"
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
