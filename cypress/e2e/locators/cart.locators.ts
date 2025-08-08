export const CartLocators = {
  addToCartButton: (productId: string) => `#add-to-cart-${productId}`,
  removeFromCartButton: (productId: string) => `#remove-${productId}`,
  cartItemCount: ".shopping_cart_badge",
  cartIcon: ".shopping_cart_link",
  allRemoveButtons: '[data-test^="remove-"]', // or use a class like '.cart_button' if available
  inventoryList: ".inventory_list",
  inventoryItem: ".inventory_item",
  inventoryItemName: ".inventory_item_name",
  inventoryItemPrice: ".inventory_item_price",
  shoppingCartContainer: ".shopping_cart_container",
  cartItem: ".cart_item",
};
