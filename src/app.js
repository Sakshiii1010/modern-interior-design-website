
Action: file_editor str_replace /app/frontend/src/App.js --old-str "import { useEffect } from \"react\";
import \"@/App.css\";
import { BrowserRouter, Routes, Route } from \"react-router-dom\";
import axios from \"axios\";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  return (
    <div>
      <header className=\"App-header\">
        <a
          className=\"App-link\"
          href=\"https://emergent.sh\"
          target=\"_blank\"
          rel=\"noopener noreferrer\"
        >
          <img src=\"https://avatars.githubusercontent.com/in/1201222?s=120&u=2686cf91179bbafbc7a71bfbc43004cf9ae1acea&v=4\" />
        </a>
        <p className=\"mt-5\">Building something incredible ~!</p>
      </header>
    </div>
  );
};

function App() {
  return (
    <div className=\"App\">
      <BrowserRouter>
        <Routes>
          <Route path=\"/\" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;" --new-str "import React from \"react\";
import \"@/App.css\";
import Navbar from \"@/components/Navbar\";
import Hero from \"@/components/Hero\";
import About from \"@/components/About\";
import Packages from \"@/components/Packages\";
import Process from \"@/components/Process\";
import Gallery from \"@/components/Gallery\";
import Testimonials from \"@/components/Testimonials\";
import Contact from \"@/components/Contact\";
import Footer from \"@/components/Footer\";
import { Toaster } from \"@/components/ui/toaster\";

function App() {
  return (
    <div className=\"App\">
      <Navbar />
      <Hero />
      <About />
      <Packages />
      <Process />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;"
Observation: Edit was successful.
