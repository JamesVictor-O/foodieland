import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({
        products: [
            {
                id: 1,
                productName:"skin care"
            },
            {
                id: 2,
                productName:"laptop"
            }
        ]
    })
}