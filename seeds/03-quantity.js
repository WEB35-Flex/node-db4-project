exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("quantity")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("quantity").insert([
        { recipes_id: 1, ingredients_id: 1, Qty: 1 },
        { recipes_id: 1, ingredients_id: 2, Qty: 1 },
        { recipes_id: 2, ingredients_id: 4, Qty: 1 },
        { recipes_id: 2, ingredients_id: 5, Qty: 2 },
        { recipes_id: 3, ingredients_id: 3, Qty: 2.5 },
        { recipes_id: 3, ingredients_id: 4, Qty: 1 },
        { recipes_id: 4, ingredients_id: 5, Qty: 2 },
        { recipes_id: 4, ingredients_id: 6, Qty: 1 },
      ]);
    });
};
