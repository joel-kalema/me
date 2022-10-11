import './App.css';
import About from './component/about';
import Experience from './component/experiance';
import Header from './component/header';
import Home from './component/home';
import Portfolio from './component/portfolio';

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <Experience />
            <Portfolio />
            <About />
        </div>
    );
}

export default App;
