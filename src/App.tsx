import {Container} from "@mui/material";
import "./App.css";
import {FormEvent, useEffect, useState} from "react";
import {User, Voter} from "./types";

/**
 * Entry point component for the application.
 */
function App() {

    useEffect(() => {
        fetch("http://localhost:3001/user/1")
            .then(res => res.json())
            .then((data: User) => setUser(data))
            .catch(console.error);
    }, []);

    /**
     * Will need to fetch the user from the server
     */
    const [user, setUser] = useState<User | null>(null);

    const [searchResults, setSearchResults] = useState<Voter[]>([]);

    /**
     * Submit the search query to the server
     */
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
    }

    /**
     * Add a contact to the user's contact list
     */
    const handleAddContact = (voter?: Voter) => {
    }

    return (
        <Container maxWidth="lg" sx={{paddingTop: "20px"}}>
            <div>
                <h1>Find Your Contact</h1>
                <div className="form-container">
                    <form className="search-form" onSubmit={handleSubmit}>
                        <label>
                            <p>Legal First Name</p>
                            <input type="text" name="firstName"/>
                        </label>
                        <label>
                            <p>Legal Last Name</p>
                            <input type="text" name="lastName"/>
                        </label>
                        <label>
                            <p>City</p>
                            <input type="text" name="city"/>
                        </label>
                        <label>
                            <p>State</p>
                            <input type="text" name="state"/>
                        </label>
                        <button type="submit">Search</button>
                    </form>
                </div>
                <div>
                    {/** Display search results here, can use components/SearchResult */}
                </div>
            </div>
        </Container>
    );
}

export default App;
