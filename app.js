var msg = "Hello World";
console.log(msg);

const fs = require("fs");

fs.readFile("data/reddit_wsb.csv", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
