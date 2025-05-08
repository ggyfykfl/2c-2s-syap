// 1-----------------------------------------------------------------------
const myPromise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * 100);
    resolve(randomNumber);
  }, 3000);
});

myPromise.then((result) => {
  console.log(`Сгенерированное число: ${result}`);
}).catch((error) => {
  console.error(`Ошибка: ${error}`);
});

// 2-----------------------------------------------------------------------
const createMyPromise = (delay: number): Promise<number> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        myPromise.then(resolve)
      }, delay); 
    });
  };
  
  const promises: Promise<number>[] = [];
  
  for (let i = 0; i < 3; i++) {
    promises.push(createMyPromise(3000));
  }
  
  Promise.all(promises)
    .then((results) => {
      console.log(`Сгенерированные числа: ${results}`);
    })
    .catch((error) => {
      console.error(`Ошибка: ${error}`);
});

//3-----------------------------------------------------------------------
let pr = new Promise((res,rej) => {
    rej('ku')
})

pr
    .then(() => console.log(1))
    .catch(() => console.log(2))
    .catch(() => console.log(3))
    .then(() => console.log(4))
    .then(() => console.log(5))
//2
//4
//5

//4-----------------------------------------------------------------------
const myPromise2 = new Promise<number>((resolve) => {
    resolve(21);
});

myPromise2
    .then((result: number) => {
        console.log(result);
        return result * 2;
    })
    .then((result: number) => {
        console.log(result);
});

//5-----------------------------------------------------------------------
const myPromise3 = new Promise<number>((resolve) => {
    resolve(21);
});

async function run() {
    const result = await myPromise3;
    console.log(result);
    const doubledResult = result * 2;
    console.log(doubledResult);
}

run();

//6-----------------------------------------------------------------------
let promise = new Promise((res, rej) => {
    res('Resolved promise - 1');
});

promise
    .then((res) => {
        console.log('Resolved promise - 2');
        return 'OK';
    })
    .then((res) => {
        console.log(res);
    });
//Resolved promise - 2
//OK

//7-----------------------------------------------------------------------
let promise = new Promise((res, rej) => {
    res('Resolved promise - 1');
});

promise
    .then((res) => {
        console.log(res);
        return "OK";
    })
    .then((res1) => {
        console.log(res1);
    });
//Resolved promise - 1
//OK

//8-----------------------------------------------------------------------
let promise = new Promise((res, rej) => {
    res('Resolved promise - 1');
});

promise
    .then((res) => {
        console.log(res);
        return res;
    })
    .then((res1) => {
        console.log('Resolved promise - 2');
    });
//Resolved promise - 1
//Resolved promise - 2

//9-----------------------------------------------------------------------
let promise = new Promise((res, rej) => {
    res('Resolved promise - 1');
});

promise
    .then((res) => {
        console.log(res);
        return res;
    })
    .then((res1) => {
        console.log(res1);
    });
//Resolved promise - 1
//Resolved promise - 1

//10-----------------------------------------------------------------------
let promise = new Promise((res, rej) => {
    res('Resolved promise - 1');
});

promise
    .then((res) => {
        console.log(res);
    })
    .then((res1) => {
        console.log(res1);
    });
//Resolved promise - 1
//underfined



let pr = new Promise((res, rej) => {
    rej('ku');
});

pr
    .then(() => console.log(1))
    .catch(() => console.log(2))
    .catch(() => console.log(3))
    .then(() => console.log(4))
    .then(() => console.log(5));
//2
//4
//5