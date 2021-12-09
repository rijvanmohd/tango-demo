import { StreamContext } from "../context/streamContext";
import { useContext, useState } from "react";

const StreamPage = () => {
    const [comments,setComments] = useState(['Started stream'])
    const [comment,setComment] = useState('')
    const {url} = useContext(StreamContext)
    // console.log(url)

    const addComment = () => {
        if(comment){
            setComments([...comments,comment])
            setComment('')
        }
    }
    return(
        <div className="flex-col">
            <div className='absolute w-96 h-screen bg-gray-200 z-2 flex flex-col justify-end'>
                {
                    comments && comments.length > 0 &&
                    comments.map(each=>(
                        <div className='my-1 mx-4 text-left opacity-50 text-md'>
                            {each}
                        </div>
                    ))
                }
                <div className='flex'>
                    <input 
                        type='text' 
                        className='rounded-lg mx-2 my-3 px-2 py-3 flex-grow focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 focus:ring-opacity-80' 
                        placeholder='type something ....'
                        onChange={(e)=>setComment(e.target.value)}
                        value={comment}
                    />
                    <button className='bg-indigo-500 p-3 mx-3 my-3 rounded-full' onClick={addComment}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                

            </div>
            <div className='flex justify-center p-4 bg-gray-400 h-screen'>

                <iframe 
                    width="400" 
                    height="700" 
                    src={`https://www.youtube.com/embed/${url}?autoplay=1&mute=1`} 
                    frameborder="0" 
                    allowfullscreen=""
                />
            </div>
            
        </div>
    )
}

export default StreamPage;