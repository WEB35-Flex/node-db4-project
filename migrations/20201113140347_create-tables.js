exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.string("recipe_name", 128).notNullable();
      tbl.string("steps", 128).notNullable();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments();
      tbl.string("ingredient_name", 128).notNullable();
    })
    .createTable("quantity", (tbl) => {
      tbl
        .integer("recipes_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes");
      tbl
        .integer("ingredients_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients");
      tbl.integer("qty");
      tbl.primary(["recipes_id", "ingredients_id"]);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("quantity")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
