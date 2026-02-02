# 🛒 Smart Cart - AI-Powered Shopping Assistant

An intelligent e-commerce application with AI-powered product recommendations, smart cart functionality, and seamless shopping experience.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://smarter-cart.vercel.app/)
[![Backend API](https://img.shields.io/badge/Backend-API-blue)](https://smart-cart-li2n.onrender.com)

https://github.com/user-attachments/assets/fef1206e-a3cd-45dd-b84b-69455cb83679

## 🚀 Live Demo

- **Frontend**: https://smarter-cart.vercel.app/
- **Backend API**: https://smart-cart-li2n.onrender.com

### 🎯 Features Demonstrated:

| Feature | Description |
|---------|-------------|
| 🛒 **Smart Cart** | Real-time product recommendations and cart management |
| 🔍 **Product Search** | AI-powered search with intelligent filtering |
| 🌙 **Theme Toggle** | Seamless dark/light mode switching |
| 📱 **Responsive Design** | Mobile-first design across devices |
| 🔐 **Authentication** | JWT-based login/signup flow |
| 🤖 **AI Recommendations** | Personalized product suggestions |

</div>

## 📋 Features

### Core Functionality
- **Smart Product Search**: AI-powered product discovery with intelligent filtering
- **Personalized Recommendations**: Machine learning based product suggestions
- **Intelligent Cart Management**: Smart cart with automatic suggestions and optimizations
- **User Authentication**: Secure login/signup with JWT tokens
- **Multi-category Browsing**: Organized product categories with filtering
- **Responsive Design**: Mobile-first design that works on all devices

### Technical Features
- **Dark/Light Theme**: User preference toggle with persistent settings
- **Real-time Updates**: Live cart updates and product availability
- **RESTful API**: Well-structured backend with comprehensive endpoints
- **Modern Stack**: React 18, Node.js, Express, MongoDB
- **Performance Optimized**: Fast loading with efficient data fetching

## 🛠️ Tech Stack

### Frontend
- **React 18** with Vite
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Context API** for state management
- **Axios** for API calls

### Backend
- **Node.js** with Express
- **MongoDB** with Mongoose
- **JWT** for authentication
- **Bcrypt** for password hashing
- **Dotenv** for environment configuration

## 📁 Project Structure

```
smart_cart/
├── backend/
│   ├── config/          # Database configuration
│   ├── controllers/     # Request handlers
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── data/           # Sample data
│   ├── .env            # Environment variables
│   └── server.js       # Server entry point
│
├── frontend/
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── context/    # React context providers
│   │   ├── pages/      # Page components
│   │   ├── services/   # API service layer
│   │   └── App.jsx     # Main application
│   ├── public/         # Static assets
│   └── vite.config.js  # Build configuration
│
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd smart_cart
```

2. **Setup Backend**
```bash
cd backend
npm install
cp .env.example .env
# Update .env with your MongoDB URI and JWT secret
npm run dev
```

3. **Setup Frontend**
```bash
cd frontend
npm install
npm run dev
```

4. **Access the Application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:8080

## 📊 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `GET /api/products/category/:category` - Get products by category
- `GET /api/products/search/:query` - Search products

### Cart
- `GET /api/cart/:userId` - Get user cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update` - Update cart item quantity
- `DELETE /api/cart/remove/:itemId` - Remove item from cart
- `DELETE /api/cart/clear/:userId` - Clear entire cart

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

## 🎯 Key Features Implementation

### Smart Cart Intelligence
- Automatic product recommendations based on cart contents
- Price optimization suggestions
- Related product discovery
- Inventory availability checking

### User Experience
- Intuitive navigation and filtering
- Real-time cart updates
- Persistent user preferences
- Smooth animations and transitions

### Performance
- Lazy loading for images
- Efficient API data fetching
- Client-side caching
- Optimized bundle size

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

<p align="center">Made with ❤️ for smarter shopping experiences</p>
