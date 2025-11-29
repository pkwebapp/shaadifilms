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
import axios from "axios";

// --------------------------------------
// CUSTOM AXIOS INSTANCE (FROM YOUR SNIPPET)
// --------------------------------------
const baseURL = "https://pk.thetechthingy.com/api/v1";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
    } else {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// --------------------------------------

export default function BookPage() {
  const [date, setDate] = useState<Date | undefined>(new Date("2025-06-15"));
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  // handle form input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // handle package selection
  const handlePackageChange = (value: string) => {
    setFormData((prev) => ({ ...prev, package: value }));
  };

  const validatePhone = (phone: string) => {
    if (!phone) return false;
    const digits = phone.replace(/\D/g, "");
    return digits.length >= 7 && digits.length <= 15;
  };

  // Submit form to backend API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!validatePhone(formData.phone)) {
      setStatus("Please enter a valid phone number.");
      return;
    }

    setIsLoading(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: "",
      service: formData.package,
      message: formData.message,
      date: date ? date.toISOString() : "",
      time: "",
    };

    try {
      const response = await axiosInstance.post("/booking/request", payload);

      if (response.status === 201 || response.status === 200) {
        alert("🎉 Booking request sent successfully!");

        // reset
        setFormData({
          name: "",
          email: "",
          phone: "",
          package: "",
          message: "",
        });
        setDate(undefined);
        setStatus("Booking request submitted successfully.");
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Booking Error:", error);
      setStatus("❌ Failed to submit the booking request. Try again later.");
    } finally {
      setIsLoading(false);
    }
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
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8" noValidate>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Priya Sharma"
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
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">
                    Phone Number{" "}
                    <span aria-hidden className="text-red-500 ml-1">
                      *
                    </span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    aria-required="true"
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
                      <SelectItem value="consultation">
                        Just a Consultation
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your wedding, your vision, or any questions you have."
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

                <Button
                  type="submit"
                  size="lg"
                  className="w-full mt-auto"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Request Booking"}
                </Button>

                {status && (
                  <p
                    className={`text-sm text-center mt-2 ${
                      status.startsWith("❌") ? "text-red-500" : "text-foreground"
                    }`}
                  >
                    {status}
                  </p>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}