import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Home from './pages/home';

function App() {
  return (
    <div className="h-screen flex flex-col align-center justify-between">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
