StartupEvents.registry('item', event => {
    
    event.create('incomplete_engine_base') // check
        .displayName('Incomplete Engine Base')
        .texture('kubejs:item/incomplete_engine_base')

    event.create('incomplete_huge_engine_base') // check
        .displayName('Incomplete Huge Engine Base')
        .texture('kubejs:item/incomplete_huge_engine_base')



    event.create('incomplete_cylinders') // check
        .displayName('Incomplete Cylinders')
        .texture('kubejs:item/incomplete_cylinders')

    event.create('incomplete_modular_cylinders') // check
        .displayName('Incomplete Modular Cylinders')
        .texture('kubejs:item/incomplete_modular_cylinders')

    event.create('incomplete_huge_cylinders') // check
        .displayName('Incomplete Huge Cylinders')
        .texture('kubejs:item/incomplete_huge_cylinders')



    event.create('incomplete_diesel_engine') // check
        .displayName('Incomplete Engine Base')
        .texture('kubejs:item/incomplete_diesel_engine')

    event.create('incomplete_modular_engine') // check
        .displayName('Incomplete Modular Engine ')
        .texture('kubejs:item/incomplete_modular_engine')

    event.create('incomplete_huge_engine') // check
        .displayName('Incomplete Huge Engine')
        .texture('kubejs:item/incomplete_huge_engine')


        // Complete versions bellow:  |
        //                            V


    event.create('engine_base') // check
        .displayName('Engine Base')
        .texture('kubejs:item/engine_base')

    event.create('huge_engine_base') // check
        .displayName('Huge Engine Base')
        .texture('kubejs:item/huge_engine_base')



    event.create('base_cylinders') // check
        .displayName('Base Cylinders')
        .texture('kubejs:item/base_cylinders')

    event.create('modular_cylinders') // check
        .displayName('Modular Cylinders')
        .texture('kubejs:item/modular_cylinders')

    event.create('huge_cylinders') // check
        .displayName('Huge Cylinders')
        .texture('kubejs:item/huge_cylinders')


    // Extra new details for assemble

    event.create('huge_engine_casing') //
        .displayName('Huge Engine Casing')
        .texture('kubejs:item/huge_engine_casing')

    event.create('huge_engine_control_system') //
        .displayName('Huge Engine Controller')
        .texture('kubejs:item/huge_engine_control_system')
})