import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import foodData from './data/foodData.json';

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/iron-tracker';
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

// Define the port the app will run on
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Check if the database is connected before going forward to the endpoints
app.use((req, res, next) => {
  if (mongoose.connection.readyState === 1) {
    next();
  } else {
    res.status(503).json({ error: 'Service unavailable' });
  }
});

// Default route
app.get('/', (req, res) => {
  res.send(
    'This is the backend of the Iron Tracker web app by Isabel González. Start by adding /foods to the URL above.'
  );
});

// Seed the database
const Food = mongoose.model('Food', {
  food: String, // 100g serving
  vitamin_c: Number, // in milligrams
  iron: Number // in milligrams
});

// Avoid duplicates upon restarting
// if (process.env.RESET_DB) {
const seedDatabase = async () => {
  await Food.deleteMany({});

  foodData.forEach((item) => {
    const newFood = new Food(item);
    newFood.save();
  });
};
seedDatabase();
// }

app.get('/foods', async (req, res) => {
  const { vitamin_c, iron } = req.query;
  let foods = await Food.find();
  if (vitamin_c) {
    const foodsByVitaminC = await Food.find({ vitamin_c: { $gt: vitamin_c } });
    foods = foodsByVitaminC;
  } else if (iron) {
    const foodsByIron = await Food.find({ iron: { $gt: iron } });
    foods = foodsByIron;
  }
  res.json(foods);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
