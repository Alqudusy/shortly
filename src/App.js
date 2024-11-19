import MainSecton from './MainSection';
import UrlInputForm from './UrlInputForm';
import StatisticalSection from './StatisticalSection';
import BoostYourLinkSection from './BoostLinkSection';
import './styles.css';

function App() {
  return (
    <div className="App">
      <MainSecton />
      <UrlInputForm />
      <StatisticalSection />
      <BoostYourLinkSection />
    </div>
  );
}

export default App;
