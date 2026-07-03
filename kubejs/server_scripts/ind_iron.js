ServerEvents.recipes(event => {

    event.remove({ id: 'dndecor:industrial_plating_block_from_ingots_iron_stonecutting' })
    
    // Шлаковая переплавка Industrial Iron
    // Вход: 1 Железо + 2 Гравия + 1 Адская мука
    // Выход: 2 Industrial Iron Ingot
    // Требует: Нагрев (Heated)
    
    event.recipes.create.mixing(
        '4x createdeco:industrial_iron_ingot', // Выход: 2 шт.
        [
            'minecraft:iron_ingot',            // Основа
            '2x minecraft:gravel',             // Наполнитель (шлак)
            'create:cinder_flour'              // Связующее/Топливо
        ]
    ).heated().id('kubejs:mixing/industrial_iron_from_slag')

})