import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, PlusCircle } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    name: "Silver",
    price: "₹50,000",
    description: "Ideal for intimate ceremonies and essential coverage.",
    features: [
      "1 Photographer, 1 Videographer",
      "Full Day Coverage",
      "3-5 minute cinematic highlight film",
      "Online gallery",
    ],
    popular: false,
  },
  {
    name: "Gold",
    price: "₹1,20,000",
    description: "Our most popular package for comprehensive wedding coverage.",
    features: [
      "Upto 2 days coverage",
      "2 Photographers (Candid & Traditional)",
      "2 Videographers (Cinematic & Traditional)",
      "1 Light Assistant",
      "Drone Coverage",
      "3-5 min highlight video",
      "45-60 min traditional video",
      "Edited photos and videos via online link and pen drive",
      "Printed high quality album",
      "Professional camera and lighting gear"
    ],
    popular: true,
  },
  {
    name: "Platinum",
    price: "₹1,80,000",
    description: "The ultimate luxury experience for grand celebrations.",
    features: [
      "Up to 3 days coverage",
      "Pre-wedding coverage",
      "2 Photographers (Candid & Traditional)",
      "2 Videographers (Cinematic & Traditional)",
      "1 Light Assistant",
      "Extensive Drone Coverage",
      "3-5 min highlight video",
      "45-60 min traditional video",
      "Edited photos and videos via online link and pen drive",
      "Printed high quality album",
      "Professional camera and lighting gear",
    ],
    popular: false,
  },
    {
    name: "Bespoke",
    price: "Custom",
    description: "A tailored package designed to your unique requirements.",
    features: [
      "Destination weddings",
      "Multi-day international events",
      "Live streaming services",
      "Use of advanced gear like cranes & jimmy jibs",
      "Custom-designed luxury albums",
      "And much more...",
    ],
    popular: false,
  },
];

const addOns = [
    { name: "Extra Photographer", price: "₹12,000" },
    { name: "Extra Cinematographer", price: "₹15,000" },
    { name: "Extra Traditional Videographer", price: "₹13,000" },
    { name: "Additional Ritual Day", price: "Contact us" },
    { name: "Printed Album", price: "₹12,000" },
    { name: "Live Streaming", price: "₹20,000" },
    { name: "Same Day Highlights Edit", price: "₹20,000" },
    { name: "LED Wall Display", price: "₹20,000" },
    { name: "Hard Disk", price: "₹5,000" },
];


export default function PackagesPage() {
  return (
    <>
      <PageHeader
        title="Wedding Photography Packages in Mumbai"
        description="Transparent wedding photography prices and packages designed for your perfect day. Choose what fits your celebration best or let us create a bespoke experience."
      />
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {packages.map((pkg) => (
            <Card key={pkg.name} className={`flex flex-col ${pkg.popular ? 'border-primary shadow-lg' : ''}`}>
              {pkg.popular && (
                <div className="bg-primary text-primary-foreground text-sm font-semibold py-1 px-4 rounded-t-lg flex items-center justify-center gap-2">
                  <Star className="w-4 h-4" /> Most Popular
                </div>
              )}
              <CardHeader className="pt-8">
                <CardTitle className="font-headline text-3xl">{pkg.name}</CardTitle>
                <p className="text-4xl font-bold">{pkg.price}</p>
                <CardDescription>{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant={pkg.popular ? "default" : "outline"}>
                    <Link href="/book">
                        {pkg.name === 'Bespoke' ? 'Customize Package' : 'Book Now'}
                    </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <div className="py-16 bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold font-headline text-center mb-12">Optional Add-ons</h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {addOns.map((addOn) => (
                        <div key={addOn.name} className="flex justify-between items-center border-b pb-2">
                            <div className="flex items-center gap-3">
                                <PlusCircle className="w-5 h-5 text-muted-foreground" />
                                <span className="font-medium">{addOn.name}</span>
                            </div>
                            <span className="font-semibold text-primary">{addOn.price}</span>
                        </div>
                    ))}
                </div>
                 <p className="text-center text-muted-foreground text-sm mt-6">
                    Add-on prices are subject to GST. Contact us for a detailed quote on wedding photography prices in Mumbai.
                </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
