// import Persondata from "./Components/Persondata";

// const App = () => {
//   return (
//     <div>
//       <h1>Python</h1>
//     </div>
//   );
// };

// export default App;

// import Persondata from "./Components/Persondata.jsx"
// const App = ()=>{
//     return (
//         <>
//             <Persondata />
//         </>
//     )
// }

// export default App


import Persondata from "./Components/Persondata"
import Studentdata from "./Components/Studentdata "

const App = () => {
    return(
        <div>
            <h1>You Know One thingg???</h1>
            <Persondata/>
            <Studentdata Student_name="nila" age={20}/>       //Props[customized attributename]
        </div>
    )

    
}

export default App
