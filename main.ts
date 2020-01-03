namespace SpriteKind {
    export const UI = SpriteKind.create()
}
function InitKeys () {
    keypadList = [img`
. . . . . d d b c c c b b d . . . . . . 
. . . d b c f f f f f f f c b d . . . . 
. . d b c f f c c c c c f f f c d . . . 
. d b f f c c b d d d d b c f f c d . . 
. b c f c b d . . . . . d b c f f b . . 
. c f f c d . . . . . . . d b c f c d . 
d f f c d . . . . . . . . . d c f f c . 
b f f c d . . . . . . . . . . b f f c . 
c f f b . . . . . . . . . . . d c f f d 
f f f d . . . . . . . . . . . d c f f d 
f f c d . . . . . . . . . . . d c f f b 
f f c d . . . . . . . . . . . . c f f b 
f f c d . . . . . . . . . . . d c f f b 
f f f d . . . . . . . . . . . d c f f b 
c f f b . . . . . . . . . . . d c f f d 
c f f b . . . . . . . . . . . b f f f d 
b f f c d . . . . . . . . . d b f f c . 
d c f f b d . . . . . . . . b c f c b . 
. b f f c b d . . . . . . d c f f c d . 
. d c f f c b d d d d d b c c f c b . . 
. . d c f f c c b b b c c f f c b d . . 
. . . b c c f f f c c f f c c b d . . . 
. . . . d b c c f f f c c b b d . . . . 
. . . . . . d b c f f b d d . . . . . . 
. . . . . . . d c f c b . . . . . . . . 
. . . . . . . d c f c b . . . . . . . . 
. . . . . . . d c f c b . . . . . . . . 
. . . . . . . d c f c b . . . . . . . . 
. . . . . . . d b c c b . . . . . . . . 
. . . . . . . . d d d d . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . d b b d . . . . . . . . 
. . . . . . . . c f f f . . . . . . . . 
. . . . . . . d f f f f b . . . . . . . 
. . . . . . . c f c c f c . . . . . . . 
. . . . . . d f f b d f f b . . . . . . 
. . . . . . c f f . . c f f . . . . . . 
. . . . . d f f b . . d f f b . . . . . 
. . . . . c f c . . . . c f f . . . . . 
. . . . d f f b . . . . d f f b . . . . 
. . . . c f f b b b b b b c f f . . . . 
. . . d f f f f f f f f f f f f b . . . 
. . . c f c c c c f f c c c c f f . . . 
. . d f f b . . d f f d . . d f f b . . 
. . c f c . . . d f f d . . . c f f . . 
. b f f d . . . d f f d . . . d f f b . 
. c f c . . . . d f f d . . . . c f f . 
b f f b . . . . d f f d . . . . d f f b 
c c c . . . . . . c c d . . . . . b c c 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. d b c b d . . . . d . . . . . . . . . 
b f f f f f b . d c b . . . . . . . . . 
c f f c c f f b c f b . . . . . . . . . 
f f f . . b f f f b . . . . . . . . . . 
c f b . . b f f b . . . . . . . . . . . 
. b . . b f f f c . . . . . . . . . . . 
. . . c f c b f f d . . . . . . . . . . 
. . b f c d . c f b . . . . . . . . . . 
. . b c . . d f f c . . . . . . . . . . 
. . . . . . c f f f b . . . . . . . . . 
. . . . . d f f f f c . . . . . . . . . 
. . . . . c f f b f f d . . . . . . . . 
. . . . d f f c . c f b . . . . . . . . 
. . . . c f f b . d f f . . . . . . . . 
. . . b f f c . . . c f b . . . . . . . 
. . . c f f b . . . d f c . . . . . . . 
. . b f f c . . . . . c f d . . . . . . 
. d c f f d . . . . . b f c . . . b c d 
. b f f c . . . . . . d f f d . . c f c 
d f f f d . . . . . . . b f c d b f f c 
b f f c . . . . . . . . d c f f f f f b 
c c c d . . . . . . . . . d c f f f c 1 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
d c b b d d . . . . . . . . . . . . . . 
b f f f f c d . . . . . . . . . . . . . 
b f f f f f c d . . . . . . . . . . . . 
d c c f f f f b . . . . . . . . . . . . 
. . d b f f f c . . . . . . . . . . . . 
. . . d c f f c . . . . . . . . . . . . 
. . . d c f f b . . . . . . . . . . . . 
. . . d c f f b . . . . . . . . . d b b 
. . . b f f f d . . . . . . . . b c f b 
. . . c f f c d . . . . . d b f f f c d 
. . d c f f b . . . . d b c f f f f c . 
. . d f f f b . . d b c f f f f f f b . 
. . b f f c b d b c f f f f f f f c d . 
. d c f f c c c f f f c c b c f f c d . 
. d c f f f f f f f b d d d c f f b . . 
. b f f f f f c b d . . . b f f c d . . 
. b f f f c b d . . . . . b f f c d . . 
. c f c b d . . . . . . d c f f b . . . 
d b b . . . . . . . . . b f f c d . . . 
. . . . . . . . . . . . b f f c d . . . 
. . . . . . . . . . . d c f f b . . . . 
. . . . . . . . . . . d c f f b . . . . 
. . . . . . . . . . . d c f f c d . . . 
. . . . . . . . . . . d c f f f c b b . 
. . . . . . . . . . . . b f f f f f c d 
. . . . . . . . . . . . d c f f f f c d 
. . . . . . . . . . . . . d b c c f c d 
. . . . . . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
c c b . . b c c c c c c c c c c c c c d 
c f b . . d f f f f f f f f f f f f f d 
c f b . . . c f f b d d d d d b f f b . 
c f b . . . . f f c . . . . . c f c . . 
c f b . . . . b f f d . . . b f f d . . 
c f b . . . . . c f c . . . c f c . . . 
c f b . . . . . d f f b . b f f d . . . 
c f f f f f f f f f f f d f f b . . . . 
c f f f f f f f f f f f f f f d . . . . 
c f b . . . . b c f f f f f f f c . . . 
c f b . . . d f f f b c f c b f f c . . 
c f b . . . f f c d . c f b . d f f c . 
c f b . . b f f d . . c f b . . b f f d 
c f b . . f f c . . . c f b . . . f f c 
c f b . d f f b . . . c f b . . . c f f 
c f b . d f f d . . . c f b . . . b f f 
c f b . d f f . . . . c f b . . . b f f 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
d c b b d d . . . . . . . . . . . . . . 
b f f f f c d . . . . . . . . . . . . . 
b f f f f f c d . . . . . . . . . . . . 
d c c f f f f b . . . . . . . . . . . . 
. . d b f f f c . . . . . . . . . . . . 
. . . d c f f c . . . . . . . . . . . . 
. . . d c f f b . . . . . . . . . . . . 
. . . d c f f b . . . . . . . . . d b b 
. . . b f f f d . . . . . . . . b c f b 
. . . c f f c d . . . . . d b f f f c d 
. . d c f f b . . . . d b c f f f f c . 
. . d f f f b . . d b c f f f f f f b . 
. . b f f c b d b c f f f f f f f c d . 
. d c f f c c c f f f c c b c f f c d . 
. d c f f f f f f f b d d d c f f b . . 
. b f f f f f c b d . . . b f f c d . . 
. b f f f c b d . . . . . b f f c d . . 
. c f c b d . . . . . . d c f f b . . . 
d b b . . . . . . . . . b f f c d . . . 
. . . . . . . . . . . . b f f c d . . . 
. . . . . . . . . . . d c f f b . . . . 
. . . . . . . . . . . d c f f b . . . . 
. . . . . . . . . . . d c f f c d . . . 
. . . . . . . . . . . d c f f f c b b . 
. . . . . . . . . . . . b f f f f f c d 
. . . . . . . . . . . . d c f f f f c d 
. . . . . . . . . . . . . d b c c f c d 
. . . . . . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
d c b b d d . . . . . . . . . . . . . . 
b f f f f c d . . . . . . . . . . . . . 
b f f f f f c d . . . . . . . . . . . . 
d c c f f f f b . . . . . . . . . . . . 
. . d b f f f c . . . . . . . . . . . . 
. . . d c f f c . . . . . . . . . . . . 
. . . d c f f b . . . . . . . . . . . . 
. . . d c f f b . . . . . . . . . d b b 
. . . b f f f d . . . . . . . . b c f b 
. . . c f f c d . . . . . d b f f f c d 
. . d c f f b . . . . d b c f f f f c . 
. . d f f f b . . d b c f f f f f f b . 
. . b f f c b d b c f f f f f f f c d . 
. d c f f c c c f f f c c b c f f c d . 
. d c f f f f f f f b d d d c f f b . . 
. b f f f f f c b d . . . b f f c d . . 
. b f f f c b d . . . . . b f f c d . . 
. c f c b d . . . . . . d c f f b . . . 
d b b . . . . . . . . . b f f c d . . . 
. . . . . . . . . . . . b f f c d . . . 
. . . . . . . . . . . d c f f b . . . . 
. . . . . . . . . . . d c f f b . . . . 
. . . . . . . . . . . d c f f c d . . . 
. . . . . . . . . . . d c f f f c b b . 
. . . . . . . . . . . . b f f f f f c d 
. . . . . . . . . . . . d c f f f f c d 
. . . . . . . . . . . . . d b c c f c d 
. . . . . . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
d c b b d d . . . . . . . . . . . . . . 
b f f f f c d . . . . . . . . . . . . . 
b f f f f f c d . . . . . . . . . . . . 
d c c f f f f b . . . . . . . . . . . . 
. . d b f f f c . . . . . . . . . . . . 
. . . d c f f c . . . . . . . . . . . . 
. . . d c f f b . . . . . . . . . . . . 
. . . d c f f b . . . . . . . . . d b b 
. . . b f f f d . . . . . . . . b c f b 
. . . c f f c d . . . . . d b f f f c d 
. . d c f f b . . . . d b c f f f f c . 
. . d f f f b . . d b c f f f f f f b . 
. . b f f c b d b c f f f f f f f c d . 
. d c f f c c c f f f c c b c f f c d . 
. d c f f f f f f f b d d d c f f b . . 
. b f f f f f c b d . . . b f f c d . . 
. b f f f c b d . . . . . b f f c d . . 
. c f c b d . . . . . . d c f f b . . . 
d b b . . . . . . . . . b f f c d . . . 
. . . . . . . . . . . . b f f c d . . . 
. . . . . . . . . . . d c f f b . . . . 
. . . . . . . . . . . d c f f b . . . . 
. . . . . . . . . . . d c f f c d . . . 
. . . . . . . . . . . d c f f f c b b . 
. . . . . . . . . . . . b f f f f f c d 
. . . . . . . . . . . . d c f f f f c d 
. . . . . . . . . . . . . d b c c f c d 
. . . . . . . . . . . . . . . . . . . . 
`]
    for (let index = 0; index <= keypadList.length - 1; index++) {
        mySprite = sprites.create(keypadList[index], SpriteKind.UI)
        mySprite.left = index % 7 * 20
        mySprite.top = Math.floor(index / 7) * 30
    }
    mySprite = sprites.create(img`
f f f f f . . . . . . . . . . f f f f f 
f . . . . . . . . . . . . . . . . . . f 
f . . . . . . . . . . . . . . . . . . f 
f . . . . . . . . . . . . . . . . . . f 
f . . . . . . . . . . . . . . . . . . f 
f . . . . . . . . . . . . . . . . . . f 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
f . . . . . . . . . . . . . . . . . . f 
f . . . . . . . . . . . . . . . . . . f 
f . . . . . . . . . . . . . . . . . . f 
f . . . . . . . . . . . . . . . . . . f 
f f f f f . . . . . . . . . . f f f f f 
`, SpriteKind.UI)
    mySprite.left = 0
    mySprite.top = 0
    mySprite2 = 0
}
sprites.onCreated(SpriteKind.UI, function (sprite) {
    sprite.setFlag(SpriteFlag.Ghost, true)
})
let mySprite2 = 0
let mySprite: Sprite = null
let keypadList: Image[] = []
scene.setBackgroundColor(1)
InitKeys()
