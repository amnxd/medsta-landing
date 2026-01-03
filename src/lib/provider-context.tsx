"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Provider, mockProvider, Post, mockPosts, Service } from "@/lib/types";

interface ProviderContextType {
  provider: Provider;
  posts: Post[];
  updateProvider: (data: Partial<Provider>) => void;
  addPost: (post: Omit<Post, "id" | "createdAt">) => void;
  deletePost: (id: string) => void;
  updateServices: (services: Service[]) => void;
  dismissBanner: () => void;
}

const ProviderContext = createContext<ProviderContextType | undefined>(undefined);

export function ProviderContextProvider({ children }: { children: ReactNode }) {
  const [provider, setProvider] = useState<Provider>(mockProvider);
  const [posts, setPosts] = useState<Post[]>(mockPosts);

  const updateProvider = (data: Partial<Provider>) => {
    setProvider((prev) => ({ ...prev, ...data, updatedAt: new Date().toISOString() }));
  };

  const addPost = (post: Omit<Post, "id" | "createdAt">) => {
    const newPost: Post = {
      ...post,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setPosts((prev) => [newPost, ...prev]);
  };

  const deletePost = (id: string) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  const updateServices = (services: Service[]) => {
    setProvider((prev) => ({ ...prev, services, updatedAt: new Date().toISOString() }));
  };

  const dismissBanner = () => {
    setProvider((prev) => ({ ...prev, dashboardBannerDismissed: true }));
  };

  return (
    <ProviderContext.Provider
      value={{
        provider,
        posts,
        updateProvider,
        addPost,
        deletePost,
        updateServices,
        dismissBanner,
      }}
    >
      {children}
    </ProviderContext.Provider>
  );
}

export function useProvider() {
  const context = useContext(ProviderContext);
  if (context === undefined) {
    throw new Error("useProvider must be used within a ProviderContextProvider");
  }
  return context;
}
