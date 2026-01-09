"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import mlogo from "@/app/mlogo.png";
import {
  Home,
  User,
  FileText,
  Briefcase,
  ShoppingCart,
  CreditCard,
  Settings,
  FileCheck,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useProvider } from "@/lib/provider-context";

interface SidebarItem {
  title: string;
  href: string;
  icon: React.ElementType;
}

const sidebarItems: SidebarItem[] = [
  { title: "Dashboard", href: "/provider/dashboard", icon: Home },
  { title: "My Profile", href: "/provider/dashboard/profile", icon: User },
  { title: "My Services", href: "/provider/dashboard/services", icon: Briefcase },
  { title: "My Posts", href: "/provider/dashboard/posts", icon: FileText },
  { title: "Orders / Requests", href: "/provider/dashboard/orders", icon: ShoppingCart },
  { title: "Payments", href: "/provider/dashboard/payments", icon: CreditCard },
  { title: "Settings", href: "/provider/dashboard/settings", icon: Settings },
  { title: "Terms & Policies", href: "/provider/dashboard/terms", icon: FileCheck },
];

export function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { provider } = useProvider();

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div
        className={cn(
          "flex h-16 items-center border-b px-4",
          collapsed ? "justify-center" : "justify-between"
        )}
      >
        {!collapsed && (
          <Link href="/" className="flex items-center">
            <div className="flex h-40 w-40 items-center justify-center rounded-lg overflow-hidden">
              <Image src={mlogo} alt="Medsta logo" width={160} height={160} />
            </div>
          </Link>
        )}
        {collapsed && (
          <Link href="/" className="flex items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden">
              <Image src={mlogo} alt="Medsta logo" width={24} height={24} />
            </div>
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className={cn("hidden lg:flex", collapsed && "ml-0")}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-2 overflow-y-auto">
        <TooltipProvider delayDuration={0}>
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-accent",
                      isActive
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "text-muted-foreground hover:text-foreground",
                      collapsed && "justify-center px-2"
                    )}
                  >
                    <Icon className={cn("h-5 w-5 shrink-0")} />
                    {!collapsed && <span>{item.title}</span>}
                  </Link>
                </TooltipTrigger>
                {collapsed && (
                  <TooltipContent side="right" className="font-medium">
                    {item.title}
                  </TooltipContent>
                )}
              </Tooltip>
            );
          })}
        </TooltipProvider>
      </nav>

      {/* User section */}
      <div className={cn("border-t p-3", collapsed && "p-2")}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={cn(
                "flex w-full items-center gap-3 rounded-lg p-2 text-left hover:bg-accent transition-colors",
                collapsed && "justify-center"
              )}
            >
              <Avatar className="h-9 w-9 shrink-0">
                <AvatarImage src={provider.profilePicture} />
                <AvatarFallback className="bg-primary/10 text-primary font-medium">
                  {getInitials(provider.fullName)}
                </AvatarFallback>
              </Avatar>
              {!collapsed && (
                <div className="flex-1 overflow-hidden">
                  <p className="text-sm font-medium truncate">{provider.fullName}</p>
                  <p className="text-xs text-muted-foreground truncate capitalize">
                    {provider.role.replace("_", " ")}
                  </p>
                </div>
              )}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">{provider.fullName}</p>
                <p className="text-xs text-muted-foreground">{provider.email}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/provider/dashboard/profile">
                <User className="mr-2 h-4 w-4" />
                View Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/provider/dashboard/settings">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive focus:text-destructive">
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed left-4 top-4 z-50 lg:hidden"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-full w-64 bg-background border-r transform transition-transform duration-200 ease-in-out lg:hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <SidebarContent />
      </aside>

      {/* Desktop sidebar */}
      <aside
        className={cn(
          "hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:border-r lg:bg-background transition-sidebar",
          collapsed ? "lg:w-16" : "lg:w-64"
        )}
      >
        <SidebarContent />
      </aside>
    </>
  );
}
