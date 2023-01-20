const mongoose = require("mongoose");
const express = require('express')

const app = express()
const port = 5000

app.use(express.json());
app.use(require("./routes/categories.route"));
app.use(require("./routes/comments.route"));
app.use(require("./routes/news.route"));

mongoose.connect("mongodb+srv://Intucod:Musaev10@cluster1.yro8beq.mongodb.net/news", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))


  app.listen(port, () => {
    console.log('Сервер запущен успешно')
  })