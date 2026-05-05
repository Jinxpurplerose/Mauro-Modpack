StartupEvents.registry('item', event => {
    // 1. Печать (общая для всех)
    event.create('mold_stamp')
        .displayName('Coin Mold')
        .texture('kubejs:item/mold_stamp') // Ссылается на ваш файл textures/item/mold_stamp.png
        .maxStackSize(1);

    // Список металлов для автоматизации
    const metals = ['gold', 'iron', 'copper', 'zinc', 'brass', 'netherite', 'industrial_iron'];

    metals.forEach(metal => {
        // 2. Создание заготовок (Planchets)
        event.create(`${metal}_coin_blank`)
            .displayName(`${metal.charAt(0).toUpperCase() + metal.slice(1)} Planchet`)
            .texture(`kubejs:item/plain_${metal}_coin`);

        // 3. Создание промежуточных предметов (Incomplete)
        event.create(`incomplete_${metal}_coin`, 'create:sequenced_assembly')
            .displayName(`Incomplete ${metal.charAt(0).toUpperCase() + metal.slice(1)} Coin`)
            .texture(`kubejs:item/plain_${metal}_coin`);
    });
});