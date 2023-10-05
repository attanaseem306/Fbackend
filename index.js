
const express=require('express');
const app=express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! new gggg')
})

app.listen(port, () => {
  console.log(`Example app listening faiz naeemm on port ${port}`)
})

