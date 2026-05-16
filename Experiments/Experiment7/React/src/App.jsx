// import StudentCard from "./StudentCard";

// function App() {
//   return (
//     <div className="App_Class">
//     <h1>Student Card App</h1>
//     <StudentCard name="VADANT" course="Computer Science" marks="85"/>
//     <StudentCard name="SACHIN" course="Information Technology" marks="90"/>
//     <StudentCard name="RAHUL" course="Electronics" marks="80"/>
//     </div>
//   );
// }
// export default App;


function App(){
  return(
    <div>
      <h1>Current Score: {score}</h1>
      <button onClick={() => setScore(score + 1)}>Increase Score</button>
    </div>
  );
}
export default App;