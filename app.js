const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id: 1, nome: "Plushie Noelle", preco: "R$ 6,99", deacricao: "plushie", imagem: "https://ae01.alicdn.com/kf/S77429093a5d74e058724f6df9a4e5002w.jpg_640x640Q90.jpg_.webp"},
  {id: 2, nome: "Plushie Kakyoin", preco: "R$ 6,99", deacricao: "plushie", imagem: "https://i.ebayimg.com/images/g/d~AAAOSwy2NfVbgO/s-l1600.jpg"},
  {id: 3, nome: "Plushie Wriothesley", preco: "R$ 6,99", deacricao: "plushie", imagem: "https://genshinbox.co/wp-content/uploads/2023/09/Genshin-Plushies-%E2%80%93-Wriothesley-Plush-Doll.jpg"},
  {id: 4, nome: "Plushie Neuvillette", preco: "R$ 6,99", deacricao: "plushie", imagem: "https://m.media-amazon.com/images/I/61ezhNzsFFL._AC_UF894,1000_QL80_.jpg"},
  {id: 5, nome: "Plushie Joseph", preco: "R$ 6,99", deacricao: "plushie", imagem: "https://jjba.shop/wp-content/uploads/2021/10/JoJos-Bizarre-Adventure-Tomonui-Plush-Doll-JOSEPH-JOESTAR-Battle-Tendency-new.jpg"},
  {id: 6, nome: "Plushie Zhongli", preco: "R$ 6,99", deacricao: "plushie", imagem: "https://i.ebayimg.com/images/g/SLIAAOSwIIFirUJj/s-l1600.jpg"},
  {id: 7, nome: "Plushie Kazuha", preco: "R$ 6,99", deacricao: "plushie", imagem: "https://toysonejapan.com/cdn/shop/products/s-l1600_22_8a7470e1-668c-48c2-91dc-7d60efc3108a_1024x1024.jpg?v=1675046966"},
  {id: 8, nome: "Plushie Kars", preco: "R$ 6,99", deacricao: "plushie", imagem: "https://i.ebayimg.com/images/g/Ex4AAOSwbMBiN21Q/s-l1200.webp"},
  {id: 9, nome: "Plushie Barbados", preco: "R$ 6,99", deacricao: "plushie", imagem: "https://img.fruugo.com/product/5/53/942292535_max.jpg"}
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