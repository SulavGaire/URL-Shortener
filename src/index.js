require('dotenv').config();
const express = require('express');
const { default: mongoose } = require('mongoose');
const port = process.env.PORT || 3000;
const app = express();
mongoose.connect(process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

app.get('/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      joke: "Why don't scientists trust atoms? Because they make up everything!"
    },
    {
      id: 2,
      joke: "Did you hear about the mathematician who's afraid of negative numbers? He will stop at nothing to avoid them!"
    },
    {
      id: 3,
      joke: "Why don't skeletons fight each other? They don't have the guts!"
    },
    {
      id: 4,
      joke: "Why did the scarecrow win an award? Because he was outstanding in his field!"
    },
    {
      id: 5,
      joke: "What do you call a fish wearing a crown? King Neptune!"
    }
  ];

  res.json(jokes);
});

app.post('/shorturls', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});