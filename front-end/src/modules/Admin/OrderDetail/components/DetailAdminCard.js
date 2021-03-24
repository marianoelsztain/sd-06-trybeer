import React from 'react';
import PropTypes from 'prop-types';

function DetailAdminCard(props) {
  const { sale, status } = props;
  console.log(sale);
  const formatedTotalPrice = `R$ ${sale[0].total_price.replace('.', ',')}`;
  return (
    <div
      className="m-12"
    >
      <div>
        <div
          className="flex justify-between mb-3"
          data-testid={ `${sale[0].sale_id - 1}-order-card-container` }
        >
          <div
            data-testid={ `${sale[0].sale_id - 1}-order-number` }
            className="text-4xl"
          >
            Pedido
            {' '}
            {sale[0].sale_id}
            {' - '}
            {status}
          </div>
        </div>
        {sale.map((product, index) => (
          <div
            key={ index }
            className="flex justify-between text-2xl"
          >
            <div
              className="m-4"
              data-testid={ `${index}-product-qtd` }
            >
              {product.quantity}
            </div>
            <div
              className="m-4"
              data-testid={ `${index}-product-name` }
            >
              {product.name}
            </div>
            <div
              className="m-4"
              data-testid={ `${index}-product-price` }
            >
              {`R$ ${product.price.replace('.', ',')}`}
            </div>
          </div>
        ))}
        <div
          className="flex justify-end mt-3 text-2xl"
          data-testid={ `${sale[0].sale_id - 1}-order-total-value` }
        >
          Total:
          {' '}
          {formatedTotalPrice}
        </div>
      </div>
    </div>
  );
}

DetailAdminCard.propTypes = {
  sale: PropTypes.arrayOf(),
}.isRequired;

export default DetailAdminCard;