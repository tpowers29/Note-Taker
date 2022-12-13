const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const api = require("./routes/apiroutes")
const html  = require("./routes/htmlroutes")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("public"))


app.use(api)
app.use(html)


app.listen(PORT,function(){
    console.log(`App running on port http://localhost:${PORT}`)
})