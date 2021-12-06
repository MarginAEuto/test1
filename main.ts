input.onButtonPressed(Button.A, function () {
    radio.sendNumber(162)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(164)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(165)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(161)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(163)
})
radio.setGroup(160)
