import { Card, CardContent } from "@/src/base/components/ui/card";
import { Button } from "@/src/base/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/base/components/ui/select";
import { Badge } from "@/src/base/components/ui/badge";
import { ChevronDown } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const barChartData = [
  { day: "شنبه", حاضر: 210, مرخصی: 98, مأموریت: 42 },
  { day: "یکشنبه", حاضر: 140, مرخصی: 110, مأموریت: 85 },
  { day: "دوشنبه", حاضر: 170, مرخصی: 96, مأموریت: 34 },
  { day: "سه‌شنبه", حاضر: 200, مرخصی: 144, مأموریت: 183 },
  { day: "چهارشنبه", حاضر: 130, مرخصی: 96, مأموریت: 107 },
];

const pieChartData = [
  { name: "حاضر", value: 850, color: "#557BFB" },
  { name: "مرخصی", value: 544, color: "#FFDC49" },
  { name: "مأموریت", value: 451, color: "#8BEAB2" },
];

export const PresenceAbsence = () => {
  return (
    <div className=" bg-gray-50 py-6" dir="rtl">
      <div className="w-full ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-8 space-y-4">
            <Card className="rounded-[16px] bg-white h-full">
              <CardContent className="py-6 px-3 h-full">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 px-6">
                  <h1 className="text-[15px] text-gray-800">حضور، غیاب و مأموریت کارکنان</h1>

                  <Select defaultValue="day">
                    <SelectTrigger className="w-[180px] h-[40px] bg-[#f9f9f9] border-gray-150 rounded-[16px]">
                      <SelectValue placeholder="نمایش براساس روز" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="day">نمایش براساس روز</SelectItem>
                      <SelectItem value="week">نمایش براساس هفته</SelectItem>
                      <SelectItem value="month">نمایش براساس ماه</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-8 h-full">
                  <div className="w-[190px] shrink-0">
                    <div className="h-[109px] flex items-center justify-center">
                      <ResponsiveContainer width={139} height={139}>
                        <PieChart>
                          <Pie
                            data={pieChartData}
                            cx={54}
                            cy={54}
                            innerRadius={42}
                            outerRadius={54}
                            paddingAngle={0}
                            dataKey="value"
                            fill="#8884d8"
                          >
                            {pieChartData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="flex items-center justify-center gap-0 mt-6">
                      <div className="flex items-center gap-1 px-1 py-1">
                        <div className="w-2 h-2 rounded-full bg-[#8BEAB2]" />
                        <span className="text-[10px] font-semibold text-gray-900">مأموریت</span>
                      </div>
                      <div className="flex items-center gap-1 px-1 py-1">
                        <div className="w-2 h-2 rounded-full bg-[#FFDC49]" />
                        <span className="text-[10px] font-semibold text-gray-900">مرخصی</span>
                      </div>
                      <div className="flex items-center gap-1 px-1 py-1">
                        <div className="w-2 h-2 rounded-full bg-[#557BFB]" />
                        <span className="text-[10px] font-semibold text-gray-900">حاضر</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={barChartData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="4 4" stroke="#DBDBDB" vertical={false} />
                        <XAxis
                          dataKey="day"
                          tick={{ fill: "#6d6d6d", fontSize: 12 }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis
                          tick={{ fill: "#6d6d6d", fontSize: 12 }}
                          axisLine={false}
                          tickLine={false}
                          ticks={[0, 100, 200, 300, 400]}
                        />
                        <Bar dataKey="مأموریت" fill="#8BEAB2" radius={[4, 4, 0, 0]} barSize={15} />
                        <Bar dataKey="مرخصی" fill="#FFDC49" radius={[4, 4, 0, 0]} barSize={15} />
                        <Bar dataKey="حاضر" fill="#557BFB" radius={[4, 4, 0, 0]} barSize={15} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-4">
            <Card className="rounded-[16px] bg-white">
              <CardContent className="px-4 py-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="text-[15px] text-primary-700">اقدامات سریع</div>
                    <Select defaultValue="priority">
                      <SelectTrigger className="w-auto h-[32px] bg-[#f9f9f9] border-gray-150 rounded-[16px] text-[12px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="priority">اولویت براساس</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Badge className="bg-warning-50 text-warning-700 hover:bg-warning-50 rounded-[16px] px-3 h-[24px] text-[14px]">
                      مرخصی
                    </Badge>

                    <div className="space-y-1 text-right">
                      <div className="flex items-center gap-1 justify-end text-[12px]">
                        <span className="text-[#6d6d6d]">درخواست مرخصی</span>
                        <span className="text-gray-800 text-[14px]">سینا رضایی</span>
                        <span className="text-[#6d6d6d]">از واحد</span>
                        <span className="text-gray-800 text-[14px]">طراحی</span>
                      </div>

                      <div className="flex items-center gap-1.5 justify-end text-[12px]">
                        <span className="text-[#222]">۱۰ اردیبهشت</span>
                        <span className="text-[#888]">تا</span>
                        <span className="text-[#222]">۱۱ اردیبهشت</span>
                      </div>
                    </div>

                    <Button className="w-full bg-primary-600 hover:bg-[#3651b8] text-[#f3f3f3] h-[28px] text-[14px] rounded-[4px]">
                      مشاهده جزئیات
                    </Button>
                  </div>

                  <div className="h-px bg-linear-to-r from-transparent via-gray-150 to-transparent" />

                  <div className="space-y-2">
                    <Badge className="bg-[#ddfbe8] text-success-700 hover:bg-[#ddfbe8] rounded-[16px] px-3 h-[24px] text-[14px]">
                      درخواست وام
                    </Badge>

                    <div className="space-y-1 text-right">
                      <div className="flex items-center gap-1 justify-end text-[12px]">
                        <span className="text-[#6d6d6d]">درخواست مرخصی</span>
                        <span className="text-gray-800 text-[14px]">سینا رضایی</span>
                        <span className="text-[#6d6d6d]">از واحد</span>
                        <span className="text-gray-800 text-[14px]">طراحی</span>
                      </div>

                      <div className="flex items-center gap-1.5 justify-end text-[12px]">
                        <span className="text-[#222]">۱۰ اردیبهشت</span>
                        <span className="text-[#888]">تا</span>
                        <span className="text-[#222]">۱۱ اردیبهشت</span>
                      </div>
                    </div>

                    <Button className="w-full bg-primary-600 hover:bg-[#3651b8] text-[#f3f3f3] h-[28px] text-[14px] rounded-[4px]">
                      مشاهده جزئیات
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
