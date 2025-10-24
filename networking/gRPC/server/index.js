const PROTO_PATH = "./customers.proto";

const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const uuid = require("uuid");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});

const customersProto = grpc.loadPackageDefinition(packageDefinition);

// GRPC sever
const server = new grpc.Server();

//Mock customers data - actually from DB
let customers = [
  {
    id: 1,
    name: "Akshith Gunasheelan",
    age: 24,
    address: "Bengaluru",
  },
  {
    id: 1,
    name: "Cristiano Ronaldo",
    age: 40,
    address: "Madrid",
  },
];

// AT the server we define the actual execution of the function which will be called by the client using the IDL
server.addService(customersProto.CustomerService.service, {
  // callback will be called on successful execution of the function.
  getAll: (call, callback) => {
    callback(null, { customers });
  },
  get: (call, callback) => {
    let customer = customers.find((n) => n.id === call.request.id);

    if (customer) {
      callback(null, customer);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not found",
      });
    }
  },
  insert: (call, callback) => {
    let customer = call.request;

    customer.id = uuid.v4();
    customers.push(customer);
    callback(null, customer);
  },
  update: (call, callback) => {
    let customer = customers.find((cust) => cust.id === call.request.id);

    if (customer) {
      customer.name = call.request.name;
      customer.age = call.request.age;
      customer.address = call.request.address;
      callback(null, customer);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not found",
      });
    }
  },
  remove: (call, callback) => {
    // Find index of customer with the given ID
    const index = customers.findIndex((cust) => cust.id === call.request.id);

    if (index !== -1) {
      // Remove customer from array
      customers.splice(index, 1);

      // Return empty message
      callback(null, {});
    } else {
      // Error handling
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Customer not found",
      });
    }
  },
});

server.bindAsync("127.0.0.1:30043", grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.log("Error in starting server", err);
  } else {
    server.start();
    console.log(`gRPC server is running on port ${port}`);
  }
});
