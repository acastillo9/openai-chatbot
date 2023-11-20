import { NextResponse } from "next/server";
import { getChatCompletion } from "../../utils/openai";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const chatComplation = await getChatCompletion(messages);
    return chatComplation;
  } catch (error) {
    console.log("Error getting a response for OpenAI", error);
    return NextResponse.json({
      status: 500,
      success: false,
      message: "Something went wrong. Please try again!",
    });
  }
}
