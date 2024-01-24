const fs = require("fs");

fs.readFile("file2.txt", "utf-8", (err, data) => {
  data = data.replace(/\s+/g, " ");
  fs.writeFile("file.txt", data, (err) => {
    if (err) throw err;
    fs.readFile("file2.txt", "utf-8", (err, data) => {
      console.log(data);
    });
  });
});
