import Header from './components/Header/Header';
import Layout from './components/Layout/Layout'
import Footer from './components/Footer/Footer'


const App = () => {

  const background1 = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e4337cf5-3f3b-4436-b045-8aff91da2cac/bg1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210128T182250Z&X-Amz-Expires=86400&X-Amz-Signature=4c707edb9d8ae5d016f28e012705e43193bd5f2ecc134635ddee9da67f06809d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bg1.jpg%22";

  const background3 = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9b52e4b6-1d4e-4a16-8859-0147b1f4ec81/bg2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210129T102140Z&X-Amz-Expires=86400&X-Amz-Signature=267802c326e896a0917858e4083ba58dd784e0f2b066a14a9206a32c9aaf76ff&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bg2.jpg%22";

  return (
    <>
      <Header title="This is title"  descr="This is Description"/>
      <Layout id='background1' title='FIRST BACKGROUND' descr='Nice Layout' urlBg={background1} />
      <Layout id='background2' title='SECOND BACKGROUND' descr='Nice Layout' colorBg='#51c2d575'/>
      <Layout id='background3' title='THIRD BACKGROUND' descr='Nice Layout' urlBg={background3} />
      <Footer />
    </>
  )
}

export default App;
