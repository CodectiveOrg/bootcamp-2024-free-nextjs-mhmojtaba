import { CommentModel } from "@/types/types";

export const commentData: CommentModel[] = [
  {
    id: "1001",
    author: "سعید",
    image: null,
    isVisited: true,
    rate: 4.7,
    onlineVisit: true,
    message:
      "دکتر بسیار باتجربه و حاذقی هستندودر برخورد بامریض بسیار خوش برخوررد.",
    lastVisit: "یک ماه قبل",
    createdAt: "2024-01-01T10:00:00.000Z",
  },
  {
    id: "1002",
    author: "تقی",
    image: null,
    isVisited: true,
    rate: 6,
    onlineVisit: false,
    message: "برخوردوتشخیص پزشک عالی، نظم‌مطب هم عالی بود",
    lastVisit: "یک هفته قبل",
    createdAt: "2024-01-05T12:30:00.000Z",
  },
  {
    id: "1003",
    author: "مرضیه",
    image: null,
    isVisited: true,
    rate: 7.5,
    onlineVisit: false,
    message:
      "اولین تجربه بنده بود و از نحوه برقراری ارتباط راضی بودم خیلی در کاهش اتلاف وقت به بیمار کمک میکنه",
    lastVisit: "دو ماه قبل",
    createdAt: "2023-12-15T08:45:00.000Z",
  },
  {
    id: "1004",
    author: "الهام",
    image: null,
    isVisited: true,
    rate: 4.9,
    onlineVisit: false,
    message:
      "همه چیز عالی بود فقطدر مطب معطل شدم. به علت شلوغی وپذیرش بیش از حد",
    lastVisit: "سه هفته قبل",
    createdAt: "2023-12-25T14:20:00.000Z",
  },
  {
    id: "1005",
    author: "محمد",
    image: null,
    isVisited: true,
    rate: 6.3,
    onlineVisit: true,
    message: "عالی و خوش برخورد ویزیت کردن سریع و راهنمایی خیلی عالی",
    lastVisit: "پنج روز قبل",
    createdAt: "2024-01-10T16:10:00.000Z",
  },
];
