const router = require("express").Router();
const User = require("../models/login");

router.post("/auth/login", async (req, res) => {
    const { name,  email, password } = req.body;

    try {
        await User.create({ email, password, name });
        res.status(200).json({
            Message: 'usuario logado'
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
    
})

module.exports = router;