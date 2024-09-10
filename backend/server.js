const express = require('express');
const logrequest = require('./middleware/logs');
const { use } = require('./routes/goalRoutes');
const app = express();
const port = 5000;

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/goals', require('./routes/goalRoutes'))
app.use(logrequest)

app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(port,() => {
    console.log(`server berjalan pada port ${port}`);
})


