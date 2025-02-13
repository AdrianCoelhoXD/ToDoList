const express = require('express')
const bodyParser = require('body-parser')
const taskRoutes = require("../ToDoList/routes/taskRoutes.js")

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use('/api', taskRoutes)

app.listen(port, () => {
  console.log(`Running in port : ${port}`)
});
