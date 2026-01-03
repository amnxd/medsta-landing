"use client";

import { useState } from "react";
import { Camera, Save, LogOut, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useProvider } from "@/lib/provider-context";

export function MyProfile() {
  const { provider, updateProvider } = useProvider();
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [formData, setFormData] = useState({
    fullName: provider.fullName,
    businessName: provider.businessName || "",
    about: provider.about || "",
    email: provider.email || "",
    phone: provider.phone || "",
  });

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    updateProvider(formData);
    setSaving(false);
    setSaved(true);
    
    setTimeout(() => setSaved(false), 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setSaved(false);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">My Profile</h2>
        <p className="text-muted-foreground mt-1">
          Manage your public-facing information visible to patients.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Profile Picture Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Profile Picture</CardTitle>
            <CardDescription>
              This will be displayed on your public profile
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src={provider.profilePicture} />
                <AvatarFallback className="bg-primary/10 text-primary text-2xl font-medium">
                  {getInitials(provider.fullName)}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <Button type="button" variant="outline" className="gap-2">
                  <Camera className="h-4 w-4" />
                  Upload New Picture
                </Button>
                <p className="text-xs text-muted-foreground">
                  JPG, PNG or GIF. Max 2MB.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Basic Information */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Basic Information</CardTitle>
                <CardDescription>
                  Your personal and business details
                </CardDescription>
              </div>
              <Badge variant="success" className="capitalize">
                {provider.role.replace("_", " ")}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  placeholder="Dr. John Doe"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="businessName">Business / Clinic Name</Label>
                <Input
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => handleChange("businessName", e.target.value)}
                  placeholder="City Health Clinic"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="doctor@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="+91 9876543210"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="about">About</Label>
              <Textarea
                id="about"
                value={formData.about}
                onChange={(e) => handleChange("about", e.target.value)}
                placeholder="Tell patients about yourself, your experience, and specializations..."
                rows={4}
              />
              <p className="text-xs text-muted-foreground">
                This will be displayed on your public profile.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Action buttons */}
        <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-between">
          <Button type="button" variant="outline" className="gap-2 text-destructive hover:text-destructive">
            <LogOut className="h-4 w-4" />
            Log Out
          </Button>
          <Button type="submit" className="gap-2" disabled={saving}>
            {saving ? (
              <>
                <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                Saving...
              </>
            ) : saved ? (
              <>
                <CheckCircle className="h-4 w-4" />
                Saved!
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                Save Changes
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
