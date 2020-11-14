exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          recipe_name: "Chocolate Chip Cookies",
          steps:
            "take a fistfull of cookie dough and roll it in your hands, shape into a cookie shape, place on a baking sheet, add chocolate chips, place in oven and bake at 350 degrees fahrenheit for approximately 1 hour.",
        },
        {
          recipe_name: "Spaghetti",
          steps:
            "cook noodles in water for approximately 20 min, add tomato sauce and enjoy.",
        },
        {
          recipe_name: "Chicken Noodle Soup",
          steps:
            "bring a pot of water to boil, add chicken, add chicken stock, add noodles, cook for approximately 30 min, enjoy.",
        },
        {
          recipe_name: "Lasagna",
          steps:
            "place pasta in cooking dish, add tomatoe sauce, place in oven and bake for approximately 45 min on 400 degrees fahrenheit.",
        },
      ]);
    });
};
