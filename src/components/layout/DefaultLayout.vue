<template>
    <v-app id="app-layout">
        <app-drawer></app-drawer>
        <v-content style="background-color:#FAFAFA">
            <router-view></router-view>
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