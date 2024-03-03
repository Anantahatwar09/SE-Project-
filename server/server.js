const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
 

const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); // You will create this for login and registration
const productsRoutes = require('./routes/productsRoutes'); // You will create this for login and registration

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/rental-platform', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/uploads', express.static('uploads'));
// Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productsRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
