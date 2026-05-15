
import Image from "next/image";
import { PageHeader } from "@/components/common/page-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Camera, Film } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const teamMembers = PlaceHolderImages.filter(img => img.id.startsWith('team-'));
const philosophyImage = PlaceHolderImages.find(img => img.id === 'about-philosophy');

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Shaadifilms: Goa Wedding Photographers"
        description="Meet the artists behind Shaadifilms, a team of passionate wedding photographers and videographers in Goa dedicated to crafting your timeless story."
      />

      <section className="container py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold mb-4">
              Our Philosophy as Wedding Photographers
            </h2>
            <p className="text-muted-foreground mb-4">
              At Shaadifilms, we believe that wedding photography in Goa is more than just taking pictures. It&apos;s about telling a unique story, capturing genuine emotions, and preserving memories that will last a lifetime. Our approach is founded on three pillars:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-full">
                  <Film className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Cinematic Storytelling</h3>
                  <p className="text-muted-foreground">We don&apos;t just document events; we craft cinematic wedding films that are as unique as your love story.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-accent text-accent-foreground p-3 rounded-full">
                  <Camera className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Luxury Experience</h3>
                  <p className="text-muted-foreground">From the initial consultation to the final delivery, our Goa team provides a seamless, premium experience tailored to you.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            {philosophyImage && (
              <Image
                src={philosophyImage.imageUrl}
                alt={philosophyImage.description}
                width={600}
                height={750}
                className="rounded-lg object-cover shadow-lg aspect-[4/5]"
                data-ai-hint={philosophyImage.imageHint}
              />
            )}
          </div>
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="container">
          <h2 className="font-headline text-3xl font-bold text-center mb-12">
            Meet the Shaadifilms Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-accent">
                  <AvatarImage src={member.imageUrl} alt={member.name || member.description} />
                  <AvatarFallback>{member.name?.charAt(0) || 'S'}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-accent font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       <section className="container py-20">
         <h2 className="font-headline text-3xl font-bold text-center mb-12">
            Awards & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
             <Card className="text-center">
                <CardHeader>
                    <Award className="h-12 w-12 mx-auto text-accent"/>
                    <CardTitle className="font-headline">Wedding Photographer of the Year</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Vogue India Wedding Awards, 2023</p>
                </CardContent>
             </Card>
              <Card className="text-center">
                <CardHeader>
                    <Award className="h-12 w-12 mx-auto text-accent"/>
                    <CardTitle className="font-headline">Best Cinematic Wedding Film</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Asia Wedding Fair, 2022</p>
                </CardContent>
             </Card>
              <Card className="text-center">
                <CardHeader>
                    <Award className="h-12 w-12 mx-auto text-accent"/>
                    <CardTitle className="font-headline">Top 50 Wedding Photographers</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Condé Nast Traveller, 2021</p>
                </CardContent>
             </Card>
          </div>
       </section>
    </>
  );
}
