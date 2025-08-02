export const CartLocators = {
  addToCartButton: (productId: string) => `#add-to-cart-${productId}`,
  removeFromCartButton: (productId: string) => `#remove-${productId}`,
  cartItemCount: '.shopping_cart_badge',
  cartIcon: '.shopping_cart_link',
};
