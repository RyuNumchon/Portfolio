import './App.css';
import './styles/win98.css';
import './styles/general.css';

import Desktop from './components/Desktop';
import WindowSection from './components/WindowSection';
import MessageStack from './components/MessageStack';
import StartMenu from './components/StartMenu';
import Footer from './components/Footer';

function App() {
  return (
    <div className="wrappage">
      <section className="webpage">
        <Desktop />
        <WindowSection />
        <MessageStack />
      </section>
      <StartMenu />
      <Footer />
    </div>
  );
}

export default App;
