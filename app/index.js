
const express = require('express');
const jwt = require('express-jwt');
const { authRouter } = require('./routs/auth');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());
// JWT middleware to authenticate requests
app.use(jwt.expressjwt({
    secret: 'your_secret_key',
    algorithms: ['HS256']
}).unless({ path: ['/login', '/signup'] }));


// Mount the authRouter under the '/auth' path
app.use('/auth', authRouter);


// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
