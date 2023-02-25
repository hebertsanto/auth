const router = require("express").Router();

router.get("/", (req, res) => {
    res.send('ola')
})

module.exports = router;