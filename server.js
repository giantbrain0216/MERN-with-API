import Express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

// Initialize the Express App
const app = new Express();
app.use(cors());


import posts from './routes/post.routes';
import dummyData from './dummyData';
import serverConfig from './config';

/**
* Database configuration
**/ 
const connectToDatabase = () => {
  mongoose.connect(serverConfig.mongoURL, (err, res) => {
    if(err) {
        console.log('Error connecting to: ' + serverConfig.mongoURL + '. ' + err);
      } else {
        console.log('Successfully connected to: ' + serverConfig.mongoURL);
        dummyData();
      }
  });
}

connectToDatabase();

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connectToDatabase);

// Apply body Parser and server public assets and routes
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use('/api', posts);

// start app
app.listen(8080, (error) => {
  if (!error) {
    console.log(`MERN is running on port: ${serverConfig.port}! Build something amazing!`); // eslint-disable-line
  } 
});

export default app;
