import { useState, useEffect }  from "react";


const useFetch = (url) => {
    // const [blogs,setBlogs] = useState (null);
    const [data,setData] = useState (null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        setTimeout(() => {
            // fetch('http://localhost:8000/blogs')
            fetch(url)
                .then( res => {
                    // console.log(res);
                    if(!res.ok) {
                        throw Error('Could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    // console.log(data);
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch(err => {
                    // console.log(err.message);
                    setError(err.message);
                    setIsLoading(false);
                })
        }, 1000);
    }, [url] );

    return { data, isLoading, error }
}

export default useFetch;