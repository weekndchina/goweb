<template>
    <v-navigation-drawer
      v-model="drawer"
      app
      expand-on-hover
      clipped
      floating
      dark
      color="transparent"
    >
    <v-list nav
       class="py-0" >
      <v-list-item two-line>
            <v-list-item-avatar color="red" small>
                w
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>weeknd</v-list-item-title>
              <v-list-item-subtitle>weeknd.su@hotmail.com</v-list-item-subtitle>
            </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      </v-list>
   <v-list shaped>
      <v-list-item-group v-model="item" color="black">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.component"

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