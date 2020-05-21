const express = require('express');
const mongoose =  require('mongoose')
const cors = require("cors")
const app = express()
require("dotenv/config")


app.use(cors())
app.use(express.json())


const post = require("./routes/posts")
app.use("/posts",post)


mongoose.connect(
    process.env.Connection_db,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    },
    () =>console.log("Connected to mongoDB")
)



const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server started at port ${PORT}`))