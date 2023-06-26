import React from "react";
import ClassComp from "./ClassComp";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        console.log("Child constructor for ", this.props.name);
        this.state = {
            //this contains all the state variables of component
            count:0,
            count2:2
        };
    }

    componentDidMount() {
        console.log("Child mounted for ", this.props.name);
    }

    render() {
        const {name, location} = this.props;
        console.log("Child render for ", name);
        const {count} = this.state;
        return (
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button onClick={()=>{
                    //don't do this
                    // this.state.count=this.state.count+1;
                    //correct method is:
                    this.setState({
                        count: this.state.count+1,
                    });
                }}>Increment</button>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @pakkusakku</h4>

                <ClassComp name={name}/>
            </div>
        );
    }
}

export default UserClass;