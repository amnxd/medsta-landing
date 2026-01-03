"use client";

import { X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProvider } from "@/lib/provider-context";

export function WelcomeBanner() {
  const { provider, dismissBanner } = useProvider();

  if (provider.dashboardBannerDismissed) {
    return null;
  }

  const isDeliveryPartner = provider.role === "delivery_partner";

  const message = isDeliveryPartner
    ? "You are now live on Medsta. You will start receiving delivery requests as soon as orders are assigned to you."
    : "You are now live on Medsta. You will start receiving orders and appointments as soon as patients choose you.";

  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-4 lg:p-6 mb-6">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-white/20" />
        <div className="absolute -left-4 -bottom-4 h-24 w-24 rounded-full bg-white/20" />
      </div>

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-white/20 shrink-0">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">
              🎉 Congratulations! You&apos;re Live!
            </h3>
            <p className="text-primary-foreground/90 text-sm lg:text-base max-w-2xl">
              {message}
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="shrink-0 text-primary-foreground hover:bg-white/20 hover:text-primary-foreground"
          onClick={dismissBanner}
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Dismiss</span>
        </Button>
      </div>
    </div>
  );
}
