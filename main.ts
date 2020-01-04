namespace SpriteKind {
    export const UI = SpriteKind.create()
}
function InitKeys () {
    keypadList = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27]
    for (let index = 0; index <= keypadList.length - 1; index++) {
        mySprite = sprites.create(keypadList[index], SpriteKind.UI)
        mySprite.left = index % 7 * 23
        mySprite.top = Math.floor(index / 7) * 31
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
scene.setBackgroundImage(bgImage)
InitKeys()
