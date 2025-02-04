const User = require('./User');
const Subscription = require('./Subscription');
const Product = require('./Product');
const Payment = require('./Payment');
const Order = require('./Order');
const Course = require('./Course');
const Cart = require('./Cart');

// User and Subscription (One-to-One)
User.hasOne(Subscription, { foreignKey: 'userId', onDelete: 'CASCADE' });
Subscription.belongsTo(User, { foreignKey: 'userId' });

// User and Order (One-to-Many)
User.hasMany(Order, { foreignKey: 'userId', onDelete: 'CASCADE' });
Order.belongsTo(User, { foreignKey: 'userId' });

// User and Cart (One-to-One)
User.hasOne(Cart, { foreignKey: 'userId', onDelete: 'CASCADE' });
Cart.belongsTo(User, { foreignKey: 'userId' });

// Order and Payment (One-to-One)
Order.hasOne(Payment, { foreignKey: 'orderId', onDelete: 'CASCADE' });
Payment.belongsTo(Order, { foreignKey: 'orderId' });

// Order and Cart (One-to-One)
Order.belongsTo(Cart, { foreignKey: 'cartId', onDelete: 'CASCADE' });
Cart.hasOne(Order, { foreignKey: 'cartId', onDelete: 'CASCADE' });

// Cart and Products (Many-to-Many)
Cart.hasMany(Product, { foreignKey: 'cartId' });
Product.belongsToMany(Cart, { foreignKey: 'productId' });

// User and Courses (Many-to-Many) - Subscription-based access
User.belongsToMany(Course, { through: 'UserCourses', foreignKey: 'userId' });
Course.belongsToMany(User, { through: 'UserCourses', foreignKey: 'courseId' });

module.exports = {
  User,
  Subscription,
  Product,
  Payment,
  Order,
  Course,
  Cart
};
