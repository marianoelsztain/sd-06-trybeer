const cartModel = require('../models/cartModel');

const addSale = (sale) => cartModel.addSale(sale);

const addSaleProduct = (salesProducts) => (
  cartModel.addSaleProduct(salesProducts)
);

module.exports = {
  addSale,
  addSaleProduct,
};
