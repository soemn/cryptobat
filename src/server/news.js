const request = require("request")

const getNews = token => {
  let requestPath =
    "https://cryptopanic.com/api/posts/?auth_token=" +
    process.env.CRYPTO_PANIC +
    "&currency=" +
    token

  return new Promise((resolve, reject) => {
    request(requestPath, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        let info = JSON.parse(body)
        resolve(info)
      } else {
        reject(error)
      }
    })
  })
}

module.exports = {
  getNews
}
