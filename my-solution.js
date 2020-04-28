/* TASK 1 */
//fetch a response using async/await , instead of promises 
async function getUserAsync(name) {
    try {
        let response = await fetch(`https://api.github.com/users/${name}`);
        let data = await response.json()
        return data;
    } catch (e) { console.error(e); }
}
getUserAsync('rashaali84')
    .then(data => console.log(data));

//*TAsk 2 */
async function getUserAsync(name) {
    try {
        let response = await fetch(`https://api.github.com/users/${name}`);
        let data = await response.json()
        return data;
    } catch
    { console.error(e); }
}
getUserAsync('rashaali84')
    .then(data => console.log(data.repos_url));

//*TAsk 3 async-await all for multiple names*/
/*async function asyncAll() {
    try {
        for (name of ["rashaali84", "BrendanEich"]) {
            userDetails = await fetch("https://api.github.com/users/" + name);
            userDetailsJSON = await userDetails.json();
            console.log("userDetailsJSON", userDetailsJSON);
        }
    } catch (e) {
        throw e;
    }
}
asyncAll();*/

const runAsyncFunctions = () => {
    const users = ["rashaali84", "BrendanEich"];

    Promise.all(
        users.map(async user => {
            userDetails = await fetch("https://api.github.com/users/" + user);
            userDetailsJSON = await userDetails.json();
            console.log("userDetailsJSON", userDetailsJSON);
        })
    )

    console.log(users)
}

runAsyncFunctions();