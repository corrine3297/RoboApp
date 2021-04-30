import React from 'react';

import Card from './Card';


// // const CardList = ({robot})=>{
// //     const cardmap = robot.map((user,i) => {
// //         return(
// //             <Card id={robot[i].id} name={robot[i].name} email={robot[i].email}/>
// //         );
// //     })

// //     return({cardmap});

// //     // return(
// //     // <div>
// //     //     <Card id={robot[0].id} name={robot[0].name} email={robot[0].email}/>
// //     //     <Card id={robot[1].id} name={robot[1].name} email={robot[1].email}/>
// //     //     <Card id={robot[2].id} name={robot[2].name} email={robot[2].email}/>
// //     // </div>
// //     // );
// // }

// // export default CardList;


// const CardList = ({robot})=>{

//     const cardmap = robot.map((user,i) => {
//         return(
//             <Card key={i} id={robot[i].id} name={robot[i].name} email={robot[i].email}/>
//         );
//     })

//     return(cardmap);

// }

// export default CardList;

const CardList = ({robot})=>{
return(
    robot.map((user,i) => {
        return(
            <Card key={i} 
            id={robot[i].id} 
            name={robot[i].name} 
            email={robot[i].email}/>
        );
    })


);
}


export default CardList;