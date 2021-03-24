import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import SideBarAdmin from '../components/SideBarAdmin';
import { getOrder, updateStatus } from '../services/orderDetailsService';

import './Admin.css';

function AdminOrdersDetails(props) {
  const { match: { params: { id } } } = props;
  const [orders, setOrders] = useState([]);
  const [delivered, setDelivered] = useState(false);

  const loggedUser = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    getOrder(id).then((result) => setOrders(result));
  }, [delivered]);

  return (
    <div className="div-main">
      { !loggedUser && <Redirect to="/login" />}
      <SideBarAdmin />
      <div className="div-filha">
        {
          !orders.length > 0
            ? <div>no orders</div>
            : (
              <div>
                <h2 data-testid="order-number">{`Pedido ${id} - `}</h2>
                <h3 data-testid="order-status">
                  {orders[0].status}
                </h3>
                {orders.map((order, index) => (
                  <div key={ index }>
                    <h2 data-testid={ `${index}-product-qtd` }>{order.quantity}</h2>
                    <h2 data-testid={ `${index}-product-name` }>{order.name}</h2>
                    <h2 data-testid={ `${index}-product-total-value` }>
                      {`R$ ${(order.total).toString().replace('.', ',')}`}
                    </h2>
                    <h2 data-testid={ `${index}-order-unit-price` }>
                      {`(R$ ${(order.price).toString().replace('.', ',')})`}
                    </h2>
                  </div>
                ))}
                <h2 data-testid="order-total-value">
                  {`Total: R$ ${(orders[0].total_price).replace('.', ',')}`}
                </h2>
                { orders[0].status === 'Pendente'
                  ? (
                    <button
                      type="button"
                      data-testid="mark-as-delivered-btn"
                      onClick={ () => updateStatus(id, setDelivered) }
                    >
                      Marcar como entregue
                    </button>
                  )
                  : null }
              </div>
            )
        }
      </div>
    </div>
  );
}

AdminOrdersDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default AdminOrdersDetails;
