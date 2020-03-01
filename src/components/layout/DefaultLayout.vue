<template>
    <v-app id="app-layout">
        <app-drawer></app-drawer>
        <v-content>
         <v-container fluid fill-height dark
         >
            <router-view></router-view>
         </v-container>
        </v-content>
    </v-app>
</template>


<script>
import AppDrawer from "@/components/AppDrawer"

export default {
    components: {
        AppDrawer,
    },
    data() {
        return {
        }
    },

    methods: {
    },
}
</script>