import { NextResponse } from "next/server";
import { getChatCompletion } from "./openai";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    return await getChatCompletion(messages);
  } catch (error) {
    console.log("Error getting a response for OpenAI", error);
    return NextResponse.json({
      status: 500,
      success: false,
      message: "Something went wrong. Please try again!",
    });
  }
}
