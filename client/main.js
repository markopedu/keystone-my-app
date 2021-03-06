(function () {

    const url = "/admin/api";
    const error = document.getElementById('error');
    const result = document.getElementById('result');
    const errorCb = e => error.innerHTML = JSON.stringify(e);

    document.getElementById('get-users-btn').addEventListener('click', async (e) => {

            const query = `query {
                              allUsers {
                                name
                                email
                              }
                            }`;



            const data = await request(url, query, errorCb);
            result.innerHTML = JSON.stringify(data);

    });

    document.getElementById('get-posts-btn').addEventListener('click', async (e) => {

        const query = `query {
                          allPosts {
                            title
                            status
                            body
                          }
                        }`;

        const data = await request(url, query, errorCb);
        result.innerHTML = JSON.stringify(data);

    });

    document.getElementById('get-todos-btn').addEventListener('click', async (e) => {
        const query = `query {
                         allTodos {
                            description
                            isComplete
                            deadline
                         }
                        }`;

        const data = await request(url, query, errorCb);
        result.innerHTML = JSON.stringify(data);
    });




})();

async function request(url, query, errorCb) {

    const data = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: query,
        }),
    }).then(result => result.json())
        .catch(e => {
            errorCb(e);
        });

    return data;
}
