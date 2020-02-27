const user = {
    state: {
        user: {
            name: "weeknd",
            password: "",
        }
    },
    mutations: {
        setUser(state, user) {
            state.user.name = user.name;
            state.user.password = user.password;
        }
    }
}

export default user;