const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const UserRouter = require('./routes/user.route')

const app = express()


app.use(express.json())
app.use(cors())

dotenv.config({path : './.env'})

app.use("/api", UserRouter)


mongoose.connect(process.env.MONGODB_URL).then(() => {

    console.log('MongoDB connected');
    

    app.listen(process.env.PORT, () => {
        console.log('Server is running');
    })
})
