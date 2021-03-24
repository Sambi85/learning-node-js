//XXX---1. spin up a server 
// 2. handle 2 routes: '/' + '/users'
// 3. add a form, POST request on click
// 4. Add the '/create-user', parse data, console.log it

const fs = require('fs');
const users = `
<html>
<ul>
    <li>
       User 1
    </li>
    <li>
       User 2
    </li>
    <li>
       User 3
    </li>
</ul>
</html>
`;
const greeting = `
<html>
    <h1>
        Greetings User!
    </h1>
</html>
`;
const create =
`<html>
    <header>
    <title> Submit Username </title>
    </header>
    <body>
    <form action="/message" method="POST">
        <input type="text" name="create-username">
            <button type="submit">
                Submit
            </button>
        </form>
    </body>
</html>`;

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/users'){
        res.write(users);
      return res.end();
    }

    if(url === '/create'){
        res.write(create);
      return res.end();
    }

    if(url === '/create' && method === 'POST'){
        res.write(create);
      return res.end();
    }

    if(url === '/') {
        res.write(greeting);
        return res.end();
    }
}

exports.handler = requestHandler;