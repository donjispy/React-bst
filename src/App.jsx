
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import AppHeader from './components/Header';
import AppHero from './components/Hero';
import AppAbout from './components/About';
import AppServices from './components/Service';
import AppWorks from './components/Works';
import AppTeams from './components/Teams';
import AppTestimony from './components/Testimony';
import AppPricing from './components/Pricing';
import AppBlogs from './components/Blogs';
import AppContact from './Contact';
import AppFooter from './Footer';

function App() {


  return (
    <div className="App">
      <header id='header'>
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <AppAbout />
        <AppServices />
        <AppWorks />
        <AppTeams />
        <AppTestimony />
        <AppPricing />
        <AppBlogs />
        <AppContact />
        <AppFooter />
      </main>
    </div>
  )
}

export default App
