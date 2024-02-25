/* 
*This function calculates total price of a new Order
* @param {array} products cartProduct: Array of Objects
* @returns {number} Total Price
*/
export const totalPrice = (products) => {
  const totalPriceProducts = products?.reduce((acu, product) => acu + product.price, 0)
  return totalPriceProducts
}