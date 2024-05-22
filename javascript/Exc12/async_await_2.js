




async function fetchData() {
    const f1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve('f1 called');
        }, 3000);
    });
    const message1 = await f1;
    console.log(message1);

    
    const f2 = new Promise((resolve) => {
        setTimeout(() => {
            resolve('f2 called');
        }, 5000);
    });
    const message2 = await f2;
    console.log(message2);


    const f3 = new Promise((resolve) => {
        setTimeout(() => {
            resolve('f3 called');
        }, 7000);
    });
    const message3 = await f3;
    console.log(message3);
}

fetchData();

