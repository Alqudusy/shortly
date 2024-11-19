import MainSecton from './MainSection';
import UrlInputForm from './UrlInputForm';
import StatisticalSection from './StatisticalSection';
import BoostYourLinkSection from './BoostLinkSection';
import FooterSection from './FooterSection';
import LinkContainer from './LinkContainer';
import './styles.css';

function App() {
  return (
    <div className="App">
      <MainSecton />
      <UrlInputForm />
      <LinkContainer real="https://www.linkedin.com/company/frontend-mentor" shortened="https://rel.ink/gob3X9" />
      <LinkContainer real="https://www.linkedin.com/company/frontend-mentor" shortened="https://rel.ink/gob3X9" />
      <LinkContainer real="https://www.linkedin.com/company/frontend-mentor" shortened="https://rel.ink/gob3X9" />
      <StatisticalSection />
      <BoostYourLinkSection />
      <FooterSection />
    </div>
  );
}

export default App;
