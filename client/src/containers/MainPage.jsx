import React, { Component } from 'react';
import API from "../utils/api"

// FROM README: The layout should include at least two React
// Components for each page `Search` and `Saved`.
// That will be 2 different containers

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