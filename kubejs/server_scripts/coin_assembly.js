ServerEvents.recipes(event => {
    // --- РАЗДЕЛ 1: ОЧИСТКА ---
    // Удаляем стандартные рецепты прессования монет из Create Deco
    const metals = ['gold', 'iron', 'copper', 'zinc', 'brass', 'netherite', 'industrial_iron'];
    metals.forEach(m => {
        event.remove({ id: `createdeco:pressing/coins/${m}_coin` });
    });

    // --- РАЗДЕЛ 2: НАСТРОЙКИ ДАННЫХ ---
    const coinData = [
        { name: 'gold', nugget: 'minecraft:gold_nugget' },
        { name: 'iron', nugget: 'minecraft:iron_nugget' },
        { name: 'copper', nugget: 'create:copper_nugget' },
        { name: 'zinc', nugget: 'create:zinc_nugget' },
        { name: 'brass', nugget: 'create:brass_nugget' },
        { name: 'netherite', nugget: 'createdeco:netherite_nugget' },
        { name: 'industrial_iron', nugget: 'createdeco:industrial_iron_nugget' }
    ];

    // --- РАЗДЕЛ 3: ГЕНЕРАЦИЯ РЕЦЕПТОВ ---
    coinData.forEach(coin => {
        let blank = `kubejs:${coin.name}_coin_blank`;
        let incomplete = `kubejs:incomplete_${coin.name}_coin`;
        let output = `createdeco:${coin.name}_coin`;

        // А. Nugget -> Planchet (Обычный пресс)
        event.recipes.create.pressing(blank, coin.nugget).id(`kubejs:pressing/${coin.name}_planchet`);

        // Б. Planchet -> Coin (Сборочная линия)
        event.recipes.create.sequenced_assembly([output], blank, [
            // Шаг 1: Деплоер с печатью. Используем .keepHeldItem()
            event.recipes.create.deploying(incomplete, [incomplete, 'kubejs:mold_stamp']).keepHeldItem(),
            // Шаг 2: Финальный пресс
            event.recipes.create.pressing(incomplete, incomplete)
        ])
        .transitionalItem(incomplete)
        .loops(1)
        .id(`kubejs:minting/${coin.name}_coin`);
    });
});