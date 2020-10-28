let index = 0
let list = [1, 2, 3, 5, 6, 7, 8]
let Timing = 0.1
basic.forever(function () {
    if (Timing < 3) {
        if (index < list.length) {
            basic.showNumber(list[index])
            basic.pause(Timing)
            Timing += 0.1
        } else {
            index = 0
        }
        index += 1
    }
})
