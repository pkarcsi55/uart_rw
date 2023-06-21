bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
    cmd = "a"
    bluetooth.startUartService()
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
    cmd = "a"
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
function zene () {
    music.playTone(523, music.beat(BeatFraction.Sixteenth))
}
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    cmd = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    bluetooth.uartWriteString(cmd)
})
let cmd = ""
basic.showIcon(IconNames.Asleep)
music.setBuiltInSpeakerEnabled(true)
basic.forever(function () {
    while (cmd == "v") {
        zene()
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
    while (cmd == "g") {
        zene()
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    while (cmd == "w") {
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
        basic.showIcon(IconNames.Heart)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
