import Home from "./pages/home/Home";
import Todo from "./pages/todo/Todo";
import { date } from "./pages/todo/signal";

// const Title = () => {
//   const age = 21;

//   if (age <= 5) return <div>you are very young</div>;
//   else if (age >= 6 && age < 20) {
//     return <div> hi you are between 6 and 20</div>;
//   } else
//     return (
//       <div>
//         you are old
//         {/* {2 === 3 ? "okay" : "not okay"} */}
//       </div>
//     );
// };




function App() {
  return (
    <div>
      {/* <Home /> */}
      <Todo />
    </div>
  );
}

export default App;
