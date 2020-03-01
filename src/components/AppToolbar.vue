<template>
  <v-app-bar absolute
      dark
      dense
      app
      color="grey darken-4"
      collapse-on-scroll>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-text-field text dense hide-details
    outlined rounded
     prepend-inner-icon="fa-search"
     clearable></v-text-field>
  </v-app-bar>
</template>
<script>

export default {
  name: "AppToolbar",
  components: {
  },
  data() {
    return {
        drawer: null,
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

