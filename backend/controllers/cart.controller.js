let cart = [];
export { cart };

export const addToCart = (req, res) => {
  const { productId, name, quantity, price } = req.body;

  if (!productId || !name || quantity == null || price == null) {
    return res.status(400).json({ error: "Missing product details" });
  }

  const numericQuantity = parseFloat(quantity);
  const numericPrice = parseFloat(price);

  if (isNaN(numericQuantity) || isNaN(numericPrice)) {
    return res.status(400).json({ error: "Quantity and price must be numeric" });
  }

  // Check if item already exists
  const existingItem = cart.find((item) => item.productId === productId);

  if (existingItem) {
    existingItem.quantity += numericQuantity;
  } else {
    cart.push({ productId, name, quantity: numericQuantity, price: numericPrice });
  }

  res.status(201).json({ message: "Item added/updated in cart", cart });
};

export const getCart = (req, res) => {
  res.json(cart);
};

export const removeFromCart = (req, res) => {
  const index = parseInt(req.params.index);
  if (isNaN(index) || index < 0 || index >= cart.length) {
    return res.status(404).json({ error: "Invalid index" });
  }

  const removed = cart.splice(index, 1);
  res.json({ message: "Item removed", removed });
};

export const getCartTotal = (req, res) => {
  const total = cart.reduce((sum, item) => {
    return sum + item.price * (item.quantity || 1);
  }, 0);

  res.json({ total });
};
