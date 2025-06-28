import { useAuthInit } from "../hooks/useAuthInit";

const GlobalInitializer = () => {
  useAuthInit(); // 初始化 Redux 状态
  return null; // 不渲染任何内容
};

export default GlobalInitializer;
