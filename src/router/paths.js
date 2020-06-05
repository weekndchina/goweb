import { DefaultLayout } from "@/components/layout"

// 设置对外open的路由
export const publicRoute = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/public/Home")
  },
  {
    path: "/join",
    name: "join",
    redirect: "/join/login",
    component: () => import("@/views/public/join/Join"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("@/views/public/join/Login")
      },
      {
        path: "register",
        name: "register",
        component: () => import("@/views/public/join/Register")
      }
    ]
  },
  {
    path: "/watch",
    name: "watch",
    component: () => import("@/views/rw/Watch")
  },
  {
    path: "/chart",
    name: "chart",
    component: () => import("@/views/rw/watch/Histogram")
  },
  {
    path: "*",
    name: "notFount",
    component: () => import("@/views/rw/common/404")
  }
]

// 仅登陆可看路由
export const privateRoute = [
  {
    path: "/task",
    component: DefaultLayout,
    redirect: "/task",
    children: [
      {
        path: "/task",
        name: "task",
        component: () => import("@/views/rw/Task")
      }
    ]
  },
    {
    path: "/mail",
    component: DefaultLayout,
    redirect: "/mail",
    children: [
      {
        path: "/mail",
        name: "mail",
        component: () => import("@/views/rw/Mail")
      }
    ]
  }
]
