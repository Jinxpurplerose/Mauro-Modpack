ServerEvents.recipes(event => {

    event.remove({ id: 'dndecor:industrial_plating_block_from_ingots_iron_stonecutting' })

    event.recipes.create.mixing(
        '4x createdeco:industrial_iron_ingot', // Выход: 2 шт.
        [
            'minecraft:iron_ingot',
            '2x minecraft:gravel',
            'create:cinder_flour'
        ]
    ).heated().id('kubejs:mixing/industrial_iron_from_slag')

    event.remove({ id: 'create:industrial_iron_block_from_ingots_iron_stonecutting' });
    event.remove({ id: 'createdeco:industrial_iron_sheet_metal' });

    event.shaped(
        '4x createdeco:industrial_iron_sheet_metal',
        [
            'SS',
            'SS'
        ],
        {
            S: 'createdeco:industrial_iron_sheet'
        }
    )
    .id('kubejs:crafting/industrial_iron_sheet_metal');

    let base_block = 'createdeco:industrial_iron_sheet_metal';
    event.stonecutting('4x dndecor:industrial_dash_bolt', base_block).id('kubejs:stonecutting/industrial_dash_bolt');
    event.stonecutting('2x dndecor:dark_metal_brick_stairs', base_block).id('kubejs:stonecutting/dark_metal_brick_stairs');
    event.stonecutting('dndecor:beam', base_block).id('kubejs:stonecutting/beam');
    event.stonecutting('2x dndecor:industrial_sheet_metal', base_block).id('kubejs:stonecutting/industrial_sheet_metal');
    event.stonecutting('4x dndecor:industrial_flat_bolt', base_block).id('kubejs:stonecutting/industrial_flat_bolt');
    event.stonecutting('4x dndecor:large_industrial_chain', base_block).id('kubejs:stonecutting/large_industrial_chain');
    event.stonecutting('4x dndecor:industrial_dot_bolt', base_block).id('kubejs:stonecutting/industrial_dot_bolt');
    event.stonecutting('2x dndecor:dark_metal_plating', base_block).id('kubejs:stonecutting/dark_metal_plating');
    event.stonecutting('2x dndecor:metal_support', base_block).id('kubejs:stonecutting/metal_support');
    event.stonecutting('dndecor:industrial_plating_block', base_block).id('kubejs:stonecutting/industrial_plating_block');
    event.stonecutting('dndecor:industrial_boiler', base_block).id('kubejs:stonecutting/industrial_boiler');
    event.stonecutting('2x dndecor:industrial_floor', base_block).id('kubejs:stonecutting/industrial_floor');
    event.stonecutting('4x dndecor:dark_metal_block_slab', base_block).id('kubejs:stonecutting/dark_metal_block_slab');
    event.stonecutting('2x dndecor:diagonal_metal_support', base_block).id('kubejs:stonecutting/diagonal_metal_support');
    event.stonecutting('4x dndecor:dark_metal_brick_slab', base_block).id('kubejs:stonecutting/dark_metal_brick_slab');
    event.stonecutting('4x dndecor:industrial_cross_bolt', base_block).id('kubejs:stonecutting/industrial_cross_bolt');
    event.stonecutting('2x dndecor:dark_metal_block', base_block).id('kubejs:stonecutting/dark_metal_block');
    event.stonecutting('2x railways:conductor_vent', base_block).id('kubejs:stonecutting/conductor_vent');
    event.stonecutting('4x dndecor:industrial_catwalk', base_block).id('kubejs:stonecutting/industrial_catwalk');
    event.stonecutting('2x dndecor:dark_metal_bricks', base_block).id('kubejs:stonecutting/dark_metal_bricks');
    event.stonecutting('2x dndecor:dark_metal_block_stairs', base_block).id('kubejs:stonecutting/dark_metal_block_stairs');
})