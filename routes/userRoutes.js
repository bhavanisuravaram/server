const express = require('express');
const router = express.Router();
const { gql } = require('apollo-server-express');
const { ApolloServer } = require('apollo-server-express');

// Assume typeDefs and resolvers are defined elsewhere
const typeDefs = require('../schema');
const resolvers = require('../resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers
});

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const { data, errors } = await server.executeOperation({
      query: gql`
        mutation {
          createUser(input: { name: "${name}", email: "${email}", password: "${password}" }) {
            id
            email
            password
          }
        }
      `
    });

    if (errors) {
      return res.status(500).send({ message: errors });
    }

    res.status(201).send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = router; // Correct export