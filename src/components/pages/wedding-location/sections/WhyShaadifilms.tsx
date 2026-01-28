import React from "react";
import Image from "next/image";
import { Users, Sparkles, Video } from "lucide-react";
import type { WhyShaadifilmsContent, WhyShaadifilmsIconKey } from "../types";

const iconMap: Record<WhyShaadifilmsIconKey, React.ComponentType<{ className?: string }>> = {
  users: Users,
  sparkles: Sparkles,
  video: Video,
};

interface WhyShaadifilmsProps {
  content: WhyShaadifilmsContent;
}

const WhyShaadifilms = ({ content }: WhyShaadifilmsProps) => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="pt-20 md:pt-28 pb-16 md:pb-24 text-center">
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-[#333333] leading-tight">
            {content.title}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-[#666666] font-normal">
            {content.subtitle}
          </p>
        </div>

        <div className="space-y-20 md:space-y-24 pb-24 md:pb-32">
          {content.items.map((item, idx) => {
            const Icon = iconMap[item.iconKey];
            return (
              <div
                key={idx}
                className="grid items-center gap-12 md:grid-cols-2"
              >
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
                <div className="w-full">
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
