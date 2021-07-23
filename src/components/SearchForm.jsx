import React from 'react';
import UserCardList from './UserCardList';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            users: [],
            lookedUp: []
        }
    }

    _handleChange = (field, value) => {
        //setState username = input value
        this.setState({
            [field]: value
        });
    }

    _handleSubmit = async (e) => {
        e.preventDefault();
        //get username value
        const userLookup = this.state.userName
        if (this.state.lookedUp.includes(userLookup)) {
            return console.log('duplicate');
        } else {
            //fetch Github API
            const url = `https://api.github.com/users/${userLookup}`;
            const response = await fetch(url)
                .then(response => response.json());
            //response = single user
            console.log(response)
            //add response to array [...this.state.users, newUserData]
            this.setState({
                users: [...this.state.users, response],
                userName: '',
                lookedUp: [...this.state.lookedUp, userLookup]
            })
        }
        
    }

    render() {
        return (
            <>
                <form onSubmit={this._handleSubmit}>
                    <label>
                        <input
                            type="text"
                            value={this.state.userName}
                            onChange={(e) => {
                                this._handleChange('userName', e.target.value)
                            }}
                        />
                    </label>
                    <br />
                    <input type="submit" value="Add card" />
                </form>
                {this.state.users.length > 0 ? 
                    <UserCardList 
                        users={this.state.users}
                    /> : 'Please search for a user'}
                
            </>
        )
    }
}


export default SearchForm;