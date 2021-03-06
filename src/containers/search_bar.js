import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            user: ''
        };
;
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    componentDidMount (){
        this.props.fetchUser('sugarcrashstudios@gmail.com')
    }

    onInputChange(event) {
        this.setState({ user: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchUser(this.state.user);
        this.setState({ user: '' })
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className='input-group'>
                <input 
                    placeholder="Enter Mountain Project email"
                    name="login_useremail"
                    type="email"
                    className="form-control"
                    required="true"
                    value={this.state.user}
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);