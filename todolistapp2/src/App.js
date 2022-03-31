import logo from './logo.svg';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import './App.css';




function App() {
  return (
    <div className="App">
     
     
     

 <div className="flex flex-col h-screen justify-between">
  <div className="h-10 bg-red-500"> <Header /></div>
  <div className="h-10 h-auto"> <Body /></div>
  <div className="h-10 bg-blue-500"><Footer /></div>
</div>
    </div>
  );
}

export default App;
