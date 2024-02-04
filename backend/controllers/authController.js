const express = require('express');
const app = express();
const asyncErrorHandler = require('../utils/asyncErrorHandler');
const EmailForm = require('../models/emailSchema');

const CustomError = require('../utils/CustomError')



exports.emailReceived = asyncErrorHandler(async(req, res, next) => {
    // Log the incoming request body
    console.log('Received request data:', req.body);
    console.log('Request Body at the start:', req.body);
    const form = new EmailForm({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      mainPurpose: req.body.mainPurpose,
      notes: req.body.notes,
      // ... other fields
    });

    try {
        const result = await form.save();
        console.log('Save result:', result);
        res.status(201).json(result);
      } catch(err) {
        console.error('Save error:', err);
        next(new CustomError('Error saving the form data', 500));
      }
});