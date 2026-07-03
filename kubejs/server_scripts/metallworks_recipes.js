ServerEvents.recipes((event) => {
	const metals = ['andesite_alloy', 'brass_ingot', 'copper_ingot', 'gold_ingot', 'iron_ingot', 'netherite_ingot', 'zinc_ingot'];
	metals.forEach(m => {
		event.remove({ id: `createmetalwork:create/compacting/${m}_from_compacting_molten` });
	});

	const cbc_metals = ['steel', 'bronze', 'cast_iron', 'nethersteel'];
	const cbc_outputs = ['nugget', 'ingot', 'block'];
	cbc_metals.forEach(m => {
		cbc_outputs.forEach(n => {
			event.remove({ id: `createbigcannons:compacting/forge_${m}_${n}` });
		})
	});

	// Andesites shit:

	event.remove({ id: 'createmetalwork:create/crushing/crushed_andesite_from_crushing' });
	event.recipes.create.crushing(
		['2x createmetalwork:crushed_andesite', CreateItem.of('createmetalwork:crushed_andesite', 0.8), CreateItem.of('create:experience_nugget', 0.1)],
		'minecraft:andesite'
	);

	const andesite_alloy = ['iron', 'zinc'];
	andesite_alloy.forEach(m => {
		event.remove({ id: `createmetalwork:create/mixing/molten_andesite_alloy_from_mixing_heated_molten_${m}` });
		event.recipes.create.mixing(
			[Fluid.of('createmetalwork:molten_andesite_alloy', 444)],
			[Fluid.of('createmetalwork:molten_andesite', 222), Fluid.of(`createmetalwork:molten_${m}`, 24)]
		)
		.heated();
	});

	event.remove({ id: 'createmetalwork:create/mixing/molten_andesite_alloy_from_mixing_heated' });
	event.remove({ id: 'createmetalwork:create/mixing/molten_andesite_from_mixing_heated_alt' });

	event.remove({ id: 'createmetalwork:create/mixing/molten_brass_from_mixing_heated' });
	event.recipes.create.mixing(
		[Fluid.of('createmetalwork:molten_brass', 333)],
		[Ingredient.of('#c:crushed_raw_materials/copper', 1), Ingredient.of('#c:crushed_raw_materials/zinc', 1)]
	)
	.heated();

	// Crushing and washing dusts:

	const metal_processing = [
        { id: 'iron',   byproduct: 'minecraft:redstone',  chance: 0.75 },
        { id: 'zinc',   byproduct: 'minecraft:gunpowder', chance: 0.25 },
        { id: 'gold',   byproduct: 'minecraft:quartz',    chance: 0.50 },
        { id: 'copper', byproduct: 'minecraft:clay_ball', chance: 0.50 }
    ];

	metal_processing.forEach(metal => {
		let m = metal.id;

		// crushing and washing dirty dust/dust
		
		event.recipes.create.crushing(
			[
				`kubejs:dirty_${m}_dust`,
				CreateItem.of(`kubejs:dirty_${m}_dust`, 0.25)
			],
			[Ingredient.of(`#c:crushed_raw_materials/${m}`)]
		)
		.id(`kubejs:crushing/${m}_dust`);

		event.recipes.create.splashing(
			[
				`kubejs:${m}_dust`,
				CreateItem.of(metal.byproduct, metal.chance)
			],
			[Ingredient.of(`#c:dirty_dusts/${m}`)]
		)
		.id(`kubejs:washing/${m}_dust`)

		// melting dust

		event.remove({ id: `createmetalwork:create/mixing/molten_${m}_from_mixing_heated` });

		event.recipes.create.mixing(
			[Fluid.of(`createmetalwork:molten_${m}`, 111)],
			[Ingredient.of(`#c:crushed_raw_materials/${m}`)]
		)
		.heated();

		event.recipes.create.mixing(
			[Fluid.of(`createmetalwork:molten_${m}`, 111)],
			[Ingredient.of(`#c:dusts/${m}`, 1)]
		)
		.heated();

		event.recipes.create.mixing(
			[Fluid.of(`createmetalwork:molten_${m}`, 444)],
			[Ingredient.of(`#c:dusts/${m}`, 4)]
		)
		.superheated();
	});

	// Bulk fermenter:

	event.remove({ id: 'createdieselgenerators:crafting/bulk_fermenter' });
	event.shaped('createdieselgenerators:bulk_fermenter', [
        'CSC',
        'CFC',
        'CCC'
    ], {
        S: 'create:iron_sheet', 
        C: 'createbigcannons:cast_iron_ingot',
        F: 'create:fluid_tank'
    }).id('kubejs:crafting/heavy_bulk_fermenter');

	// Coal Coke recipes:

	event.recipes.createdieselgenerators
		.basin_fermenting(
		["kubejs:coal_coke_block"],
		["minecraft:coal_block"]
		)
		.processingTime(400)
		.heated();

	event.recipes.createdieselgenerators
		.bulk_fermenting(
		["kubejs:coal_coke_block"],
		["minecraft:coal_block"]
		)
		.processingTime(300)
		.heated();

	event.shaped('kubejs:coal_coke_block', [
        'CCC',
        'CCC',
        'CCC'
    ], {
        C: 'kubejs:coal_coke'
    }).id('kubejs:crafting/coal_coke_block');

    event.shapeless('9x kubejs:coal_coke', [
        'kubejs:coal_coke_block'
    ]).id('kubejs:crafting/coal_coke_from_block');

    event.recipes.create.compacting(
        'kubejs:coal_coke_block', 
        '9x kubejs:coal_coke'
    ).id('kubejs:compacting/coal_coke_block');


	// Alloying:

	const steelSources = [
        { cast_iron: '2x createbigcannons:cast_iron_ingot', time: 1000 },
        { cast_iron: Fluid.of('createbigcannons:molten_cast_iron', 222), time: 700 }
    ];
    steelSources.forEach(src => {
        event.recipes.createdieselgenerators.basin_fermenting(
            [Fluid.of('createmetalwork:molten_steel', 333)],
            [src.cast_iron, '2x kubejs:ferrosilicon_nugget']
        )
        .processingTime(src.time)
        .superheated();
    });

	const steelSources_bulk = [
        { cast_iron: '2x createbigcannons:cast_iron_ingot', time: 500 },
        { cast_iron: Fluid.of('createbigcannons:molten_cast_iron', 222), time: 350 }
    ];
    steelSources_bulk.forEach(src => {
        event.recipes.createdieselgenerators.bulk_fermenting(
            [Fluid.of('createmetalwork:molten_steel', 333)],
            [src.cast_iron, '2x kubejs:ferrosilicon_nugget']
        )
        .processingTime(src.time)
        .superheated();
    });

	const castIronSources = [
        { iron: '2x minecraft:iron_ingot', time: 800 },
        { iron: Fluid.of('createmetalwork:molten_iron', 222), time: 500 }
    ];
    castIronSources.forEach(src => {
        event.recipes.createdieselgenerators.basin_fermenting(
            [Fluid.of('createbigcannons:molten_cast_iron', 333)],
            [src.iron, '4x kubejs:coal_coke', 'minecraft:tuff']
        )
        .processingTime(src.time)
        .heated();
    });

	const castIronSources_bulk = [
        { iron: '2x minecraft:iron_ingot', time: 600 },
        { iron: Fluid.of('createmetalwork:molten_iron', 222), time: 300 }
    ];
    castIronSources_bulk.forEach(src => {
        event.recipes.createdieselgenerators.bulk_fermenting(
            [Fluid.of('createbigcannons:molten_cast_iron', 333)],
            [src.iron, '4x kubejs:coal_coke', 'minecraft:tuff']
        )
        .processingTime(src.time)
        .heated();
    });

	// Casting:

	const metal_casting = [
		{ id: 'createmetalwork:molten_iron', product: 'minecraft:iron_ingot' },
		{ id: 'createmetalwork:molten_gold', product: 'minecraft:gold_ingot' },
		{ id: 'createmetalwork:molten_copper', product: 'minecraft:copper_ingot' },
		{ id: 'createmetalwork:molten_zinc', product: 'create:zinc_ingot' },
		{ id: 'createmetalwork:molten_andesite_alloy', product: 'create:andesite_alloy' },
		{ id: 'createmetalwork:molten_brass', product: 'create:brass_ingot' },
		{ id: 'createmetalwork:molten_netherite', product: 'minecraft:netherite_ingot' },
		{ id: 'createmetalwork:molten_bronze', product: 'alloyed:bronze_ingot' },
		{ id: 'createbigcannons:molten_cast_iron', product: 'kubejs:cast_iron_billet' },
		{ id: 'createmetalwork:molten_steel', product: 'kubejs:steel_billet' },
		{ id: 'createbigcannons:molten_steel', product: 'kubejs:steel_billet' },
	];
	const mold = 'createdieselgenerators:bar';

	metal_casting.forEach(metal => {
		let m = metal.id;
		let p = metal.product;

		event.recipes.createdieselgenerators.casting(
			p,
			mold,
			Fluid.of(m, 111)
		);
	});
});