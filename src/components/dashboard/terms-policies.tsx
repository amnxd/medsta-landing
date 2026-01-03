"use client";

import Link from "next/link";
import { FileText, ChevronRight, Shield, Handshake, Lock, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const policies = [
  {
    title: "General Terms & Conditions",
    description: "Read the terms that govern your use of Medsta",
    icon: FileText,
    href: "/policies#terms",
  },
  {
    title: "Provider Agreement",
    description: "Specific terms for healthcare providers on our platform",
    icon: Handshake,
    href: "/policies#provider-agreement",
  },
  {
    title: "Privacy Policy",
    description: "How we collect, use, and protect your data",
    icon: Lock,
    href: "/policies#privacy",
  },
  {
    title: "Data Protection",
    description: "Our commitment to protecting patient and provider data",
    icon: Shield,
    href: "/policies#data-protection",
  },
];

export function TermsPolicies() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Terms & Policies</h2>
        <p className="text-muted-foreground mt-1">
          Review our legal documents and policies.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Legal Documents</CardTitle>
          <CardDescription>
            Important policies and agreements for Medsta providers
          </CardDescription>
        </CardHeader>
        <CardContent className="divide-y">
          {policies.map((policy) => (
            <Link
              key={policy.title}
              href={policy.href}
              className="flex items-center gap-4 py-4 first:pt-0 last:pb-0 group hover:bg-accent -mx-6 px-6 transition-colors"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <policy.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium group-hover:text-primary transition-colors">
                  {policy.title}
                </p>
                <p className="text-sm text-muted-foreground">{policy.description}</p>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
            </Link>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="py-6">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
              <Shield className="h-5 w-5 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium mb-1">Questions about our policies?</h3>
              <p className="text-sm text-muted-foreground mb-3">
                If you have any questions about our terms or policies, please don&apos;t
                hesitate to contact our support team.
              </p>
              <Link
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline inline-flex items-center gap-1"
              >
                Contact Support
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
