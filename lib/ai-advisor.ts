import Anthropic from '@anthropic-ai/sdk';
import { ChatMessage } from './types';
import { knowledgeBaseSummary, searchCourses } from './knowledge-base';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are the EaglePreneurs AI Advisor for Florida Gulf Coast University's School of Entrepreneurship.

You are helpful, knowledgeable, and accurate about the BS in Entrepreneurship degree program (120 credits, Catalog Year 2025-2026).

You help students with:
- BS in Entrepreneurship degree requirements (10 required courses, 9 elective credits)
- Course descriptions, prerequisites, and scheduling
- Graduation requirements: service-learning (80 hours), writing (12 credits), civic literacy, foreign language
- Switching majors or adding the Entrepreneurship Minor (cannot declare both simultaneously)
- Lucas Hall facilities: Runway Program incubator, Makerspace (Room 203), Media Lab (Room 308)
- General registration and program advising
- Dual-credit course opportunities (courses that count toward multiple requirements)

Key information to remember:
- Total credits required: 120
- Major courses: 30 credits (10 required + 9 elective)
- General Education: ~36 credits
- Service-Learning: 80 hours for first-time-in-college; 40 hours for upper-level transfers
- Writing requirement: 12 credits (ENT 3114 and ENT 3204 each count as 3 credits)
- Sustainability requirement: 3 credits (ENT 3503 satisfies both an elective AND this requirement)

Guidelines:
1. Be specific - use course codes (e.g., ENT 3114), credit hours, and requirements from the knowledge base
2. For questions about prerequisites or course details, reference the course descriptions
3. If a student asks about switching majors, explain that the Entrepreneurship Minor CANNOT be declared with the BS in Entrepreneurship
4. For unclear or out-of-scope questions, direct students to contact their academic advisor or check catalog.fgcu.edu
5. Be encouraging about the program - emphasize hands-on learning, Lean Startup methodology, and the supportive community in Lucas Hall
6. When discussing service-learning, remind students to track hours through the Eagle Service Network
7. Always be polite, professional, and student-focused

Knowledge Base Summary:
${knowledgeBaseSummary}
`;

export async function getAIAdvisorResponse(
  userMessage: string,
  conversationHistory: ChatMessage[]
): Promise<string> {
  try {
    // Search knowledge base for relevant courses
    const relevantCourses = searchCourses(userMessage);
    const context = relevantCourses.length > 0
      ? `\n\nRelevant courses found:\n${relevantCourses.map(c => `- ${c.code}: ${c.name} (${c.credits} cr)`).join('\n')}`
      : '';

    // Build messages for API call
    const messages = [
      ...conversationHistory,
      {
        role: 'user' as const,
        content: userMessage + context,
      },
    ];

    const response = await client.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: messages,
    });

    // Extract text from response
    const textContent = response.content.find(block => block.type === 'text');
    if (!textContent || textContent.type !== 'text') {
      throw new Error('No text content in response');
    }

    return textContent.text;
  } catch (error) {
    console.error('Error calling Claude API:', error);

    // Provide helpful fallback responses for common issues
    if (error instanceof Error) {
      if (error.message.includes('401') || error.message.includes('API key')) {
        throw new Error('API authentication failed. Please check ANTHROPIC_API_KEY.');
      }
      if (error.message.includes('rate limit')) {
        throw new Error('Too many requests. Please try again in a moment.');
      }
    }

    throw new Error('Unable to reach the AI Advisor right now. Please try again in a moment.');
  }
}

export function validateMessage(message: string): { valid: boolean; error?: string } {
  if (!message) {
    return { valid: false, error: 'Message cannot be empty' };
  }

  if (message.trim().length === 0) {
    return { valid: false, error: 'Message cannot be just whitespace' };
  }

  if (message.length > 1000) {
    return { valid: false, error: 'Message is too long (max 1000 characters)' };
  }

  return { valid: true };
}
