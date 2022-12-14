console.log('Hello!');

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Wait, please...');

        const sqlClient = { site: 'YouTube', group: 'video', port: 3000 };

        resolve(sqlClient);
    }, 2000)
})

p.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.access = false;
            resolve(data);
        }, 2000)
    })
})
.then(getData => {
    getData.internetSite = 'yes';
    return getData;
})
.then(getData2 => {
    console.log('Promise resolve', getData2);
})
.catch(error_ => console.log('Error:', error_));