const chengeProductData = (storeData, newData) => {
    const index = storeData.findIndex(({productId}) => productId === newData.productId)
    storeData.splice(index, 1, newData)
    return storeData
  }
export default chengeProductData