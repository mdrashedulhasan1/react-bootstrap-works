import logo from './logo.svg';
import './App.css';
import img from './Images/Rashedul-Hasan.png'
import Card from './components/Card/Card';
function App() {
  const infos = [
    {name:'Tapu', description:'I am a Frontend Web Developer', img:img},
    {name:'Rashedul', description:'I am a Web Developer', img:img},
    {name:'Hasan', description:'I am a UI/UX Designer', img:img},
  ]
  return (
    <div class="row row-cols-1 row-cols-md-6 g-4 m-3">
      {
        infos.map(info => <Card key={info.name} info={info}></Card>)
      }
    </div>
  );
}

export default App;
