import { NextResponse } from "next/server";

export async function POST(request: Request) {

    const body = await request.json();
    const { firstName, emailAddress, subject_Matter, message } = body;

    console.log(`Name: ${firstName}, Email: ${emailAddress}`);
    
    return NextResponse.json({
        message: "form submitted successfully",
        data: {firstName, emailAddress, subject_Matter, message}
    })
}