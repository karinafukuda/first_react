import React from 'react';
import { Container } from './style';

const Home: React.FC = () => {
 return (
  <Container>
    <section >
     <div className="product-content">
       <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=470&hei=556&fmt=png"alt="iphone 12 azul" width="400" height="auto"></img>
       <h4>Nome do Produto</h4>
       <span>descrição</span>
       <h6>price</h6>
     </div>
    </section>
  </ Container>
 );

}

export default Home;