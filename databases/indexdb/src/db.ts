import Dexie from "dexie";
import type { Table } from "dexie";

// Define the Todo interface
export interface Todo {
  id: number;
  task: string;
}

// Create the database class
export class TodoDatabase extends Dexie {
  // Declare the table with TypeScript typing
  todos!: Table<Todo, number>;

  constructor() {
    super("TodoDatabase");

    // Define the schema
    this.version(1).stores({
      todos: "id, task", // id is the primary key, task is indexed
    });
  }
}

// Export a database instance
export const db = new TodoDatabase();
