import {
  AppstoreOutlined,
  AuditOutlined,
  BarsOutlined,
  BellOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {
  Badge,
  Button,
  ConfigProvider,
  Layout,
  Menu,
  Space,
  Table,
  Tag,
  theme,
  Typography,
} from "antd";

const { Header, Sider, Content } = Layout;

const rows = [
  {
    key: "DL-2401",
    company: "OOO Sever Logistics International",
    status: "Review",
    owner: "Anna Petrova",
    amount: "128 450.00 EUR",
  },
  {
    key: "DL-2402",
    company: "Baltic Industrial Supplies With Long Name",
    status: "Blocked",
    owner: "Ivan Sokolov",
    amount: "74 100.50 USD",
  },
  {
    key: "DL-2403",
    company: "Minsk Retail Group",
    status: "Ready",
    owner: "Maria Volkova",
    amount: "19 800.00 BYN",
  },
];

export function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: "#58B07A",
          colorLink: "#58B07A",
          borderRadius: 6,
          fontSize: 13,
        },
        components: {
          Table: {
            cellPaddingBlockSM: 7,
            cellPaddingInlineSM: 8,
          },
        },
      }}
    >
      <Layout className="appShell">
        <Sider width={232} theme="light" className="sideNav">
          <div className="brand">DL Ops</div>
          <Menu
            mode="inline"
            defaultSelectedKeys={["screen"]}
            items={[
              { key: "overview", icon: <AppstoreOutlined />, label: "Overview" },
              { key: "screen", icon: <BarsOutlined />, label: "Working Screen" },
              { key: "audit", icon: <AuditOutlined />, label: "Review Queue" },
              { key: "settings", icon: <SettingOutlined />, label: "Settings" },
            ]}
          />
        </Sider>
        <Layout>
          <Header className="stickyHeader">
            <Space direction="vertical" size={0}>
              <Typography.Text type="secondary">Dense B2B prototype shell</Typography.Text>
              <Typography.Title level={4} className="pageTitle">
                Working Screen
              </Typography.Title>
            </Space>
            <Space size={8}>
              <Tag color="processing">Default state</Tag>
              <Badge count={3} size="small">
                <Button icon={<BellOutlined />} aria-label="Notifications" />
              </Badge>
              <Button type="primary">Primary action</Button>
            </Space>
          </Header>
          <Content className="content">
            <section className="toolbar">
              <Space wrap size={8}>
                <Button>Filter A</Button>
                <Button>Filter B</Button>
                <Button>Advanced</Button>
              </Space>
              <Typography.Text type="secondary">Replace this shell with the requested workflow.</Typography.Text>
            </section>
            <Table
              size="small"
              rowKey="key"
              dataSource={rows}
              pagination={{ pageSize: 8, showSizeChanger: false }}
              scroll={{ x: 900 }}
              columns={[
                { title: "ID", dataIndex: "key", width: 110 },
                { title: "Company", dataIndex: "company", ellipsis: true },
                {
                  title: "Status",
                  dataIndex: "status",
                  width: 130,
                  render: (value) => <Tag color={value === "Blocked" ? "error" : "success"}>{value}</Tag>,
                },
                { title: "Owner", dataIndex: "owner", width: 160 },
                { title: "Amount", dataIndex: "amount", width: 150, align: "right" },
                {
                  title: "",
                  key: "actions",
                  width: 96,
                  fixed: "right",
                  render: () => <Button size="small">Open</Button>,
                },
              ]}
            />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}
