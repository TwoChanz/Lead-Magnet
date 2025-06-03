import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-24 text-center">
        <div className="mb-6 rounded-full bg-green-100 p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-green-600"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h1 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Check Your Email! 📧</h1>
        <p className="mb-8 max-w-md text-muted-foreground md:text-lg">
          Your PDF guide has been sent to your inbox. If you don't see it, please check your spam folder.
        </p>

        <div className="mb-8 w-full max-w-md rounded-lg border bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-medium">What's Next?</h2>
          <div className="space-y-3 text-left text-sm">
            <div className="flex items-start gap-3">
              <div className="mt-1 rounded-full bg-blue-100 p-1 text-blue-600">
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p>
                <strong>Today:</strong> Download and review your PDF guide
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 rounded-full bg-green-100 p-1 text-green-600">
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p>
                <strong>Day 1:</strong> Case study: How we saved a developer $50K
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 rounded-full bg-purple-100 p-1 text-purple-600">
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p>
                <strong>Day 3:</strong> 5 mistakes to avoid in land planning
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 rounded-full bg-orange-100 p-1 text-orange-600">
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p>
                <strong>Day 5:</strong> Free 30-min site audit call opportunity
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8 w-full max-w-md rounded-lg border bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-medium">Download Your Guide</h2>
          <p className="mb-4 text-sm text-muted-foreground">You can also download your guide directly:</p>
          <Button className="w-full" asChild>
            <a href="/guides/reality-capture-cost-savings.pdf" download>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              Download PDF Guide
            </a>
          </Button>
        </div>

        {/* Social sharing */}
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm text-muted-foreground">Know someone who could benefit from this guide?</p>
          <div className="flex justify-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://linkedin.com/sharing/share-offsite/?url=YOUR_LANDING_PAGE_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                Share on LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="mailto:?subject=Reality Capture Cost-Saving Guide&body=I found this helpful guide on saving money with reality capture in land development: YOUR_LANDING_PAGE_URL">
                Share via Email
              </a>
            </Button>
          </div>
        </div>

        <Link href="/" className="text-sm text-muted-foreground hover:underline">
          ← Return to homepage
        </Link>
      </div>
    </div>
  )
}
