input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.clearScreen()
    if (hungerlevel > 94) {
        basic.showString("Pet is full!")
    } else {
        if (betterfood == 0) {
            hungerlevel += 5
            betterfood += -1
            music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # # . # #
                . . . . .
                . . # . .
                . # . # .
                . . # . .
                `)
            basic.pause(500)
            music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # # . # #
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                `)
            basic.pause(500)
            music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # # . # #
                . . . . .
                . . . . .
                . # # # .
                . . . . .
                `)
            basic.pause(500)
            music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # # . # #
                . . . . .
                . . # . .
                . # . # .
                . . # . .
                `)
            basic.pause(500)
            music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # # . # #
                . . . . .
                . . . . .
                . # # # .
                . . . . .
                `)
            basic.pause(500)
            music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # # . # #
                . . . . .
                . . # . .
                . # . # .
                . . # . .
                `)
            basic.pause(500)
            music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # # . # #
                . . . . .
                . . . . .
                . # # # .
                . . . . .
                `)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
            basic.pause(3000)
            basic.clearScreen()
            basic.showIcon(IconNames.Asleep)
        }
        basic.showString("You need one better food.")
        basic.pause(2000)
        basic.clearScreen()
        basic.showIcon(IconNames.Asleep)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("Your pet hunger level is")
    basic.clearScreen()
    basic.showNumber(hungerlevel)
    basic.pause(3000)
    basic.clearScreen()
    basic.clearScreen()
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    if (hungerlevel > 99) {
        basic.showString("Pet is full!")
        basic.pause(2000)
        basic.clearScreen()
    } else {
        if (foodnumber > 0) {
            foodnumber += -1
            hungerlevel += 1
            music.play(music.tonePlayable(220, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . . . .
                # # . # #
                . . . . .
                . . . # #
                . . . # #
                `)
            basic.pause(500)
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . . . .
                # # . # #
                . . . . .
                . . # # .
                . . # # .
                `)
            basic.pause(500)
            music.play(music.tonePlayable(220, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . . . .
                # # . # #
                . . . . .
                . # # . .
                . # # . .
                `)
            basic.pause(500)
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # # . # #
                . . . . .
                . . # . .
                . # . # .
                . . # . .
                `)
            basic.pause(500)
            music.play(music.tonePlayable(220, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # # . # #
                . . . . .
                . . . . .
                . # # # .
                . . . . .
                `)
            basic.pause(500)
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # # . # #
                . . . . .
                . . # . .
                . # . # .
                . . # . .
                `)
            basic.pause(500)
            music.play(music.tonePlayable(220, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # # . # #
                . . . . .
                . . . . .
                . # # # .
                . . . . .
                `)
            basic.pause(500)
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . . . .
                # # . # #
                . . . . .
                . # # # .
                . . . . .
                `)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
            basic.pause(3000)
            basic.clearScreen()
            basic.showIcon(IconNames.Asleep)
        } else {
            basic.showString("You need 1 food.")
            basic.pause(2000)
            basic.clearScreen()
            basic.showIcon(IconNames.Asleep)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("You have")
    basic.showNumber(foodnumber)
    basic.clearScreen()
    basic.showString("food.")
    basic.pause(3000)
    basic.clearScreen()
    basic.showIcon(IconNames.Asleep)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    if (randint(0, 3) == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # #
            . . . # #
            `)
        foodnumber += 1
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        music.play(music.tonePlayable(175, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(147, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (foodnumber > 4) {
        foodnumber += -5
        betterfood += 1
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            . # # # .
            `)
        basic.pause(2000)
        basic.clearScreen()
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.clearScreen()
        basic.showString("You need 5 food.")
        basic.pause(2000)
        basic.clearScreen()
        basic.showIcon(IconNames.Asleep)
    }
})
let foodnumber = 0
let betterfood = 0
let hungerlevel = 0
hungerlevel += 50
basic.showIcon(IconNames.Asleep)
music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
basic.forever(function () {
    basic.clearScreen()
    if (hungerlevel == 0) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . . # . .
            . # . # .
            `)
        basic.pause(5000)
        music.play(music.builtinPlayableSoundEffect(soundExpression.mysterious), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Skull)
        basic.pause(5000)
        control.reset()
    }
})
basic.forever(function () {
    basic.pause(60000)
    hungerlevel += -1
})
