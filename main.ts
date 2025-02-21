radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showString("You found a bush, to interact press A, to ignore press B")
    }
})
input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onPinPressed(TouchPin.P2, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
input.onPinPressed(TouchPin.P1, function () {
    sprite.change(LedSpriteProperty.Y, -1)
})
let roomy = 0
let roomx = 0
let roomxy = ""
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
let bush = game.createSprite(0, 2)
basic.forever(function () {
    roomxy = "" + roomx + "," + roomy
    if (roomxy == "0,1") {
        bush.set(LedSpriteProperty.Brightness, 0.5)
    } else {
        bush.set(LedSpriteProperty.Brightness, 0)
    }
    if (input.pinIsPressed(TouchPin.P1) && sprite.get(LedSpriteProperty.Y) == 0) {
        roomy += 1
        sprite.set(LedSpriteProperty.Y, 4)
    }
    if (input.pinIsPressed(TouchPin.P2) && sprite.get(LedSpriteProperty.Y) == 4) {
        roomy += -1
        sprite.set(LedSpriteProperty.Y, 0)
    }
    if (input.buttonIsPressed(Button.A) && sprite.get(LedSpriteProperty.X) == 1) {
        roomx += -1
        sprite.set(LedSpriteProperty.X, 4)
    }
    if (input.buttonIsPressed(Button.B) && sprite.get(LedSpriteProperty.X) == 4) {
        roomx += 1
        sprite.set(LedSpriteProperty.X, 0)
    }
})
basic.forever(function () {
    radio.setGroup(92749)
})
basic.forever(function () {
    if (sprite.get(LedSpriteProperty.X) == 1 && sprite.get(LedSpriteProperty.Y) == 2 && roomxy == "1,2") {
        radio.sendNumber(1)
    }
})
