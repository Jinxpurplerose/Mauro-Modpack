ServerEvents.tags('item', event => {
    // Тот же массив металлов
    const metals = ['iron', 'zinc', 'gold', 'copper'];

    metals.forEach(m => {
        event.add(`c:dusts/${m}`, `kubejs:${m}_dust`); 
        event.add(`c:dusts/${m}`, `kubejs:dirty_${m}_dust`);
        event.add(`c:dirty_dusts/${m}`, `kubejs:dirty_${m}_dust`);
    });
});