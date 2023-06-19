const User = (props) => {
    return (
        <div className="user-card">
            <h2>Name: {props.name}</h2>
            <h3>Location: Bengaluru</h3>
            <h4>Contact: @pakkusakku</h4>
        </div>
    );
}

export default User;