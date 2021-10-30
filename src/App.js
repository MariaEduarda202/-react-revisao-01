import Galeria from "./Galeria"
import './App.css';
import Menu from "./header/Menu";
import img1 from "./imagens/img1.jpg";
import img2 from "./imagens/img2.jpg";
import img3 from "./imagens/img3.jpg";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <Menu/>
      <section className="galeria">
      <h1> Galeria de imagens</h1>
      <pre> Aqui você encontra as imagens mais diversas.  </pre>
      </section>
     
     <div className="card">
     
     <Galeria imagem={img1} nome="Lírio Branco" texto=" Com a possibilidade de render lindos arranjos e buquês, o lírio é um dos tipos de flores mais conhecidas e queridas por floristas."  />
      <Galeria imagem={img2} nome="Lírio Amarelo" texto="Em geral floresce nos meses mais quentes em climas subtropicais e temperados e durante o ano todo em regiões tropicais. " />
      <Galeria imagem={img3} nome="Lirio laranja" texto="O tom do laranja chama muito a atenção de quem rodeia o local. As flores podem ser colhidas frescas e formarem arranjos em vasos." />
     <br/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
