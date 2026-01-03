"use client";

import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useProvider } from "@/lib/provider-context";

const pageTitles: Record<string, string> = {
  "/provider/dashboard": "Dashboard",
  "/provider/dashboard/profile": "My Profile",
  "/provider/dashboard/services": "My Services",
  "/provider/dashboard/posts": "My Posts",
  "/provider/dashboard/orders": "Orders & Requests",
  "/provider/dashboard/payments": "Payments",
  "/provider/dashboard/settings": "Settings",
  "/provider/dashboard/terms": "Terms & Policies",
};

export function DashboardHeader() {
  const pathname = usePathname();
  const { provider } = useProvider();
  const title = pageTitles[pathname] || "Dashboard";

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-6">
      {/* Left side - Title */}
      <div className="flex items-center gap-4">
        <div className="lg:hidden w-10" /> {/* Spacer for mobile menu button */}
        <h1 className="text-xl font-semibold text-foreground">{title}</h1>
      </div>

      {/* Right side - Search, Notifications, Profile */}
      <div className="flex items-center gap-2 lg:gap-4">
        {/* Search - hidden on mobile */}
        <div className="hidden md:flex relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="w-64 pl-9 bg-muted/50"
          />
        </div>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-destructive text-[10px] font-medium text-white flex items-center justify-center">
                3
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <div className="p-4">
              <h3 className="font-semibold mb-2">Notifications</h3>
              <div className="space-y-3">
                <div className="flex gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Bell className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">New order received</p>
                    <p className="text-xs text-muted-foreground">2 minutes ago</p>
                  </div>
                </div>
                <div className="flex gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <Bell className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">Profile verified!</p>
                    <p className="text-xs text-muted-foreground">1 hour ago</p>
                  </div>
                </div>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Profile quick access */}
        <Avatar className="h-9 w-9 cursor-pointer">
          <AvatarImage src={provider.profilePicture} />
          <AvatarFallback className="bg-primary/10 text-primary font-medium">
            {getInitials(provider.fullName)}
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
