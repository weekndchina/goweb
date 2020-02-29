<template>
    <v-app id="app-layout">
        <app-drawer></app-drawer>
        <v-content>
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