import { NextResponse } from 'next/server';

export const config = {
  runtime: 'edge', // Critical for Vercel deployment
};

export default async function POST(req) {
  try {
    const { message } = await req.json();
    return new Response(
      JSON.stringify({ 
        reply: `You said: "${message}". I'm now working properly!` 
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
