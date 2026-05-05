ServerEvents.recipes(event => {
    event.remove({ id: 'simulated:sequenced_assembly/engine_assembly' })

    const incomplete = 'simulated:incomplete_engine_assembly'

    event.recipes.create.sequenced_assembly(
        [
            CreateItem.of('simulated:engine_assembly', 0.50),
            CreateItem.of('25x minecraft:iron_nugget', 0.30),
            CreateItem.of('5x create:crushed_raw_iron', 0.15),
            CreateItem.of('6x minecraft:iron_ingot', 0.05),
        ],
        'minecraft:iron_block',
        [
            event.recipes.create.cutting(incomplete, incomplete),
            event.recipes.create.pressing(incomplete, incomplete),
            event.recipes.create.deploying(incomplete, [incomplete, 'createdieselgenerators:engine_piston'])
        ]
    )
    .transitionalItem(incomplete)
    .loops(8)
    .id('kubejs:assembly/engine_assembly')
})
