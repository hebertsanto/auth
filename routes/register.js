const router = require("express").Router();
const Register = require("../models/register");


router.post("/auth/register", async (req, res) => {
     const { name, email, password, setPassword, lastName } = req.body;

      if(password && setPassword && password!== setPassword){
         res.status(400).json({ message: "Password and Password must be same" });
      }

      if(name.length <= 5 || name.length >= 25){
        res.status(400).json({
          message: "Name must be between 5 and 25 characters"
        })
      }
      
    try {
          await Register.create({
            name,
            lastName,
            email,
            password,
            setPassword,

         });

        res.status(201).json({
            message:'usuario registrado por favor faça o login'
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})



module.exports = router;