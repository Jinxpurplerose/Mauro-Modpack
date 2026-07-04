ServerEvents.recipes((e) => {
    e.remove({ id: 'createdieselgenerators:distillation/crude_oil'});
    e.remove({ id: 'createdieselgenerators:distillation/superheated_crude_oil'});

    e.recipes.createdieselgenerators
        .distillation(
            [
                Fluid.of("kubejs:heavy_oil", 20),
                Fluid.of("createdieselgenerators:diesel", 35),
                Fluid.of("createdieselgenerators:gasoline", 45),
            ],
            Fluid.of("createdieselgenerators:crude_oil", 100)
        )
        .processingTime(100)
        .heated()
        .id('kubejs:distillation/heated_crude_oil');

    e.recipes.createdieselgenerators
        .distillation(
            [
                Fluid.of("kubejs:heavy_oil", 40),
                Fluid.of("createdieselgenerators:diesel", 70),
                Fluid.of("createdieselgenerators:gasoline", 90),
            ],
            Fluid.of("createdieselgenerators:crude_oil", 200)
        )
        .processingTime(75)
        .superheated()
        .id('kubejs:distillation/superheated_crude_oil');

    e.remove({ id: 'createdieselgenerators:crafting/asphalt_block'})
    e.remove({ id: 'createdieselgenerators:mixing/asphalt_block'})

    e.recipes.create.mixing(
        [
            Item.of('createdieselgenerators:asphalt_block', 8),
        ],
        [
            '4x minecraft:sand',
            '4x minecraft:gravel',
            Fluid.of('kubejs:heavy_oil', 100)
        ]
    )
    .heated()
    .id('kubejs:mixing/asphalt_block');

    e.recipes.createdieselgenerators.basin_fermenting(
        [
            'kubejs:petroleum_coke',
             CreateItem.of('kubejs:sulphur_dust', 0.15)
        ],
        [Fluid.of('kubejs:heavy_oil', 90)]
    )
    .processingTime(600)
    .superheated();

    e.recipes.createdieselgenerators.bulk_fermenting(
        [
            'kubejs:petroleum_coke',
             CreateItem.of('kubejs:sulphur_dust', 0.30)
        ],
        [Fluid.of('kubejs:heavy_oil', 90)]
    )
    .processingTime(450)
    .superheated();
});