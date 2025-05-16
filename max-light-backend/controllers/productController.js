export const getProducts = (req, res) => {
    // Placeholder: return empty array
    res.json([]);
};

export const addProduct = (req, res) => {
    // Placeholder: echo back the product
    const product = req.body;
    res.status(201).json(product);
};
