import { DefaultLayout } from "@/components/layout"

// 设置对外open的路由
export const publicRoute = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/public/Home")
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/public/Login")
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
      },
    ]
  },
]