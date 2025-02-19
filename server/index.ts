import express from "express";
import {dbClient} from "./dbClient";

const app = express()
const port = 3001


app.get('/', (req, res) => {
    const sqliteVersion = dbClient.prepare('SELECT sqlite_version()');
    const result = sqliteVersion.get() as { 'sqlite_version()': string };
    res.json({ message: `Hello From Rally! The SQLite database was found and is using version ${result['sqlite_version()']}` })
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});
