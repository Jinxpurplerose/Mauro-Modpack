StartupEvents.registry('item', event => {
    event.create('coal_coke')
		.displayName('Coal Coke')
		.texture('kubejs:item/coke')
		.burnTime(2000);

    const dusts = ['iron', 'zinc', 'gold', 'copper'];
    dusts.forEach(metal => {
        event.create(`${metal}_dust`)
            .displayName(`${metal} Dust`)
            .texture(`kubejs:item/${metal}_dust`);
        event.create(`dirty_${metal}_dust`)
            .displayName(`Dirty ${metal} Dust`)
            .texture(`kubejs:item/dirty_${metal}_dust`);
    });
})

StartupEvents.registry('block', event => {
    event.create('coal_coke_block')
        .displayName('Block of Coal Coke')
        .soundType('stone')
        .hardness(5.0)
        .resistance(6.0)
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .item(itemBuilder => {
            itemBuilder.burnTime(20000); 
        });
})