import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import MainComponent from './components/MainComponent/MainComponent';



function App() {
  return (
    <>
      <div className='media-header'>
        <HeaderComponent />
      </div>
      <MainComponent />
      <FooterComponent />
    </>
  )
}

export default App;
