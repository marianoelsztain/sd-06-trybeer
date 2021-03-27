import React, { useState, useEffect } from 'react';
import AdminSideBar from '../components/AdminSideBar';
import { getOrders } from '../api/index';
import OrderCardAdmin from '../components/OrderCardAdmin';
import '../css/General.css';
import '../css/AdminOrders.css';

function AdminOrders() {
  const [orders, setOrders] = useState(false);

  useEffect(() => {
    getOrders(setOrders);
  }, []);

  return (
    <div className="admin-container">
      <h1>Pedidos</h1>
      <div>
        <AdminSideBar />
        <section className="orders-list">
          { orders && orders.map((order, index) => (<OrderCardAdmin
            key={ index }
            index={ index }
            order={ order }
          />))}
        </section>
      </div>
    </div>
  );
}

export default AdminOrders;
