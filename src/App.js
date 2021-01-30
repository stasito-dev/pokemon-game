import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import background_1 from './assets/img/background/bg1.jpeg';
import background_3 from './assets/img/background/bg3.jpeg'

const App = () => {
  // let colorBg = 0x51c2d575
  return (
    <>
      <Header title="This is title"  descr="This is Description"/>
      <Layout id='background1' title='FIRST BACKGROUND' descr='Nice Layout' urlBg={background_1} />
      <Layout id='background2' title='SECOND BACKGROUND' descr='Nice Layout' colorBg='#51c2d575'/>
      <Layout id='background3' title='THIRD BACKGROUND' descr='Nice Layout' urlBg={background_3} />
      <Footer />
    </>
  )
}

export default App;
