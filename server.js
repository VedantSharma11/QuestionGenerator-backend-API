const express = require('express');
const path = require('path');
const questionRoutes = require('./routes/questionRoutes');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
const PORT = 3000;

app.use(express.json());

app.use(questionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
