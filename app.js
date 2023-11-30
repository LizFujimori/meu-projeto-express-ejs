const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id: 1, nome: "Plushie Noelle", preco: "R$ 6,99", deacricao: "Plush - Noelle (Genshin Impact)", imagem: "noelle.jpg"},
  {id: 2, nome: "Plushie Kakyoin", preco: "R$ 6,99", deacricao: "Plush - Noriaki Kakyoin (JoJo's Bizarre Adventure: Stardust Crusaders)", imagem: "kakyoin.jpg"},
  {id: 3, nome: "Plushie Wriothesley", preco: "R$ 6,99", deacricao: "Plush - Wriothesley (Genshin Impact)", imagem: "rizzley.jpg"},
  {id: 4, nome: "Plushie Neuvillette", preco: "R$ 6,99", deacricao: "Plush - Mounsier Neuvillette (Genshin Impact)", imagem: "neuvi.jpg"},
  {id: 5, nome: "Plushie Joseph", preco: "R$ 6,99", deacricao: "Plush - Joseph Joestar (JoJo's Bizarre Adventure: Battle Tendency)", imagem: "joseph.jpg"},
  {id: 6, nome: "Plushie Zhongli", preco: "R$ 6,99", deacricao: "Plush - Zhongli, Rex Lápis (Genshin Impact)", imagem: "zhongli.jpg"},
  {id: 7, nome: "Plushie Kazuha", preco: "R$ 6,99", deacricao: "Plush - Kaedehara Kazuha (Genshin Impact)", imagem: "kazuha.jpg"},
  {id: 8, nome: "Plushie Kars", preco: "R$ 6,99", deacricao: "Plush - Kars (JoJo's Bizarre Adventure: Battle Tendency)", imagem: "kars.jpg"},
  {id: 9, nome: "Plushie Barbados", preco: "R$ 6,99", deacricao: "Plush - Barbados, Venti (Genshin Impact)", imagem: "barbados.jpg"}
]
function buscarProdutoporID(){
  const porduto = produtos.find(produto => produto.id ==id);
  return produto || null 
}

app.get('/', (req, res) => {
  res.render("index", { produtos });
});

app.get('/produto', (req, res) => {
  res.render('produto', { message: 'Olá, Mundo!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});