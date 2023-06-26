import React from "react";

class ClassComp extends React.Component {
    constructor(props) {
        super(props);
        console.log("Nested child comp constructor ", this.props.name);
    }
    componentDidMount() {
        console.log("Nested child mounted ", this.props.name);
    }

    render() {
        console.log("Nested child render ", this.props.name);
        return (
            <h1>Nested child</h1>
        );
    }
}

export default ClassComp;