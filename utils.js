const FindMaxIn2dArray = (array_2d) => {
    Log2dArray(array_2d)
    if (array_2d[0] != null && array_2d[0][0] != null) {
        let max_item_value = array_2d[0][0]
        let max_value_item_axes = []
        for (i = 0; i < array_2d.length; i++) {
            for (j = 0; j < array_2d[0].length; j++) {
                if (array_2d[i][j] === max_item_value) max_value_item_axes.push([i, j])
                if (array_2d[i][j] > max_item_value) {
                    max_item_value = array_2d[i][j]
                    max_value_item_axes = [[i, j]]
                }
            }
        }
        return {
            max_item_value,
            max_value_item_axes
        }
    } else {
        throw new Error(`not valid array 2d`)
    }
}

const Log2dArray = (array_2d) => {
    if (array_2d[0] != null && array_2d[0][0] != null) {
        for (let i = 0; i < array_2d.length; i++) {
            console.log(...array_2d[i])
        }
    } else {
        throw new Error(`not valid array 2d`)
    }
}

const array_2d = [[0, 0, 1], [1, 2, 1], [2, 1, 1]]
console.log(FindMaxIn2dArray(array_2d))