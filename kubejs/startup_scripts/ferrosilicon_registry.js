StartupEvents.registry('item', event => {
    
    // 1. Шихта (Смесь)
    event.create('ferrosilicon_compound')
        .displayName('Ferrosilicon Charge')
        .texture('kubejs:item/shihta') // Текстура пороха

    // 2. Слиток (Готовый продукт)
    event.create('ferrosilicon_ingot')
        .displayName('Ferrosilicon Ingot')
        .texture('kubejs:item/ferrosilicon_ingot') // Текстура железа

    // 3. Кусочки (Результат пресса)
    event.create('ferrosilicon_nugget')
        .displayName('Small Ferrosilicon Piece')
        .texture('kubejs:item/ferrosilicon_piece') // Текстура кусочка железа
})