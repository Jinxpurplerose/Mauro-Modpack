StartupEvents.registry('item', event => {
    
    event.create('ferrosilicon_compound')
        .displayName('Ferrosilicon Charge')
        .texture('kubejs:item/shihta')

    event.create('ferrosilicon_ingot')
        .displayName('Ferrosilicon Ingot')
        .texture('kubejs:item/ferrosilicon_ingot')

    event.create('ferrosilicon_nugget')
        .displayName('Small Ferrosilicon Piece')
        .texture('kubejs:item/ferrosilicon_piece')
})