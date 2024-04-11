import "./App.css";
import { Layout, Avatar, Menu, Breadcrumb } from "antd";
import Title from "antd/lib/typography/Title";
import SubMenu from "antd/lib/menu/SubMenu";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="App-header">
          <Title style={{ color: "white" }} level={3}>
            ROBIN
          </Title>
          <Avatar style={{ float: "right" }} src="./dp.png" />
        </Header>

        <Layout>
          <Sider>
            <Menu defaultSelectedKeys={["Dashboard"]} mode="inline">
              <Menu.Item key="Dashboard">Dashboard</Menu.Item>
              <SubMenu
                title={
                  <span>
                    <icon type="mail" />
                    <span>About US</span>
                  </span>
                }
              >
                <Menu.ItemGroup key="AboutUS" title="Country 1">
                  <Menu.Item key="location1"> Location 1</Menu.Item>
                  <Menu.Item key="location2"> Location 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu
                title={
                  <span>
                    <icon type="mail" />
                    <span>Contact US</span>
                  </span>
                }
              >
                <Menu.ItemGroup key="AboutUS" title="Country 1">
                  <Menu.Item key="location1"> Location 1</Menu.Item>
                  <Menu.Item key="location2"> Location 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: "0 50px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>

                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                {/* <Breadcrumb.Item>App</Breadcrumb.Item> */}
              </Breadcrumb>
              <div
                style={{
                  padding: 24,
                  background: "#fff",
                  minHeight: 511,
                  // borderRadius: "borderRadiusLG",
                }}
              >
                Content
              </div>
            </Content>

            <Footer style={{ textAlign: "center" }}>
              Ant Design ©{new Date().getFullYear()} Created by Ant Prem'Sathe
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
