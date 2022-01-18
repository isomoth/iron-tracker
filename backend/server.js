import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import foodData from './data/foodData.json';

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/ironTracker';
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
    'This is the backend of the Iron Tracker web app by Isabel González. Please visit <a href="">frontend</a> for the main page!'
  );
});

// Seed the database
const Food = mongoose.model('Food', {
  food: String,
  vitamin_c: Number, // in milligrams
  iron: Number // in milligrams
});

// Avoid duplicates upon restarting
if (process.env.RESET_DB) {
  const seedDatabase = async () => {
    await Food.deleteMany({});

    foodData.forEach((item) => {
      const newFood = new Food(item);
      newFood.save();
    });
  };
  seedDatabase();
}

// Get all foods
app.get('/foods/', async (req, res) => {
  res.json({
    response: foodData,
    success: true
  });
});

// Get all foods with > 2 mg iron
app.get('/foods/iron/', async (req, res) => {
  let foods = await Food.find(req.query);
  Food.find({ iron: { $gte: 40 } }, (error, foods) => {
    if (error) {
      res.status(404).json({ error: 'Foods not found' });
    } else {
      res.send(foods);
    }
  });
});

// Get all foods with > 40 mg vitamin C
app.get('/foods/vitamin_c/', async (req, res) => {
  let foods = await Food.find(req.query);
  Food.find({ vitamin_c: { $gte: 40 } }, (error, foods) => {
    if (error) {
      res.status(404).json({ error: 'Foods not found' });
    } else {
      res.send(foods);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
