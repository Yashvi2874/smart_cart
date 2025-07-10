# Smart Cart - AI-Powered Shopping Application

A modern, responsive e-commerce application built with React, Vite, and Tailwind CSS. Features AI-powered smart cart generation for personalized shopping experiences.

## 🚀 Features

- **Smart Cart Generation**: AI-powered cart creation for different purposes (weekly groceries, party essentials, healthy meals, etc.)
- **Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Product Catalog**: Browse and search through products with category filtering
- **Shopping Cart**: Full cart management with quantity updates and price calculations
- **User Profile**: Account management with order history and preferences
- **Contact System**: Contact form with FAQ section

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Icons**: Emoji-based icons for better cross-platform compatibility
- **Build Tool**: Vite for fast development and building

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd smart-cart
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open your browser and navigate to `http://localhost:3000`

## 🏗️ Project Structure

\`\`\`
src/
├── components/          # Reusable components
│   ├── Header.jsx
│   └── Footer.jsx
├── context/            # React Context providers
│   ├── ThemeContext.jsx
│   └── CartContext.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── Cart.jsx
│   ├── SmartCart.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── Profile.jsx
├── App.jsx             # Main app component
├── App.css             # Global styles
└── main.jsx            # Entry point
\`\`\`

## 🎨 Design System

The application follows the Walmart Global Tech design theme with:
- **Primary Blue**: #004c91
- **Accent Green**: #00c851
- Professional typography and spacing
- Consistent component styling
- Responsive breakpoints

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

1. Build the application:
\`\`\`bash
npm run build
\`\`\`

2. The `dist` folder contains the production-ready files

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🎯 Future Enhancements

- Backend integration with Node.js/Express
- Real AI/ML integration for smart recommendations
- Payment gateway integration
- User authentication system
- Product reviews and ratings
- Real-time notifications
- Progressive Web App (PWA) features
