import React from 'react';
import { Link } from 'react-router-dom';

import './SideBarAdmin.css';

function SideBarAdmin() {
  return (
    <nav className="admin-side-bar-container">
      <h1>TryBeer</h1>
      <Link to="/admin/orders">
        <button type="button" data-testid="side-menu-item-orders" className="botoes">
          Pedidos
        </button>
      </Link>
      <Link to="/admin/profile">
        <button type="button" data-testid="side-menu-item-profile" className="botoes">
          Perfil
        </button>
      </Link>
      <Link to="/">
        <button type="button" data-testid="side-menu-item-logout" className="logout">
          Sair
        </button>
      </Link>
    </nav>
  );
}

export default SideBarAdmin;
