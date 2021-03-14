const express = require('express');
const allRoutes = require('./routes');
const errorResponse = require('./utils/errorResponse');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(allRoutes);

app.use((error, req, res, next) => {
  return errorResponse(res, error);
});

app.listen(PORT, console.log(`App is listening at port: ${PORT}`));
