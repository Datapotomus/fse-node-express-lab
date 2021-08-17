const express = require('express');
const defaultRouter = require('./routes/default.routes');
const userRouter = require('./routes/user.routes')

const app = express();
const port = 3030;

//Let express accept json data
app.use(express.json());

app.use('/', defaultRouter);
app.use('/api', userRouter);


//Sets the server up.
app.listen(port, function(){
  console.log(`App is listening on port: ${port}`)
})