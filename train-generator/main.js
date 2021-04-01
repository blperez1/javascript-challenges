function* getStop() {
    yield "Poughkeepsie"; 
    yield "Newburgh"; 
    yield "Peekskill"; 
    yield "Yonkers"; 
    yield "Bronx";
    yield "Grand Central";
    
}

const nycTrainLine = getStop();

document.querySelector('#stop-button').addEventListener('click', () => {
    let currentStop = nycTrainLine.next();
    if(currentStop.done) {
        console.log("We made it!");
        document.querySelector('#stop-button').setAttribute("disabled", true);
    }

    console.log(currentStop.value)
});
