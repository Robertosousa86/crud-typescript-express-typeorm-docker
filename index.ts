import express from 'express';

const app = express();

const PORT: number = 3000;

app.listen(PORT, () => {
  return console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
