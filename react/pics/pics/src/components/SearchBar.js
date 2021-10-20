import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
        <div className='ui segment'>
            <form className>
                <input type='text' />
            </form>
        </div>)
    }
}

export default SearchBar;


