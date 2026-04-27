const mongoose = require('mongoose');

// Creamos una nueva conexión separada de la conexión global (mongoose.connect)
const partnerDb = mongoose.createConnection(process.env.PARTNER_MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

partnerDb.on('connected', () => {
    console.log(`✅ MongoDB Partner (Restaurantes) conectado exitosamente: ${partnerDb.host}`);
});

partnerDb.on('error', (err) => {
    console.error(`❌ Error de conexión a MongoDB Partner: ${err.message}`);
});

module.exports = partnerDb;
