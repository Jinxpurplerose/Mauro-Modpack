ServerEvents.recipes((e) => {
    e.remove({ id: 'createdieselgenerators:crafting/diesel_engine'});
    e.remove({ id: 'createdieselgenerators:crafting/large_diesel_engine'});
    e.remove({ id: 'createdieselgenerators:crafting/huge_diesel_engine'});

    /* -------------------- */
    /* Normal Diesel Engine */
    /* -------------------- */
    
    const incBase = 'kubejs:incomplete_engine_base';
    const incCylinders = 'kubejs:incomplete_cylinders';
    const incEngine = 'kubejs:incomplete_diesel_engine';

    const compBase = 'kubejs:engine_base'
    const compCylinders = 'kubejs:base_cylinders'

    e.recipes.create.sequenced_assembly(
        [
            CreateItem.of(compBase, 0.90),
            CreateItem.of('8x create:brass_ingot', 0.06),
            CreateItem.of('5x createdeco:industrial_iron_ingot', 0.04),
        ],
        'createbigcannons:cast_iron_block',
        [
            e.recipes.create.cutting(incBase, incBase),
            e.recipes.create.cutting(incBase, incBase),
            e.recipes.create.deploying(incBase, [incBase, 'create:brass_block']),
            e.recipes.create.cutting(incBase, incBase),
            e.recipes.create.cutting(incBase, incBase),
            e.recipes.create.deploying(incBase, [incBase, 'create:fluid_tank']),
            e.recipes.create.deploying(incBase, [incBase, 'minecraft:flint_and_steel'])
        ]
    )
    .transitionalItem(incBase)
    .loops(1)
    .id('kubejs:assembly/diesel_base');

    e.recipes.create.sequenced_assembly(
        [
            CreateItem.of(compCylinders, 0.90),
            CreateItem.of('8x create:brass_ingot', 0.06),
            CreateItem.of('4x alloyed:steel_sheet', 0.04),
        ],
        compBase,
        [
            e.recipes.create.deploying(incCylinders, [incCylinders, 'createdieselgenerators:engine_piston']),
            e.recipes.create.deploying(incCylinders, [incCylinders, 'create:shaft']),
            e.recipes.create.deploying(incCylinders, [incCylinders, 'alloyed:steel_sheet']),
            e.recipes.create.pressing(incCylinders, incCylinders)
        ]
    )
    .transitionalItem(incCylinders)
    .loops(4)
    .id('kubejs:assembly/diesel_v4_cylinders');

    e.recipes.create.sequenced_assembly(
        [
            CreateItem.of('createdieselgenerators:diesel_engine')
        ],
        compCylinders,
        [
            e.recipes.create.deploying(incEngine, [incEngine, 'create:brass_sheet']),
            e.recipes.create.pressing(incEngine, incEngine),
            e.recipes.create.pressing(incEngine, incEngine)
        ]
    )
    .transitionalItem(incEngine)
    .loops(6)
    .id('kubejs:assembly/completing_diesel_v4');

    /* ------------------- */
    /* Large Diesel Engine */
    /* ------------------- */

    const incCylinders_modular = 'kubejs:incomplete_modular_cylinders';
    const incEngine_modular = 'kubejs:incomplete_modular_engine';

    const compCylinders_modular = 'kubejs:modular_cylinders'

    e.recipes.create.sequenced_assembly(
        [
            CreateItem.of(compCylinders_modular, 0.90),
            CreateItem.of('8x create:brass_ingot', 0.06),
            CreateItem.of('4x alloyed:steel_sheet', 0.04),
        ],
        compBase,
        [
            e.recipes.create.deploying(incCylinders_modular, [incCylinders_modular, 'create:smart_fluid_pipe']),
            e.recipes.create.deploying(incCylinders_modular, [incCylinders_modular, 'createdieselgenerators:engine_piston']),
            e.recipes.create.deploying(incCylinders_modular, [incCylinders_modular, 'create:shaft']),
            e.recipes.create.deploying(incCylinders_modular, [incCylinders_modular, 'alloyed:steel_sheet']),
            e.recipes.create.pressing(incCylinders_modular, incCylinders_modular)
        ]
    )
    .transitionalItem(incCylinders_modular)
    .loops(4)
    .id('kubejs:assembly/diesel_v4_cylinders_modular');

    e.recipes.create.sequenced_assembly(
        [
            CreateItem.of('createdieselgenerators:large_diesel_engine')
        ],
        compCylinders_modular,
        [
            e.recipes.create.deploying(incEngine_modular, [incEngine_modular, 'create:brass_sheet']),
            e.recipes.create.pressing(incEngine_modular, incEngine_modular),
            e.recipes.create.pressing(incEngine_modular, incEngine_modular)
        ]
    )
    .transitionalItem(incEngine_modular)
    .loops(8)
    .id('kubejs:assembly/completing_diesel_v4_modular');

    /* ------------------ */
    /* Huge Diesel Engine */
    /* ------------------ */

    const incBigEng_base = 'kubejs:incomplete_huge_engine_base';
    const incBigEng_cylinders = 'kubejs:incomplete_huge_cylinders';
    const incBigEng_final = 'kubejs:incomplete_huge_engine';

    const compBigEng_base = 'kubejs:huge_engine_base';
    const compBigEng_cylinders = 'kubejs:huge_cylinders';

    e.recipes.create.sequenced_assembly(
        [
            CreateItem.of(compBigEng_base),
        ],
        'createbigcannons:cast_iron_block',
        [
            e.recipes.create.cutting(incBigEng_base, incBigEng_base),
            e.recipes.create.cutting(incBigEng_base, incBigEng_base),
            e.recipes.create.deploying(incBigEng_base, [incBigEng_base, 'kubejs:huge_engine_casing']),
            e.recipes.create.deploying(incBigEng_base, [incBigEng_base, 'create:fluid_pipe']),
            e.recipes.create.deploying(incBigEng_base, [incBigEng_base, 'create:andesite_alloy']),
            e.recipes.create.pressing(incBigEng_base, incBigEng_base)
        ]
    )
    .transitionalItem(incBigEng_base)
    .loops(4)
    .id('kubejs:assembly/huge_diesel_base')

    e.recipes.create.sequenced_assembly(
        [
            CreateItem.of(compBigEng_cylinders),
        ],
        compBigEng_base,
        [
            e.recipes.create.cutting(incBigEng_cylinders, incBigEng_cylinders),
            e.recipes.create.deploying(incBigEng_cylinders, [incBigEng_cylinders, 'kubejs:huge_engine_control_system']),
            e.recipes.create.deploying(incBigEng_cylinders, [incBigEng_cylinders, 'createdieselgenerators:engine_piston']),
            e.recipes.create.deploying(incBigEng_cylinders, [incBigEng_cylinders, 'alloyed:steel_sheet']),
            e.recipes.create.pressing(incBigEng_cylinders, incBigEng_cylinders)
        ]
    )
    .transitionalItem(incBigEng_cylinders)
    .loops(8)
    .id('kubejs:assembly/huge_diesel_cylinders')

    e.recipes.create.sequenced_assembly(
        [
            CreateItem.of('createdieselgenerators:huge_diesel_engine')
        ],
        compBigEng_cylinders,
        [
            e.recipes.create.deploying(incBigEng_final, [incBigEng_final, 'create:shaft']),
            e.recipes.create.pressing(incBigEng_final, incBigEng_final),
            e.recipes.create.deploying(incBigEng_final, [incBigEng_final, 'create:brass_sheet']),
            e.recipes.create.pressing(incBigEng_final, incBigEng_final),
            e.recipes.create.pressing(incBigEng_final, incBigEng_final)
        ]
    )
    .transitionalItem(incBigEng_final)
    .loops(8)
    .id('kubejs:assembly/huge_diesel_engine')


    /* ---------------------------------------- */
    /* Huge Diesel Engine Casing and Controller */
    /* ---------------------------------------- */

    const incHugeEngineController = 'kubejs:incomplete_huge_engine_control_system';
    const incHugeEngineCasing = 'kubejs:incomplete_huge_engine_casing';

    const compHugeEngineController = 'kubejs:huge_engine_control_system';
    const compHugeEngineCasing = 'kubejs:huge_engine_casing';

    e.recipes.create.sequenced_assembly(
        [
            CreateItem.of(compHugeEngineCasing),
        ],
        'create:iron_sheet',
        [
            e.recipes.create.deploying(incHugeEngineCasing, [incHugeEngineCasing, 'create:brass_sheet']),
            e.recipes.create.pressing(incHugeEngineCasing, incHugeEngineCasing),
            e.recipes.create.deploying(incHugeEngineCasing, [incHugeEngineCasing, 'createdeco:industrial_iron_sheet']),
            e.recipes.create.pressing(incHugeEngineCasing, incHugeEngineCasing),
            e.recipes.create.cutting(incHugeEngineCasing, incHugeEngineCasing)
        ]
    )
    .transitionalItem(incHugeEngineCasing)
    .loops(4)
    .id('kubejs:assembly/huge_diesel_engine_casing')

    e.recipes.create.sequenced_assembly(
        [
            CreateItem.of(compHugeEngineController),
        ],
        'create:iron_sheet',
        [
            e.recipes.create.deploying(incHugeEngineController, [incHugeEngineController, 'minecraft:redstone']),
            e.recipes.create.deploying(incHugeEngineController, [incHugeEngineController, 'create:precision_mechanism']),
            e.recipes.create.deploying(incHugeEngineController, [incHugeEngineController, 'create:smart_fluid_pipe']),
            e.recipes.create.deploying(incHugeEngineController, [incHugeEngineController, 'create:electron_tube']),
            e.recipes.create.pressing(incHugeEngineController, incHugeEngineController)
        ]
        
    )
    .transitionalItem(incHugeEngineController)
    .loops(1)
    .id('kubejs:assembly/huge_engine_control_system')
})