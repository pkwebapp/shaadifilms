
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { type BlogPost } from '@/services/blog.service';
import { PageHeader } from '@/components/common/page-header';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ShareButtons } from '@/components/blog/share-buttons';
import { Heart, MessageSquare } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

const allComments = {
    'top-10-luxury-wedding-venues-mumbai-photography': [
        { id: 1, name: "Sneha Patel", avatar: "https://picsum.photos/seed/comment-sneha/40/40", text: "This list is a lifesaver! We've been so confused about venues in Mumbai. The Taj Mahal Palace is a dream." },
        { id: 2, name: "Karan Malhotra", avatar: "https://picsum.photos/seed/comment-karan/40/40", text: "Great breakdown. We had our reception at the St. Regis, and the skyline views were absolutely worth it for the photos." },
        { id: 3, name: "Alisha Khan", avatar: "https://picsum.photos/seed/comment-alisha/40/40", text: "Thank you for including the Grand Hyatt. The modern architecture and water features look amazing. Definitely on our shortlist now." },
        { id: 4, name: "Rajat Verma", avatar: "https://picsum.photos/seed/comment-rajat/40/40", text: "As a wedding planner, I can vouch for this list. These venues not only look good but also have great service, which is crucial for a smooth event." },
        { id: 5, name: "Divya Sharma", avatar: "https://picsum.photos/seed/comment-divya-s/40/40", text: "The pictures are gorgeous! We're considering the JW Marriott in Juhu for the sunset pheras. This post just sealed the deal for us." },
        { id: 6, name: "Amit Desai", avatar: "https://picsum.photos/seed/comment-amit-d/40/40", text: "Four Seasons Worli has been on my mind for its rooftop views. It’s great to see it featured here. The vibe looks incredible for a cocktail night." },
        { id: 7, name: "Neha Singh", avatar: "https://picsum.photos/seed/comment-neha-s/40/40", text: "I attended a wedding at the Renaissance in Powai, and it truly feels like a getaway. The lakeside setting is so serene and beautiful." },
        { id: 8, name: "Vikram Mehta", avatar: "https://picsum.photos/seed/comment-vikram-m/40/40", text: "This is a very comprehensive list. It's helpful to get a photographer's perspective on what makes a venue photogenic." },
        { id: 9, name: "Priya Jain", avatar: "https://picsum.photos/seed/comment-priya-j/40/40", text: "I love the mix of iconic heritage properties and modern hotels. It gives a lot of options depending on the wedding style." },
        { id: 10, name: "Rahul Kapoor", avatar: "https://picsum.photos/seed/comment-rahul-k/40/40", text: "The Trident at Nariman Point at night is pure magic. That Queen's Necklace view is a priceless backdrop for any wedding." }
    ],
    'how-to-plan-wedding-day-timeline-for-best-photos': [
        { id: 1, name: "Priya Sharma", avatar: "https://picsum.photos/seed/comment-priya/40/40", text: "This is so helpful! We were just discussing our timeline. The tip about the Golden Hour is a game-changer." },
        { id: 2, name: "Ravi Kumar", avatar: "https://picsum.photos/seed/comment-ravi/40/40", text: "The advice on adding buffer time is gold. Our makeup artist ran 30 minutes late, and that buffer saved us from so much stress." },
        { id: 3, name: "Anjali Mehta", avatar: "https://picsum.photos/seed/comment-anjali/40/40", text: "I've been following your work for a while, and the insights you share are always so valuable. It shows how much you care about your clients." },
        { id: 4, name: "Vivek Singh", avatar: "https://picsum.photos/seed/comment-vivek/40/40", text: "The family portrait list idea is brilliant. It's going to save us so much chaos on the day. Thanks for the practical advice!" },
        { id: 5, name: "Sonia Rao", avatar: "https://picsum.photos/seed/comment-sonia-r/40/40", text: "I never would have thought to schedule time for detail shots. It makes so much sense to capture the lehenga and jewelry before the chaos begins." },
        { id: 6, name: "Arjun Khanna", avatar: "https://picsum.photos/seed/comment-arjun-k/40/40", text: "This timeline guide is more useful than half the articles I've read online. Super practical and from a pro's perspective. Thank you!" },
        { id: 7, name: "Mira Kapoor", avatar: "https://picsum.photos/seed/comment-mira-k/40/40", text: "We're having a Mumbai wedding, and the buffer time for traffic is such a real and necessary point. Glad you mentioned it." },
        { id: 8, name: "Jay Patel", avatar: "https://picsum.photos/seed/comment-jay-p/40/40", text: "The Golden Hour tip is so true. The best photos from my sister's wedding were taken during that time. It really does look magical." },
        { id: 9, name: "Rina Shah", avatar: "https://picsum.photos/seed/comment-rina-s/40/40", text: "The family portrait checklist is genius! It's going to save so much time and ensure we don't miss anyone important." },
        { id: 10, name: "Nikhil Gupta", avatar: "https://picsum.photos/seed/comment-nikhil-g/40/40", text: "This is a great reminder that a good timeline isn't restrictive, it's actually liberating. It allows you to be present and enjoy the day." }

    ],
    'cinematic-wedding-films-vs-traditional-videography': [
        { id: 1, name: "Sameer Joshi", avatar: "https://picsum.photos/seed/comment-sameer/40/40", text: "Finally, a clear explanation! We couldn't decide, but now we know we want both a cinematic film for sharing and a traditional one for the family." },
        { id: 2, name: "Deepika Rao", avatar: "https://picsum.photos/seed/comment-deepika/40/40", text: "The cinematic film from our wedding still gives me goosebumps. Best decision ever. Shaadifilms' work is pure art." },
        { id: 3, name: "Arjun Desai", avatar: "https://picsum.photos/seed/comment-arjun/40/40", text: "This article perfectly explains why we chose a cinematic film. It's about capturing the feeling, not just the events. Great post!" },
        { id: 4, name: "Neha Gupta", avatar: "https://picsum.photos/seed/comment-neha-g/40/40", text: "Your hybrid approach makes so much sense. I was worried I'd have to choose. It's great to know we can have both the artistic film and the full record." },
        { id: 5, name: "Kunal Varma", avatar: "https://picsum.photos/seed/comment-kunal-v/40/40", text: "The storytelling aspect of cinematic films is what draws me in. It feels so much more personal than just a recording of the day." },
        { id: 6, name: "Priya Reddy", avatar: "https://picsum.photos/seed/comment-priya-r/40/40", text: "I showed this to my parents to help them understand the difference. Now they're as excited about the cinematic highlight as I am!" },
        { id: 7, name: "Rajesh Kumar", avatar: "https://picsum.photos/seed/comment-rajesh-k/40/40", text: "The explanation of the editing process for cinematic films really highlights the artistry involved. It's clearly a lot more work for a reason." },
        { id: 8, name: "Ananya Iyer", avatar: "https://picsum.photos/seed/comment-ananya-i/40/40", text: "The 'shareable' aspect is so important. A 5-minute film is perfect for friends and social media, while the 3-hour video is for us and the family." },
        { id: 9, name: "Siddharth Menon", avatar: "https://picsum.photos/seed/comment-sid-m/40/40", text: "The use of drones and gimbals really does make a difference. The footage in cinematic films looks so professional and smooth." },
        { id: 10, name: "Ishika Singh", avatar: "https://picsum.photos/seed/comment-ishika-s/40/40", text: "Great article. It's so important for couples to understand what they are paying for. This transparency is fantastic." }
    ],
    'must-have-shots-for-your-mumbai-wedding-album': [
        { id: 1, name: "Nisha Agarwal", avatar: "https://picsum.photos/seed/comment-nisha/40/40", text: "Making a list of these right now for our photographer! The 'Details Shot' is something I would have totally forgotten about." },
        { id: 2, name: "Raj Singh", avatar: "https://picsum.photos/seed/comment-raj/40/40", text: "The 'Baraat's Energy' shot is so true. It's one of our favorite photos, captures the chaos and joy perfectly." },
        { id: 3, name: "Fatima Khan", avatar: "https://picsum.photos/seed/comment-fatima/40/40", text: "So glad you included the Vidaai. It was an emotional moment, but the photos are some of the most beautiful and meaningful ones we have." },
        { id: 4, name: "Simran Kaur", avatar: "https://picsum.photos/seed/comment-simran/40/40", text: "This is a fantastic checklist. I shared it with my fiance. We especially love the idea of capturing the groom's reaction to the bride's entrance." },
        { id: 5, name: "Rahul Verma", avatar: "https://picsum.photos/seed/comment-rahul-v/40/40", text: "The First Look photo is a must! We did one and it was such a special, private moment before the ceremony. The pictures are so emotional." },
        { id: 6, name: "Aarti Mishra", avatar: "https://picsum.photos/seed/comment-aarti-m/40/40", text: "I'm obsessed with candid shots. The point about capturing guest moments is so important. They are a huge part of the day!" },
        { id: 7, name: "Karan Sharma", avatar: "https://picsum.photos/seed/comment-karan-s/40/40", text: "The solo portraits are a great idea. It’s nice to have that one perfect shot of the bride and groom in all their glory." },
        { id: 8, name: "Sneha Reddy", avatar: "https://picsum.photos/seed/comment-sneha-r/40/40", text: "This list is so practical. It's a great blend of the traditional must-haves and the modern, emotional moments. Thank you!" },
        { id: 9, name: "Manoj Tiwari", avatar: "https://picsum.photos/seed/comment-manoj-t/40/40", text: "The Jaimala shot is always so fun and full of energy. Definitely a highlight of any wedding album." },
        { id: 10, name: "Jia Ali", avatar: "https://picsum.photos/seed/comment-jia-a/40/40", text: "Love the emphasis on storytelling through the photos. It's not just a checklist, but a guide to capturing the narrative of the day." }
    ],
    'how-to-budget-for-wedding-photography-videography': [
        { id: 1, name: "Aditya Verma", avatar: "https://picsum.photos/seed/comment-aditya/40/40", text: "The 10-15% rule is a really helpful starting point. It's easy to get lost in all the wedding expenses." },
        { id: 2, name: "Ishita Gupta", avatar: "https://picsum.photos/seed/comment-ishita/40/40", text: "This is great advice. We prioritized photography, and looking back, it was the best decision. The flowers wilt, but the photos are forever!" },
        { id: 3, name: "Rahul Bajaj", avatar: "https://picsum.photos/seed/comment-rahul/40/40", text: "Thank you for explaining what influences the cost. It helps to understand why different packages have different prices. Very transparent." },
        { id: 4, name: "Meera Krishnan", avatar: "https://picsum.photos/seed/comment-meera-k/40/40", text: "Booking in advance is a great tip. We secured our favorite photographer 14 months early and it saved us a lot of stress." },
        { id: 5, name: "Ankit Sharma", avatar: "https://picsum.photos/seed/comment-ankit-s/40/40", text: "The breakdown of what's included in different packages is super useful for comparing options between photographers." },
        { id: 6, name: "Pooja Mehta", avatar: "https://picsum.photos/seed/comment-pooja-m/40/40", text: "It's reassuring to see a studio be so open about pricing factors. Builds a lot of trust." },
        { id: 7, name: "Sameer Agarwal", avatar: "https://picsum.photos/seed/comment-sameer-a/40/40", text: "This article made me realize I need to think about deliverables more carefully. The album quality and film length are important details." },
        { id: 8, name: "Divya Patel", avatar: "https://picsum.photos/seed/comment-divya-p/40/40", text: "The advice to have a clear conversation about our needs is great. It's better to be upfront to get the right package." },
        { id: 9, name: "Rohan Desai", avatar: "https://picsum.photos/seed/comment-rohan-d/40/40", text: "I appreciate the point about brand reputation. You're not just paying for photos, you're paying for experience and peace of mind." },
        { id: 10, name: "Kavita Singh", avatar: "https://picsum.photos/seed/comment-kavita-s/40/40", text: "This is a must-read for any couple starting their wedding planning. Puts things into perspective." }
    ],
    'understanding-your-wedding-photography-contract': [
        { id: 1, name: "Kabir Shah", avatar: "https://picsum.photos/seed/comment-kabir/40/40", text: "Excellent article. The part about image rights and model release is something every couple should read carefully." },
        { id: 2, name: "Meera Iyer", avatar: "https://picsum.photos/seed/comment-meera/40/40", text: "The cancellation policy section gave us peace of mind. It's important to know what happens if plans change." },
        { id: 3, name: "Sanjay Kumar", avatar: "https://picsum.photos/seed/comment-sanjay/40/40", text: "This is so important. A clear contract is the sign of a true professional. Thanks for breaking it down so clearly." },
        { id: 4, name: "Pooja Singh", avatar: "https://picsum.photos/seed/comment-pooja-s/40/40", text: "I never thought about the delivery timeline clause. Adding that to my list of things to check! Super helpful." },
        { id: 5, name: "Alok Nath", avatar: "https://picsum.photos/seed/comment-alok-n/40/40", text: "The 'Services and Deliverables' section is crucial. It's so important to have everything in writing. No room for misunderstandings." },
        { id: 6, name: "Tanvi Desai", avatar: "https://picsum.photos/seed/comment-tanvi-d/40/40", text: "The point about the photographer's cancellation policy is vital. Knowing they have a backup plan is a huge relief." },
        { id: 7, name: "Rajiv Malhotra", avatar: "https://picsum.photos/seed/comment-rajiv-m/40/40", text: "This article empowered me to ask the right questions before signing. Thank you for this guide." },
        { id: 8, name: "Naina Verma", avatar: "https://picsum.photos/seed/comment-naina-v/40/40", text: "Understanding the copyright vs. usage rights is a game-changer. It's good to know what we can and can't do with our photos." },
        { id: 9, name: "Harish Gupta", avatar: "https://picsum.photos/seed/comment-harish-g/40/40", text: "This is a testament to your studio's professionalism. A transparent contract is a green flag." },
        { id: 10, name: "Sunita Sharma", avatar: "https://picsum.photos/seed/comment-sunita-s/40/40", text: "The payment schedule breakdown is a good reminder to get everything clearly documented. No one wants financial surprises." }
    ],
    'importance-of-pre-wedding-photoshoot': [
        { id: 1, name: "Aarav Desai", avatar: "https://picsum.photos/seed/comment-aarav/40/40", text: "We were on the fence about a pre-wedding shoot, but this convinced us. The 'camera rehearsal' idea makes so much sense." },
        { id: 2, name: "Zara Hussain", avatar: "https://picsum.photos/seed/comment-zara/40/40", text: "Our pre-wedding shoot was one of our favorite parts of the wedding experience! It was so much fun and the casual photos are beautiful." },
        { id: 3, name: "Vikram Choudhary", avatar: "https://picsum.photos/seed/comment-vikram-c/40/40", text: "The point about building a connection with the photographer is spot on. We were so much more relaxed on our wedding day because we already knew our photo team." },
        { id: 4, name: "Anika Reddy", avatar: "https://picsum.photos/seed/comment-anika/40/40", text: "We used our pre-wedding photos for our 'Save the Dates' and everyone loved them! It was a great way to set the tone for our wedding." },
        { id: 5, name: "Rohan Mehta", avatar: "https://picsum.photos/seed/comment-rohan-m/40/40", text: "It's a great excuse to have a fun, romantic day out during the stressful wedding planning period. I'm so glad we did it." },
        { id: 6, name: "Sana Khan", avatar: "https://picsum.photos/seed/comment-sana-k/40/40", text: "I was so nervous about being in front of the camera. The pre-wedding shoot was a lifesaver. It made me so much more confident for the big day." },
        { id: 7, name: "Aditi Singh", avatar: "https://picsum.photos/seed/comment-aditi-s/40/40", text: "We chose a location that was special to us, and it made the photos so much more meaningful. This article is right, it really adds to the story." },
        { id: 8, name: "Karan Gill", avatar: "https://picsum.photos/seed/comment-karan-g/40/40", text: "The casual, candid photos from our pre-wedding shoot are some of my favorites. They capture our real personalities." },
        { id: 9, name: "Natasha Kumar", avatar: "https://picsum.photos/seed/comment-natasha-k/40/40", text: "If you're debating it, just do it! It's an investment you won't regret. The experience and the photos are priceless." },
        { id: 10, name: "Yash Agarwal", avatar: "https://picsum.photos/seed/comment-yash-a/40/40", text: "Great article. It perfectly summarizes all the reasons why a pre-wedding shoot is more than just 'extra photos'." }
    ],
    'full-day-vs-half-day-coverage-mumbai-wedding': [
        { id: 1, name: "Rohan Kapoor", avatar: "https://picsum.photos/seed/comment-rohank/40/40", text: "Full-day coverage was essential for our Mumbai wedding. The getting ready shots and the late-night dance floor photos are priceless." },
        { id: 2, name: "Sonia Mehta", avatar: "https://picsum.photos/seed/comment-sonia/40/40", text: "We initially thought of half-day, but this article makes a great case for full-day. The story really is in the moments in between." },
        { id: 3, name: "Kunal Shah", avatar: "https://picsum.photos/seed/comment-kunal/40/40", text: "The point about Mumbai traffic is so true! Having that buffer with full-day coverage saved us. Highly recommend it." },
        { id: 4, name: "Diya Sharma", avatar: "https://picsum.photos/seed/comment-diya/40/40", text: "We went with full-day coverage and have zero regrets. The photos of my mom getting emotional during my 'getting ready' are some of my most cherished ones." },
        { id: 5, name: "Anuj Gupta", avatar: "https://picsum.photos/seed/comment-anuj-g/40/40", text: "This article helped us make our decision. Full-day coverage just seems less stressful and more comprehensive. You don't want to be a clock-watcher on your wedding day." },
        { id: 6, name: "Trisha Singh", avatar: "https://picsum.photos/seed/comment-trisha-s/40/40", text: "The getting ready shots were so important to me. That's where the story begins! Full-day coverage is the only way to capture that." },
        { id: 7, name: "Vivek Anand", avatar: "https://picsum.photos/seed/comment-vivek-a/40/40", text: "For a multi-location wedding in Mumbai, half-day seems impossible. Full-day is the only practical option." },
        { id: 8, name: "Neha Choudhury", avatar: "https://picsum.photos/seed/comment-neha-c/40/40", text: "The best candid moments happen when you're not rushing. Full-day coverage allows for that space and spontaneity." },
        { id: 9, name: "Saurabh Jain", avatar: "https://picsum.photos/seed/comment-saurabh-j/40/40", text: "Thank you for this clear comparison. It's a big decision and this helps a lot." },
        { id: 10, name: "Esha Verma", avatar: "https://picsum.photos/seed/comment-esha-v/40/40", text: "We were worried about the cost, but after reading this, we see full-day coverage as an investment in the complete story of our day." }
    ],
    'understanding-post-production-edit-photos-to-perfection': [
        { id: 1, name: "Vikram Rathore", avatar: "https://picsum.photos/seed/comment-vikram/40/40", text: "Fascinating to see the process! I never realized how much work goes into editing after the wedding day is over." },
        { id: 2, name: "Pooja Reddy", avatar: "https://picsum.photos/seed/comment-pooja/40/40", text: "The color grading makes such a huge difference. That signature style is exactly why we chose you guys!" },
        { id: 3, name: "Amitabh Ghosh", avatar: "https://picsum.photos/seed/comment-amitabh/40/40", text: "This explains why it takes time to get the photos back! It's great to see the level of care and artistry involved. Worth the wait." },
        { id: 4, name: "Sunita Narayan", avatar: "https://picsum.photos/seed/comment-sunita/40/40", text: "I love that you do advanced retouching on key portraits. It's the little details that make the photos look so polished and professional." },
        { id: 5, name: "Rajeev Kumar", avatar: "https://picsum.photos/seed/comment-rajeev-k/40/40", text: "The 'culling' process sounds intense! It's good to know that only the absolute best shots make it to the final gallery." },
        { id: 6, name: "Isha Malhotra", avatar: "https://picsum.photos/seed/comment-isha-m/40/40", text: "The distinction between color correction and color grading is so interesting. It's the grading that really creates the mood." },
        { id: 7, name: "Anil Kapoor", avatar: "https://picsum.photos/seed/comment-anil-k/40/40", text: "This post gives me a new appreciation for the art of photography. It's so much more than just pointing and shooting." },
        { id: 8, name: "Malaika Arora", avatar: "https://picsum.photos/seed/comment-malaika-a/40/40", text: "The goal of retouching being to look 'stunning without looking edited' is perfectly put. That's exactly what you want." },
        { id: 9, name: "Zoya Akhtar", avatar: "https://picsum.photos/seed/comment-zoya-a/40/40", text: "The final quality check shows a real commitment to excellence. It's that attention to detail that sets a luxury service apart." },
        { id: 10, name: "Farhan Siddiqui", avatar: "https://picsum.photos/seed/comment-farhan-s/40/40", text: "Great insight into the behind-the-scenes work. It helps manage expectations on delivery times too." }
    ],
    'decoding-wedding-videography-styles': [
        { id: 1, name: "Imran Ali", avatar: "https://picsum.photos/seed/comment-imran/40/40", text: "Great explanation of the different styles. The hybrid approach of cinematic + documentary sounds like the perfect combination." },
        { id: 2, name: "Divya Nair", avatar: "https://picsum.photos/seed/comment-divya/40/40", text: "We love our short cinematic film. It's so easy to share with friends, and we watch it all the time. The long video is great for our parents." },
        { id: 3, name: "Harsh Patel", avatar: "https://picsum.photos/seed/comment-harsh/40/40", text: "This article helped me finally understand what my fiancée meant by 'cinematic'. Now I'm excited about it too!" },
        { id: 4, name: "Tanvi Sharma", avatar: "https://picsum.photos/seed/comment-tanvi/40/40", text: "The 'storytelling' style sounds so personal and beautiful. I love the idea of using audio from letters or interviews." },
        { id: 5, name: "Ravi Goel", avatar: "https://picsum.photos/seed/comment-ravi-g/40/40", text: "The short-form social media style is a great add-on. We got a Reel and it was so fun to share it the next day." },
        { id: 6, name: "Aisha Khan", avatar: "https://picsum.photos/seed/comment-aisha-k/40/40", text: "This is a really helpful guide for couples who don't know the terminology. It makes it easier to find a videographer whose style matches your vision." },
        { id: 7, name: "Sanjay Reddy", avatar: "https://picsum.photos/seed/comment-sanjay-r/40/40", text: "The hybrid approach is the best of both worlds. You get the art and the archive. Smart." },
        { id: 8, name: "Priya Malik", avatar: "https://picsum.photos/seed/comment-priya-m/40/40", text: "I never realized how much the editing and music choice contribute to the final feel of the film. This is so insightful." },
        { id: 9, name: "Arun Kumar", avatar: "https://picsum.photos/seed/comment-arun-k/40/40", text: "Cinematic is definitely the way to go for us. We want a movie of our day, not just a recording." },
        { id: 10, name: "Nitya Rao", avatar: "https://picsum.photos/seed/comment-nitya-r/40/40", text: "I love that you offer a full documentary video as well. My parents will be so happy to have that." }
    ]
};

