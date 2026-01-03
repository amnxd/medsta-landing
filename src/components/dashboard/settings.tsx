"use client";

import { useState } from "react";
import { Bell, Mail, Smartphone, Shield, Key, UserX } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export function Settings() {
  const [notifications, setNotifications] = useState({
    whatsapp: true,
    email: true,
    orderAlerts: true,
    marketingEmails: false,
  });

  const handleToggle = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground mt-1">
          Manage your account settings and preferences.
        </p>
      </div>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Bell className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg">Notification Settings</CardTitle>
              <CardDescription>
                Choose how you want to receive updates
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Smartphone className="h-5 w-5 text-muted-foreground" />
              <div>
                <Label htmlFor="whatsapp" className="font-medium">
                  WhatsApp Notifications
                </Label>
                <p className="text-sm text-muted-foreground">
                  Receive order alerts and updates via WhatsApp
                </p>
              </div>
            </div>
            <Switch
              id="whatsapp"
              checked={notifications.whatsapp}
              onCheckedChange={() => handleToggle("whatsapp")}
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div>
                <Label htmlFor="email" className="font-medium">
                  Email Notifications
                </Label>
                <p className="text-sm text-muted-foreground">
                  Get email updates about your orders and account
                </p>
              </div>
            </div>
            <Switch
              id="email"
              checked={notifications.email}
              onCheckedChange={() => handleToggle("email")}
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <div>
                <Label htmlFor="orderAlerts" className="font-medium">
                  Order Alerts
                </Label>
                <p className="text-sm text-muted-foreground">
                  Instant notifications for new orders and appointments
                </p>
              </div>
            </div>
            <Switch
              id="orderAlerts"
              checked={notifications.orderAlerts}
              onCheckedChange={() => handleToggle("orderAlerts")}
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div>
                <Label htmlFor="marketingEmails" className="font-medium">
                  Marketing Emails
                </Label>
                <p className="text-sm text-muted-foreground">
                  Receive tips, product updates and promotional offers
                </p>
              </div>
            </div>
            <Switch
              id="marketingEmails"
              checked={notifications.marketingEmails}
              onCheckedChange={() => handleToggle("marketingEmails")}
            />
          </div>
        </CardContent>
      </Card>

      {/* Account & Security */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg">Account & Security</CardTitle>
              <CardDescription>
                Manage your account security and access
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg border">
            <div className="flex items-center gap-3">
              <Key className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Change Password</p>
                <p className="text-sm text-muted-foreground">
                  Update your account password
                </p>
              </div>
            </div>
            <Button variant="outline">Change</Button>
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg border border-destructive/20 bg-destructive/5">
            <div className="flex items-center gap-3">
              <UserX className="h-5 w-5 text-destructive" />
              <div>
                <p className="font-medium text-destructive">Deactivate Account</p>
                <p className="text-sm text-muted-foreground">
                  Temporarily disable your provider account
                </p>
              </div>
            </div>
            <Button variant="outline" className="text-destructive hover:text-destructive border-destructive/30 hover:bg-destructive/10">
              Deactivate
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
