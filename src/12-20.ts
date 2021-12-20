import { getMutableClone, isConstructorDeclaration, isLiteralTypeNode, isMinusToken, ModifierSyntaxKind } from "typescript";



function getGridCell(grid: Map<String, number[]>, i: number, j: number, mini: number, maxi: number, minj: number, maxj: number, inf: number) {
    if (mini >= i || minj >= j || i >= maxi  || j >= maxj ) {
        return inf
    }
    return Number(grid.has([i, j].toString()))
}


function fun1220() {
    let input = getInput1220().split("\n\n")
    let algorithm = input[0]
    let puzzleLines = input[1].split("\n")

    let grid = new Map<String, number[]>()

    let maxi = Number.MIN_SAFE_INTEGER
    let maxj = Number.MIN_SAFE_INTEGER

    let mini = Number.MAX_SAFE_INTEGER
    let minj = Number.MAX_SAFE_INTEGER

    for (let i = 0; i < puzzleLines.length; i++) {
        let out = ""
        for (let j = 0; j < puzzleLines[i].length; j++) {
            if (puzzleLines[i][j] == '#') {
                let pos = [i, j]
                grid.set(pos.toString(), pos)
                if (minj > j) {
                    minj = j
                }
                if (maxj < j) {
                    maxj = j
                }
                if (mini > i) {
                    mini = i
                }
                if (maxi < i) {
                    maxi = i
                }
                
                out += "#"
            }
            else {
                out += "."
            }
        }
        console.log(out)
    }
    mini--;
    minj--;
    maxi++;
    maxj++;

    for (let n = 0; n < 50; n++) {
        let newGrid = new Map<String, number[]>()
        console.log("step " + n)
        for (let i = mini; i <= maxi; i++) {
            let out = ""
            for (let j = minj; j <= maxj; j++) {
                let pos = [i, j]

                let inf = n == 0 ? 0 : ((n%2 == 0) ? Number(algorithm[511] == '#') : Number(algorithm[0] == '#'))

                let a = getGridCell(grid, i - 1, j - 1, mini, maxi, minj, maxj, inf) * 256 +
                    getGridCell(grid, i - 1, j, mini, maxi, minj, maxj, inf) * 128 +
                    getGridCell(grid, i - 1, j + 1, mini, maxi, minj, maxj, inf) * 64 +
                    getGridCell(grid, i, j - 1, mini, maxi, minj, maxj, inf) * 32 +
                    getGridCell(grid, i, j, mini, maxi, minj, maxj, inf) * 16 +
                    getGridCell(grid, i, j + 1, mini, maxi, minj, maxj, inf) * 8 +
                    getGridCell(grid, i + 1, j - 1, mini, maxi, minj, maxj, inf) * 4 +
                    getGridCell(grid, i + 1, j, mini, maxi, minj, maxj, inf) * 2 +
                    getGridCell(grid, i + 1, j + 1, mini, maxi, minj, maxj, inf)

                if (algorithm[a] == '#') {
                    newGrid.set(pos.toString(), pos)
                    out += "#"
                }
                else {
                    out += "."
                }
            }
            console.log(out)
        }
        grid = newGrid
        mini--;
        minj--;
        maxi++;
        maxj++;
    }
    console.log("there are " + grid.size)
}



fun1220()


function getTest1220(): string {
    return `..#.#..#####.#.#.#.###.##.....###.##.#..###.####..#####..#....#..#..##..###..######.###...####..#..#####..##..#.#####...##.#.#..#.##..#.#......#.###.######.###.####...#.##.##..#..#..#####.....#.#....###..#.##......#.....#..#..#..##..#...##.######.####.####.#.#...#.......#..#.#.#...####.##.#......#..#...##.#.##..#...##.#.##..###.#......#.#.......#.#.#.####.###.##...#.....####.#..#..#.##.#....##..#.####....##...##..#...#......#.#.......#.......##..####..#...#.#.#...##..#.#..###..#####........#..####......#..#

#..#.
#....
##..#
..#..
..###`;
}

