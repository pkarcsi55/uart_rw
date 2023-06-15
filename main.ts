bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
    cmd = ""
    bluetooth.startUartService()
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
    cmd = ""
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    cmd = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    basic.showString(cmd)
    bluetooth.uartWriteString(cmd)
})
let cmd = ""
basic.showIcon(IconNames.Asleep)
music.setBuiltInSpeakerEnabled(true)
basic.forever(function () {
    while (cmd == "v") {
        soundExpression.slide.play()
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    while (cmd == "g" || cmd == "w") {
        if (cmd == "g") {
            music.playTone(523, music.beat(BeatFraction.Sixteenth))
        } else {
            basic.pause(500)
        }
        basic.showIcon(IconNames.Heart)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
