# Mini Ecommerce API

A mini ecommerce backend API built with Express.js and MongoDB.

## Features

- User authentication (Register/Login)
- Product management (CRUD operations)
- Category management 
- Shopping cart functionality
- Order management
- RESTful API design

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Environment**: Dotenv for environment variables

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mini-ecommerce.git
   cd mini-ecommerce
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/mini-ecommerce
   JWT_SECRET=your_jwt_secret_key
   ```

4. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

## API Documentation

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create new product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create new category (Admin only)

### Cart
- `GET /api/cart` - Get user's cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:id` - Update cart item
- `DELETE /api/cart/:id` - Remove item from cart

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get user's orders
- `GET /api/orders/:id` - Get order details

## Project Structure

```
mini-ecommerce/
├── config/            # Configuration files
│   └── databases.js   # Database configuration
├── controllers/       # Route controllers
├── middleware/        # Custom middleware
├── models/            # Mongoose models
├── routes/            # API routes
├── services/          # Business logic
├── .env               # Environment variables
├── .gitignore         # Git ignore file
├── index.js           # Application entry point
├── package.json       # NPM dependencies
├── README.md          # Project documentation
└── yarn.lock          # Yarn lock file
```

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
