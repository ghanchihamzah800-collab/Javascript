//1.	Log "Start", then "End" immediately, and "Middle" after 1 second.

    console.log("Start")

    setTimeout(() => {
        console.log("Middle, takes 1sec delay")
    }, 1000);

    console.log("End")

//2.	Schedule a task and cancel it before execution.

    let timeset ;

    timeset = setTimeout(() => {
        console.log("hello")
    }, 1000);


    clearTimeout(timeset)

//3.	Create a repeating task that stops itself after 5 runs.

    let count = 0;

    const setin = setInterval(() => {
        count++;
        console.log("Run" , count);

        if(count === 5){
            clearInterval(setin)
        }
        }, 1000);

//4.	Show how multiple setTimeout calls execute relative to synchronous code.

    console.log("A");

    setTimeout(() => {
    console.log("B");
    }, 0);

    setTimeout(() => {
    console.log("C");
    }, 0);

    console.log("D");


//5.	Create a delay utility function using setTimeout.

    function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
    }

    async function run() {
        console.log("Start");

        await delay(1000);

        console.log("After 1 sec of pause")
    }

    run()