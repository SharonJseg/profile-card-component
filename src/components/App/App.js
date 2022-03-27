import ProfileCard from '../ProfileCard/ProfileCard';
import './App.css';
import patternTop from '../../images/bg-pattern-top.svg';
import patternBottom from '../../images/bg-pattern-bottom.svg';

function App() {
  return (
    <>
      <div className='page'>
        <ProfileCard />
      </div>
      <img src={patternBottom} alt='pattern' className='pattern-bottom' />
      <img src={patternTop} alt='pattern' className='pattern-top' />
    </>
  );
}

export default App;
