input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(500)
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(500)
        sprite.change(LedSpriteProperty.X, -1)
        basic.pause(500)
        sprite.change(LedSpriteProperty.X, -1)
        basic.pause(500)
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
        sprite.change(LedSpriteProperty.X, 1)
        basic.pause(500)
        sprite.change(LedSpriteProperty.X, 1)
        basic.pause(500)
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(3, 3)
basic.forever(function () {
	
})
