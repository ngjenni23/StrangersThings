const cohortName = '2211-ftb-et-web-pt';
export const BASE_URL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

function fetchUsers () {
    const resp = fetch(`${BASE_URL/users/register}`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username,
                password
            }
        })
    }).then(resp => resp.json())
    .then(result => {
        console.log(result);
    })
    .catch(console.error);
}