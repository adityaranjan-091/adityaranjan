import mongoose, { Schema, Document, Model } from 'mongoose';

interface ContactFormDocument extends Document {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

const contactFormSchema: Schema<ContactFormDocument> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const ContactForm: Model<ContactFormDocument> = mongoose.models.ContactForm || mongoose.model<ContactFormDocument>('ContactForm', contactFormSchema);

const connectDB = async (): Promise<void> => {
  if (mongoose.connection.readyState >= 1) {
    return; // Already connected
  }

  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error('MONGODB_URI is not defined in environment variables');
  }

  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process on connection failure
  }
};

export { connectDB, ContactForm };