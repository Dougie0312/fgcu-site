import { NextRequest, NextResponse } from 'next/server';
import { getAIAdvisorResponse, validateMessage } from '@/lib/ai-advisor';
import { ChatMessage, ChatApiRequest, ChatApiResponse } from '@/lib/types';

export const runtime = 'nodejs';

export async function POST(request: NextRequest): Promise<NextResponse<ChatApiResponse>> {
  try {
    const body: ChatApiRequest = await request.json();
    const { message, history } = body;

    // Validate input
    const validation = validateMessage(message);
    if (!validation.valid) {
      return NextResponse.json(
        { reply: '', error: validation.error },
        { status: 400 }
      );
    }

    // Validate history
    if (!Array.isArray(history)) {
      return NextResponse.json(
        { reply: '', error: 'Invalid message history' },
        { status: 400 }
      );
    }

    // Get response from AI advisor
    const reply = await getAIAdvisorResponse(message, history as ChatMessage[]);

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Chat API error:', error);

    const errorMessage =
      error instanceof Error ? error.message : 'Unable to process your request';

    return NextResponse.json(
      {
        reply: '',
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204 });
}
