const NotFound = () => {
    return (
        <div className="not-found">
            <h2>SORRY</h2>
            <p>That page cannot be found</p>
            <Link to="/">Back to the homepage...</Link>
        </div>
    );
}
 
export default NotFound;