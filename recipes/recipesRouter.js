const express = require("express");

const Recipes = require("./recipes-model");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then((recipes) => {
      res.status(200).json({ data: recipes });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Recipes.getInstructions(id)
    .then((i) => {
      res.status(200).json(i);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/:id/ingredients", (req, res) => {
  const { id } = req.params;

  Recipes.getShoppingList(id)
    .then((i) => {
      res.status(200).json(i);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
