ServerEvents.recipes(event => {
	let incomplete = 'kubejs:incomplete_cast_iron_billet'
    
    event.recipes.create.sequenced_assembly(
    	[
            'createbigcannons:cast_iron_ingot'
        ],
        'kubejs:cast_iron_billet',
        [
            event.recipes.create.filling(incomplete, [incomplete, Fluid.of('minecraft:lava', 25)]),
            event.recipes.create.pressing(incomplete, incomplete),
            event.recipes.create.pressing(incomplete, incomplete),
            event.recipes.create.filling(incomplete, [incomplete, Fluid.of('minecraft:water', 100)])
        ]
    )
    .transitionalItem(incomplete)
    .loops(3)
    .id('kubejs:assembly/cast_iron_forging')
})