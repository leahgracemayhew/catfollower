let mySprite: Sprite = null
let mySprite15 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 8 . . . 8 . . . . . . 
    . . . . . 8 8 . 8 8 . . . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . . 1 6 8 6 1 . . . 8 . . 
    . . . . . 8 8 8 8 8 . . . 8 . . 
    . . . . . 8 8 8 8 8 . . . 8 . . 
    . . . . . . 1 1 1 8 8 8 8 8 . . 
    . . . . . . 1 1 1 8 8 8 . . . . 
    . . . . . . 8 . 8 . . 8 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite14 = sprites.create(img`
    . . . . . c . . . . c . . . . . 
    . . . . . c c . . c c . . . . . 
    . . . . . a a a a a a . . . . . 
    . . . . . a 3 a a 3 a . . . . . 
    . . . . . a a 3 3 a a . . . . . 
    . . . . . a a a a a a . . . . . 
    . . . . . a c a a c a . . . . . 
    . . . . . . 3 c 3 3 . . . . . . 
    . . . . . . . a 9 a . . . . . . 
    . . . . . . . 9 9 9 . . . . . . 
    . . . . . . . . a . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite13 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 1 1 1 . . . . 
    . . . . . 1 f 1 1 1 f 1 . . . . 
    . . . . . 1 f f f f f 1 . . . . 
    . . . . . 1 1 6 f 6 1 1 . . . . 
    . . . . . 1 f f f f f 1 . . . . 
    . . . . . 1 f f 3 f f 1 . . . . 
    . . . . . 1 . f 9 f . 1 . . . . 
    . . . . . . . 9 9 9 . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite12 = sprites.create(img`
    . . . . a . . . . a . . . . . . 
    . . . . a c a a c a . . . . . . 
    . . . . a 3 c a 3 a . . . . . . 
    . . . . a 3 a a 3 a . . . . . . 
    . . . . a 5 3 3 5 a . . . . . . 
    . . . . a 3 3 3 3 a . . . . . . 
    . . . . a 3 3 c 3 a . . . . . . 
    . . . . a 3 3 3 3 a . . . . . . 
    . . . . a a a a a a . . . . . . 
    . . . . . . 3 a 3 . . . . . . . 
    . . . . . . . a . . . . . . . . 
    . . . . . . a a a . . . . . . . 
    . . . . . . . a . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite11 = sprites.create(img`
    . . . . . f c c c c f . . . . . 
    . . c c f b b 3 3 b b f c c . . 
    . c b 3 3 b b c c b b 3 3 b c . 
    . f 3 c c c b c c b c c c 3 f . 
    f c b b c c b c c b c c b b c f 
    c 3 c c b c c c c c c b c c 3 c 
    c 3 c c c c c c c c c c c c 3 c 
    . f b b c c c c c c c c b b f . 
    . . f b b c 8 9 9 8 c b b f . . 
    . . c c c f 9 3 1 9 3 c c c . . 
    . c 3 f f f 9 3 3 9 f f f 3 c . 
    c 3 f f f f 8 9 9 8 f f f f 3 c 
    f 3 c c f f f f f f f f c c 3 f 
    f b 3 c b b f b b f b b c 3 b f 
    . c b b 3 3 b 3 3 b 3 3 b b c . 
    . . f f f f f f f f f f f f . . 
    `, SpriteKind.Player)
let mySprite10 = sprites.create(img`
    . . . . . . . . . . . c c . . . 
    . . . . . . . c c c c 6 3 c . . 
    . . . . . . c 6 3 3 3 3 6 c . . 
    . . c c . c 6 c c 3 3 3 3 3 c . 
    . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
    . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
    . f f 5 c 6 c 5 f f 6 3 3 3 c c 
    . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
    . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
    . . c 5 5 5 5 b c c 3 3 3 3 3 c 
    . . c 4 5 5 4 b 5 5 c 3 3 3 c . 
    . c 5 b 4 4 b b 5 c c b b b . . 
    . c 4 4 b 5 5 5 4 c 4 4 4 5 b . 
    . c 5 4 c 5 5 5 c 4 4 4 c 5 c . 
    . c 5 c 5 5 5 5 c 4 4 4 c c c . 
    . . c c c c c c c . . . . . . . 
    `, SpriteKind.Player)
let mySprite9 = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    c d e e d d d d e e d d f . . . 
    c d d d d c d d e e b d c . . . 
    c c c c c d d e e e b d c . f f 
    . f d d d d e e e f f c . f e f 
    . f f f f f f e e e e f . f e f 
    . f f f f e e e e e e e f f e f 
    f d d f d d f e f e e e e f f . 
    f d b f d b f e f e e e e f . . 
    f f f f f f f f f f f f e f . . 
    . . . . . . . . . f c d d f . . 
    . . . . . . . . . . f f f f . . 
    `, SpriteKind.Player)
let mySprite8 = sprites.create(img`
    . . . . . . . . . . . c c c c c 
    . . . . . . . . . c c 7 7 7 6 c 
    . . . . . . . . c c 7 7 7 c c . 
    . . . . . . . . c 6 7 7 c . . . 
    . . . . . . . . c 6 6 6 c . . . 
    . . . . . . . . c 6 6 6 c c . . 
    . . . c c c c c c c 6 6 6 c c . 
    . . c 6 7 7 7 7 6 c c 6 6 6 c . 
    . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
    c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
    c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
    f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
    f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
    . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
    . c 1 c f f 1 c 7 6 f 6 6 c c . 
    . c c c c c c c c c c c c . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
let mySprite7 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . a c a a c a . . . . . . 
    . . . . a a a a a a . . . . . . 
    . . . . a c a a c a . . . . . . 
    . . . . a 5 c c 5 a . . . . . . 
    . . . . a c c c c a . . . . . . 
    . . . . a c 3 c c a . . . . . . 
    . . . . a . c a c a . . . . . . 
    . . . . a . . a . a . . . . . . 
    . . . . . . c c c . . . . . . . 
    . . . . . . . c . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite6 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 2 . . . 2 . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . 5 2 4 2 4 2 5 . . . . . 
    . . . . 5 2 4 2 4 2 5 . . . . . 
    . . . . 5 2 5 4 5 2 5 . . . . . 
    . . . . 5 2 4 3 4 2 5 . . . . . 
    . . . . 5 2 2 2 2 2 5 . . . . . 
    . . . . 5 . 4 5 4 . 5 . . . . . 
    . . . . . . . 5 . . . . . . . . 
    . . . . . . 5 5 5 . . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . . . 4 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(8)
let mySprite5 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . . 2 9 2 9 2 . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . . 2 5 9 5 2 . . . . . . . 
    . . . . 2 9 3 9 2 . . . . . . . 
    . . . . 2 . 2 . 2 . . . . . . . 
    . . . . . 2 2 2 . . . . . . . . 
    . . . . . . 2 . . . . . . . . . 
    . . . . . 2 2 2 . . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.player1.moveSprite(mySprite)
let mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 . . . . . . . . . 
    . . f . . . 3 . . f . . . . . . 
    . . 3 f . 3 3 3 f 3 . . . . . . 
    . . f f f f f f f f . . . . . . 
    . . f 1 9 f f f 9 1 . . . . . . 
    . . f f f f 3 f f f . . . . . . 
    . . f f f f f f f f . . . . . . 
    . . f . f 9 9 f . f . . . . . . 
    . . f . . a a . . f . . . . . . 
    . . f . . a a . . f . . . . . . 
    . . . . a a a a . . . . . . . . 
    . . . . . f f . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite = sprites.create(img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 5 5 5 5 4 5 5 f f . . 
    . . . f 5 f f f 5 f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
mySprite4.follow(mySprite, 50)
controller.moveSprite(mySprite)
controller.moveSprite(mySprite)
scene.setBackgroundColor(9)
let mySprite2 = sprites.create(img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 f . f d f 
    . f 2 2 2 2 2 2 b b f f d f 
    . f b d d d d d d b b d b f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
mySprite15.follow(mySprite)
controller.moveSprite(mySprite)
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . 2 . . 2 . 2 . . . . . . 
    . . . . 2 . . 2 . 2 . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . 1 6 2 2 6 1 . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . 2 . 2 2 . 2 . . . . . . 
    . . . . . 2 2 2 2 . . . . . . . 
    . . . . . . 2 2 . . . . . . . . 
    . . . . . 2 2 2 2 . . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    `, SpriteKind.Player)
mySprite3.follow(mySprite)
mySprite15.follow(mySprite, 60)
mySprite2.follow(mySprite, 40)
mySprite15.follow(mySprite)
