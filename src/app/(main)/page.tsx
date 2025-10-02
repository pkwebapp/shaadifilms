'use client';

import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getAllHeroSlides, HeroSlide } from "@/services/hero-slides.service";
import { getAllFeaturedWorks, FeaturedWork } from "@/services/featured-work.service";
import useSWR from 'swr';
import { Quote, Loader2 } from "lucide-react";
import React from "react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const weddingTypes = PlaceHolderImages.filter(img => img.id.startsWith('wedding-type-'));

const testimonials = [
    {
        id: 'testimonial-1',
        quote: "Shaadifilms is without a doubt the best candid wedding photographer in Mumbai. They captured our hectic day so perfectly, and the cinematic wedding film they produced still gives us goosebumps. It feels like a real movie!",
        avatarUrl: PlaceHolderImages.find(img => img.id === 'avatar-1')?.imageUrl,
        avatarFallback: "P",
        name: 'Priya & Rohan',
        package: 'Gold Package, Goa',
    },
    {
        id: 'testimonial-2',
        quote: "Incredible attention to detail. Their team, based in Andheri West, was so professional. The photos are stunning, and their transparent wedding photography packages made the whole process easy. Highly recommend.",
        avatarUrl: PlaceHolderImages.find(img => img.id === 'avatar-2')?.imageUrl,
        avatarFallback: "A",
        name: 'Aisha & Sameer',
        package: 'Platinum Package, Mumbai',
    },
    {
        id: 'testimonial-3',
        quote: "From our pre-wedding photoshoot in Mumbai to the final album, everything was flawless. Shaadifilms is worth every penny for the luxury experience and the breathtaking images.",
        avatarUrl: PlaceHolderImages.find(img => img.id === 'avatar-3')?.imageUrl,
        avatarFallback: "J",
        name: 'Jasleen & Karan',
        package: 'Bespoke Package, Udaipur',
    },
    {
        id: 'testimonial-4',
        quote: "We were looking for a wedding videographer in Mumbai who could create something truly special. The cinematic wedding film from Shaadifilms exceeded all our expectations. It’s a work of art.",
        avatarUrl: PlaceHolderImages.find(img => img.id === 'avatar-4')?.imageUrl,
        avatarFallback: "N",
        name: 'Neha & Vikram',
        package: 'Cinematic Film Add-on, Lonavala',
    },
    {
        id: 'testimonial-5',
        quote: "The team was amazing to work with. They suggested some of the best pre-wedding shoot locations near Andheri West. We were so comfortable, and the photos came out so natural and beautiful.",
        avatarUrl: PlaceHolderImages.find(img => img.id === 'avatar-5')?.imageUrl,
        avatarFallback: "S",
        name: 'Sunita & Raj',
        package: 'Pre-Wedding Shoot, Mumbai',
    },
    {
        id: 'testimonial-6',
        quote: "We compared wedding photography prices in Mumbai extensively, and Shaadifilms offered the best value for a luxury service. The quality of their work is simply unmatched. Our photos are timeless.",
        avatarUrl: PlaceHolderImages.find(img => img.id === 'avatar-6')?.imageUrl,
        avatarFallback: "M",
        name: 'Meera & Aditya',
        package: 'Gold Package, Mumbai',
    },
    {
        id: 'testimonial-7',
        quote: "We hired Shaadifilms for our parents' 50th anniversary, and they were incredible. They captured the joy of our family event so beautifully. They are more than just wedding photographers; they are true family event photographers.",
        avatarUrl: PlaceHolderImages.find(img => img.id === 'avatar-7')?.imageUrl,
        avatarFallback: "A",
        name: 'Anjali & Dhruv',
        package: 'Family Event, Mumbai',
    },
    {
        id: 'testimonial-8',
        quote: "The drone coverage for our destination wedding in Jaipur was breathtaking! It added such a grand scale to our cinematic wedding film. The team handled the logistics flawlessly.",
        avatarUrl: PlaceHolderImages.find(img => img.id === 'avatar-8')?.imageUrl,
        avatarFallback: "K",
        name: 'Kabir & Zara',
        package: 'Drone Coverage Add-on, Jaipur',
    },
    {
        id: 'testimonial-9',
        quote: "Our family abroad felt like they were right there with us, thanks to the flawless live streaming service. It was a crucial part of our day, and the team at Shaadifilms executed it perfectly.",
        avatarUrl: PlaceHolderImages.find(img => img.id === 'avatar-9')?.imageUrl,
        avatarFallback: "S",
        name: 'The Sharma Family',
        package: 'Live Streaming, Mumbai',
    },
    {
        id: 'testimonial-10',
        quote: "The luxury wedding album we received is a work of art. The quality is exceptional, and it tells the story of our day so perfectly. It's a keepsake we will cherish forever. Worth every bit of the wedding photography prices in Mumbai.",
        avatarUrl: PlaceHolderImages.find(img => img.id === 'avatar-10')?.imageUrl,
        avatarFallback: "R",
        name: 'Rohan & Sania',
        package: 'Luxury Album, Mumbai',
    },
    {
        id: 'testimonial-11',
        quote: "I hired them for my daughter's first birthday party. The candid photographer was so good with the kids, and the pictures are full of life and joy. They truly know how to capture family events.",
        avatarUrl: PlaceHolderImages.find(img => img.id === 'avatar-11')?.imageUrl,
        avatarFallback: "M",
        name: 'The Mehta Family',
        package: 'Birthday Party, Andheri West',
    },
    {
        id: 'testimonial-12',
        quote: "The 360° video booth was a massive hit at our reception! Our guests had so much fun with it, and the videos are hilarious. It was a fantastic add-on to our wedding photography package.",
        avatarUrl: PlaceHolderImages.find(img => img.id === 'avatar-12')?.imageUrl,
        avatarFallback: "A",
        name: 'Alok & Divya',
        package: '360° Booth Add-on, Juhu',
    },
     {
        id: 'testimonial-13',
        quote: "We had a very intimate elopement, and finding a photographer who understood our vision was key. The Shaadifilms team was respectful, discreet, and captured the emotion of our small ceremony perfectly.",
        avatarUrl: PlaceHolderImages.find(img => img.id === 'avatar-13')?.imageUrl,
        avatarFallback: "I",
        name: 'The Iyer Couple',
        package: 'Elopement, Lonavala',
    },
    {
        id: 'testimonial-14',
        quote: "We booked Shaadifilms for our maternity shoot, and the pictures are absolutely dreamy. They made us feel so comfortable, and the photographer found the most beautiful light. Highly recommend them for any family milestones.",
        avatarUrl: PlaceHolderImages.find(img => img.id === 'avatar-14')?.imageUrl,
        avatarFallback: "G",
        name: 'Mr. & Mrs. Gupta',
        package: 'Maternity Shoot, Mumbai',
    },
    {
        id: 'testimonial-15',
        quote: "As a wedding planner, I recommend Shaadifilms to all my clients looking for the best candid wedding photographer in Mumbai. Their professionalism and artistic vision are unmatched. Their Andheri West studio is a great place for initial consultations.",
        avatarUrl: PlaceHolderImages.find(img => img.id === 'avatar-15')?.imageUrl,
        avatarFallback: "S",
        name: 'Simran, Wedding Planner',
        package: 'Professional Referral',
    },
    {
        id: 'testimonial-16',
        quote: "The coverage of my son's thread ceremony (Upanayanam) was brilliant. The photographer understood the rituals and captured all the important moments with cultural sensitivity. It was a great experience.",
        avatarUrl: PlaceHolderImages.find(img => img.id === 'avatar-16')?.imageUrl,
        avatarFallback: "K",
        name: 'The Khan Family',
        package: 'Religious Ceremony, Mumbai',
    },
    {
        id: 'testimonial-17',
        quote: "I was so nervous for my pre-wedding shoot, but our photographer was amazing. He suggested a great location near Juhu Circle and made us laugh the whole time. The photos are my favorite!",
        avatarUrl: PlaceHolderImages.find(img => img.id === 'avatar-17')?.imageUrl,
        avatarFallback: "R",
        name: 'Riya & Varun',
        package: 'Pre-Wedding Shoot',
    },
    {
        id: 'testimonial-18',
        quote: "We opted for the Bespoke package for our multi-day wedding, and the team's dedication was incredible. They covered every event, from the Haldi to the reception, with the same energy and creativity. The final cinematic film is epic.",
        avatarUrl: PlaceHolderImages.find(img => img.id === 'avatar-18')?.imageUrl,
        avatarFallback: "D",
        name: 'The Desai Family',
        package: 'Bespoke Package, Mumbai',
    },
    {
        id: 'testimonial-19',
        quote: "The booking process was so smooth and transparent. They patiently answered all our questions about their wedding photography packages and helped us choose the right one for our budget. A very professional team.",
        avatarUrl: PlaceHolderImages.find(img => img.id === 'avatar-19')?.imageUrl,
        avatarFallback: "P",
        name: 'Pooja & Sameer',
        package: 'Gold Package',
    },
    {
        id: 'testimonial-20',
        quote: "The same-day edit was pure magic! Seeing a highlight film of our wedding at the reception blew our minds and our guests were so impressed. It was the perfect ending to the day.",
        avatarUrl: PlaceHolderImages.find(img => img.id === 'avatar-20')?.imageUrl,
        avatarFallback: "N",
        name: 'Nikhil & Ananya',
        package: 'Same-Day Edit Add-on',
    },
    {
        id: 'testimonial-21',
        quote: "We were looking for a photographer for our housewarming party and found Shaadifilms. They did an amazing job capturing the atmosphere and all our friends and family. Wonderful memories.",
        avatarUrl: PlaceHolderImages.find(img => img.id === 'avatar-21')?.imageUrl,
        avatarFallback: "C",
        name: 'Mr. & Mrs. Chatterjee',
        package: 'Housewarming Party, Andheri West',
    }
];



