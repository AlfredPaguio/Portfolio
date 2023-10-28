'use strict'
import { createRequire } from "module";
const require = createRequire(import.meta.url);
//https://dev.to/caspergeek/how-to-use-require-in-ecmascript-modules-1l42

const express = require('express')
const app = express()
const port = 5173

app.get('/api', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})