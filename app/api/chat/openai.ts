import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function getChatCompletion(messages) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages,
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
  });
  const stream = OpenAIStream(completion);
  return new StreamingTextResponse(stream);
}
