import express, {NextFunction, Request, Response} from "express";
import {dbClient} from "./dbClient";
import cors from 'cors';

const port = 3001

const app = express()

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    const sqliteVersion = dbClient.prepare('SELECT sqlite_version()');
    const result = sqliteVersion.get() as { 'sqlite_version()': string };
    res.json({message: `Hello From Rally! The SQLite database was found and is using version ${result['sqlite_version()']}`})
})

/**
 * Fetch a user by id
 */
app.get('/user/:userId', (req, res, next) => {
    try {
        const userId = req.params.userId;
        const user = dbClient.prepare('SELECT * FROM user WHERE id = ?');
        const result = user.get(userId);
        if (!result) {
            res.status(404).json({message: `User with id ${userId} not found`});
            return;
        }
        res.json(result);
    } catch (e) {
        next(e);
    }
});


/**
 * Empty handler for implementing the search endpoint
 */
app.post('/search', (req, res) => {
    const searchRequest = req.body;
});


/**
 * Empty handler for creating a contact
 */
app.post('/user/:userId/contact', (req, res) => {
});

/**
 * Empty handler for fetching a user contacts, not part of the core requirements
 */
app.get('/user/:userId/contacts', (req, res) => {
});


/**
 * Catch all error handler
 */
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('Error:', err);
    res.status(500).send({errors: [{message: "Something went wrong"}]});
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});
