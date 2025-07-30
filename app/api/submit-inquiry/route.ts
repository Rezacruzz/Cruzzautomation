import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    console.log("✅ Received data:", data)

   const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScOtH56ZpDCSkrSAR4PZN6B2oFXNljXo2mdR258i-eGI-7vaQ/formResponse"


    const formData = new URLSearchParams()
    formData.append("entry.1976587658", data.inquiryType)
    formData.append("entry.1986534974", data.companyName)
    formData.append("entry.935787614", data.contactPerson)
    formData.append("entry.1561736877", data.phone)
    formData.append("entry.666360449", data.email)
    formData.append("entry.27678760", data.country)
    formData.append("entry.48796432", data.productCategory)
    formData.append("entry.1800142208", data.productInterest)
    formData.append("entry.433528086", data.quantity)
    formData.append("entry.605426966", data.budget)
    formData.append("entry.1089886299", data.timeline)
    formData.append("entry.1244425688", data.message)

    console.log("📤 Sending to Google Form:", formData.toString())

    await fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("❌ Error:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
