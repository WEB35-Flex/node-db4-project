const express = require("express");

const helmet = require("helmet");

const recipesRouter = require("../recipes/recipesRouter");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/recipes", recipesRouter);

server.get("/", (req, res) => {
  res.send("<h1>Hello from Express!</h1>");
});

module.exports = server;
