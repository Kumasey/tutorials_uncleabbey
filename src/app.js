const express =  require('express');
const allRoutes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(allRoutes);

app.listen(PORT, console.log(`App is listening at port: ${PORT}`));