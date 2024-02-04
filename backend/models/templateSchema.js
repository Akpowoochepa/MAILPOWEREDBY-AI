const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emailTemplateSchema = new Schema({
  name: String, // A name to identify the template
  category: String, 
  subject: String, // Default subject line for the template
  body: String, // The template body
  imageName: {
    type: String,
    required: false
  }
  // ... add other fields as needed, like variables or placeholders
});

const EmailTemplate = mongoose.model('EmailTemplate', emailTemplateSchema);

module.exports = EmailTemplate;
