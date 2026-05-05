StartupEvents.registry('item', event => {
	event.create('steel_billet')
    	.displayName('Steel Billet')
    	.texture('kubejs:item/steel_billet')
    
    event.create(`incomplete_steel_billet`, 'create:sequenced_assembly')
    	.displayName(`Incomplete Steel Billet`)
    	.texture(`kubejs:item/incomplete_steel_billet`);
})