import { Layout } from "antd";
import Decodificador from "./Decodificador";
import HeaderApp from "./Header";
import "../styles/App.css"

const { Header, Footer, Content } = Layout;

const App = () => {
  return (
    <Layout className="app">
      <Header className="header">
        <HeaderApp />
      </Header>
      <Content className="content">
        <Decodificador />
      </Content>
      <Footer className="footer">
        Fernando Juárez
      </Footer>
    </Layout>
  )
}

export default App
