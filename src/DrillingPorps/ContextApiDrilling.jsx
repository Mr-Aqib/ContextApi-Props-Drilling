import React, { createContext, useContext, useState } from 'react'
import { myData } from './miniData'
import { MdDeleteForever } from "react-icons/md";

const DrillingApis = createContext()

const ContextApiDrilling = () => {
    const [newarry,setNewarry]=useState(myData)
    const removee = (id) =>
{
       
        const removedata = newarry.filter((items, index) =>
        {
            return items.id!== id
        })
        setNewarry(removedata)
    
      }
    return (
      
        <DrillingApis.Provider value={{
            newarry,
            removee
        }
}>
          <div className="container">
              <div className="mx-auto col-lg-5 shadow p-3 rounded-4">
                  <h1 className='text-center'>ContextApi Prop Drilling</h1>

              </div>
              <div className="mx-auto col-lg-5 rounded-3 p-3 rounded-4">
                    <FirstChi/>
              </div>
     </div>
      </DrillingApis.Provider>
  )
}
const FirstChi = () => {
    const {newarry,removee} = useContext(DrillingApis)
    return (
      <div className="">
            {
                newarry.map((items, index) =>
                {
                    return (
                        <div className='p-2 my-3 card' key={index}>
                         <div className=" d-flex flex-row align-items-center justify-content-between">
                            <h4>{items.name}</h4>
                                <MdDeleteForever
                                    onClick={()=> removee(items.id)}
                                    size={24} color="red" />
                            </div>
                            <p>{items.age }</p>
                            <h2>ID:{items.id }</h2>
                        </div>
                    )
                })
            }
      </div>
  
  )
}
export default ContextApiDrilling