function getInput1220(): string {
    return `##......##.###.#...#.#..##...##.#......##........#.#...#...####..###.#...###.....#...###..#...#.......##.#.#.#.##..##.##..#..#....##....##.####...##.#..###......##.#..####....##..#.....#......###.#...##...#.....#.######..#.###..####.#.#....###...#..#.#.##.##.###.####.##.#.###......#..##...#..###.....#..##.#.#.#..##.#.....##......#.###.#..#...######.#...#.#.#....####...##.#.#.#..#..##..###.###..###.##...#.#.##....#..##..##...####..#.##..####...#...#####.####...#......##..#...##.###..#..##...##.###..####.###.

###.###.#.#....##...#.####.##..#.######..#...####.#####..#....#....#.##.#.##.....#....#.####.#..####
#...#.....#..#.###..######..#..#...##.##.#..#...##..#####.###########.#..#....#####.......###.##.##.
.#...###...#.##..###.###..#.#.#.#####.#.#.####.#.#.###...##.#.##########.##.#.#..####.##.####.##.##.
#.##......#.#.###...#...###.#..#..##.........##..#.#..####.#.####..#.#.#.##.#....###..#..##.##.##.##
....#..##.#.##.##...##.#....###.......#.#.##..##.#.####.#...#.#..##.##..#.....##.#####.####....#.#..
.#.##..#..#.........#..##..##.##.#......#..#...####..#.#.##......#.##.#....######.#...#.###..#....##
########..#.#..#.#.##..#.#...#.##.#...#....#..##..####.#######.#.##..##..#..###.##.#####.#.###.##..#
.#.#..#...##.#.#.#...#.#..##.#######.##..#..####.##..###.#..###...#.#.#.##.##..###.#..##...#.#.###..
###.##..#.....#.####....##..#...#.#.#...#####..###.#..##.#.#.#####.##########...######.#.#.####.##..
..#.#..#.#......#..#..#.#..#.....#..#..#..###.#####.#..##..####.##.#.#.#.###..#.#..#####.#....###.##
.##..#....#...###..#...#....#.##....#.........####..######...#.#####..#....#..#..#######....####.#..
#...##...#.........##.##..###..##.##.#########....######.#.##...##..#.#.#...##..#.#.....##.####....#
.##..##.#..#####.#.###..####....#..#.#####..####....##..#..####.#..#..#..#....#......#...##..##..##.
...##.#.###.#.#.#.#####..#...###.###..#######..#....##..#..###.###.##.#.#.#.#..#...###.#.#.##.#..#.#
....##.#..#.....#.#.#...#.#..###.#....#.###..#..#.#.#...#....#.###..#...##..#....###...#######....#.
##..##..........#..#..#....###....#...##...#..###.#..#...#.###........#...........#..#....###.###.##
.##.#####.##.###..###..#.#.....#.###..##.##.######...#.###..#.####.......##..#.#....###.###...######
##.##..#.####..#..#.#.###.#.#.#.##..#.####.###.#...#.#...#...#..#....#.#...##..########.##...#####.#
.##..#.##.#..#..#...#.......##....##..#....#..##..#.##..#.#.##..##.#.######.#..##..#..#......##.#.##
.#.#....#.#.##.##.....#..#####.##.#.###..#.#.....##....#..##.#####......#....##.##.####.#...#.##.#.#
.##.......###..##.###.#.#......#...##.####.....#.##..#.###..##.#.#.###...####.#..#...##..####..#...#
.#.#...####.#...#.#..##.######....###.#.##.#...#...##....#...#.#..#..##..#.#.#..##..##..###.#.######
......#.....######.#.##..###.#.....#...#..#..#..####..##.##.#..####..##..#.#.##.#.....####.##...##.#
...#..##...#.#..#####.#.#..#...####.#.#.#..###.#..##.#.##......####.##..##.#..##.#...#..##..#.###.#.
..###....#...#...#..###.....#.#####..##......#######.##.#.#.##.#.#.#.####.###..#......#..####.#.##..
#..#...#####.#..#..##..#######.#...###..#.##.####.#######.###.....#.#....###.####.##..#..#.#.#.##...
#..####..#.###..##...###.##.#####.###.#..##.....#...###.##.#....#.##...##..#..#..#.#.#..#.###.#....#
.##.#.#.###...#...#...##...#..#.#.#......#.#.##.#.#.#.#...#########...#.####.#####.##.#.#.#...##..##
#.#..###....#######..###.##....####..#####..#.##...#.#.#.#.####..#..#..#..#..##..#.###..#.##..###.#.
..#.#...####.##.#.####....#####...#...#...#....###.#...##.##.####...#..#..#.####.##.##...##.#.#..###
#####.#.#.#.#.#..##.#....#..##.##..###.##..##...#.#.#.###.##.#....#...#..#...#...#.###....#.##.#####
..#.#.#..####..##...####..#.#.#.##.##..#..#####.##.######....##.....#.##.....####......#..###..##...
##.##....######.#.####...#.###...#.#..#..#.####.#.#...##...##..#.###...#..#..#.#..##....##....##....
.#.#.######.#.#....##.#.#.##....###.#...#.###.#..##.#....##.#..##.###.#.#.##.#..#...##.####.#.##....
.###...###.#.##...###.#.##.#.###.###.##.#.######..#.###...#######...##.##..##..###....#...###....#..
#.....#.####...#..#..#...##.#.##.#...#####....#..#.###.#.##..######.#.##..###...#.#.####.##.#.#.....
....#.#.####..#..###...###..##.##..#.....##.##..###.#..#.###.#..###..####.##...##...#..#..#.##.#..##
##....#.#.##.#.#.#.#.#.#.##.#.#..#...##.#.#.##....##.#.#..##....#######..###.####...#####.#.#..###..
.#..####.##.###.#.##.#..######..##.####..##..#.#....#.##.##.#..#.#.##..#.....#....#.###..###...#.#..
.##.#......###.###.####.#.###.##.###.##.#.#..#####..#.###..#.#..###...#.....##.###.#..##.#..###...#.
##.##.######.##..#..#..#...##.###.##.####.#.#.#####.....###...##.#..###.##..###....#..####.......###
.######.....##..#.##.##.#.#####....###.#.###.#.#...#.####...#...##.##.##....#.#.###.......#..###.#.#
##.##.#.#.##.###.##.##..##.##..##..#...#..###...#.....##.#.#.####.###...#.#..#...#.#..#...#.##..#..#
.###.###.#..##..#.###.#.###....#..#.##.##.#######..#....######..#..#####....###..#...##..#..#####...
.###.####.##.####.##.###.##..#..###.###...###.######.##.#.####.#.#...##....#...##.##.#.##.#.#.#.#..#
.##....##................#..#.#...#....#.#..###..#..#.#####.#####....####..####.####...#.#####.###.#
..###.######.#.##....#.#..##..#...##..#.####.#.###.......#...#....#.#.#..#...#######...####...####..
##.##..###..#.#..###..####....#..#.#.#..###...####.##..##.......###...##.#.###.#....##.##..#.#...###
..#..#.######.###.....#..####.##.....#....#..##.###.##..#.##.#......###....######.#.#.##.##.#.#...##
####.##...#.##.###.#.#..#.#...######.#...#...####.####..#.#..#..#.#.#.####.#..#.#..##.#..#......##..
...#..#.##.#......#..#.##.###.#.#.##..#.##.#####.#...##.##..#.#...##.#...###....#...##..#...#.####..
..###..##...#.##.#..#.#..#.#.##.#..#.#..##.#.#..#.#.....########..##..#.#..#..##.#.###....#.####.#.#
.#.##...###..#.#..###.#...#.###...###.####.#.##.#..#...#..#.##..####.#.....####..#..##.##.#...##....
.#....#.#.##.#....#..#.#.##.#.###.###..##..##.###.#.##...##.####...#..###..######.##..#.#...###.##.#
#.#.#.##..#..###.....#.###.##.###.#..######....##.##.###......###.####.##....#...#..#.###....#..####
.#.###.#.#...#..###....##.#.####..#..#..#.###..###.#.#.....#.#####......####.#.....##...#.####......
..####.#....#......##..###.....####.#..#.....##..#.......##.#.#.....#.##..#.#.#.#....###.##..##.....
######.#.##.#.#.####.#.###.##.##.##..##....#####..#####...####.##...####.##..##.#.##...##.#..##.####
.##.#...##.....##.#..#.##.#.#....##..##.###..#..####.....#.##...#.#.##...##.#.##....#.####..##.##.##
.###...#.......#.#####..##..##.####..#####.####.#####.....##...###.###....#.......##...#.#....#.#..#
#.#..####..##.##...###..##......##.#..###..#####.####.###.#####.##...#..#.#.###..###.#....#.##.#####
##...#..##...#..#.#..###.#.##.#......#.##...#.....#.#......##...##..#####..#..##.##.##...#..##.##.#.
##.##...###..##.#.#......##.###..#...###..##.#.....##..#.#......#.#####.#...#.#....#...##..#.#...#..
##..#.#####.##.#.#.#...#..#...########..##.#...###.#.....#.###.###.##.##.#.#..#.###.###...#.###..##.
.#.#####..#..###.###..##..#........#.##....#.#..####...#..##.###..##...#..######....##.#...##.#####.
.....#..#...####..##..#....#..#.#..#.....###..###.##.##.##...##....####..######.#....#....#...###.##
.#####.......###...###.###..##....#.########..##.....###.#.#.#........#.###...###.......##..###..#.#
..##.#.#..###...#....#...#.####.#.#####...###.####.....######..##.##...####....###..##.##.######.##.
#.#.#..#...#..########.##.###.###.##...#..####.#########.#...#..##.##.###.......#.#.###...#.#..#.#.#
..####..#.##.#.###....##.##.#......####.##.##..#.#.###......##.######..##........#...#....#####..###
.###.#..#....##..#..#..#.#.#.#..##..#.#..#...#.#....#......#..#.#####.#.##....###.###..#....#####...
..##..##.#..###.#....###..##.####.##...#..#.##..#....#.#....#..##.#.###.#.....###..####.####.#....#.
#.####.....#..##..#.##..##.###.#.#..###.....#.##.##..#..###..#.##.#...#.##..#....###.###.#####.###.#
.##.#####.##..###.####.##.#.##.###.#..#...##.#..#.##..#..##..##.#.#######.#...#...##.#..####.##.#.#.
..##.##.#.#.###..#.#.###...##..##..#...#..#..####.#.#.####.##.#......#.#...#.#...#.....##..#..#..#.#
.#.###..##..#.......##.#..#.##.#..#....##.#...###.###.###.##..#.#.#.#.#.#########...##.###..#.#..#..
#.###..#.##.#.#..####.###..#.#.####...#...####.#.#####..####.####.#..###...###.##.##.#...#..#.#....#
...##.#.#.#.......####.####....###.#.............###..#..#.#..#....####..##.#.######....##..##.#.##.
..#####....#..####....##..####...###...#.#...##...#..###...#..#..#..#..######..####.##.###.##.#..###
##..#.###.#..#.###.##.#.###...#.#.###..####.####.##....#..##.#..#.#.##.#.#.#.##......#...##.........
..##.##..#.##.####...#...#...###..##.#.###...###..##.#.##.##..#.##.#..#....##.#....#.##...###...##..
..#.#.#.#.#..#.##.#.#.#.##..##.......#..#.##.##.####..#####...####.#..##..#####.##.#..#.....#.#####.
#....###..###.######.###.###..###.##...#.#...##.##..#.###..####...#.##..#.#..##.#.###.##.###.......#
....##.#.#...##...#.#......#.#.####.#..#...##...##..#.###.###.#..#..#####.#.#.##..#.#.##.##.#...#..#
##..#.###.#.#.#.##.....#.#.#.#..#..#.#..####.##..######.#######...#.#.......##.#..##.##.##...##.#..#
#.#.#..######.#.##.....#####....#..#....###..#...########..#..##...##..#.#..##.####..##..##..#.#.#.#
.##...#.#.#.#.##.####..###.......####...#.......######...#.##.####..##....###......###.###.##.#.#.#.
###.#.#..####..#.#..#..##.#....######..#.###.##..#.##..##.....##.##....#.###.........###...##.##....
.#.#..######.#########.#..##.###..#...#.#.#.#.##..##.###..#..#....###..##.#....###.#.##..####...#..#
#..#.###.#.##....####..##.#...####...##.#######...#......##.......#..##..##...###.##.###....#..#.#..
#.#..#...##.#.####....#....#.##.#.#...#.#....#..##..#.#.####.#.###....###..#..##.##.###....#.##.....
.###..##...##....###...#####.#...#.##.#.#.###.###.##..##.##....#.##.#####..#.#####..#####.##.....#.#
#..###..###.###..#.##.###.##..##...#..##.##.#...###..#.##...##...#....#..#.###..#....#...#.#.....###
#.#..##.####.###..##.####.##..########..##.#...###..#####..#.###..##.......##.#..###.##.#...#...##..
.#...#.#..#.##.......#.....##.#####.#.#.###..###.#.......###.#..####.#.#.#.#.###..#.#...#.#..#.#.#.#
###.#####....#.##...######.###...#.#..#.#......##.#.#.##.#..##..#.#....#....##.##..####...#.#.###.##
##.#.##.##...###..##.#.#..###.#.##...###..#.#.#.#..##..#.##..####..#.###.#.##..#.#..##...###...####.
###..#..#..#..###..##..###.#.#.##.#.###.#..#...##.#.#.#.#.#######.#...##..##.#...##.......#.#.##.#..
.#####.....###...##..##...#.#.##..#####.#.#.##.#.#.#.##.#..##..#.#.##.#.##.....###...###...###.###.#
.#.#..##.##.##.#....##.#..#..######..#.##.###.##..#.##.#....#....#.##.##.#.##.######..####.#.#.#.##.`;
}
