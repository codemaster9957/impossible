scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
	
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite3.destroy(effects.disintegrate, 50)
    music.bigCrash.playUntilDone()
    game.splash("level 1 complete")
    tiles.loadMap(tiles.createMap(tilemap`level6`))
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 10))
    scene.cameraFollowSprite(mySprite)
    mySprite.setVelocity(40, 0)
    music.playMelody("F C A D F E - D ", 120)
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    game.over(false)
})
let mySprite3: Sprite = null
let mySprite: Sprite = null
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
tiles.setCurrentTilemap(tilemap`level4`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite3, tiles.getTileLocation(250, 4))
mySprite.setVelocity(30, 0)
game.onUpdateInterval(2000, function () {
    mySprite.ax += 5
    controller.moveSprite(mySprite, 0, 100)
})
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
})
