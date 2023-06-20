import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        // console.log(props);
        this.state = {
            //this contains all the state variables of component
            count:0,
            count2:2
        };
    }

    render() {
        const {name, location} = this.props;
        const {count, count2} = this.state;
        return (
            <div className="user-card">
                <h1>Count: {count}</h1>
                <h1>Count2: {count2}</h1>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @pakkusakku</h4>
            </div>
        );
    }
}

export default UserClass;