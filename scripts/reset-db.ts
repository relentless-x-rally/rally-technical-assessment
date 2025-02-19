import {DatabaseSync} from "node:sqlite";
import fs from "node:fs";

const loadJSON = <T>(path: string) => {
    return JSON.parse(fs.readFileSync(path, 'utf8')) as T;
}


interface Voter {
    firstName: string;
    lastName: string;
    city: string;
    state: string;
    address: string;
    age: number;
    voterfileId: string;
}

(async () => {
    fs.unlinkSync('./db/rally.db');
    const voteFile: Voter[] = loadJSON('./db/voterfile.json');

    const db = new DatabaseSync("./db/rally.db");

    try {


        db.exec('CREATE TABLE "user" ("id" INTEGER NOT NULL, "first_name" TEXT, "last_name" TEXT, "email" TEXT NOT NULL UNIQUE, PRIMARY KEY("id" AUTOINCREMENT))');
        db.exec('CREATE TABLE "voter" ("id" INTEGER NOT NULL, "first_name" TEXT NOT NULL, "last_name" TEXT NOT NULL, "city" TEXT NOT NULL, "state" TEXT NOT NULL, "address" TEXT NOT NULL, "age" INTEGER NOT NULL, "dwid" TEXT, PRIMARY KEY("id" AUTOINCREMENT))');
        db.exec('CREATE TABLE "contact" ("id" INTEGER NOT NULL, "voter_id" INTEGER NOT NULL, "user_id" INTEGER NOT NULL, PRIMARY KEY("id" AUTOINCREMENT), CONSTRAINT "user_id_fk" FOREIGN KEY("user_id") REFERENCES "user"("id"), CONSTRAINT "voter_id_fk" FOREIGN KEY("voter_id") REFERENCES "user"("id"));');

        const insertVoters = db.prepare('INSERT INTO voter (first_name, last_name, city, state, address, age, dwid) VALUES (?, ?, ?, ?, ?, ?, ?)')

        for (const voter of voteFile as Voter[]) {
            insertVoters.run(voter.firstName, voter.lastName, voter.city, voter.state, voter.address, voter.age, voter.voterfileId);
        }
        db.exec(`INSERT INTO user (first_name, last_name, email) VALUES ('Test', 'Tester', 'test@example.com')`);
        console.log('Database reset');
    } catch (e) {
        console.error(e);
    } finally {
        db.close();
    }
})();