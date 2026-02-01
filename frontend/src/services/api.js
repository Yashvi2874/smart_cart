const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

class ApiService {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Products API
  async getProducts() {
    return this.request('/products');
  }

  // Cart API
  async getCart() {
    return this.request('/cart');
  }

  async addToCart(product) {
    return this.request('/cart', {
      method: 'POST',
      body: JSON.stringify({
        productId: product._id || product.id,
        name: product.name,
        quantity: 1,
        price: product.price,
        imageUrl: product.imageUrl // Ensure imageUrl is sent
      }),
    });
  }

  async removeFromCart(index) {
    return this.request(`/cart/${index}`, {
      method: 'DELETE',
    });
  }

  async updateCartItem(index, quantity) {
    return this.request(`/cart/${index}`, {
      method: 'PUT',
      body: JSON.stringify({ quantity }),
    });
  }

  async clearCart() {
    return this.request('/cart', {
      method: 'DELETE',
    });
  }

  async getCartTotal() {
    return this.request('/cart/total');
  }
}

export default new ApiService(); 