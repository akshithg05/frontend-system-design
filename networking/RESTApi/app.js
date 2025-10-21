const express = require("express");

const app = express();

// This is a middleware used to connvert raw-srting to JSON
app.use(express.json());

const db = {
  todos: [],
};

app.get("/todos", (req, res) => {
  try {
    res.status(200).send({
      count: db?.todos?.length,
      data: db.todos,
    });
  } catch (err) {
    res.status(404).send({
      message: "Not found",
    });
  }
});

app.post("/todos", (req, res) => {
  try {
    const task = req?.body?.task;
    db?.todos?.push({ id: Math.floor(Math.random() * 100), task: task });

    if (!task) {
      throw new Error("No data sent");
    }

    res.status(201).send({
      message: "Created",
    });
  } catch (err) {
    res.status(400).send({
      message: err?.message,
    });
  }
});

app.patch("/todos/:todoId", (req, res) => {
  try {
    const idToUpdate = req?.params?.todoId;
    const updatedTask = req?.body?.task;
    const indexToUpdate = db?.todos?.findIndex((task) => task.id == idToUpdate);

    if (indexToUpdate === -1 || !updatedTask) {
      throw new Error("Not found");
    }

    db.todos[indexToUpdate] = { id: idToUpdate, task: updatedTask };

    res.status(201).send({
      message: "Updated successfully",
    });
  } catch (err) {
    res.status(400).send({
      message: err?.message,
    });
  }
});

app.delete("/todos/:todoId", (req, res) => {
  try {
    const idToUpdate = req?.params?.todoId;
    const filteredDb = db?.todos?.filter((task) => task.id != idToUpdate);
    console.log(filteredDb);

    db.todos = filteredDb;

    res.status(204).send({
      message: "Deleted successfully",
    });
  } catch (err) {
    res.status(404).send({
      message: err?.message,
    });
  }
});

app.get("/", (req, res) => {
  res.status(200).send({
    message: "You have reached the root of our servers",
  });
});

app.listen(5111, () => {
  console.log("Listening on port 5111");
});
