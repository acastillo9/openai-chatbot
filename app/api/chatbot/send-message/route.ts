import { NextResponse } from "next/server";
import { getChatCompletion } from "../../openai";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const responseMessage = await getChatCompletion(message);
    return NextResponse.json({ success: true, message: responseMessage });
  } catch (error) {
    console.log("Error getting a response for OpenAI", error);
    return NextResponse.json({
      status: 500,
      success: false,
      message: "Something went wrong. Please try again!",
    });
  }
}
