// A chatbot flow that answers questions about wedding packages and availability.
'use server';

/**
 * @fileOverview An AI chatbot for answering questions about wedding packages and availability.
 *
 * - aiPoweredConcierge - A function that handles the chatbot interaction.
 * - AIPoweredConciergeInput - The input type for the aiPoweredConcierge function.
 * - AIPoweredConciergeOutput - The return type for the aiPoweredConcierge function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIPoweredConciergeInputSchema = z.object({
  query: z.string().describe('The user query about wedding packages and availability.'),
});
export type AIPoweredConciergeInput = z.infer<typeof AIPoweredConciergeInputSchema>;

const AIPoweredConciergeOutputSchema = z.object({
  response: z.string().describe('The response from the AI chatbot.'),
});
export type AIPoweredConciergeOutput = z.infer<typeof AIPoweredConciergeOutputSchema>;

export async function aiPoweredConcierge(input: AIPoweredConciergeInput): Promise<AIPoweredConciergeOutput> {
  return aiPoweredConciergeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPoweredConciergePrompt',
  input: {schema: AIPoweredConciergeInputSchema},
  output: {schema: AIPoweredConciergeOutputSchema},
  prompt: `You are a wedding concierge chatbot for Shaadifilms, an Indian wedding photography and videography company based in Morjim, Goa.

  You are an expert on the wedding packages and availability that Shaadifilms offers. Use the following information to answer the user's query.

  Location: We are based in Morjim, Goa, and primarily serve the Goa region. We are also available for destination weddings across India and internationally.
  Packages: Shaadifilms offers Silver, Gold, Platinum, and Bespoke packages. Silver is the most economical, while Platinum offers the most comprehensive service. Bespoke packages are custom designed for unique client needs.
  Availability: Please check the online calendar for up-to-date availability. Bookings can be made online with a token advance.
  Services: We offer pre-wedding shoots, coverage of Hindu, Christian, Sikh, and Muslim weddings, destination weddings, and cinematic wedding films.

  User Query: {{{query}}}

  Please provide a helpful and informative response to the user's query, keeping in mind the luxury and premium nature of Shaadifilms.
  Remember to be transparent and upfront with the information. 
`,
});

const aiPoweredConciergeFlow = ai.defineFlow(
  {
    name: 'aiPoweredConciergeFlow',
    inputSchema: AIPoweredConciergeInputSchema,
    outputSchema: AIPoweredConciergeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
