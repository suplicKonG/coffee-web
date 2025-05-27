import Header from './Header.jsx';
import Intro from './Intro.jsx';
import Menu from './Menu.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'

function App(){
    return(
    <>
<div id="top" className="page-background">
    <div className="container">
      <Header />
      <Intro />
      <Menu />
      <Contact />
    </div>

  <div className="footer-wrapper">
      <Footer />
  </div>
</div>
    </>    
    )
}

export default App;