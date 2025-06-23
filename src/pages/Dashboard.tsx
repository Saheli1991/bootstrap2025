import React from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarInitials } from "@/components/ui/avatar";
import {
  BarChart3,
  Users,
  TrendingUp,
  DollarSign,
  Bell,
  Settings,
  LogOut,
  Search,
  Plus,
} from "lucide-react";

const Dashboard = () => {
  const { user, logout } = useAuth();

  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1% from last month",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Active Users",
      value: "2,350",
      change: "+180.1% from last month",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Growth Rate",
      value: "+12.5%",
      change: "+4.3% from last month",
      icon: TrendingUp,
      color: "text-purple-600",
    },
    {
      title: "Conversions",
      value: "1,429",
      change: "+7.2% from last month",
      icon: BarChart3,
      color: "text-orange-600",
    },
  ];

  const recentActivities = [
    { user: "John Doe", action: "Created new project", time: "2 minutes ago" },
    {
      user: "Sarah Wilson",
      action: "Updated profile settings",
      time: "10 minutes ago",
    },
    { user: "Mike Johnson", action: "Completed task #127", time: "1 hour ago" },
    {
      user: "Emma Davis",
      action: "Joined team workspace",
      time: "2 hours ago",
    },
    { user: "Alex Chen", action: "Published new article", time: "3 hours ago" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-helvetica">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-4">
            <div className="w-8 h-8">
              <svg
                width="32"
                height="26"
                viewBox="0 0 48 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-6"
              >
                <path
                  d="M5.29509 4.99875C5.20453 2.39812 7.23075 0 9.96956 0H38.0339C40.7727 0 42.7989 2.39812 42.7084 4.99875C42.6214 7.49691 42.7343 10.733 43.5487 13.3716C44.3658 16.0183 45.7435 17.6913 48 17.9062V20.3438C45.7435 20.5587 44.3658 22.2317 43.5487 24.8784C42.7343 27.517 42.6214 30.7531 42.7084 33.2513C42.7989 35.8519 40.7727 38.25 38.0339 38.25H9.96956C7.23075 38.25 5.20453 35.8519 5.29519 33.2513C5.38209 30.7531 5.26912 27.517 4.45463 24.8784C3.63769 22.2317 2.25656 20.5587 0 20.3438V17.9062C2.25647 17.6913 3.63769 16.0183 4.45463 13.3716C5.26912 10.733 5.38209 7.49691 5.29509 4.99875Z"
                  fill="url(#paint0_linear_2_2)"
                />
                <g filter="url(#filter0_d_2_3)">
                  <path
                    d="M25.0409 29.2928C29.475 29.2928 32.147 27.1218 32.147 23.5408C32.147 20.834 30.2405 18.8743 27.4096 18.5641V18.4513C29.4894 18.113 31.1215 16.1815 31.1215 14.0245C31.1215 10.9511 28.6951 8.9491 24.9976 8.9491H16.6782V29.2928H25.0409ZM19.9135 11.5291H24.2177C26.5575 11.5291 27.8862 12.5723 27.8862 14.4615C27.8862 16.4776 26.3408 17.6054 23.5388 17.6054H19.9135V11.5291ZM19.9135 26.7129V20.0163H24.1887C27.2507 20.0163 28.8395 21.1441 28.8395 23.3435C28.8395 25.5428 27.2941 26.7129 24.3765 26.7129H19.9135Z"
                    fill="url(#paint0_linear_2_3)"
                    stroke="white"
                    strokeWidth="0.1"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_2_2"
                    x1="7.13241"
                    y1="1.01231"
                    x2="49.0762"
                    y2="34.3073"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9013FE" />
                    <stop offset="1" stopColor="#6610F2" />
                  </linearGradient>
                  <linearGradient
                    id="paint0_linear_2_3"
                    x1="18.1414"
                    y1="10.2881"
                    x2="27.5169"
                    y2="26.1443"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#F1E5FC" />
                  </linearGradient>
                  <filter
                    id="filter0_d_2_3"
                    x="0.628235"
                    y="-3.10091"
                    width="47.5687"
                    height="52.4438"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="8" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2_3"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2_3"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
          </div>

          {/* Search and Actions */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-bootstrap-primary focus:border-transparent"
              />
            </div>
            <Button variant="outline" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              New
            </Button>
            <Button variant="ghost" size="sm">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>

            {/* User Menu */}
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-bootstrap-primary text-white">
                  {user?.name?.charAt(0) || "S"}
                </AvatarFallback>
              </Avatar>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-gray-900">
                  {user?.name}
                </p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
              <Button variant="ghost" size="sm" onClick={logout}>
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-bootstrap-primary to-purple-600 rounded-lg p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">
              Welcome back, {user?.name}! 👋
            </h2>
            <p className="text-purple-100">
              Here's what's happening with your projects today.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-200"
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  Recent Activity
                </CardTitle>
                <CardDescription>Latest updates from your team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Avatar className="w-8 h-8 mt-0.5">
                        <AvatarFallback className="text-xs">
                          {activity.user
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">
                          <span className="font-medium">{activity.user}</span>{" "}
                          {activity.action}
                        </p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  Quick Actions
                </CardTitle>
                <CardDescription>Commonly used features</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="h-auto p-4 flex flex-col items-center gap-2"
                  >
                    <Users className="w-6 h-6 text-blue-600" />
                    <span className="text-sm">Manage Users</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto p-4 flex flex-col items-center gap-2"
                  >
                    <BarChart3 className="w-6 h-6 text-green-600" />
                    <span className="text-sm">View Analytics</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto p-4 flex flex-col items-center gap-2"
                  >
                    <Settings className="w-6 h-6 text-purple-600" />
                    <span className="text-sm">Settings</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto p-4 flex flex-col items-center gap-2"
                  >
                    <Plus className="w-6 h-6 text-orange-600" />
                    <span className="text-sm">New Project</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
