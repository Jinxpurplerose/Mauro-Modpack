ServerEvents.recipes((e) => {
    e.remove({ id: 'createdieselgenerators:mixing/biodiesel' });

    e.recipes.create.mixing(
        [
            Fluid.of('createdieselgenerators:biodiesel', 100) 
        ],
        [
            Fluid.of('#c:plantoil', 80),
            Fluid.of('#c:ethanol', 20)
        ]
    )
    .processingTime(100)
    .heated()
    .id('kubejs:mixing/biodiesel');

    e.remove({ id: 'createdieselgenerators:basin_fermenting/fermentable' });
    e.remove({ id: 'createdieselgenerators:bulk_fermenting/fermentable' });

    e.recipes.createdieselgenerators
        .basin_fermenting(
            [Fluid.of('createdieselgenerators:ethanol', 200)],
            [
                Fluid.of('minecraft:water', 200),
                Ingredient.of('#createdieselgenerators:fermentable'),
                'minecraft:bone_meal'
            ]
        )
        .processingTime(200)
        .id('kubejs:basin_fermenting/ethanol');

    e.recipes.createdieselgenerators
        .bulk_fermenting(
            [Fluid.of('createdieselgenerators:ethanol', 500)],
            [
                Fluid.of('minecraft:water', 500),
                Ingredient.of('#createdieselgenerators:fermentable', 2),
                '2x minecraft:bone_meal'
            ]
        )
        .processingTime(500)
        .id('kubejs:bulk_fermenting/ethanol');
});