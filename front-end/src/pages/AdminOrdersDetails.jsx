import React, { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import api from '../services/api';
import MenuTopAdmin from '../components/MenuTopAdmin';

export default function AdminOrdersDetails() {
  const { id } = useParams();
  const [productsOfSale, setProductsOfSale] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(null);
  const fetchApiProductOfSale = async (idFetch) => {
    const productDetails = await api.fetchSaleProduct(idFetch);
    setProductsOfSale(productDetails);
  };

  useEffect(() => {
    fetchApiProductOfSale(id);
    if (productsOfSale.length !== 0 && productsOfSale[0].status === 'Entregue') {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [id, productsOfSale]);

  const handleClick = async () => {
    await api.fetchChangeStatus(id);
    setButtonDisabled(false);
  };

  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) return <Redirect to="/login" />;

  const sumOfCart = (sum, product) => sum + product.quantity * product.price;

  return (
    <div>
      <MenuTopAdmin />
      <h1 data-testid="top-title">Detalhes de Pedido</h1>
      <h2 data-testid="order-number">{`Pedido ${id}`}</h2>
      <h2 data-testid="order-status">
        {productsOfSale.length !== 0 && productsOfSale[0].status}
      </h2>
      <div>
        {productsOfSale.map((produto, index) => (
          <div key={ produto.id }>
            <div data-testid={ `${index}-product-qtd` }>{produto.quantity}</div>
            <div data-testid={ `${index}-product-name` }>{produto.name}</div>
            <div data-testid={ `${index}-product-total-value` }>
              {(produto.price * produto.quantity).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </div>
            <div data-testid={ `${index}-order-unit-price` }>
              (
              {Number(produto.price).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
              )
            </div>
          </div>
        ))}
      </div>
      <h2 data-testid="order-total-value">
        {productsOfSale
          .reduce(sumOfCart, 0)
          .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </h2>
      {buttonDisabled && (
        <button type="button" data-testid="mark-as-delivered-btn" onClick={ handleClick }>
          Marcar como entregue
        </button>
      )}
    </div>
  );
}
