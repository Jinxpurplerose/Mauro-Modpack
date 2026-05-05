ServerEvents.recipes(event => {

    // --- 1. Twilight Forest: Chiseled Canopy Bookshelf ---

    // Удаляем старый рецепт по результату
    event.remove({ output: 'twilightforest:chiseled_canopy_bookshelf' })

    // Добавляем новый рецепт
    // В KubeJS мы используем буквы (ключи) и пробелы для пустых мест
    event.shaped('twilightforest:chiseled_canopy_bookshelf', [
        'PPP', // P - Planks
        'SSS', // S - Slab
        'PPP'
    ], {
        P: 'twilightforest:canopy_planks',
        S: 'twilightforest:canopy_slab'
    })


    // --- 2. Miners Delight: Copper Cup ---

    // Удаляем старый рецепт
    event.remove({ output: 'minersdelight:copper_cup' })

    // Добавляем новый. 
    // Обратите внимание: '   ' (три пробела) означают пустой ряд (minecraft:air)
    event.shaped('minersdelight:copper_cup', [
        '   ', 
        'CCC', 
        ' C '
    ], {
        C: 'minecraft:copper_ingot'
    }).id('custom_copper_cup_mindel') // Можно задать ID рецепта вручную, как вы хотели


    // --- 3. Dungeons Delight: Удаление ножей ---

    // Можно перечислить их списком для удобства или писать event.remove для каждого
    const knivesToRemove = [
        'dungeonsdelight:fiery_knife',
        'dungeonsdelight:steeleaf_knife',
        'dungeonsdelight:knightmetal_knife',
        'dungeonsdelight:ironwood_knife'
    ]

    knivesToRemove.forEach(item => {
        event.remove({ output: item })
    })


    // --- 4. Trail and Tales: Sniffer Egg ---
    
    // Удаление конкретного рецепта по его ID
    event.remove({ id: 'trailandtales_delight:cooked_sniffer_egg_from_smoking' })


    // --- 5. Create Deco: Удаление рецептов монет (Pressing) ---
    
    // В KubeJS удаление по ID работает одинаково для всех типов рецептов (включая Create)
    const coinsRecipes = [
        'createdeco:pressing/coins/iron_coin',
        'createdeco:pressing/coins/copper_coin',
        'createdeco:pressing/coins/gold_coin',
        'createdeco:pressing/coins/zinc_coin',
        'createdeco:pressing/coins/netherite_coin',
        'createdeco:pressing/coins/industrial_iron_coin',
        'createdeco:pressing/coins/brass_coin'
    ]

    coinsRecipes.forEach(recipeId => {
        event.remove({ id: recipeId })
    })

})