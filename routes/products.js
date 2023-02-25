const router = require("express").Router();
const AddNewProduct = require("../models/product");

router.post("/add/product", async (req, res) => {
    const { title, content, provider, data } = req.body;
 
    try {
        await AddNewProduct.create({
            title,
            content,
            provider,
            data
        })
        res.status(200).json({
            message: "Product added successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: "Product added failed",
        });
    }
})

router.get("/", async (req, res) => {
    try {

        const Allproducts = await AddNewProduct.find();
        res.json(Allproducts);


    } catch (error) {
        res.status(500).json({
            message: "Product not found",
        })
    }
})

router.delete("/product/:id", async (req, res) => {
    try {
        await AddNewProduct.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "Product deleted successfully",
        })
    } catch (error) {
        res.status(500).json({
            message: 'algo deu errado'
        })
    }
})

router.put("/product/:id", async (req, res) => {
     try {
         await AddNewProduct.findByIdAndUpdate(req.params.id, req.body);
         res.status(200).json({
            message: "Product updated successfully",
         })
     } catch (error) {
        res.status(500).json({
            message: 'algo deu errado'
        })
     }
})
module.exports = router;