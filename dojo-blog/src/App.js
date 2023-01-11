import Navbar from './Navbar';
import Home from './Home'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

// function App() {
//   const title = "Welcome to the new blog";
//   const likes = 50;
//   // const person = {name: "Khushi", age: 20}
//   //we cannot output objects and boolean values
//   const link = "http://www.google.com";


//   return (
//     <div className="App">
//       <div className="content">
//         <h1>{ title }</h1>
//         <p>Liked { likes } times</p>
//         {/* <p>{ person }</p> */}
//         <p>{ 10 }</p>
//         <p>{ "hello kk" }</p>
//         <p>{ [1,2,3,4,5] }</p> 
//         {/* outputting an array  */}
//         <p>{ Math.random() * 10 }</p>
//         <a href={link}>Google</a>
//       </div>
//     </div>
//   );
// }

export default App;
