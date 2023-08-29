const simulateAsyncTask = (success) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("The operation was successful!");
            } else {
                reject("An error occurred during the operation.");
            }
        }, 2000);
    });
}

simulateAsyncTask(true)
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.error("Error:", error);
    });

simulateAsyncTask(false)
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.error("Error:", error);
    });
