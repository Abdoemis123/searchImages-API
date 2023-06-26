import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import './SearchBar.css'; // Import your custom CSS file

function SearchBar({ onSubmit }) {
    const [inputValue, setInputValue] = useState('');

    const submitFormHandler = (event) => {
        event.preventDefault();
        onSubmit(inputValue);
    };

    const inputChangeHandler = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="search-bar-container">
            <form onSubmit={submitFormHandler}>
                <input
                    className="search-input"
                    placeholder="Search..."
                    onChange={inputChangeHandler}
                />
                <button type="submit" className="search-button">
                    Go
                </button>
            </form>
        </div>
    );
}

export default SearchBar;
