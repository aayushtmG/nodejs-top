const http = require("http")
const PORT = 8000

const fs = require("fs")

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    const path = fs.readFileSync("./index.html")
    res.end(path)
    return
  } else if (req.url == "/about") {
    const path = fs.readFileSync("./about.html")
    res.end(path)
    return
  } else if (req.url == "/contact-me") {
    const path = fs.readFileSync("./contact-me.html")
    res.end(path)
    return
  }

  res.end(fs.readFileSync("./404.html"))
})

server.listen(PORT, () => {
  console.log(`listening to ${PORT}`)
})
