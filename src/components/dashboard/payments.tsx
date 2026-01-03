"use client";

import { CreditCard, MessageCircle, ExternalLink, IndianRupee } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Payments() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Payments</h2>
        <p className="text-muted-foreground mt-1">
          View your payment history and manage payouts.
        </p>
      </div>

      <div className="flex items-center justify-center min-h-[400px]">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <IndianRupee className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-xl">Direct Payments</CardTitle>
            <CardDescription className="text-base">
              Payment coordination via WhatsApp
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Payments are managed directly between you and your patients. We
              help coordinate through WhatsApp to ensure smooth transactions.
            </p>

            <div className="grid gap-3 pt-2">
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm font-medium">Cash on Visit</span>
                </div>
                <span className="text-xs text-green-600 font-medium">Supported</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm font-medium">UPI / Google Pay</span>
                </div>
                <span className="text-xs text-green-600 font-medium">Supported</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm font-medium">Bank Transfer</span>
                </div>
                <span className="text-xs text-green-600 font-medium">Supported</span>
              </div>
            </div>

            <div className="pt-4">
              <Button variant="success" className="gap-2" asChild>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  Contact Support
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground pt-2">
              Need help with a payment? Contact our support team via WhatsApp
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
