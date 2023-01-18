import { useState }  from "react";


const Home = () => {
    //states
    //first an array to destructure two values
    const [blogs,setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum ...', author: 'mario', id: 1 },
        { title: 'welcome party !', body: 'lorem ipsum ...', author: 'yoshi', id: 2 },
        { title: 'Web dev', body: 'lorem ipsum ...', author: 'mario', id: 3 }
    ])
    return (
        <div className="home">
            {/* we dont hard code (using 3 div's) as the blogs may be changed in the future , so we use map method in javascript- map method cycles through an array and it can do something with each item in the array, we want to return a bit of template for each item in the array that will be output in the browser  */}
            {/* inside the template we can output javascript */}
            {blogs.map((blog) => (
                <div className="blog-preview" key = {blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by: { blog.author }</p>
                </div>
            ))}
        </div>
    );
}

export default Home;

















// //useState is the function name

// const Home = () => {
//     // let name = 'nishi';
//     const [name, setName] = useState('nishi');
//     const [age,setAge] = useState(17);

//     const handleClick = () => {
//         setName('jassika');
//         setAge(18);
//         // name = 'jassika'
//         // console.log('name');
//     }

//     // const handleClickAgain = (name) => {
//     //     console.log('Hello ' + name);
//     // }


//     return (
//         <div className="home">
//             <h2>Home Page</h2>
//             <p>{ name } is { age } years old</p>
//             <button onClick={handleClick}>Click me</button>


//             {/* parenthesis will invoke the function */}
//             {/* <button onClick={() => {
//                 handleClickAgain('Kavya');
//             }}>Click me again</button> OR  */}
//             {/* <button onClick={() => handleClickAgain('Kavya')}>Click me again</button> */}


//         </div>
//     );
// }
 
// export default Home;