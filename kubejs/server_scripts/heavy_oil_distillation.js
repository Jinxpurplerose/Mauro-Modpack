ServerEvents.recipes((e) => {
    e.recipes.createdieselgenerators
        .distillation(
            [Fluid.of("minecraft:water", 250), Fluid.of("minecraft:lava", 50)],
            Fluid.of("createdieselgenerators:crude_oil", 500)
        )
        .processingTime(20)
        .superheated();
});