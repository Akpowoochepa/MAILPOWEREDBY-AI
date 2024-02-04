const mongoose = require('mongoose');
const EmailTemplate = require('./models/templateSchema'); // Adjust the path as needed
const connectDB = require('./mongo'); // Adjust the path as needed

// Connect to database
connectDB();
const templates = [
    {
      name: 'Business Inquiry',
      category: 'business',
      subject: 'Inquiry about your services',
      body: 'Dear [Name],\n\nI am writing to inquire about the [specific service or product] offered by [Company Name]. We are [a brief introduction about your company or yourself]. We have heard great things about [Company Name] and are interested in learning more about how your services can benefit our operations. Specifically, we are interested in [specific interests or requirements]. Could you please provide more detailed information on [specific questions about services, pricing, availability, etc.]? Additionally, we would appreciate it if you could send any relevant case studies or testimonials.\n\nThank you for your time and assistance. We look forward to your prompt response.\n\nBest regards,\n[Your Full Name]\n[Your Position]\n[Your Contact Information]',
      imageName: 'Business Inquiry.jpg'
      // ... other fields
    },
    {
      name: 'School Admission',
      category: 'school',
      subject: 'Application for admission',
      body: 'Dear [Admissions Office],\n\nI am writing to express my strong interest in applying to [School Name] for the [upcoming academic year or specific term]. I am particularly drawn to [School Name] because of [specific programs, facilities, faculty, or values]. [One to two sentences about your background and why you think you are a good fit for the program].\n\nI have attached my application form along with my transcripts, [any other required documents], and my letter of recommendation. I would be grateful if you could confirm the receipt of my application and inform me of any further steps I need to take.\n\nThank you for considering my application. I am looking forward to the opportunity to contribute to [School Name] and to grow both academically and personally.\n\nSincerely,\n[Your Full Name]\n[Your Contact Information]',
      imageName: 'College.jpg'

      // ... other fields
    },
    
    {
      name: 'Follow-up Email',
      category: 'communication',
      subject: 'Following up on [Previous Topic]',
      body: 'Hello [Name],\n\nI hope this message finds you well. I am writing to follow up on our last conversation regarding [previous topic or meeting subject]. I wanted to see if you had any further thoughts or if there were any updates on your end. [One to two sentences summarizing the key points of the previous conversation and why it’s important].\n\nAdditionally, I would like to remind you of the upcoming [deadline, event, or action item] and how it relates to our discussion. Please let me know if there are any additional information or resources you require from me to move forward.\n\nThank you for your attention to this matter. I am looking forward to your prompt reply.\n\nBest regards,\n[Your Full Name]\n[Your Position]\n[Your Contact Information]',
      imageName: 'Email.jpg'
      // ... other fields
    },
    
    {
      name: 'Customer Service Inquiry',
      category: 'support',
      subject: 'Inquiry about [Product or Service]',
      body: 'Hello [Customer Service or Representative’s Name],\n\nI am contacting you regarding an issue I am experiencing with [product or service name]. I purchased this on [date of purchase] and have since encountered [describe the issue]. This has been concerning because [explain how this affects you or the use of the product/service].\n\nI have already tried [any troubleshooting steps you’ve taken] without success. Could you please guide me on how to resolve this issue? Additionally, I would like to know more about the steps involved in your customer service process for situations like these.\n\nI am attaching [any relevant documents, receipts, or photos] for your reference. I appreciate your prompt attention to this matter and look forward to a swift resolution.\n\nThank you for your support.\n\nBest regards,\n[Your Full Name]\n[Your Contact Information]',
      imageName: 'Customers.jpg'

      // ... other fields
    },
   
    // ... you can add more templates as needed
  ];
  

const populateTemplates = async () => {
  try {
    await EmailTemplate.insertMany(templates);
    console.log('Templates added successfully!');
    mongoose.disconnect();
  } catch (error) {
    console.error('Error adding templates:', error.message);
    mongoose.disconnect();
  }
};

populateTemplates();
