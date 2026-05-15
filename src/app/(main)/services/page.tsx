import { PageHeader } from "@/components/common/page-header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Camera, Disc, Drama, Film, Heart, Package, PartyPopper, Radio, Sparkles, WandSparkles, Users } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const serviceCategories = [
    {
        id: "pre-wedding",
        title: "Pre-Wedding Photoshoot in Goa",
        icon: <Heart className="w-8 h-8 text-primary" />,
        description: "Crafting the beautiful prologue to your wedding story with a cinematic pre-wedding photoshoot in Goa's most iconic locations.",
        image: PlaceHolderImages.find(img => img.id === "service-prewedding-1"),
        items: [
            "Pre-wedding cinematic photoshoot (Outdoor / Studio)",
            "Storytelling pre-wedding cinematic video",
            "Save-the-Date film & digital wedding invites",
            "Couple interviews / Love story documentary",
            "Themed concept-based shoots (Traditional, Travel, Lifestyle)",
        ]
    },
    {
        id: "rituals",
        title: "Wedding Ritual Coverage",
        icon: <Drama className="w-8 h-8 text-primary" />,
        description: "Documenting every sacred ritual and joyful ceremony with cultural sensitivity and an eye for detail.",
        subSections: [
            {
                title: "Roka / Engagement",
                image: PlaceHolderImages.find(img => img.id === 'service-prewedding-2'),
                items: [
                    "Ring ceremony highlights",
                    "Ritual moments (tikka, gifts, blessings)",
                    "Couple portraits & family portraits",
                    "Cinematic highlight film",
                ]
            },
            {
                title: "Pre-Wedding Rituals",
                 image: PlaceHolderImages.find(img => img.id === 'service-hindu-1'),
                items: [
                    "Haldi: Capturing fun candid moments, decor, and rituals.",
                    "Mehndi: Focusing on bride’s details, family dancing, and candid shots.",
                    "Sangeet Night: Covering performances, couple entry, and dance floor energy.",
                    "Cocktail Party: Documenting luxury party vibes, DJ, and dance shots.",
                ]
            },
            {
                title: "Wedding Day Rituals",
                 image: PlaceHolderImages.find(img => img.id === 'service-hindu-2'),
                items: [
                    "Getting Ready: Bride & Groom's makeup, attire, accessories, and emotions.",
                    "Baraat: Groom’s procession, band, dancing, and family moments.",
                    "Varmala / Jaimala: Multi-angle shots with slow-motion effects.",
                    "Pheras & Sacred Rituals: Detailed cultural coverage.",
                    "Vidaai: Emotional and cinematic departure coverage.",
                ]
            },
            {
                title: "Christian Wedding Rituals",
                 image: PlaceHolderImages.find(img => img.id === 'service-christian-1'),
                items: [
                    "Umbracha Pani ceremony coverage",
                    "Church Ceremony: Vows, ring exchange, and blessings.",
                    "Reception Highlights: Cake cutting, first dance, and family speeches.",
                ]
            }
        ]
    },
    {
        id: "photography",
        title: "Candid Wedding Photography",
        icon: <Camera className="w-8 h-8 text-primary" />,
        image: PlaceHolderImages.find(img => img.id === 'service-photo-1'),
        description: "Freezing timeless moments with a blend of candid emotion and picture-perfect portraits by the best candid wedding photographer in Goa.",
        items: [
            "Candid Photography",
            "Traditional Posed Portraits",
            "Couple & Family Portraits",
            "Drone Photography (Venue & Aerial Shots)",
            "Instant Photo Printing Booths",
            "Luxury Wedding Albums (Leather, Acrylic, Velvet)"
        ]
    },
    {
        id: "videography",
        title: "Cinematic Wedding Films in Goa",
        icon: <Film className="w-8 h-8 text-primary" />,
        image: PlaceHolderImages.find(img => img.id === 'service-film-1'),
        description: "Weaving your memories into a cinematic wedding film that you'll cherish forever.",
        items: [
            "Cinematic Highlight Film (5-7 mins)",
            "Full Wedding Documentary (1-3 hrs)",
            "Drone Aerial Videography",
            "Same-Day Edit (Mini film shown at reception)",
            "360° Video Coverage",
            "Behind-the-Scenes Film"
        ]
    },
    {
        id: "live",
        title: "Live Streaming & Virtual Weddings",
        icon: <Radio className="w-8 h-8 text-primary" />,
        image: PlaceHolderImages.find(img => img.id === 'service-live-1'),
        description: "Connecting hearts across distances, so no one misses your special day.",
        items: [
            "HD multi-camera live streaming (YouTube / Private Portal)",
            "Live switching with graphics & couple branding",
            "Custom wedding streaming page with password access"
        ]
    },
    {
        id: "guest-experience",
        title: "Luxury Guest Experiences",
        icon: <PartyPopper className="w-8 h-8 text-primary" />,
        image: PlaceHolderImages.find(img => img.id === 'service-guest-1'),
        description: "Engaging and entertaining your guests with interactive photo and video experiences.",
        items: [
            "360° Video Booth",
            "Slow-Motion Video Booth",
            "Selfie Booth with Instant Printouts",
            "LED Screen / Projector with Live Highlights",
            "Password-protected online gallery for guests"
        ]
    },
     {
        id: "deliverables",
        title: "Post-Wedding Deliverables",
        icon: <Disc className="w-8 h-8 text-primary" />,
        image: PlaceHolderImages.find(img => img.id === 'service-deliverables-1'),
        description: "Delivering your precious memories in beautifully crafted, high-quality formats.",
        items: [
            "Luxury Wedding Albums (Customized)",
            "Customized Engagement Album",
            "Digital Gallery with High-Resolution Images & Videos",
            "Personalized Pen Drives with Engraved Names",
            "Social Media Highlight Reels (Instagram, etc.)"
        ]
    },
    {
        id: "add-ons",
        title: "Add-On Premium Services",
        icon: <Sparkles className="w-8 h-8 text-primary" />,
        image: PlaceHolderImages.find(img => img.id === 'service-addons-1'),
        description: "Elevating your wedding experience with our exclusive, high-end service enhancements.",
        items: [
            "Destination Wedding Coverage (Domestic & International)",
            "Couple Entry Cinematic Effects (Smoke, Cold Pyro, Spotlight)",
            "Drone Fireworks Coverage",
            "Pre & Post-Wedding Lifestyle Shoots (Honeymoon, Anniversary)"
        ]
    },
    {
        id: "family-events",
        title: "Family-Centric Events (Beyond Weddings)",
        icon: <Users className="w-8 h-8 text-primary" />,
        description: "Capturing life's precious moments, from milestone birthdays and anniversaries to religious ceremonies and family portraits.",
        subSections: [
            {
                title: "Celebrations",
                image: PlaceHolderImages.find(img => img.id === 'service-family-celebration'),
                items: [
                    "Birthday Parties (kids, milestone birthdays like 1st, 16th, 18th, 21st, 50th, etc.)",
                    "Anniversaries (25th Silver, 50th Golden, 60th Diamond, or personal milestones)",
                    "Retirement Parties",
                    "Housewarming / Griha Pravesh",
                    "Farewell & Reunion Parties (school, college, family reunions)"
                ]
            },
            {
                title: "Baby & Kids",
                image: PlaceHolderImages.find(img => img.id === 'service-baby-kids'),
                items: [
                    "Maternity Shoot",
                    "Baby Shower / Godh Bharai",
                    "Newborn Photography",
                    "Naming Ceremony (Naamkaran / Christening)",
                    "Mundan Ceremony (first head shave)",
                    "Annaprashan / Rice Feeding Ceremony",
                    "Birthday Milestones (first steps, first year shoot, cake smash)"
                ]
            },
            {
                title: "Religious & Cultural",
                image: PlaceHolderImages.find(img => img.id === 'service-religious-cultural'),
                items: [
                    "Thread Ceremony / Upanayanam",
                    "Bar Mitzvah / Bat Mitzvah",
                    "Communion / Confirmation",
                    "Festivals & Traditional Gatherings (Diwali, Holi, Christmas, Eid family celebrations)",
                    "Puja & Havan Ceremonies"
                ]
            },
            {
                title: "Social & Personal Milestones",
                image: PlaceHolderImages.find(img => img.id === 'service-social-milestones'),
                items: [
                    "Graduation Celebrations",
                    "Achievement Parties (awards, promotions)",
                    "Engagement (standalone)",
                    "Proposal / Surprise Events",
                    "Family Portrait Sessions (annual, seasonal, holiday-themed)"
                ]
            }
        ]
    },
     {
        id: "packages",
        title: "Wedding Photography Packages & Booking",
        icon: <Package className="w-8 h-8 text-primary" />,
        image: PlaceHolderImages.find(img => img.id === 'service-packages-1'),
        description: "Transparent pricing and customizable packages designed to fit your unique vision and needs.",
        items: [
            "Transparent Packages (Classic, Premium, Luxury)",
            "Customizable Services (Build Your Own Package)",
            "Easy Online Booking System",
            "Track Project & Deliverables Online",
            "Flexible Payment Options with Installments"
        ]
    }
];
const heroImage = PlaceHolderImages.find(img => img.id === 'hero-2');

