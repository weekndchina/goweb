<template>
  <v-app>
   <v-content>
        <router-view />
    </v-content>


   <v-snackbar
       :value="$store.state.snackbar.snackbar.show"
       :multi-line="$store.state.snackbar.snackbar.multiLine"
       :top="$store.state.snackbar.snackbar.top === 'top' "
       :bottom="$store.state.snackbar.snackbar.bottom === 'bottom' "
       :color="$store.state.snackbar.snackbar.color"
      >
   {{ $store.state.snackbar.snackbar.message }}
   <v-btn small icon @click="$store.commit('snackbar/setSnackbarShow',false)"><v-icon color="indigo">fa-times-circle</v-icon></v-btn>
 </v-snackbar>
    </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
  }),
};
</script>
