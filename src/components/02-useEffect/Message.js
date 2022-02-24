import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [cords, setcords] = useState({x:0,y:0});
    const {x,y} = cords;
    useEffect(() => {
        const mouseMove = (e)=>{
            const coors = {x:e.x,y:e.y};
            setcords(coors);
            console.log(':D');
        }
      
    window.addEventListener('mousemove',mouseMove)
      return () => {
        window.removeEventListener('mousemove',mouseMove);
      }
    }, [])
    
  return (
    <div>
        <h3>Message</h3>
    <p>x:{x} - y:{y}</p>
    </div>
  )
}
