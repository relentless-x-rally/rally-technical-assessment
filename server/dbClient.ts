import {DatabaseSync} from "node:sqlite";


const dbClient = new DatabaseSync('./db/rally.db');

export { dbClient };