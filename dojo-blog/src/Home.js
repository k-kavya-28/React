import { useState, useEffect }  from "react";
import BlogList from "./blogList";
import useFetch from "./useFetch";


const Home = () => {
    const { data: blogs , isLoading, error } = useFetch('http://localhost:8000/blogs')


    //states
    //first an array to destructure two values
    

    // ([
    //     { title: 'My new website', body: 'lorem ipsum ...', author: 'khushi', id: 1 },
    //     { title: 'welcome party !', body: 'lorem ipsum ...', author: 'kavya', id: 2 },
    //     { title: 'Web dev', body: 'lorem ipsum ...', author: 'jassika', id: 3 }
    // ])

    // const [name, setName] = useState('kavya');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    // useEffect(() => {
    //     console.log('use effect ran');
    //     console.log(name);
    //     // console.log(blogs);
    // }, [name] );

    

    // return (
    //     <div className="home">
    //         {/* we dont hard code (using 3 div's) as the blogs may be changed in the future , so we use map method in javascript- map method cycles through an array and it can do something with each item in the array, we want to return a bit of template for each item in the array that will be output in the browser  */}
    //         {/* inside the template we can output javascript */}
    //         <BlogList blogs={ blogs } title="ALL BLOGS!"/>
    //         <BlogList blogs={ blogs.filter((blog) => blog.author === 'jassika') } title="KK's BLOGS!" handleDelete = {handleDelete} />
    //         <button onClick={() => setName('Khushi')}>change name</button>
    //         <p>{name}</p>
    //     </div>
    // );

    return (
        <div className="home">
            {/* { blogs && <BlogList blogs={ blogs } title="KK's BLOGS!" handleDelete = {handleDelete} />} */}
            { blogs && <BlogList blogs={ blogs } title="KK's BLOGS!"  />}
            {isLoading && <div>Loading ...</div> }
            { error && <div>{ error }</div> }
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