require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');

const workoutRoutes = require('./routes/workouts');

const app = express();

// Transform the body of the request into a JSON object
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

// routes
app.use('/api/workouts', workoutRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to database!');
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}!!!`);
    });
  })
  .catch((err) => {
      console.log(err);
    });


