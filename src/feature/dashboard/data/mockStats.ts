export interface DashboardStat {
  title: string;
  number: string;
  changePercentage: string;
  changeLabel: string;
  isPositive: boolean;
  iconColor: string;
  numberColor: string;
}

export const mockDashboardStats: DashboardStat[] = [
  {
    title: "استخدامی‌های جدید",
    number: "۱۲",
    changePercentage: "۱۲٪",
    changeLabel: "جذب و استخدامی",
    isPositive: true,
    iconColor: "#4464D1",
    numberColor: "#23377c",
  },
  {
    title: "تعداد کل کارکنان",
    number: "۲۸۳",
    changePercentage: "۱۵٪",
    changeLabel: "طی ماه اخیر",
    isPositive: true,
    iconColor: "#4464D1",
    numberColor: "#23377c",
  },
  {
    title: "کارکنان حاضر",
    number: "۲۶۵",
    changePercentage: "۸٪",
    changeLabel: "طی ماه اخیر",
    isPositive: true,
    iconColor: "#1A7B43",
    numberColor: "#23377c",
  },
  {
    title: "کارکنان غایب",
    number: "۱۸",
    changePercentage: "۳٪",
    changeLabel: "طی ماه اخیر",
    isPositive: false,
    iconColor: "#D14444",
    numberColor: "#23377c",
  },
];
