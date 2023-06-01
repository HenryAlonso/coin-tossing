
function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    return new Promise( (resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        let attemptsCap = 100
        while(headsCount < 5 && attempts <= attemptsCap) {
            attempts ++;
            let result = tossCoin();
            console.log(`${result} was flipped on coin toss ${attempts}`);
            if(result === "heads") {
                headsCount ++
            } else {
                headsCount = 0;
            }
        }
        if (attempts <= attemptsCap) {
            resolve(`It took ${attempts} tries to flip five "heads" in a row`);
        } else{
            reject(`Attempts have exceeded ${attemptsCap} flips.`);
        }
    });
}
fiveHeads()
    .then( (res) => console.log(res) )
    .catch( (err) => console.log(err) );
console.log("This runs after the fiveHeads function is called!");
