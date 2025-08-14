import ContactInfo from "./components/ContactInfo";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div
      style={{
        background: "radial-gradient(at center, #2F365E, #1A2258)",
      }}
      className="px-10 min-h-screen pb-10 w-full overflow-hidden"
    >
      <Navbar />
      <div className="flex mt-30 mx-30 justify-around max-lg:flex-col max-lg:items-center ">
        <Form />
        <ContactInfo />
      </div>
    </div>
  );
}

export default App;
