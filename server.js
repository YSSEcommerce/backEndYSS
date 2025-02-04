const dotenv = require('dotenv');

const express = require('express');
const sequelize = require('./config/database'); // Importation de la configuration Sequelize

// Charger les variables d'environnement
dotenv.config();

const app = express();

// Start routes imports
const productRoutes = require('./routes/productRoutes');
// End routes import

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Start routes use
app.use('/api/products', productRoutes);
// End routes use

// Synchronisation avec la base de données
async function startServer() {
  try {
    const isDevelopment = process.env.NODE_ENV === 'development';
    if (isDevelopment) {
      await sequelize.sync({ force: true }); // Drop and recreate tables in development
    } else {
      await sequelize.sync(); // Sync without dropping tables in production
    }

    console.log('Base de données synchronisée');

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Serveur démarré sur le port ${PORT}`);
    }).on('error', (err) => {
      console.error('Erreur lors du démarrage du serveur', err);
    });
  } catch (err) {
    console.error('Erreur lors de la synchronisation de la base de données', err);
  }
}

startServer();
