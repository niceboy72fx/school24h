import { DashBoard } from "./dashboard.js";
import { User } from "./user.js";
import { Course } from "./course.js";

export default function AdminPage() {
  const menuComponent = [
    { id: 1, component: User() },
    { id: 2, component: Course() },
  ];

  const listOptions = [
    {
      id: 1,
      menuName: "Quản lí user",
      select: true,
    },
    {
      id: 2,
      menuName: "Quản lí khóa học",
      select: false,
    },
  ];

  return { menuComponent, listOptions };
}
