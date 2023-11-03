import axios from 'axios';
import { useEffect, useState } from 'react';

// const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const url=`https://api.giphy.com/v1/gifs/random?api_key=6sjYI10PqqTk9lWgQ6xg3CY5UYvavqZt`;


const useGif = () => {
    const [gif, setGif]=useState('');
    const [loading, setLoading] = useState(false);

    async function fetchData(tag){
      setLoading(true);

      const {data}=await axios.get(tag?`${url}&tag=${tag}`:url);
       // axios is better alternative of fetch api as it is more secure and we don't need to convert output in json format.
      const imageSourse=data.data.images.downsized_large.url;
      setGif(imageSourse);

      setLoading(false);
    }

    useEffect(()=>{
      fetchData();
    },[]);

    return {gif, loading, fetchData};
  
}

export default useGif