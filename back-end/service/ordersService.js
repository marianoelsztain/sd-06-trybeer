const ordersModel = require('../model/ordersModel');

const createOrders = async (userId, objOrder) => {
  // console.log('estou no service', userId, objOrder);
  ordersModel.createOrders(userId, objOrder);
};
// const createProductsSales = async () => ordersModel.createProductsSales();

module.exports = {
  createOrders,
  // createProductsSales,
};
