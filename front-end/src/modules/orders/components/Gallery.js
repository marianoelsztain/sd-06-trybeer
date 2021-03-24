import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../../../axios';
import OrderCard from './OrderCard';

function Gallery() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get('/sales').then((resp) => setOrders(resp.data));
  }, []);

  console.log(orders);

  return (
    <div className="grid md:grid-cols-4 gap-8 align-baseline">
      {console.log(orders)}
      { orders.length > 0 && orders.map((order, index) => OrderCard(order, index)) }
      { orders.length === 0 && 'you dont have orders yet.'}
    </div>
  );
}

PropTypes.Gallery = {
  admin: PropTypes.bool.isRequired,
};

export default Gallery;
