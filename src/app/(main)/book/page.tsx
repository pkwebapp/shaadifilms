"use client";

import { PageHeader } from "@/components/common/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function BookPage() {
  const [date, setDate] = useState<Date | undefined>(new Date("2025-06-15"));
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
    message: "",
  });

  // handle form input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // handle package selection
  const handlePackageChange = (value: string) => {
    setFormData((prev) => ({ ...prev, package: value }));
  };

// form submit
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const fullMessage = `
  📩 New Wedding Booking Request

  👤 Name: ${formData.name}
  📧 Email: ${formData.email}
  📱 Phone: ${formData.phone}
  🎁 Package of Interest: ${formData.package || "Not selected"}
  📝 Message: ${formData.message || "No message provided"}
  📅 Wedding Date: ${date ? date.toDateString() : "Not selected"}
  `;

  const templateParams = {
    message: fullMessage, // your EmailJS template already expects {{message}}
  };

  emailjs
    .send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
    )
    .then(
      () => {
        alert("🎉 Booking request sent successfully!");
      },
      (error) => {
        console.error("FAILED...", error);
        alert("❌ Failed to send booking request. Please try again.");
      }
    );
};

  return (
    <>
      <PageHeader
        title="Book Your Wedding Photographer in Mumbai"
        description="Let's start planning your dream wedding coverage. Fill out the form below to check our availability and secure your date with the best wedding photographers in Andheri West."
      />
      <div className="container py-16">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="font-headline">
              <h1>Consultation Form</h1>
            </CardTitle>
            <CardDescription>
              We'll get back to you within 24 hours to confirm your booking.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Priya Sharma"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="priya@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="package">Package of Interest</Label>
                  <Select onValueChange={handlePackageChange}>
                    <SelectTrigger id="package">
                      <SelectValue placeholder="Select a wedding photography package" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="silver">Silver Package</SelectItem>
                      <SelectItem value="gold">Gold Package</SelectItem>
                      <SelectItem value="platinum">Platinum Package</SelectItem>
                      <SelectItem value="bespoke">Bespoke Package</SelectItem>
                      <SelectItem value="consultation">Just a Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your wedding, your vision for a cinematic wedding film, and any questions you have."
                    className="min-h-[120px]"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="space-y-4 flex flex-col">
                <div className="space-y-2">
                  <Label>Preferred Wedding Date</Label>
                  <div className="flex justify-center rounded-md border">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="p-0"
                    />
                  </div>
                </div>
                <Button type="submit" size="lg" className="w-full mt-auto">
                  Request Booking
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
