const sortProductData = (data, state, name) => {
    let newData = data
    if (name === 'Name') {
        if (!state) {
            newData.sort((a, b) => a.productName - b.productName)
        } else {
            newData.sort((a, b) => a.productName - b.productName).reverse()
        }
    } else {
        if (!state) {
            newData.sort((a, b) => a.productYear - b.productYear)
        } else {
            newData.sort((a, b) => a.productYear - b.productYear).reverse()
        }
    }
    return newData
  }
export default sortProductData