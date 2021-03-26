//XXX---1. spin up a server 
//XXX---2. handle 2 routes: '/' + '/users'
//XXX---3. add a form, POST request on click
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
    <title> Create Username </title>
    </header>
    <body>
    <form 
        action="/create-user" 
        method="POST"
    >
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
    
    if(url === '/') {
        res.write(greeting);
        res.write(create);
        return res.end();
    }
    
    if(url === '/users'){
        res.write(users);
      return res.end();
    }

    if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const create = parsedBody.split('=')[1];
            
            fs.writeFile('createdUser.txt', create, err => {
                res.statusCode = 302;
                res.setHeader('Location','/');
                console.log(create)
                return res.end();
            });
        });
    }
}

exports.handler = requestHandler;