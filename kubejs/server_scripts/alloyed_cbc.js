    ServerEvents.recipes(event => {
        // --- ЧАСТЬ 2: НОВЫЕ СПЛАВЫ (СТАЛЬ И ЧУГУН) ---

        // (1) Удаляем старые рецепты
        event.remove({ type: 'create:mixing', output: '#c:ingots/steel' })

        // --- ЧАСТЬ 3: NETHERSTEEL (Адская Сталь) ---

        // (1) Удаляем старые рецепты Nethersteel в миксере
        event.remove({ type: 'create:mixing', output: 'createbigcannons:nethersteel_ingot' })

        // (2) РЕЦЕПТ ЧЕРЕЗ ЧУГУН (Cast Iron)
        event.recipes.create.mixing(
            Item.of('kubejs:nethersteel_billet', 2),
            [
                'minecraft:netherite_scrap',
                Item.of('createbigcannons:cast_iron_ingot', 8),
                Item.of('kubejs:ferrosilicon_nugget', 6)
            ]
        ).superheated().id('kubejs:mixing/nethersteel_billet_from_cast_iron')

        // (3) РЕЦЕПТ ЧЕРЕЗ СТАЛЬ (Steel)
        event.recipes.create.mixing(
            'kubejs:nethersteel_billet',
            [
                'minecraft:netherite_scrap',
                Item.of('createbigcannons:steel_ingot', 4),
                Item.of('kubejs:ferrosilicon_nugget', 2)
            ]
        ).superheated().id('kubejs:mixing/nethersteel_billet_from_steel')
    })