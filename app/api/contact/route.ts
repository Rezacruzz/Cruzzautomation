// app/api/contact/route.ts
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      country,
      subject,
      message
    } = await req.json()

    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeqDDsrZZygTliE7ITe4e4JOCO83Vp7MI60kR5MEV2zW64U9w/formResponse"

    const formData = new URLSearchParams()
    formData.append("entry.55465107", firstName)
    formData.append("entry.1403285576", lastName)
    formData.append("entry.1164346301", email)
    formData.append("entry.38446174", phone)
    formData.append("entry.1210232490", company)
    formData.append("entry.112658436", country)
    formData.append("entry.1428537838", subject)
    formData.append("entry.373116566", message)

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
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
