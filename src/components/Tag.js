import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {
    const [tag,setTag]=useState('naruto');
    const {gif, loading, fetchData}=useGif();

  return (
    <div className='w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>

        <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>

        {
          loading?(<Spinner/>):(<img src={gif} alt="" width='450'/>)
        }

        <input type="text" className='w-10/12 rounded-lg py-2 mb-[3px] text-center text-lg' onChange={(event)=>setTag(event.target.value)} value={tag}/>

        <button onClick={()=>fetchData(tag)}
            className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]'>
            Generate
        </button>
    </div>
  )
}

export default Tag