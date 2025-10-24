const express = require("express");
const client = require("./client"); // make sure your gRPC client is exported properly

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

// GET all customers
app.get("/", (req, res) => {
  client.getAll({}, (err, data) => {
    if (err) {
      return res.status(500).send({ error: err.details });
    }
    res.send(data.customers);
  });
});

// CREATE a new customer
app.post("/create", (req, res) => {
  let newCustomer = {
    name: req.body.name,
    age: req.body.age,
    address: req.body.address, // fixed: was req.body.age before
  };

  client.insert(newCustomer, (err, data) => {
    if (err) {
      return res.status(500).send({ error: err.details });
    }
    res.send({
      message: "Customer added successfully",
      data: data,
    });
  });
});

// UPDATE an existing customer
app.post("/update", (req, res) => {
  let updatedCustomer = {
    id: req.body.id,
    name: req.body.name,
    age: req.body.age,
    address: req.body.address,
  };

  client.update(updatedCustomer, (err, data) => {
    if (err) {
      return res.status(404).send({ error: err.details });
    }
    res.send({
      message: "Customer updated successfully",
      data: data,
    });
  });
});

// REMOVE a customer
app.post("/remove", (req, res) => {
  let customerId = { id: req.body.id };

  client.remove(customerId, (err, data) => {
    if (err) {
      return res.status(404).send({ error: err.details });
    }
    res.send({
      message: "Customer removed successfully",
    });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