export default function ServicesPage() {
  return (
    <>
      <section className="relative h-[80vh] w-full text-white flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 -z-20">
            <iframe
              src="https://www.youtube.com/embed/Y2KPmB1eMPQ?autoplay=1&mute=1&controls=0&loop=1&playlist=Y2KPmB1eMPQ&modestbranding=1&showinfo=0"
              title="Shaadifilms hero video"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{
                width: '100vw',
                height: '56.25vw', // 16:9
                minHeight: '100vh',
                minWidth: '177.77vh',
                border: 0,
              }}
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

{/* DARK OVERLAY */}
<div className="absolute inset-0 bg-black/60"></div>

{/* TEXT CONTENT */}
<div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
  <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-up">
    Wedding Photography Services in Goa
  </h1>
  <p className="mt-4 max-w-3xl text-lg md:text-xl animate-fade-in-up [animation-delay:300ms]">
    A comprehensive suite of luxury photography and cinematic videography
    services, meticulously designed to capture every chapter of your love
    story with elegance and artistry.
  </p>
</div>
</section>

      <div className="container py-16 md:py-24">
        <div className="space-y-16">
            {serviceCategories.map((category, index) => (
                <div key={category.id} id={category.id} className="grid md:grid-cols-2 gap-12 items-center animate-fade-in-up" style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'both' }}>
                    <div className={cn("order-2", index % 2 === 0 ? "md:order-1" : "md:order-2")}>
                         <div className="flex items-start gap-4 mb-4">
                            <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg">
                                {category.icon}
                            </div>
                            <div>
                                <h2 className="font-headline text-3xl font-bold">{category.title}</h2>
                                <p className="text-muted-foreground mt-1">{category.description}</p>
                            </div>
                        </div>

                        {category.items && (
                            <ul className="space-y-3 mt-6">
                                {category.items.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <WandSparkles className="w-4 h-4 text-accent mt-1.5 flex-shrink-0" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {category.subSections && (
                            <Accordion type="single" collapsible className="w-full mt-4">
                                {category.subSections.map((sub) => (
                                    <AccordionItem key={sub.title} value={sub.title}>
                                        <AccordionTrigger className="font-semibold text-lg hover:no-underline">
                                            {sub.title}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            {sub.image && (
                                              <div className="mb-4 overflow-hidden rounded-lg">
                                                <Image src={sub.image.imageUrl} alt={sub.image.description} width={400} height={250} className="w-full object-cover aspect-video transition-transform hover:scale-105" data-ai-hint={sub.image.imageHint} />
                                              </div>
                                            )}
                                            <ul className="space-y-3 pl-4">
                                                {sub.items.map(item => (
                                                    <li key={item} className="flex items-start gap-3">
                                                        <WandSparkles className="w-4 h-4 text-accent mt-1.5 flex-shrink-0" />
                                                        <span className="text-muted-foreground">{item}</span>
                                                    </li>

                                                ))}
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        )}
                    </div>
                     <div className={cn("order-1", index % 2 === 0 ? "md:order-2" : "md:order-1")}>
                        {category.image && (
                            <Image src={category.image.imageUrl} alt={category.image.description} width={600} height={750} className="rounded-lg object-cover shadow-xl aspect-[4/5]" data-ai-hint={category.image.imageHint} />
                        )}
                         {!category.image && category.id === 'family-events' && category.subSections?.[0].image && (
                             <Image src={category.subSections[0].image.imageUrl} alt={category.subSections[0].image.description} width={600} height={750} className="rounded-lg object-cover shadow-xl aspect-[4/5]" data-ai-hint={category.subSections[0].image.imageHint} />
                         )}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </>
  );
}