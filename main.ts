namespace SpriteKind {
    export const UI = SpriteKind.create()
}
function InitKeys () {
    for (let index = 0; index <= keypadList.length - 1; index++) {
        mySprite = sprites.create(keypadList[index], SpriteKind.UI)
        mySprite.left = index % 7 * 23
        mySprite.top = Math.floor(index / 7) * 31
    }
    cursorSprite = sprites.create(img`
8 8 8 8 8 . . . . . . . . . . 8 8 8 8 8 
8 8 8 8 8 . . . . . . . . . . 8 8 8 8 8 
8 8 . . . . . . . . . . . . . . . . 8 8 
8 8 . . . . . . . . . . . . . . . . 8 8 
8 8 . . . . . . . . . . . . . . . . 8 8 
8 8 . . . . . . . . . . . . . . . . 8 8 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
8 8 . . . . . . . . . . . . . . . . 8 8 
8 8 . . . . . . . . . . . . . . . . 8 8 
8 8 . . . . . . . . . . . . . . . . 8 8 
8 8 . . . . . . . . . . . . . . . . 8 8 
8 8 . . . . . . . . . . . . . . . . 8 8 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
8 8 . . . . . . . . . . . . . . . . 8 8 
8 8 . . . . . . . . . . . . . . . . 8 8 
8 8 . . . . . . . . . . . . . . . . 8 8 
8 8 8 8 8 . . . . . . . . . . 8 8 8 8 8 
8 8 8 8 8 . . . . . . . . . . 8 8 8 8 8 
`, SpriteKind.UI)
    cursorSprite.left = 0
    cursorSprite.top = 0
    curX = 0
    curY = 0
}
function UpdateCursor () {
    cursorSprite.left = curX * 23
    cursorSprite.top = curY * 31
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    curX = Math.max(0, curX - 1)
    UpdateCursor()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    curY = Math.min(3, curY + 1)
    UpdateCursor()
})
sprites.onCreated(SpriteKind.UI, function (sprite) {
    sprite.setFlag(SpriteFlag.Ghost, true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (curY < 3) {
        curX = Math.min(6, curX + 1)
    } else {
        curX = Math.min(5, curX + 1)
    }
    UpdateCursor()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    curY = Math.max(0, curY - 1)
    UpdateCursor()
})
let curY = 0
let curX = 0
let cursorSprite: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(bgImage)
InitKeys()
