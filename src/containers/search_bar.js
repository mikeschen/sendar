import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { user: '' }
;
        this.onInputChange = this.onChange.bind(this);
    }

    onInputChange(event) {
        this.state({ user: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form className='input-group'>
                <input 
                    placeholder="Enter Mountain Project username or email"
                    className="form-control"
                    value={this.state.user}
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}