ServerEvents.recipes(event => {
    let incomplete = 'kubejs:incomplete_nethersteel_billet'

    event.recipes.create.sequenced_assembly(
        [
            'kubejs:hot_nethersteel_ingot'
        ],
        'kubejs:nethersteel_billet',
        [
            // Шаг А: Нагрев / Обливание Лавой (100mb)
            event.recipes.create.filling(incomplete, [incomplete, Fluid.of('minecraft:lava', 100)]),

            // Шаг Б: Ковка (Пресс)
            event.recipes.create.pressing(incomplete, incomplete),
            
            event.recipes.create.pressing(incomplete, incomplete),
            
            event.recipes.create.pressing(incomplete, incomplete),

            // Шаг В: Закалка водой в процессе (250mb)
            event.recipes.create.filling(incomplete, [incomplete, Fluid.of('minecraft:water', 250)])
        ]
    )
    .transitionalItem(incomplete)
    .loops(10) 
    .id('kubejs:assembly/nethersteel_forging')
    
    // (4) ЭТАП 3: ФИНАЛЬНОЕ ОХЛАЖДЕНИЕ (Вентилятор + Freezing)
    event.custom({
        "type": "create_dragons_plus:freezing",
        "ingredients": [
            {
                // ВХОД: Здесь ОБЯЗАТЕЛЬНО "item"
                "item": "kubejs:hot_nethersteel_ingot"
            }
        ],
        "results": [
            {
                // ВЫХОД: А здесь в 1.21 ОБЯЗАТЕЛЬНО "id"
                "id": "createbigcannons:nethersteel_ingot",
                "count": 1
            }
        ],
        "processingTime": 1000
    }).id('kubejs:freezing/nethersteel_cooling')

})