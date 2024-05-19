import { Add } from "@mui/icons-material";
import "./App.css";
import Burds from "./components/Burds";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Question from "./components/Question";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="max-w-screen-2xl text-[#06286E] mx-auto p-4">
        <Burds />
        <div className="mt-16">
          <p className="text-xl font-bold ">Relations and Functions ( Mathematics )</p>
          <Section />
          <div className="mt-16 flex items-center justify-between">
            <img src="./Frame 41.png" alt='ritik'/>
            <div>
              <button className="flex items-center capitalize font-semibold text-[#06286E]">
                <div className="mx-2 text-white p-2 rounded-full bg-[#06286E]">
                  <Add />
                </div>
                create Flashcard
              </button>
            </div>
            
          </div>
        <Question/>
        </div>
      </div>
    </div>
  );
}

export default App;