interface BlogPostClientContentProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
  slug: string;
}

export default function BlogPostClientContent({ post, relatedPosts, slug }: BlogPostClientContentProps) {
  const [randomLikes, setRandomLikes] = useState(0);
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    // Generate random numbers and select comments only on the client side to avoid hydration mismatch
    setRandomLikes(Math.floor(Math.random() * (250 - 50 + 1) + 50));
    
    const postComments = (allComments as Record<string, any[]>)[slug] || [];
    const randomCommentCount = Math.floor(Math.random() * (10 - 4 + 1)) + 4;
    setComments(postComments.slice(0, randomCommentCount));

  }, [slug]);

  const authorAvatar = PlaceHolderImages.find(img => img.id.startsWith('team-') && post.author.toLowerCase().includes(img.name?.split(' ')[0].toLowerCase() || ''));

  return (
    <>
      <PageHeader title={post.title} description="" />

      <div className="container max-w-4xl py-12">
        <article className="prose lg:prose-lg max-w-none mx-auto">
            {post.image && (
                <div className="relative w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden">
                    <Image
                        src={post.image.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}
            
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <Avatar>
                        {authorAvatar && <AvatarImage src={authorAvatar.imageUrl} />}
                        <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">{post.author}</p>
                        <p className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                </div>
                <ShareButtons url={`/blog/${post.slug}`} title={post.title} />
            </div>


            <div
                className="prose-p:text-muted-foreground prose-headings:text-foreground prose-headings:font-headline prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground"
                dangerouslySetInnerHTML={{ __html: post.content || '' }}
            />
        </article>
        
        <Separator className="my-12" />

        <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between text-muted-foreground">
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-pink-500" /> 
                        <span>{randomLikes || '...'} Likes</span>
                    </Button>
                </div>
                 <div className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" /> 
                    <h3 className="font-headline text-xl text-foreground">Community Discussion ({comments.length})</h3>
                 </div>
            </div>
            
            <div className="mt-8 space-y-6">
                {comments.map(comment => (
                    <div key={comment.id} className="flex items-start gap-4">
                        <Avatar>
                            <AvatarImage src={comment.avatar} alt={comment.name} />
                            <AvatarFallback>{comment.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <p className="font-semibold text-foreground">{comment.name}</p>
                            <p className="text-muted-foreground text-sm">{comment.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <Separator className="my-12" />

        <div className="max-w-4xl mx-auto">
            <h2 className="font-headline text-3xl text-center mb-8">More From Our Journal</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map(p => (
                    <Link href={`/blog/${p.slug}`} key={p.id} className="group">
                        <div className="overflow-hidden rounded-lg mb-4">
                           {p.image && <Image src={p.image.imageUrl} alt={p.title} width={400} height={250} className="object-cover aspect-[4/3] w-full transition-transform group-hover:scale-105" />}
                        </div>
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{p.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                    </Link>
                ))}
            </div>
        </div>
      </div>
    </>
  );
}
    
