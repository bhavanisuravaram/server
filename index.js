const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer , gql} = require('apollo-server-express');
const typeDefs = require('./schema'); // Correct import
const resolvers = require('./resolvers');
//const resolvers1 = require('./resolvers1');
//const typeDefs1 = require('./schema');
const userApiFromRouter = require('./routes/userRoutes');

const app = express();
const port = 3001;

app.use(express.json());

const url = 'mongodb+srv://balakrishnanaik78662:70SSwFCn9QmXY8uq@cluster0.neiiehy.mongodb.net/?appName=mongosh+2.0.0' ;

mongoose.connect(url , {useNewUrlParser:true , useUnifiedTopology:true})
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => console.log(err));

const server = new ApolloServer({ typeDefs, resolvers });





  async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
  app.use('/users',userApiFromRouter);
  app.listen(port, () => {
    console.log(`Server live at port ${port}`);
  });
}
function testing(){
  return 0;
}
testing();
startServer();