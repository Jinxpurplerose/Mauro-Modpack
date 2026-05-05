StartupEvents.registry('item', event => {
	event.create('cast_iron_billet')
    	.displayName('Cast Iron Billet')
    	.texture('kubejs:item/cast_iron_billet')
    
    event.create(`incomplete_cast_iron_billet`, 'create:sequenced_assembly')
    	.displayName(`Incomplete Cast Iron Billet`)
    	.texture(`kubejs:item/incomplete_cast_iron_billet`);
})