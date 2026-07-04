ServerEvents.recipes(event => {
    event.recipes.create.compacting(
        ['2x minecraft:paper'],
        ['create:pulp', Fluid.of('minecraft:water', 50)]
    ).id('kubejs:compacting/paper_from_pulp');
});