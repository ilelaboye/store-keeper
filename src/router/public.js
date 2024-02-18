// import Home from "../pages/public/index";
import Login from "../pages/public/login";
import chatbot from "../pages/public/chatbot";
import Register from "../pages/public/register";
import Outlets from "../pages/public/outlets";

export const publicRoutes = [
  {
    path: "login",
    component: Login,
    name: "login-page",
  },
  {
    path: "chatbot",
    component: chatbot,
    name: "chatbot",
  },
  {
    path: "register",
    component: Register,
    name: "register",
  },
  {
    path: "outlets",
    component: Outlets,
    name: "outlets",
  },
];
