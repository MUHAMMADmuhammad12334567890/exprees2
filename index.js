const express = require("express");


const app = express();
const port = 4000;

app.use(require("./route/brands.rout"));

app.use(require("./route/ptoduct.rout"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
