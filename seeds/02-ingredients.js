exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "1 bag chocolate chips" },
        { ingredient_name: "1 tub cookie dough" },
        { ingredient_name: "2 oz chicken" },
        { ingredient_name: "1 pack noodles" },
        { ingredient_name: "1 can tomato sauce" },
        { ingredient_name: "1 box pasta" },
      ]);
    });
};
