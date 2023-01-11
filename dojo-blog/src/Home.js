import { useState }  from "react";
//useState is the function name

const Home = () => {
    // let name = 'nishi';
    const [name, setName] = useState('nishi');
    const [age,setAge] = useState(17);

    const handleClick = () => {
        setName('jassika');
        setAge(18);
        // name = 'jassika'
        // console.log('name');
    }

    // const handleClickAgain = (name) => {
    //     console.log('Hello ' + name);
    // }


    return (
        <div className="home">
            <h2>Home Page</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>


            {/* parenthesis will invoke the function */}
            {/* <button onClick={() => {
                handleClickAgain('Kavya');
            }}>Click me again</button> OR  */}
            {/* <button onClick={() => handleClickAgain('Kavya')}>Click me again</button> */}


        </div>
    );
}
 
export default Home;