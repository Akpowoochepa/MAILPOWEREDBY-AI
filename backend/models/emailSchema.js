const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emailFormSchema = new Schema({
  name: String,
  email: String,
  subject: String,
  mainPurpose: String,
  notes: String,
  // ... add other fields as needed
});

const EmailForm = mongoose.model('EmailForm', emailFormSchema);

module.exports = EmailForm;
