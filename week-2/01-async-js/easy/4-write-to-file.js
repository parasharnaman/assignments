const fs = require("fs");

fs.readFile("file.txt", "utf-8", (err, data) => {
  data = data + " learning to write to a file";
  fs.writeFile("file.txt", data, (err) => {
    if (err) throw err;
  });
  console.log(data);
});

for (let i = 0; i < 1000000; i++) {}
