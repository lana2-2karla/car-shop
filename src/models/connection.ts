import 'dotenv/config';
import Mongoose from 'mongoose';

const connectToDatabase = () => {
  Mongoose.connect(process.env.MONGO_URI || 'mongodb://mongodb:27017/CarShop');
};

export default connectToDatabase;