const express = require("express");
const app = express();

const users = [
  { id: 1, name: "Arjun", role: "student" },
  { id: 2, name: "Priyesha", role: "mentor" },
  { id: 3, name: "Harsh", role: "student"},
  { id: 4, name: "Ayush", role: "professor"}
];

app.get("/", (req, res) => {
  res.send("Hi, my name is Harshit kumar");
});


// this first will always run and it will never run the sescond.  (as EXPRESS checks from top to bottom).
  app.get("/route2/:one", (req, res) => {
    res.send("Express server is running here in route 2");
    console.log("first");
  });

  app.get("/route2/1", (req, res) => {
      res.status(200).json(users);
      console.log("second");
  });



// check the id and give the result
  app.get("/users/:id", (req, res) => {
    const userId = Number(req.params.id);
    const user = users.find(u => u.id === userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  });


// Compulsory for the server.
  app.listen(3000, () => {                                  /* Always prefered at last */
    console.log("Server started on port 3000");
  });
