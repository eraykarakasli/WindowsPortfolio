import Footer from "./pages/Footer"
import Home from "./pages/Home"
import {useEffect} from 'react'

function App() {
  useEffect(() => {
    document.title = 'Windows11';
}, []);
  return (
    <div className="bg-dark bg-cover h-screen text-white">
      <Home />
      <Footer />
    </div>
  )
}

export default App
