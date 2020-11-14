const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

function getRecipes() {
  return db("recipes as r").select("r.id", "r.recipe_name");
}

function getShoppingList(recipe_id) {
  return db("ingredients as i")
    .join("quantity as q", "q.ingredients_id", "i.id")
    .select("i.ingredient_name", "q.qty")
    .where("q.recipes_id", recipe_id);
}

function getInstructions(recipe_id) {
  return db("recipes as r").select("r.steps").where("r.id", recipe_id);
}
