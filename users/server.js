const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const port = process.env.PORT || 4000;

const app = express();

/*
    graphiql is s development tool that allow us to make querry against 
    our development server so only intended to be used in development
    environment
*/
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
