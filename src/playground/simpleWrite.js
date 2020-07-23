const fs  = require('fs');

const  text = 'some random text';

fs.writeFile('sampleStorage.txt', text, (err)=>{
  if(err) throw err;
  console.log("TEXT IS SAVED!");
})
