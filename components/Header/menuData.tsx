import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Đặt Phòng",
    newTab: false,
    path: "/tim-phong",
  },
  {
    id: 2.1,
    title: "Lưu trú dài hạn",
    newTab: false,
    path: "/phong-dai-han/tim-phong",
  },
  {
    id: 2.3,
    title: "Hội viên thân thiết",
    newTab: false,
    path: "/ve-citizen-program",
  },
  {
    id: 2.4,
    title: "Thương hiệu thành viên",
    newTab: false,
    path: "/thuong-hieu-thanh-vien",
  },
  {
    id: 3,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Blog Grid",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Sign In",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "Sign Up",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 35,
        title: "Docs",
        newTab: false,
        path: "/docs",
      },
      {
        id: 35.1,
        title: "Support",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "404",
        newTab: false,
        path: "/error",
      },
    ],
  },

  {
    id: 4,
    title: "Về chúng tôi",
    newTab: false,
    path: "/ve-mvillage",
  },
];

export default menuData;
