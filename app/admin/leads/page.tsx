// Admin dashboard to view leads and their scores
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Mock data - in real app, this would come from your database
const mockLeads = [
  {
    id: 1,
    name: "John Smith",
    email: "john@urbandev.com",
    company: "Urban Development Co",
    role: "developer",
    phone: "+1 555-123-4567",
    score: 6,
    factors: ["Company email", "Phone provided", "High-value role"],
    submittedAt: "2024-01-15T10:30:00Z",
    emailClicks: 2,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.johnson@gmail.com",
    company: "Freelance",
    role: "architect",
    phone: "",
    score: 1,
    factors: ["High-value role"],
    submittedAt: "2024-01-15T14:20:00Z",
    emailClicks: 0,
  },
  {
    id: 3,
    name: "Mike Chen",
    email: "mchen@aecom.com",
    company: "AECOM",
    role: "engineer",
    phone: "+1 555-987-6543",
    score: 6,
    factors: ["Company email", "Phone provided", "High-value role"],
    submittedAt: "2024-01-14T16:45:00Z",
    emailClicks: 3,
  },
]

export default function LeadsPage() {
  const [leads] = useState(mockLeads)

  const getScoreBadgeColor = (score: number) => {
    if (score >= 6) return "bg-green-100 text-green-800"
    if (score >= 3) return "bg-yellow-100 text-yellow-800"
    return "bg-gray-100 text-gray-800"
  }

  const getScoreLabel = (score: number) => {
    if (score >= 6) return "Hot Lead"
    if (score >= 3) return "Warm Lead"
    return "Cold Lead"
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Lead Dashboard</h1>
        <p className="text-muted-foreground">Reality Capture Guide Downloads</p>
      </div>

      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{leads.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Hot Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{leads.filter((lead) => lead.score >= 6).length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg. Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {(leads.reduce((sum, lead) => sum + lead.score, 0) / leads.length).toFixed(1)}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {leads.map((lead) => (
          <Card key={lead.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold">{lead.name}</h3>
                    <Badge className={getScoreBadgeColor(lead.score)}>
                      {getScoreLabel(lead.score)} ({lead.score})
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>{lead.email}</p>
                    {lead.company && <p>{lead.company}</p>}
                    {lead.role && <p>Role: {lead.role}</p>}
                    {lead.phone && <p>Phone: {lead.phone}</p>}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {lead.factors.map((factor, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {factor}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Submitted: {new Date(lead.submittedAt).toLocaleDateString()}
                    {lead.emailClicks > 0 && ` • ${lead.emailClicks} email clicks`}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                  {lead.score >= 6 && <Button size="sm">Contact Now</Button>}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
