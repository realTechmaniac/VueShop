export default{
    products(state){
        return state.products
    },
    cart(state){
        return state.cart
    },
    userIsAuthenticated(state){
        return state.isLoggedIn
    }
}