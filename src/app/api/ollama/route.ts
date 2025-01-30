import { NextRequest, NextResponse } from "next/server";
import ollama from "ollama";
// ollama run llama3.2
export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const response = await ollama.chat({
      model: "llama3.2",
      messages: [
        {
          role: "system",
          content:
            "You are an editor and you are tasked to to compile all these events into a newsletter in order to inform the user in an automated email provide only the newsletter response.",
        },
        { role: "user", content: JSON.stringify(body) },
      ],
    });
    console.log(response.message.content);

    console.log("test", response.message);
    const content = response.message.content;

    return NextResponse.json({ items: content }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 },
    );
  }
};
