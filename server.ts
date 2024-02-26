import express, { Request, Response } from 'express';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 5000;

// set up the request parameters
const params = {
    api_key: '2D59B30B270B4407BBDF96B64426DC31',
    search_term: 'highlighter pens',
    category_id: '5zja3',
    type: 'search',
};

// make the http GET request to RedCircle API

// GET request to fetch all products
app.get('/api/products', (req, res) => {
    // Logic to fetch products from the database
    res.json({});

    axios
        .get('https://api.redcircleapi.com/request', { params })
        .then((response) => {
            // print the JSON response from RedCircle API
            console.log(JSON.stringify(response.data));
            res.json(response.data);
        })
        .catch((error) => {
            // catch and print the error
            console.log(error);
            res.status(500).json({ error: error.message });
        });
});

// POST request to create a new product
app.post('/api/products', (req, res) => {
    // Logic to create a new product in the database
    res.status(201).json({ message: 'Product created successfully' });
});

// PUT request to update an existing product
app.put('/api/products/:productId', (req, res) => {
    const productId = req.params.productId;
    // Logic to update the product with the given ID in the database
    res.json({ message: 'Product updated successfully' });
});

// DELETE request to delete a product
app.delete('/api/products/:productId', (req, res) => {
    const productId = req.params.productId;
    // Logic to delete the product with the given ID from the database
    res.json({ message: 'Product deleted successfully' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
