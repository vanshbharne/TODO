import React from 'react'
import  imgbin from "./trash-bin.png"


function TaskCard({ task , del, index }) {
    return (
        <div>

            <div className=' mx-3'>
                <p className='border border-2 border-info px-3 py-1 rounded-pill  d-flex flex-wrap justify-content-between align-items-center'>
                    <h5 className=' align-self-center'>
                        {task}
                    </h5>

                   <img src={imgbin}   
                   onClick={()=>{
                    del(index)
                   }} 
                   alt='binimg' className='bg-light cursor-pointer' style={{cursor : "pointer"}}  height={30} />
                </p>
            </div>
        </div>
    )
}

export default TaskCard