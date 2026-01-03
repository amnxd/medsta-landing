"use client";

import Link from "next/link";
import {
  Eye,
  FileText,
  Briefcase,
  TrendingUp,
  ArrowRight,
  Calendar,
  Users,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WelcomeBanner } from "@/components/dashboard/welcome-banner";
import { useProvider } from "@/lib/provider-context";

interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: React.ElementType;
  trend?: string;
  trendUp?: boolean;
}

function StatCard({ title, value, description, icon: Icon, trend, trendUp }: StatCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center gap-2 mt-1">
          {trend && (
            <span
              className={`text-xs font-medium flex items-center gap-1 ${
                trendUp ? "text-green-600" : "text-red-500"
              }`}
            >
              <TrendingUp className={`h-3 w-3 ${!trendUp && "rotate-180"}`} />
              {trend}
            </span>
          )}
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export function DashboardHome() {
  const { provider, posts } = useProvider();

  const stats = [
    {
      title: "Profile Views",
      value: "1,234",
      description: "this month",
      icon: Eye,
      trend: "+12%",
      trendUp: true,
    },
    {
      title: "Total Posts",
      value: posts.length,
      description: "published",
      icon: FileText,
    },
    {
      title: "Services Listed",
      value: provider.services.filter((s) => s.enabled).length,
      description: "active services",
      icon: Briefcase,
    },
    {
      title: "This Week's Patients",
      value: "24",
      description: "appointments",
      icon: Users,
      trend: "+8%",
      trendUp: true,
    },
  ];

  const quickActions = [
    {
      title: "Update Profile",
      description: "Keep your information current",
      href: "/provider/dashboard/profile",
      icon: Users,
    },
    {
      title: "Create a Post",
      description: "Share updates with patients",
      href: "/provider/dashboard/posts",
      icon: FileText,
    },
    {
      title: "Manage Services",
      description: "Add or update your services",
      href: "/provider/dashboard/services",
      icon: Briefcase,
    },
  ];

  return (
    <div className="space-y-6">
      <WelcomeBanner />

      {/* Welcome message */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          Welcome back, {provider.fullName.split(" ")[0]}! 👋
        </h2>
        <p className="text-muted-foreground mt-1">
          Here&apos;s what&apos;s happening with your practice today.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
            <CardDescription>Common tasks you can do right now</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {quickActions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className="flex items-center gap-4 p-3 rounded-lg border hover:bg-accent transition-colors group"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <action.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">{action.title}</p>
                  <p className="text-xs text-muted-foreground">{action.description}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </Link>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Schedule */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Upcoming Today</CardTitle>
            <CardDescription>Your schedule for today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { time: "10:00 AM", patient: "Rahul Kumar", type: "Consultation" },
                { time: "11:30 AM", patient: "Priya Patel", type: "Follow-up" },
                { time: "2:00 PM", patient: "Amit Singh", type: "Health Checkup" },
              ].map((appointment, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-lg bg-muted/50"
                >
                  <div className="flex flex-col items-center justify-center bg-primary/10 rounded-lg px-3 py-2 shrink-0">
                    <Calendar className="h-4 w-4 text-primary mb-1" />
                    <span className="text-xs font-medium text-primary">{appointment.time}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{appointment.patient}</p>
                    <p className="text-xs text-muted-foreground">{appointment.type}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-4" asChild>
              <Link href="/provider/dashboard/orders">
                View All Appointments
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
