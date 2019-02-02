const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
         resolve('OK')
    }, 2000);
});

// minhaPromise()
//     .then(response => {
//         console.log(response);
// })
// .catch(err => {
//     console.log('Erro');
// });

async function executaPromise() {
    // const response = await minhaPromise();
    // console.log(response);
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromise();