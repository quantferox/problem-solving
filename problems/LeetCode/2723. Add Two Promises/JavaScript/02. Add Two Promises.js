var addTwoPromises = async function (promise1, promise2) {
    let objResult = await Promise.all([promise1, promise2]);
    return (objResult[0] + objResult[1]);
};