import { useEffect, useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { StreamContext } from "../context/streamContext";

const Card = ({image,name,URL}) => {
    // https://www.tango.me/stream/RtR1oYR81aNvpZpWX7d31A

    const [redirect,setRedirect] = useState(false)
    const {changeUrl} = useContext(StreamContext)


    const joinCall = () => {
        // console.log('joincall------',URL)
        changeUrl(URL)
        setRedirect(!redirect)
    }

    return(
        <div>
            {
                redirect ?
                <Navigate to='/stream'/>
            :
                <div className='flex-col rounded-lg h-56 w-56 border-white border-2 m-10 cursor-pointer' onClick={()=>joinCall()}>
                    {/* <video height='200' width='200' controls>
                        <source src={image} type='video/mp4'/>
                    </video> */}
                    <img className="rounded-lg" src={image} alt='thumbnail'/>
                    <div className='flex align-center'>
                        <img src={image} alt='icon' className='h-8 w-8 rounded-full mt-4 mr-4'/>
                        <div className='font-700 text-md pt-4 align-center self-center'>{name}</div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Card;