export default function Home() {
  const plugin = React.useRef<ReturnType<typeof Autoplay> | null>(null);
  const featuredPlugin = React.useRef<ReturnType<typeof Autoplay> | null>(null);

  const { data: heroSlides, error: heroError, isLoading: isHeroLoading } = useSWR<HeroSlide[]>('heroSlides', getAllHeroSlides);
  const { data: featuredWorks, error: featuredError, isLoading: isFeaturedLoading } = useSWR<FeaturedWork[]>('featuredWorks', getAllFeaturedWorks);

  // Initialize autoplay when hero slides are loaded
  React.useEffect(() => {
    if (heroSlides?.length) {
      plugin.current = Autoplay({ delay: 3000, stopOnInteraction: true });
    }
    if (featuredWorks?.length) {
      featuredPlugin.current = Autoplay({ delay: 3000, stopOnInteraction: false });
    }
  }, [heroSlides, featuredWorks]);

  if (isHeroLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Hero Carousel */}
      <section className="relative w-full h-[80vh] md:h-screen text-white">
        <Carousel
          plugins={plugin.current ? [plugin.current] : []}
          className="w-full h-full"
          onMouseEnter={() => plugin.current?.stop()}
          onMouseLeave={() => plugin.current?.play()}
          opts={{ loop: true }}
        >
          <CarouselContent>
            {heroSlides?.map((slide, index) => (
              <CarouselItem key={slide.id}>
                <div className="w-full h-[80vh] md:h-screen min-h-[400px] relative bg-black overflow-hidden">
                  <Image
                    src={slide.imageUrl || '/fallback.jpg'}
                    alt={slide.description}
                    fill
                    className="object-cover object-top animate-ken-burns"
                    priority={index === 0 && !!slide.imageUrl}
                    data-ai-hint={slide.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-headline font-bold leading-tight animate-fade-in-up">
                      {slide.title}
                    </h1>
                    <p className="mt-4 max-w-3xl text-md md:text-xl text-white animate-fade-in-up [animation-delay:300ms]">
                      {index === 0
                        ? <>
                            <span className="hidden md:inline">Crafting timeless, cinematic wedding films and photos in Mumbai. Based in Andheri West, we are storytellers dedicated to preserving your most precious memories.</span>
                            <span className="md:hidden">Cinematic wedding films and photos.</span>
                          </>
                        : slide.description
                      }
                    </p>
                    {index === 0 && (
                      <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:600ms]">
                        <Button asChild size="lg" variant="default">
                          <Link href="/packages">View Wedding Packages</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary hidden sm:inline-flex">
                          <Link href="/book">Book a Consultation</Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* Our Story */}
      <section id="our-story" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
                Mumbai's Premier Wedding Storytellers
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At Shaadifilms, we are more than just wedding photographers in Mumbai; we are cinematic storytellers. Our
                philosophy is rooted in transparency and luxury, ensuring that
                every moment we capture is a timeless treasure. Based in Andheri West, we are dedicated
                to crafting narratives that reflect the unique beauty
                and emotion of your special day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Types */}
      <section id="weddings-we-cover" className="w-full py-12 md:py-24 lg:py-32 bg-card">
        <div className="container px-4 md:px-6 animate-fade-in-up">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
              Our Wedding Photography & Videography Services
            </h2>
            <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From intimate ceremonies in Andheri West to grand destination weddings, our wedding videographer and photographer teams specialize in a diverse range of cultural celebrations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {weddingTypes.map((wedding) => (
              <Card key={wedding.id} className="overflow-hidden group">
                <CardContent className="p-0">
                  <Image
                    src={wedding.imageUrl}
                    alt={wedding.description}
                    width={600}
                    height={400}
                    className="w-full h-auto aspect-[3/2] object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={wedding.imageHint}
                  />
                </CardContent>
                <CardFooter className="p-4 bg-background">
                  <h3 className="text-lg font-semibold font-headline">{wedding.description}</h3>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section id="featured-films" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 animate-fade-in-up">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 font-headline">
            Featured Cinematic Wedding Films & Photos
          </h2>
          <Carousel
            plugins={featuredPlugin.current ? [featuredPlugin.current] : []}
            opts={{
              align: "start",
              loop: true,
            }}
            onMouseEnter={() => featuredPlugin.current?.stop()}
            onMouseLeave={() => featuredPlugin.current?.play()}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {isFeaturedLoading && (
                <CarouselItem className="flex justify-center items-center h-64">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </CarouselItem>
              )}
              {featuredWorks?.map((work) => (
                <CarouselItem key={work.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <CardContent className="flex aspect-[4/3] items-center justify-center p-0">
                        <Image
                          src={work.imageUrl}
                          alt={work.description}
                          width={600}
                          height={450}
                          className="w-full h-full object-cover"
                          data-ai-hint={work.imageHint}
                        />
                      </CardContent>
                      <CardFooter className="p-4 bg-background">
                        <h3 className="text-lg font-semibold font-headline">{work.description}</h3>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-card">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 animate-fade-in-up">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
              What Our Clients Say
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our clients' happiness is our greatest achievement. Read what they
              have to say about their experience with the top wedding photographer in Mumbai.
            </p>
          </div>
          <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
            className="w-full max-w-6xl mx-auto mt-8"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col">
                      <CardHeader>
                        <Quote className="w-8 h-8 text-accent" />
                      </CardHeader>
                      <CardContent className="flex-1">
                        <p className="text-muted-foreground">
                          &quot;{testimonial.quote}&quot;
                        </p>
                      </CardContent>
                      <CardFooter className="flex items-center gap-4 mt-auto">
                        <Avatar>
                          <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.package}</p>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </section>
    </div>
  );
}
