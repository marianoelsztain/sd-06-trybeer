import React from 'react';

const currencyFormat = (num) => num
  .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
const renderCards = (allProducts, asd, setAsd, itemQty) => allProducts.map(
  (prod, id) => (
    <section className="card-content" key={ id }>
      <p data-testid={ `${id}-product-price` }>{currencyFormat(+prod.price)}</p>
      <img
        className="products-img"
        src={ prod.url_image }
        alt="Foto do Produto"
        data-testid={ `${id}-product-img` }
      />
      <h4 data-testid={ `${id}-product-name` }>{prod.name}</h4>
      <section className="cards-btn">
        <button
          data-testid={ `${id}-product-plus` }
          type="button"
          onClick={ () => {
            const items = JSON.parse(localStorage.getItem('items')) || [];
            items.push(prod);
            localStorage.setItem('items', JSON.stringify(items));
            setAsd(asd + 1);
            console.log(typeof prod.price);
          } }
        >
          +
        </button>
        <p data-testid={ `${id}-product-qtd` }>{itemQty(prod)}</p>
        <button
          data-testid={ `${id}-product-minus` }
          type="button"
          onClick={ () => {
            const items = JSON.parse(localStorage.getItem('items')) || [];
            items.splice(items.indexOf(items.find((e) => e.id === prod.id)), 1);
            localStorage.setItem('items', JSON.stringify(items));
            if (asd > 0) {
              setAsd(asd - 1);
            }
          } }
        >
          -
        </button>
      </section>
    </section>
  ),
);
export default renderCards;