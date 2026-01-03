"use client";

import { FileText, MessageCircle, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useProvider } from "@/lib/provider-context";

export function Orders() {
  const { provider } = useProvider();

  const isDeliveryPartner = provider.role === "delivery_partner";

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Orders & Requests</h2>
        <p className="text-muted-foreground mt-1">
          {isDeliveryPartner
            ? "View and manage your delivery requests."
            : "View and manage patient orders and appointment requests."}
        </p>
      </div>

      <div className="flex items-center justify-center min-h-[400px]">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-xl">
              {isDeliveryPartner ? "Delivery Requests" : "Orders & Appointments"}
            </CardTitle>
            <CardDescription className="text-base">
              Currently managed via WhatsApp
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              {isDeliveryPartner
                ? "All delivery requests are currently coordinated through WhatsApp. You will receive notifications when new deliveries are assigned to you."
                : "All orders and appointment requests are currently coordinated through WhatsApp for a personal touch. Patients can reach you directly."}
            </p>

            <div className="pt-2">
              <Button variant="success" className="gap-2" asChild>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  Open WhatsApp
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground pt-2">
              📱 You&apos;ll receive WhatsApp notifications for new requests
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
