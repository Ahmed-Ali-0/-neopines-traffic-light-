// Created by: Ahmed
// Created Date: Sep30, Tuesday
// 
// This program use  Neopines traffic light.
let strip = neopixel.create(DigitalPin.P16, 1, NeoPixelMode.RGB)
strip.clear()
strip.show()
basic.showIcon(IconNames.Yes)
strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
strip.show()
basic.pause(4000)
basic.showIcon(IconNames.Happy)
strip.clear()
strip.show()
strip = neopixel.create(DigitalPin.P16, 1, NeoPixelMode.RGB)
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
strip.show()
basic.pause(1000)
strip.clear()
strip.show()
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
})
