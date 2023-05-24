const express = require('express');
const cors = require('cors');

const app = express();

// Middleware

app.use(cors());
app.use(express.json());

// Routes


// Listen

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


