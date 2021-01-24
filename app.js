// For this assignment, you will build a simple HTTP server in NodeJS using Express.

// Your server will do the following:


// Have a '/api' route that returns a JSON object containing at least 3 key/value pairs of data
// Make sure your Git skills are current by committing and pushing your sample NodeJS server code up to a Github repository.

// Submit your Github URL for this assignment.

const http = require("http");
const hpData = {
    "_id": "5a12292a0f5ae10021650d7e",
    "name": "Harry Potter",
    "role": "student",
    "house": "Gryffindor",
    "school": "Hogwarts School of Witchcraft and Wizardry",
    "alias": "The Boy Who Lived",
    "wand": "Holly, 11\", phoenix feather",
    "boggart": "dementor",
    "patronus": "stag",
    "image":
      "https://www.pngitem.com/pimgs/m/13-135859_harry-potter-hd-png-download.png",
  };

const server = http.createServer((req, res) => {
    const url = req.url;
    res.setHeader("Content-Type", "text/html");
    if (url === '/') {
        res.write("<html>");
        res.write("<body>");
        res.write("<head><title>Home</title></head>");
        res.write("<h1>Welcome to the HTML Page served from my HTTP Node Server!</h1>");
        res.write("<a href='/api'>See JSON Data</a>");
        res.write("</html>");
        res.end();
    } else if (url === '/api') {
        res.write("<html>");
        res.write("<body>");
        res.write("<head><title>Harry Potter Data</title></head>");
        res.write(JSON.stringify(hpData));
        res.write("</html>");
        res.end();
    }
});

server.listen(5000);

//DONE
// Listen on port 5000
// Have a default route that returns HTML with a message welcoming you to the page
