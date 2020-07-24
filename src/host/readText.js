const fs = require('fs');
fs.readFile("public/sampleText.txt", "utf-8", (err,data) => {
  console.log("DATA: ", data);
})
