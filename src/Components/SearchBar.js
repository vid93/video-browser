import React, { useState } from "react";

const SearchBar = ({handleFormSubmit}) => {

    const [inputText, setInputText] = useState("")

    const onChange = (e) => {

        setInputText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleFormSubmit(inputText)
    }
 
    return(
        <div className="search-bar ui segment">
            <form onSubmit={handleSubmit} className="ui form">
                <div className="field">
                    <label htmlFor="video-search">Video Search</label>
                    <input placeholder="Search" onChange={onChange} value={inputText} type="text" name='video-search'/>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;