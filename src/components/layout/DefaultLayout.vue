<template>
    <v-app id="app-layout">
        <app-drawer></app-drawer>
        <app-toolbar></app-toolbar>
        <v-content style="background-color:#FAFAFA">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>


<script>
import AppDrawer from "@/components/AppDrawer"
import AppToolbar from "@/components/AppToolbar"
export default {
    components: {
        AppDrawer,
        AppToolbar,
    },
    data() {
        return {
        }
    },

    methods: {
    },
}
</script>
