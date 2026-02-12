"use client";

import { Card, CardContent } from "@/src/base/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/base/components/ui/select";
import { Badge } from "@/src/base/components/ui/badge";

export interface Activity {
  id: string;
  type: string;
  typeColor: string;
  title: string;
  date: string;
}

interface ActivityListProps {
  activities: Activity[];
}

export const ActivityList = ({ activities }: ActivityListProps) => {
  return (
    <Card className="rounded-[16px] bg-white">
      <CardContent className="p-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Select defaultValue="latest">
              <SelectTrigger className="w-[120px] h-[40px] bg-[#f9f9f9] border-gray-150 rounded-[16px] text-[14px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">اردیبهشت</SelectItem>
                <SelectItem value="oldest">فروردین</SelectItem>
              </SelectContent>
            </Select>
            <h2 className="text-[15px] text-gray-900 font-medium">فعالیت</h2>
          </div>

          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={activity.id}>
                <div className="flex flex-col items-end gap-2">
                  <Badge
                    className="rounded-[16px] px-3 h-[24px] text-[14px] hover:bg-current"
                    style={{
                      backgroundColor: activity.typeColor,
                      color: activity.typeColor === "#e8f3ff" ? "#4464D1" : "#1A7B43",
                    }}
                  >
                    {activity.type}
                  </Badge>

                  <div className="text-right space-y-1 w-full">
                    <p className="text-[14px] text-gray-900 font-normal">{activity.title}</p>
                    <p className="text-[12px] text-[#a8a8a8]">{activity.date}</p>
                  </div>
                </div>

                {index < activities.length - 1 && <div className="h-px bg-gray-150 my-4" />}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
