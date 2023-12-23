const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Гем Иван, ФГиИБ ИСиТ 4-1б');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
