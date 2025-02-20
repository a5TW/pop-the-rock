def on_button_pressed_a():
    dot.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_pin_pressed_p2():
    dot.change(LedSpriteProperty.Y, -1)
input.on_pin_pressed(TouchPin.P2, on_pin_pressed_p2)

def on_button_pressed_b():
    dot.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_pin_pressed_p1():
    dot.change(LedSpriteProperty.Y, 1)
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)

dot: game.LedSprite = None
led.set_display_mode(DisplayMode.GREYSCALE)
dot = game.create_sprite(2, 2)