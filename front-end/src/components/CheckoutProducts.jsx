import React, { useEffect, useState, useContext } from 'react';
import ParseCurrency from '../utils/parseCurrencyToBRL';
import UserContext from '../hooks/UseContext';

function CheckoutProducts() {
  const [checkoutProducts, setCheckoutProducts] = useState([]);
  const { setTotalPrice } = useContext(UserContext);
  const total = JSON.parse(localStorage.getItem('total'));

  const purchase = () => {
    const products = JSON.parse(localStorage.getItem('productList'));

    return products.filter((product) => product.productQuantity > 0);
  };

  const deleteProduct = (name, productQuantity, price) => {
    const productDelete = checkoutProducts.filter((product) => {
      if (product.name === name) {
        return false;
      }
      return true;
    });
    setCheckoutProducts(productDelete);
    const totalValueProduct = (total - (productQuantity * price)).toFixed(2);
    localStorage.setItem('total', JSON.stringify(totalValueProduct));

    localStorage.setItem('productList', JSON.stringify(productDelete));
    setTotalPrice(totalValueProduct);
  };

  useEffect(() => {
    setCheckoutProducts(purchase());
  }, []);

  return !checkoutProducts ? <h1>Loading...</h1> : (
    <div>
      <h1>Produtos</h1>
      <ul>
        {(checkoutProducts.length > 0)
          ? checkoutProducts.map(({ productQuantity, price, name }, index) => (
            <li key={ index }>
              <span
                data-testid={ `${index}-product-qtd-input` }
              >
                {productQuantity}
              </span>
              <span
                data-testid={ `${index}-product-name` }
              >
                {` - ${name}`}
              </span>
              <span
                data-testid={ `${index}-product-total-value` }
              >
                {`  ${ParseCurrency((price * productQuantity).toFixed(2))}`}
              </span>
              <span
                data-testid={ `${index}-product-unit-price` }
              >
                {`(${ParseCurrency(price)} un)`}
              </span>
              <button
                type="button"
                data-testid={ `${index}-removal-button` }
                onClick={ () => deleteProduct(name, productQuantity, price) }
              >
                {' '}
                X
              </button>
            </li>
          ))
          : <spam> Não há produtos no carrinho </spam>}
      </ul>
      <h1 data-testid="order-total-value">{`Total: ${ParseCurrency(total)} ` }</h1>
    </div>
  );
}

export default CheckoutProducts;
