"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import type { ClientsSaysContent } from "../types";

interface ClientsSaysProps {
  content: ClientsSaysContent;
}

const ClientsSays = ({ content }: ClientsSaysProps) => {
  return (
    <section className="w-full max-w-full overflow-x-hidden py-12 md:py-24 lg:py-32 bg-card">
      <div className="container grid items-center justify-center gap-4 px-3 text-center sm:px-4 md:px-6 max-w-full">
        <div className="space-y-3 min-w-0">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl/tight font-headline">
            {content.title}
          </h2>
          <p className="mx-auto max-w-[600px] min-w-0 px-1 text-muted-foreground text-sm leading-relaxed sm:text-base sm:px-0 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed break-words">
            {content.subtitle}
          </p>
        </div>
        <div className="w-full min-w-0 max-w-6xl mx-auto mt-6 sm:mt-8 px-0 sm:px-2">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
            className="w-full min-w-0"
          >
            <CarouselContent className="-ml-2 sm:-ml-4">
              {content.testimonials.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="min-w-0 basis-full pl-2 sm:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1 h-full min-w-0">
                    <Card className="h-full flex flex-col min-w-0 overflow-hidden">
                      <CardHeader className="pb-2">
                        <Quote className="w-8 h-8 shrink-0 text-accent" />
                      </CardHeader>
                      <CardContent className="flex-1 min-w-0 pt-0">
                        <p className="text-muted-foreground text-sm sm:text-base break-words">
                          &quot;{item.text}&quot;
                        </p>
                      </CardContent>
                      <CardFooter className="flex items-center gap-3 sm:gap-4 mt-auto flex-wrap">
                        <Avatar className="shrink-0">
                          <AvatarImage src={item.image} alt={item.name} />
                          <AvatarFallback>
                            {item.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .slice(0, 2)
                              .toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="min-w-0">
                          <p className="font-semibold truncate">{item.name}</p>
                          <p className="text-xs sm:text-sm text-muted-foreground truncate">
                            {item.location}
                          </p>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-8 md:-left-12" />
            <CarouselNext className="hidden sm:flex -right-8 md:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClientsSays;
