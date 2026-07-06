ServerEvents.recipes(event => {
    event.remove({ output: 'createfood:cheese_block' });
    event.remove({ output: 'createfood:cheese_slice' });
    event.remove({ id: 'createfood:create/mixing/liquid_cheese_from_mixing_heated_milk' });
    event.remove({ id: 'createfood:create/mixing/liquid_cheese_from_mixing_heated' });
    event.remove({ output: 'brewinandchewin:pizza' });
    event.remove({ output: 'brewinandchewin:pizza_slice' });

    event.recipes.create.mixing(
        Fluid.of('createfood:liquid_cheese', 1000),
        Ingredient.of('#c:cheeses', 4)
    )
    .heated();
});