const HTML = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" href="./favicon.svg" type="image/x-icon">
        <link rel="stylesheet" href="./src/styles/main.css">
        <title>Rocket</title>
    </head>
    <body>
        <img src="./favicon.svg"/>
        <h1>Hello rocketers</h1>
        <p>
            Thank you for choosing rocket-cli <br>
            I whish you a good time of coding
        </p>
        <button>
            <a href="https://github.com/tglRazaf">Get started</a>
        </button>
    </body>
</html>
`
const CSS = `*{
    padding: 0px;
    margin: 0px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body{
    font-family: sans-serif;
    color: #2b2b2b;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
}

h1{
    font-size: 50px;
}

p{
    color: #616161;
}

a{
    text-decoration: none;
    color: #424242;
    transition: all .3s;
}

button{
    cursor: pointer;
    color: #424242;
    padding: 5px 10px;
    margin: 15px 0px;
    background-color: transparent;
    border: 1px solid #cecece;
    border-radius: 3px;
    transition: all .3s;
}

button:hover{
    background-color: #2b2b2b;
    border: 1px solid #ffffff;
}

button:hover a{
    color: white;
}

img{
    height: 100px;
    width: 100px;
}
`

export {HTML as htmlFileContent, CSS as cssFileContent}