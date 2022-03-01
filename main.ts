namespace SpriteKind {
    export const level_2_player = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
	
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite3.destroy(effects.disintegrate, 50)
    music.bigCrash.playUntilDone()
    game.splash("level 1 complete")
    tiles.loadMap(tiles.createMap(tilemap`level6`))
    mySprite2 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.level_2_player)
    scaling.scaleByPixels(mySprite2, 3, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(250, 8))
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 6))
    scene.cameraFollowSprite(mySprite)
    mySprite.setVelocity(40, 0)
    music.playMelody("F C A D F E - D ", 120)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level14`))
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(225, 3))
    }
})
let mySprite2: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
game.showLongText("dodge the blocks and headshot_humans choose a power up", DialogLayout.Bottom)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 2 3 3 3 3 2 . 
    2 2 2 2 2 2 2 3 3 1 1 1 1 1 3 2 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
    2 2 2 2 2 2 2 3 3 1 1 1 1 1 3 2 
    . . . . . . . 2 2 2 2 3 3 3 2 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
tiles.setCurrentTilemap(tilemap`level4`)
mySprite3 = sprites.create(img`
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d d 4 e e e f . . . 
    . . . f e 4 4 4 e e f f . . . . 
    . . . f 2 2 2 e d d 4 . . . . . 
    . . . f 2 2 2 e d d e . . . . . 
    . . . f 5 5 4 f e e f . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    `, SpriteKind.Player)
scaling.scaleByPixels(mySprite3, 20, ScaleDirection.Uniformly, ScaleAnchor.Middle)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 3))
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite3, tiles.getTileLocation(250, 4))
mySprite.setVelocity(30, 0)
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
})
forever(function () {
    mySprite.startEffect(effects.fire)
    mySprite.startEffect(effects.fire)
    mySprite.startEffect(effects.fire)
})
game.onUpdateInterval(10000, function () {
    mySprite.vx += 10
    controller.moveSprite(mySprite, 0, 200)
})
