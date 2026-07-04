ServerEvents.recipes(event => {
    event.remove({ id: 'betterend:sulphur_gunpowder' });

    event.recipes.create.mixing(
        ['minecraft:gunpowder'],
        [
            Ingredient.of('#c:sulphur'),
            'kubejs:charcoal_dust',
            'minecraft:bone_meal'
        ]
    )
    .id('kubejs:mixing/gunpowder_from_sulphur');

    event.recipes.create.milling(
        ['kubejs:charcoal_dust'],
        ['minecraft:charcoal']
    )
    .id('kubejs:milling/charcoal_dust');
});