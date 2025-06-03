"use server"

type FormData = {
  name: string
  email: string
  company?: string
  role?: string
  phone?: string
}

type LeadScore = {
  score: number
  factors: string[]
}

function calculateLeadScore(data: FormData): LeadScore {
  let score = 0
  const factors: string[] = []

  // Company email check (basic heuristic)
  if (
    data.email &&
    !data.email.includes("gmail.com") &&
    !data.email.includes("yahoo.com") &&
    !data.email.includes("hotmail.com")
  ) {
    score += 3
    factors.push("Company email")
  }

  // Provided phone number
  if (data.phone && data.phone.trim().length > 0) {
    score += 2
    factors.push("Phone provided")
  }

  // High-value roles
  if (data.role && ["developer", "architect", "engineer", "contractor"].includes(data.role)) {
    score += 1
    factors.push("High-value role")
  }

  return { score, factors }
}

export async function submitLeadForm(data: FormData) {
  try {
    // Calculate lead score
    const leadScore = calculateLeadScore(data)

    // In a real implementation, you would:
    // 1. Store the lead in your database with the score
    // 2. Send the welcome email with PDF
    // 3. Add to email automation sequence
    // 4. If high score (6+), notify sales team

    console.log("Lead submitted:", {
      ...data,
      leadScore: leadScore.score,
      scoringFactors: leadScore.factors,
      timestamp: new Date().toISOString(),
    })

    // Simulate email sending
    await sendWelcomeEmail(data)

    // Add to follow-up sequence
    await addToEmailSequence(data, leadScore)

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1500))

    return { success: true, leadScore: leadScore.score }
  } catch (error) {
    console.error("Form submission error:", error)
    throw new Error("Failed to submit form")
  }
}

async function sendWelcomeEmail(data: FormData) {
  // This would integrate with your email service (SendGrid, Mailgun, etc.)
  const emailContent = {
    to: data.email,
    subject: "Your Cost-Saving Guide is Inside 🧰",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Hi ${data.name},</h2>
        
        <p>Thanks for requesting the PDF! Click below to download:</p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${process.env.NEXT_PUBLIC_BASE_URL}/guides/reality-capture-cost-savings.pdf" 
             style="background-color: #16a34a; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold;">
            📄 Download the Guide
          </a>
        </div>
        
        <p>We'll also send you 2 more quick tips later this week to maximize your Reality Capture ROI.</p>
        
        <p>Best regards,<br>
        Chandler @ Six1Five Studio</p>
        
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
        <p style="font-size: 12px; color: #666;">
          You're receiving this because you downloaded our Reality Capture guide. 
          <a href="#" style="color: #666;">Unsubscribe</a>
        </p>
      </div>
    `,
  }

  console.log("Welcome email sent:", emailContent)
  return emailContent
}

async function addToEmailSequence(data: FormData, leadScore: LeadScore) {
  // This would add the user to your email automation platform
  const sequenceData = {
    email: data.email,
    name: data.name,
    company: data.company,
    role: data.role,
    leadScore: leadScore.score,
    sequence: "reality-capture-nurture",
    emails: [
      {
        day: 1,
        subject: "How We Saved a Developer $50K with Reality Capture",
        template: "case-study-email",
      },
      {
        day: 3,
        subject: "5 Mistakes to Avoid in Land Planning – A Quick Read",
        template: "mistakes-email",
      },
      {
        day: 5,
        subject: "Need Help? Book a Free 15-Min Site Audit Call",
        template: "consultation-email",
      },
    ],
  }

  console.log("Added to email sequence:", sequenceData)

  // If high-value lead, notify sales team
  if (leadScore.score >= 6) {
    await notifySalesTeam(data, leadScore)
  }

  return sequenceData
}

async function notifySalesTeam(data: FormData, leadScore: LeadScore) {
  const salesNotification = {
    type: "high-value-lead",
    lead: data,
    score: leadScore.score,
    factors: leadScore.factors,
    message: `High-value lead alert! ${data.name} from ${data.company || "Unknown Company"} scored ${leadScore.score} points.`,
  }

  console.log("Sales team notified:", salesNotification)
  return salesNotification
}
