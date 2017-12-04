require("dotenv").config({ silent: true })

const port = 9000
const dbUrl = "mongodb://127.0.0.1:27017/cryptobat"

const express = require("express")
const path = require("path")
const request = require("request")
const mongoose = require("mongoose")
const methodOverride = require("method-override")
const bodyParser = require("body-parser")
const app = express()
const cors = require("cors")

const bittrex = require('node-bittrex-api');

const Strategy = require('../models/strategy')

let corsOptions = {
  credentials: true,
  origin: ["http://localhost:3000"],
  methods: "GET,PUT,PATCH,POST,DELETE",
  preflightContinue: true
}

// =================== middleware ===================
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use(methodOverride("_method"))
app.use(cors(corsOptions))

app.use(express.static(path.join(__dirname, "public")))
app.use(function(req, res, next) {
  console.log("Method: " + req.method + " Path: " + req.url)
  next()
})

bittrex.options({
  apikey: process.env.BITTREX_KEY,
  apisecret: process.env.BITTREX_SECRET
})

// =================== mongoose and mongodb ===================
mongoose.Promise = global.Promise
mongoose
  .connect(dbUrl, {
    useMongoClient: true
  })
  .then(
    () => {
      console.log("db is connected")
    },
    err => {
      console.log(err)
    }
  )

// =================== routes ===================

app.get("/", (req, res) => {
  res.json({ Hi: "Use this format to return a json file." })
})

app.get("/account_information", (req, res) => {
  res.json({ Hi: "Use this format to return a json file." })
})

app.get("/accountSummary", (req, res) => {
  bittrex.getbalances((data, err) => {
    if (err) {
      return console.error(err)
    }
    res.json(data)
  })
})

app.get("/cryptoPanic/:token", (req, res) => {
  let token = req.params.token
  let requestPath =
    "https://cryptopanic.com/api/posts/?auth_token=" +
    process.env.CRYPTO_PANIC +
    "&currency=" +
    token
  request(requestPath, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      let info = JSON.parse(body)
      res.json(info)
    }
  })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

// test create a Strategy
Strategy.create({ TradeType: "tradesell" }, function(err, strat) {
  if (err) {
    console.log(err)
    return
  }
  console.log(strat.trade())
})
