const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./mongo');
const EmailForm = require('./models/emailSchema');
const EmailTemplate = require('./models/templateSchema')
const { body, validationResult } = require('express-validator');
const authController = require('./controllers/authController')
const errorHandlingMiddleware = require('./utils/ErrorHandler')

const app = express();

// Connect to database
connectDB();

// Middleware
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your frontend's origin
  optionsSuccessStatus: 200 // For legacy browser support
};
app.use(cors(corsOptions));

app.use(express.json());


// Port the application is running on
const port = process.env.PORT || 5003;

app.listen(port, () => console.log(`Server started on port ${port}`));

// Test endpoint
app.get('/', (req, res) => {
  res.send('Hello world');
});


app.post('/api/email-form', [
  body('name').isString().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('subject').isString(),
  body('mainPurpose').isString(),
  body('notes').isString(),
  // ... add other validations as needed
], (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('missing form data', req.body)
    return res.status(400).json({ errors: errors.array() });
  }

  next(); // if validation passes, continue to the next middleware/controller
}, authController.emailReceived); 


app.get('/api/email-templates', (req, res) => {
  EmailTemplate.find()
    .then(templates => res.json(templates)) // Corrected line
    .catch(err => {
      console.error('Error fetching templates:', err); // Logging the error
      res.status(500).send('Internal Server Error'); // Sending a 500 status code with a generic error message
    });
});


// Fetch templates by category
app.get('/api/email-templates/:category', (req, res) => {
  EmailTemplate.find({ category: req.params.category })
    .then(templates => res.json(templates))
    .catch(err => res.status(500).send(err));
});


app.use(errorHandlingMiddleware);
// GET TEMPLATE BY ID - make sure to fill it out