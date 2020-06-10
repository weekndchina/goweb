<template>
    <v-navigation-drawer
      v-model="show"
      app
      left
      temporary
      color="#f3f2f1"
    >
    </v-navigation-drawer>
</template>

<script>
export default {
    name: "AppGalaxy",
    props: {
      source: String,
    },
    data: () => ({
    }),
  }
</script>
