"use client";

import { useState } from "react";
import { Plus, Trash2, Save, CheckCircle, Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useProvider } from "@/lib/provider-context";
import { Service } from "@/lib/types";

export function MyServices() {
  const { provider, updateServices } = useProvider();
  const [services, setServices] = useState<Service[]>(provider.services);
  const [newService, setNewService] = useState({ name: "", price: "" });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleToggle = (id: string) => {
    setServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, enabled: !s.enabled } : s))
    );
    setSaved(false);
  };

  const handleRemove = (id: string) => {
    setServices((prev) => prev.filter((s) => s.id !== id));
    setSaved(false);
  };

  const handleAddService = () => {
    if (!newService.name.trim()) return;

    const service: Service = {
      id: Date.now().toString(),
      name: newService.name,
      price: newService.price ? parseFloat(newService.price) : undefined,
      enabled: true,
    };

    setServices((prev) => [...prev, service]);
    setNewService({ name: "", price: "" });
    setSaved(false);
  };

  const handleSaveAll = async () => {
    setSaving(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    updateServices(services);
    setSaving(false);
    setSaved(true);
    
    setTimeout(() => setSaved(false), 3000);
  };

  const formatPrice = (price?: number) => {
    if (!price) return "—";
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">My Services</h2>
        <p className="text-muted-foreground mt-1">
          Manage the services you offer to patients.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Your Services</CardTitle>
          <CardDescription>
            Enable or disable services, set prices, and add new offerings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {services.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <Briefcase className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-medium text-lg mb-1">No services added</h3>
              <p className="text-muted-foreground text-sm max-w-sm">
                Add your first service below to start receiving appointments.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {services.map((service, index) => (
                <div key={service.id}>
                  {index > 0 && <Separator className="my-3" />}
                  <div className="flex items-center gap-4">
                    <Switch
                      checked={service.enabled}
                      onCheckedChange={() => handleToggle(service.id)}
                    />
                    <div className="flex-1 min-w-0">
                      <p
                        className={`font-medium ${
                          !service.enabled && "text-muted-foreground"
                        }`}
                      >
                        {service.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {formatPrice(service.price)}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive hover:text-destructive hover:bg-destructive/10 shrink-0"
                      onClick={() => handleRemove(service.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <Separator className="my-6" />

          {/* Add new service form */}
          <div className="space-y-4">
            <h4 className="font-medium text-sm">Add New Service</h4>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="serviceName">Service Name</Label>
                <Input
                  id="serviceName"
                  value={newService.name}
                  onChange={(e) =>
                    setNewService((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="e.g., General Consultation"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="servicePrice">Price (₹) - Optional</Label>
                <Input
                  id="servicePrice"
                  type="number"
                  value={newService.price}
                  onChange={(e) =>
                    setNewService((prev) => ({ ...prev, price: e.target.value }))
                  }
                  placeholder="500"
                />
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              className="gap-2"
              onClick={handleAddService}
              disabled={!newService.name.trim()}
            >
              <Plus className="h-4 w-4" />
              Add Service
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Save button */}
      <div className="flex justify-end">
        <Button onClick={handleSaveAll} className="gap-2" disabled={saving}>
          {saving ? (
            <>
              <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              Saving...
            </>
          ) : saved ? (
            <>
              <CheckCircle className="h-4 w-4" />
              All Changes Saved!
            </>
          ) : (
            <>
              <Save className="h-4 w-4" />
              Save All Changes
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
