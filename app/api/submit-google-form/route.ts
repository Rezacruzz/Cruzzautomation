import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const {
      productName,
      inquiryType,
      name,
      contactNo,
      email,
      message,
    } = data

    console.log("✅ Received data:", data)

    const formData = new URLSearchParams()
    formData.append("entry.2046167482", productName)
    formData.append("entry.286945535", inquiryType)
    formData.append("entry.1274443010", name)
    formData.append("entry.1519996348", contactNo)
    formData.append("entry.1602895693", email)
    formData.append("entry.1336486117", message)

    console.log("📤 Sending to Google Form:", formData.toString())

    const response = await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSchMaiJyZQqtr9e-zhORyScETxU5Dnph9v5tlIXGINx2rhDgw/formResponse",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      }
    )

    console.log("📬 Google Form submission status:", response.status)

    return NextResponse.json({ success: true, status: response.status })
  } catch (error: any) {
    console.error("❌ Error:", error.message)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
