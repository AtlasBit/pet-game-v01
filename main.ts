/**
 * Every 5 minutes, it will save your progress!
 */
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
                . . . . .
                # # . # #
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
                . . . . .
                # # . # #
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
        }
        basic.showString("You need one better food.")
        basic.pause(2000)
        basic.clearScreen()
        basic.showIcon(IconNames.Asleep)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.clearScreen()
    if (chestkey > 0) {
        chestkey += -1
        basic.showString("You get")
        basic.pause(2000)
        if (randint(0, 3) == 0) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # #
                . . . # #
                `)
            foodnumber += 2
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
            basic.pause(2000)
            basic.showString("2X!")
            basic.pause(2000)
            basic.clearScreen()
            basic.showLeds(`
                . . . . .
                # # . # #
                . . . . .
                . # # # .
                . . . . .
                `)
        } else if (randint(0, 3) == 1) {
            basic.showLeds(`
                . # # # .
                # # # # #
                # # # # #
                . # # # .
                . # # # .
                `)
            betterfood += 1
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
            basic.pause(2000)
            basic.clearScreen()
            basic.showLeds(`
                . . . . .
                # # . # #
                . . . . .
                . # # # .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
            basic.pause(2000)
            basic.clearScreen()
            basic.showLeds(`
                . . . . .
                # # . # #
                . . . . .
                . # # # .
                . . . . .
                `)
        }
    } else {
        basic.showString("You need a key!")
        basic.pause(1000)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("Your pet hunger is")
    basic.clearScreen()
    basic.showNumber(hungerlevel)
    basic.pause(3000)
    basic.clearScreen()
    basic.showIcon(IconNames.Asleep)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.clearScreen()
    if (megachestkey > 0) {
        megachestkey += 1
        if (randint(0, 5) == 0) {
            betterfood += 2
            basic.showLeds(`
                . # # # .
                # # # # #
                # # # # .
                . # # # .
                . # # # .
                `)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
            basic.pause(2000)
            basic.showString("2X!")
            basic.pause(2000)
            basic.clearScreen()
            basic.showIcon(IconNames.Asleep)
        } else if (randint(0, 5) == 1) {
            foodnumber += 5
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # #
                . . . # #
                `)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
            basic.pause(2000)
            basic.showString("5X!")
            basic.pause(2000)
            basic.clearScreen()
            basic.showIcon(IconNames.Asleep)
        } else if (randint(0, 5) == 2) {
            chestkey += 3
            basic.showLeds(`
                . . . . .
                . # . . .
                # . # # #
                . # . . .
                . . . . .
                `)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
            basic.pause(2000)
            basic.showString("3X!")
            basic.pause(2000)
            basic.clearScreen()
            basic.showIcon(IconNames.Asleep)
        } else {
            music.play(music.tonePlayable(175, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(147, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            basic.pause(2000)
            basic.clearScreen()
            basic.showIcon(IconNames.Asleep)
        }
    }
})
input.onGesture(Gesture.TiltRight, function () {
    basic.clearScreen()
    if (chestkey > 4) {
        chestkey += -5
        megachestkey += 1
        basic.showLeds(`
            . . . . .
            # # . # .
            # # # # #
            # # . # .
            . . . . .
            `)
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        basic.pause(3000)
        basic.clearScreen()
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.showString("You need 5 chest key")
        basic.pause(2000)
        basic.clearScreen()
        basic.showIcon(IconNames.Asleep)
    }
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
                . . . . .
                # # . # #
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
            music.play(music.tonePlayable(220, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
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
    if (randint(0, 8) == 0) {
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
        basic.pause(1000)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            `)
    } else if (randint(0, 8) == 3) {
        basic.showLeds(`
            . . . . .
            . # . . .
            # . # # #
            . # . . .
            . . . . .
            `)
        chestkey += 1
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(880, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        basic.pause(1000)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            `)
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
        basic.pause(1000)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            `)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    if (foodnumber > 4) {
        foodnumber += -5
        betterfood += 1
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
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
let megachestkey = 0
let foodnumber = 0
let chestkey = 0
let betterfood = 0
let hungerlevel = 0
hungerlevel += 50
basic.showIcon(IconNames.Asleep)
music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
basic.forever(function () {
    basic.pause(300000)
    datalogger.log(
    datalogger.createCV("FoodNumber", foodnumber),
    datalogger.createCV("BetterFoodNumber", betterfood),
    datalogger.createCV("HungerLevel", hungerlevel),
    datalogger.createCV("ChestKey", chestkey)
    )
})
basic.forever(function () {
    if (hungerlevel == 0) {
        basic.clearScreen()
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
        datalogger.deleteLog(datalogger.DeleteType.Full)
        control.reset()
    }
})
basic.forever(function () {
    basic.pause(60000)
    hungerlevel += -1
})
