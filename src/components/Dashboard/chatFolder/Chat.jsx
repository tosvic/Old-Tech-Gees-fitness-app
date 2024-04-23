// import React, { useEffect, useState } from "react";
// import './Chat.css'


// const Chat = () =>{
//     const [messages, setMessages] = useState([
//         {id:1, test:'poor', x:50, y:50},
//         {id:1, test:'Good', x:50, y:50},
//         {id:1, test:'Excellent', x: x >=50, y: y >=50}
//         ]
//     )

//         const updatePositionHandler = () =>{
//             setMessages(prevMessages => {
//                 prevMessages.map(message =>(
//                     {
//                         x: message.x + Math.random()*2-1,
//                         y: message.y + Math.random()*2-1
//                     }
//                 ))
//             });
//         };

//         useEffect(()=>{
//             const intervalId = setInterval((updateMessagePositions)=>{
//                 // x: message.x + Math.random()*2-1,
//                 // y: message.y + Math.random()*2-1
//             }, 1000)
//         })
//     return(
//         <>
        
        
//         </>
//     )
// }

// export default Chat 