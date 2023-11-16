const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id: 1, nome: "a", preco: "R$ 6,99", deacricao: "plushie", imagem: "img"},
  {id: 2, nome: "a", preco: "R$ 6,99", deacricao: "plushie", imagem: "img"},
  {id: 3, nome: "a", preco: "R$ 6,99", deacricao: "plushie", imagem: "img"},
  {id: 4, nome: "a", preco: "R$ 6,99", deacricao: "plushie", imagem: "img"},
  {id: 5, nome: "a", preco: "R$ 6,99", deacricao: "plushie", imagem: "img"},
  {id: 6, nome: "a", preco: "R$ 6,99", deacricao: "plushie", imagem: "img"},
  {id: 7, nome: "a", preco: "R$ 6,99", deacricao: "plushie", imagem: "img"},
  {id: 8, nome: "a", preco: "R$ 6,99", deacricao: "plushie", imagem: "img"},
  {id: 9, nome: "a", preco: "R$ 6,99", deacricao: "plushie", imagem: "img"}
]
function buscarProdutoporID(){
  const porduto = produtos.find(produto => produto.id ==id);
  return produto || null 
}

app.get('/', (req, res) => {
  res.render('index', { produtos });
});

app.get('/produto', (req, res) => {
  res.render('produto', { message: 'Olá, Mundo!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});