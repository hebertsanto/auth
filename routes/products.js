const router = require("express").Router();

router.get("/product", (req, res) => {
    res.send('ola')
})

module.exports = router;