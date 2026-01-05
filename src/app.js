const express = require("express");
const connectDB = require("./config/database");
const app= express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req,res) =>{

    console.log(req.body);
    const user = new User(req.body);

    // creating new instance of the suer model
    // const user = new User(userObj);
    try{
        await user.save();
        res.send("User added successfully");
    }catch (err) {
        res.status(400).send("Error ssving the user: "+err.message);
    }

});

connectDB()
    .then(() => {
        console.log("Database connection established...");
        app.listen(3000, () => {
            console.log("Server is successfully listening to port 3000...");
        });
}).catch((err)=>{
    console.log("Database can not be connected");
})




 