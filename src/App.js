const { default: Hero } = require('./components/Hero');
const { default: Navbar } = require('./components/Navbar');

function App() {
  return (
    <div>
<Navbar/>
<Hero/>
    </div>
  );
}

export default App;
