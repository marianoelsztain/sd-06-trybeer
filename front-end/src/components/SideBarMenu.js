import React from 'react';
import { Link } from 'react-router-dom';

const SidebarMenu = () => (
  <div className="side-menu-container">
    <div className="side-menu-main-options">
      <Link to="/products">
        <button data-testid="side-menu-item-products" type="button">Produtos</button>
      </Link>
      <Link to="/orders">
        <button data-testid="side-menu-item-my-orders" type="button">Meus Pedidos</button>
      </Link>
      <Link to="/profile">
        <button data-testid="side-menu-item-my-profile" type="button">Meu Perfil</button>
      </Link>
    </div>
    <Link to="/login" className="justify-at-the-end">
      <button
        className="justify-at-the-end"
        data-testid="side-menu-item-logout"
        type="button"
      >
        Sair
      </button>
    </Link>
  </div>
);

export default SidebarMenu;