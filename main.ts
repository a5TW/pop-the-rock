input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
    x += -1
})
input.onPinPressed(TouchPin.P2, function () {
    sprite.change(LedSpriteProperty.Y, -1)
    y += -1
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
    x += 1
})
input.onPinPressed(TouchPin.P1, function () {
    sprite.change(LedSpriteProperty.Y, 1)
    y += 1
})
let roomxy = ""
let sprite: game.LedSprite = null
led.setDisplayMode(DisplayMode.Greyscale)
sprite = game.createSprite(2, 2)
let x = 0
let y = 0
let roomx = 0
let roomy = 0
basic.forever(function () {
    roomxy = "" + roomx + roomy
})
