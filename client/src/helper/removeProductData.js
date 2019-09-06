const removeProductData = (storeData, id) => {
    return storeData.filter(({ productId }) => productId !== id)
}
export default removeProductData