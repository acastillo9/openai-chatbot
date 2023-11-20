import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function getChatCompletion(
  messages: ChatCompletionMessageParam[],
) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4-1106-preview",
    messages,
    temperature: 1,
    max_tokens: 1048,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
  });
  const stream = OpenAIStream(completion);
  return new StreamingTextResponse(stream);
}
