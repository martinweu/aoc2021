function fun120701() {

    let fish = Array<number>(9).fill(0);
    let input = getInput1206().split(',')
    .map(it => fish[parseInt(it)]++
        )
    
    for(let i = 0; i < 1;i++){
        fish[(i + 7)%9] += fish[i%9]
    }

    // for(let i = 0; i < days;i++)
    // {
    //     let newFish = fish[0]
    //     for(let j = 0; j < 8;j++)
    //     {
    //         fish[j] = fish[j+1]
    //     }
    //     fish[6] += newFish
    //     fish[8] = newFish
    // }


    let count = fish.reduce((a, b) => a + b, 0)

    console.log("There are " + count + " fish places.");
}

fun120701()


function getTest1207(): string {
    return `3,4,3,1,2`;
}


function getInput1207(): string {
    return `2,1,2,1,5,1,5,1,2,2,1,1,5,1,4,4,4,3,1,2,2,3,4,1,1,5,1,1,4,2,5,5,5,1,1,4,5,4,1,1,4,2,1,4,1,2,2,5,1,1,5,1,1,3,4,4,1,2,3,1,5,5,4,1,4,1,2,1,5,1,1,1,3,4,1,1,5,1,5,1,1,5,1,1,4,3,2,4,1,4,1,5,3,3,1,5,1,3,1,1,4,1,4,5,2,3,1,1,1,1,3,1,2,1,5,1,1,5,1,1,1,1,4,1,4,3,1,5,1,1,5,4,4,2,1,4,5,1,1,3,3,1,1,4,2,5,5,2,4,1,4,5,4,5,3,1,4,1,5,2,4,5,3,1,3,2,4,5,4,4,1,5,1,5,1,2,2,1,4,1,1,4,2,2,2,4,1,1,5,3,1,1,5,4,4,1,5,1,3,1,3,2,2,1,1,4,1,4,1,2,2,1,1,3,5,1,2,1,3,1,4,5,1,3,4,1,1,1,1,4,3,3,4,5,1,1,1,1,1,2,4,5,3,4,2,1,1,1,3,3,1,4,1,1,4,2,1,5,1,1,2,3,4,2,5,1,1,1,5,1,1,4,1,2,4,1,1,2,4,3,4,2,3,1,1,2,1,5,4,2,3,5,1,2,3,1,2,2,1,4`;
}