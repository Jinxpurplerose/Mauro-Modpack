ServerEvents.recipes(event => {

    // --- ЧАСТЬ 1: ПРОИЗВОДСТВО ФЕРРОСИЛИЦИЯ ---

    // 1. СМЕШИВАНИЕ (Шихта)
    event.recipes.create.mixing(
        'kubejs:ferrosilicon_compound',
        [
            '2x minecraft:quartz',
            'create:crushed_raw_iron',
            Ingredient.of('#minecraft:coals').withCount(1)
        ]
    ).id('kubejs:mixing/ferrosilicon_compound')

    // 2. СПЕКАНИЕ (Требуется SUPERHEATED)
    event.recipes.create.mixing(
        'kubejs:ferrosilicon_ingot',
        'kubejs:ferrosilicon_compound'
    ).superheated().id('kubejs:sintering/ferrosilicon_ingot')

    // 3. ПРЕССОВАНИЕ
    event.recipes.create.pressing(
        '4x kubejs:ferrosilicon_nugget',
        'kubejs:ferrosilicon_ingot'
    ).id('kubejs:pressing/ferrosilicon_split')
})