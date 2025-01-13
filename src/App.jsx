import Home from "./screens/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <main className="flex justify-center w-full bg-[#0D1117] text-gray-200">
        <div className="w-full px-[7%]">
          <Navbar />
          <Home />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
