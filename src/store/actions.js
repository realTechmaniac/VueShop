export default{
    login(context){
        context.commit('login')
    },
    logout(context){
        context.commit('logout')
    },
    addProductToCart(context, prodData){
        const prodId = prodData.id
        const products = context.getters.products
        const product  = products.find((product) => product.id === prodId)
        context.commit('addProductToCart', product)
    },
    removeProductFromCart(context, payload){
        context.commit('removeProductFromCart', payload)
    }
}