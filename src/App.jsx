import { useRoutes } from "./router/routes";
import { ConfigProvider } from "antd";

const theme = {
  token: {
    colorText: "#8b8b98",
    colorBorder: "transparent",
  },
  components: {
    Layout: {
      bodyBg: "#f5f5fa",
      headerBg: "#f5f5fa",
      siderBg: "#ffffff",
      headerHeight: 90,
    },
    Menu: {
      itemBorderRadius: 5,
    },
    Card: {
      bodyPadding: "0",
    },
  },
};

export default function App() {
  const routes = useRoutes();
  return <ConfigProvider theme={theme}>{routes}</ConfigProvider>;
}
