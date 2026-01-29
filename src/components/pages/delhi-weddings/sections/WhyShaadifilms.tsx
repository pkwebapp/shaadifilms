import React from "react";
import Image from "next/image";
import { Users, Sparkles, Video } from "lucide-react";

const WhyShaadifilms = () => {
  const items = [
    {
      title: "Experts in Grandeur",
      desc: `We excel at managing 'Big Fat Indian Weddings'. Our experienced
      team navigates large crowds and multiple events with ease, ensuring every
      moment is captured.`,
      icon: Users,
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=900&fit=crop",
      alt: "Grand Delhi wedding",
    },
    {
      title: "Venue & Lighting Mastery",
      desc: `We know Delhi's best venues, from opulent five-star hotels to
      sprawling Chhatarpur farmhouses. Our mastery of lighting ensures stunning
      photos in any setting.`,
      icon: Sparkles,
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=900&fit=crop",
      alt: "Delhi pre-wedding shoot location",
    },
    {
      title: "Cinematic Storytelling & Drone Coverage",
      desc: `As premier cinematographers, we use drones for breathtaking aerial
      coverage, creating cinematic films that tell the epic story of your
      celebration.`,
      icon: Video,
      img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&h=900&fit=crop",
      alt: "Professional photography team",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* HEADER - matches screenshot: cream bg, serif heading #333, paragraph #666 centered */}
        <div className="pt-20 md:pt-28 pb-16 md:pb-24 text-center">
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-[#333333] leading-tight">
            Why Shaadifilms for Your Delhi Wedding?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-[#666666] font-normal">
            We are more than photographers; we are experts in documenting the grand tapestry
            <br className="hidden md:block" /> of a Delhi wedding.
          </p>
        </div>

        {/* CONTENT - image + text blocks */}
        <div className="space-y-20 md:space-y-24 pb-24 md:pb-32">
          {items.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="grid items-center gap-12 md:grid-cols-2"
              >
                {/* Image */}
                <div className="w-full">
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={item.img}
                        alt={item.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 520px"
                        priority={idx === 0}
                      />
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="w-full">
                  {/* ICON - NO BORDER, NO BOX */}
                  <Icon className="h-10 w-10 text-[#9b3c5c]" />

                  <h3 className="mt-6 font-headline text-2xl md:text-4xl font-bold text-[#2b2420]">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed text-[#6b778a]">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyShaadifilms;
