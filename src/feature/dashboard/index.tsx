"use client";

import { FC } from "react";
import { StatsCard, ActivityList, EmployeeTable } from "./components";
import { mockDashboardStats } from "./data/mockStats";
import { mockActivities } from "./data/mockActivities";
import { mockEmployees } from "./data/mockEmployees";
import { PresenceAbsence } from "./components/presenceAbsence";

export const Dashboard: FC = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {mockDashboardStats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <PresenceAbsence />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4">
          <ActivityList activities={mockActivities} />
        </div>
        <div className="lg:col-span-8">
          <EmployeeTable employees={mockEmployees} />
        </div>
      </div>
    </div>
  );
};
