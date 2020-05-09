import React, { Component } from 'react';
import API from "../utils/api"
class MainPage extends Component {
    componentDidMount() {
        API.apiCall().then((res) => console.log(res.data));
    }

    render() {
        return (
            <div>
                <h1> main page </h1>
            </div>
        );
    }
}

export default MainPage;