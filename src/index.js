import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";
import { connect } from "./database";

const app = express();
connect();

app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
  })
);

app.listen(3001, () => console.log("running on port 3001"));
