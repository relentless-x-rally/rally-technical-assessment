import { Voter } from "../types";
import './SearchResult.css';

interface SearchResultProps {
    searchResult: Voter;
    handleAddContact: (voter?: Voter) => void;
}

const SearchResult = ({ searchResult, handleAddContact }: SearchResultProps) => {
    return (
        <div className="search-result">
            <h2>{searchResult.firstName} {searchResult.lastName}</h2>
            <p>{searchResult.city}, {searchResult.state}</p>
            <button onClick={() => handleAddContact(searchResult)}>Add Contact</button>
        </div>
    );
}

export default SearchResult;