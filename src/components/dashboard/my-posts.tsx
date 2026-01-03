"use client";

import { useState } from "react";
import { ImagePlus, Trash2, Send, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useProvider } from "@/lib/provider-context";

export function MyPosts() {
  const { posts, addPost, deletePost } = useProvider();
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostImage, setNewPostImage] = useState("");
  const [posting, setPosting] = useState(false);

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostContent.trim()) return;

    setPosting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));

    addPost({
      content: newPostContent,
      imageUrl: newPostImage || undefined,
    });

    setNewPostContent("");
    setNewPostImage("");
    setPosting(false);
  };

  const handleDeletePost = async (id: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 300));
    deletePost(id);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">My Posts</h2>
        <p className="text-muted-foreground mt-1">
          Create and manage posts that appear on your public profile.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Create Post Card */}
        <Card className="lg:sticky lg:top-24 h-fit">
          <CardHeader>
            <CardTitle className="text-lg">Create New Post</CardTitle>
            <CardDescription>
              Share updates, tips, or announcements with your patients
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreatePost} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="postContent">Content</Label>
                <Textarea
                  id="postContent"
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  placeholder="What would you like to share with your patients?"
                  rows={5}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="postImage">Image URL (Optional)</Label>
                <div className="flex gap-2">
                  <Input
                    id="postImage"
                    value={newPostImage}
                    onChange={(e) => setNewPostImage(e.target.value)}
                    placeholder="https://example.com/image.jpg"
                  />
                  <Button type="button" variant="outline" size="icon">
                    <ImagePlus className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Add an image to make your post more engaging
                </p>
              </div>

              {newPostImage && (
                <div className="relative rounded-lg overflow-hidden bg-muted aspect-video">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={newPostImage}
                    alt="Preview"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              )}

              <Button type="submit" className="w-full gap-2" disabled={posting || !newPostContent.trim()}>
                {posting ? (
                  <>
                    <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Publishing...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Publish Post
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Existing Posts */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Your Posts ({posts.length})</h3>
          </div>

          {posts.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
                  <Send className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-medium text-lg mb-1">No posts yet</h3>
                <p className="text-muted-foreground text-sm text-center max-w-sm">
                  Create your first post to share updates and connect with your patients.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  {post.imageUrl && (
                    <div className="aspect-video relative bg-muted">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.imageUrl}
                        alt="Post image"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardContent className="p-4">
                    <p className="text-sm whitespace-pre-wrap mb-3">{post.content}</p>
                    <Separator className="my-3" />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDate(post.createdAt)}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive hover:bg-destructive/10 gap-1.5"
                        onClick={() => handleDeletePost(post.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
