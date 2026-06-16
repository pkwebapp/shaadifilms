"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "../ui/avatar";

import { Bot, Send, User,MessageCircle } from "lucide-react"
import { useState } from "react";

export default function WhatsAppChat() {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const phoneNumber = "918188881165"; // 🔹 replace with your WhatsApp number
    const message = encodeURIComponent(input);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, "_blank");
    setInput(""); // clear after sending
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            size="icon"
            className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 shadow-lg"
          >
            <MessageCircle className="h-8 w-8" />
            <span className="sr-only">Open WhatsApp Chat</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 md:w-96 mr-4 rounded-xl shadow-2xl border-2 border-green-500/30">
          <div className="grid gap-4">
            <div className="space-y-2 text-center">
              <div className="flex justify-center items-center gap-2">
                <Bot className="h-6 w-6 text-green-600" />
                <h4 className="font-medium leading-none font-headline">
                  Chat on WhatsApp
                </h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Send us a quick message and we’ll reply on WhatsApp 📱
              </p>
            </div>

            <ScrollArea className="h-40 w-full pr-4">
              <div className="text-sm text-muted-foreground">
                Start the conversation by typing your question below 👇
              </div>
            </ScrollArea>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2 border-t pt-4"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button type="submit" size="icon" className="bg-green-500 hover:bg-green-600">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
