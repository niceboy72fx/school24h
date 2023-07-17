import { Course } from "./course.js";

export default function UserPage() {
  const menuComponent = [
    { id: 1, component: Course() },
    //     { id: 2, component: User() },
    //     { id: 3, component: Course() },
  ];

  const listOptions = [
    {
      id: 1,
      menuName: "Khóa học",
      select: true,
    },
  ];

  return { menuComponent, listOptions };
}
