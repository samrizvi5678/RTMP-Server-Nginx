const express = require('express');
const app = express();

app.use(express.urlencoded());

app.post("/auth", function (req, res) {
  /* This server is only available to nginx */
  const streamkey = req.body.key;

  console.log("\n\n\n\n\n");
  console.log("New Auth Request");
  /* You can make a database of users instead :) */
  if (streamkey === "urbangate") {
    console.log("Stream Key is Valid! Sending 200\n\n\n");
    res.status(200).send();
    return;
  }

  /* Reject the stream */
  console.log("Stream Key is INVALID! Sendinf 403\n\n\n");
  res.status(403).send();
});

app.listen(8000, function () {
  console.log("Listening on port 8000!");
});