ServerEvents.tags('item', event => {
    const metals = ['iron', 'zinc', 'gold', 'copper'];

    metals.forEach(m => {
        event.add(`c:dusts/${m}`, `kubejs:${m}_dust`); 
        event.add(`c:dusts/${m}`, `kubejs:dirty_${m}_dust`);
        event.add(`c:dirty_dusts/${m}`, `kubejs:dirty_${m}_dust`);
    });

    event.add('create:pulpifiable', 'createdieselgenerators:wood_chip');

    event.add('c:sulphur', 'kubejs:sulphur_dust');
    event.add('c:sulphur', 'betterend:crystalline_sulphur');
});