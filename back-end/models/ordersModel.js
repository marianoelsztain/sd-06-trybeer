const connection = require('./connections');

const getOrder = async (userId) => {
  try {
    console.log(userId);
    const [data] = await connection
      .execute('SELECT id, total_price, sale_date FROM sales WHERE user_id=?', [userId]);
    console.log(data);
    return data;
  } catch (e) {
    return 'erro interno';
  }
};

const getDetailOrder = async (saleId) => {
  try {
    console.log(saleId);
    const [product] = await connection
    .execute('SELECT sale_id, product_id, quantity FROM sales_products WHERE sale_id=?', [saleId]);
    
    return product;
  } catch (e) {
    return 'erro interno';
  }
};

module.exports = { getOrder, getDetailOrder };