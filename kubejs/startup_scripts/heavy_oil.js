// StartupEvents.registry('fluid', event => {
//     event.create('heavy_oil')
//         .displayName('Heavy Oil')
//         .stillTexture('minecraft:block/water_still')
//         .flowingTexture('minecraft:block/water_flow')
//         .color(0x1a1513) 
// })

// StartupEvents.registry('item', event => {
//     event.create('petroleum_coke').displayName('Petroleum Coke').burnTime(6400)
// })

// const $SoundEvents = Java.loadClass('net.minecraft.sounds.SoundEvents')
// const $ParticleTypes = Java.loadClass('net.minecraft.core.particles.ParticleTypes')

StartupEvents.registry('fluid', event => {
	event.create('heavy_oil', 'thick')
		.displayName('Heavy Oil')
		.tint(0x1a1513)
})