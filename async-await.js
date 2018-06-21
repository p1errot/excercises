function getUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1)
                resolve('jhon');
            else
                reject('unknown user');
        }, 1000);
    })
}

function getBankBalance(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user == 'jhon')
                resolve('$1000');
            else
                reject('unknown user');
        }, 1000);
    });
}

async function getAmount(userId) {
    let user = await getUser(userId),
        amount = await getBankBalance(user);
    
    return amount;
}

