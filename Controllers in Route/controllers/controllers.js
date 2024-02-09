const getProduct = (req, res) => {
    const { id } = req.params
    res.send(id ? `Your product is this ${id} product` : "All products")
}

const addProduct = (req, res) => {
    const { id } = req.params
    res.send(id ? `Your product is ${id} is added` : "Add product")
}

const updateProduct = (req, res) => {
    const { id } = req.params
    res.send(id ? `Your product ${id} is updated` : "Update product")
}

const deleteProduct = (req, res) => {
    const { id } = req.params
    res.send(id ? `Your product ${id} is deleted` : "Delete Product")
}

export {
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}
