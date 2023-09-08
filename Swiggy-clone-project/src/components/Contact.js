const Contact = () => {
    return (
        <div>
            <h1 className="p-4 m-4 text-3xl">Contact Us</h1>
            <form>
                <input className="border border-black p-2 m-2" placeholder="name" type="text"/>
                <input className="border border-black p-2 m-2" placeholder="query" type="text"/>
                <button className="border border-black p-2 m-2 bg-gray-200">Submit</button>
            </form>
        </div>
    );
}

export default Contact;