ServerEvents.recipes(event => {
	let incomplete = 'kubejs:incomplete_steel_billet'
    
    event.recipes.create.sequenced_assembly(
    	[
            'createbigcannons:steel_ingot'
        ],
        'kubejs:steel_billet',
        [
            event.recipes.create.filling(incomplete, [incomplete, Fluid.of('minecraft:lava', 25)]),
            event.recipes.create.pressing(incomplete, incomplete),
            
            event.recipes.create.pressing(incomplete, incomplete),
            
            event.recipes.create.filling(incomplete, [incomplete, Fluid.of('minecraft:water', 100)])
        ]
    )
    .transitionalItem(incomplete)
    .loops(6)
    .id('kubejs:assembly/steel_forging')
})