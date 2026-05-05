StartupEvents.registry('item', event => {
    
    event.create('nethersteel_billet')
        .displayName('Nethersteel Billet')
        .texture('kubejs:item/nethersteel_billet')
    
    event.create(`incomplete_nethersteel_billet`, 'create:sequenced_assembly')
        .displayName(`Incomplete Nethresteel Billet`)
        .texture(`kubejs:item/incomplete_nethersteel_billet`);

    event.create('hot_nethersteel_ingot')
        .displayName('Hot Nethersteel Ingot')
        .texture('kubejs:item/hot_nethersteel_ingot')
})