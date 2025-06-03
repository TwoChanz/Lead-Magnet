import LeadMagnetForm from "@/components/lead-magnet-form"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="mb-8 grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-6">
              <div className="inline-block w-fit rounded-lg bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                🎯 Free PDF Guide
              </div>
              <div className="space-y-3">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  Slash Land Dev Costs with Reality Capture
                </h1>
                <p className="text-lg text-slate-600 md:text-xl">
                  Free PDF Reveals 10 Ways to Save Time & Money Using 3D Site Data
                </p>
              </div>

              {/* Mobile Benefits Preview */}
              <div className="rounded-lg border bg-white p-4 shadow-sm md:hidden">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🚁</span>
                    <span>Reduce Site Revisits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📋</span>
                    <span>Cut Planning Costs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🎯</span>
                    <span>Minimize Design Errors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">⚡</span>
                    <span>ROI Calculator</span>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              {/* Social Proof */}
              <div className="space-y-4">
                {/* Trust badges */}
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-sm">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-medium">4.9/5</span>
                  </div>
                  <div className="rounded-lg bg-white px-3 py-2 shadow-sm">
                    <span className="text-sm font-medium">100+ Downloads</span>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                      M
                    </div>
                    <div>
                      <div className="text-sm font-medium">Mike Chen</div>
                      <div className="text-xs text-slate-500">Senior Developer, Urban Projects</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    "This guide saved us $50K on our last project. The ROI calculator alone was worth the download."
                  </p>
                </div>

                {/* Company logos */}
                <div className="text-center">
                  <p className="mb-2 text-xs text-slate-500">Trusted by professionals at:</p>
                  <div className="flex items-center justify-center gap-4 opacity-60">
                    <div className="rounded bg-slate-100 px-3 py-1 text-xs font-medium">Bechtel</div>
                    <div className="rounded bg-slate-100 px-3 py-1 text-xs font-medium">AECOM</div>
                    <div className="rounded bg-slate-100 px-3 py-1 text-xs font-medium">Skanska</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md">
                <div className="mb-6">
                  {/* 3D PDF Mockup */}
                  <div className="flex justify-center">
                    <div className="relative">
                      <div
                        className="relative h-64 w-48 transform-gpu transition-transform duration-300 hover:scale-105"
                        style={{
                          transform: "perspective(1000px) rotateY(-15deg) rotateX(5deg)",
                        }}
                      >
                        {/* PDF Shadow */}
                        <div
                          className="absolute inset-0 bg-black/20 blur-lg"
                          style={{
                            transform: "translateX(8px) translateY(8px) scale(0.95)",
                          }}
                        />

                        {/* PDF Cover */}
                        <div className="relative h-full w-full overflow-hidden rounded-lg border-2 border-slate-200 bg-white shadow-2xl">
                          {/* Header */}
                          <div className="bg-gradient-to-r from-slate-800 to-slate-600 p-3 text-white">
                            <div className="text-xs font-bold">FREE GUIDE</div>
                          </div>

                          {/* Content */}
                          <div className="p-4">
                            <h3 className="mb-2 text-sm font-bold leading-tight text-slate-800">
                              Top 10 Ways Reality Capture Saves Money
                            </h3>
                            <p className="mb-3 text-xs text-slate-600">Land Development Cost-Cutting Strategies</p>

                            {/* Actual content preview */}
                            <div className="space-y-2 text-xs">
                              <div className="flex items-start gap-1">
                                <span className="font-bold text-green-600">1.</span>
                                <span className="text-slate-700">Reduce Site Revisits</span>
                              </div>
                              <div className="flex items-start gap-1">
                                <span className="font-bold text-blue-600">2.</span>
                                <span className="text-slate-700">Cut Planning Costs</span>
                              </div>
                              <div className="flex items-start gap-1">
                                <span className="font-bold text-purple-600">3.</span>
                                <span className="text-slate-700">Minimize Design Errors</span>
                              </div>
                              <div className="flex items-start gap-1">
                                <span className="font-bold text-orange-600">4.</span>
                                <span className="text-slate-700">Optimize Earthwork</span>
                              </div>
                              <div className="text-center text-xs text-slate-500 mt-2">+ 6 more strategies...</div>
                            </div>

                            {/* ROI highlight */}
                            <div className="mt-3 rounded bg-green-50 p-2 text-center">
                              <div className="text-xs font-bold text-green-800">ROI Calculator</div>
                              <div className="text-xs text-green-600">Included</div>
                            </div>
                          </div>

                          {/* Footer */}
                          <div className="absolute bottom-0 left-0 right-0 bg-slate-50 p-2 text-center">
                            <div className="text-xs font-medium text-slate-600">24 Pages</div>
                          </div>
                        </div>

                        {/* Page stack effect */}
                        <div
                          className="absolute inset-0 rounded-lg border border-slate-200 bg-white"
                          style={{
                            transform: "translateZ(-2px) translateX(2px)",
                            zIndex: -1,
                          }}
                        />
                        <div
                          className="absolute inset-0 rounded-lg border border-slate-200 bg-white"
                          style={{
                            transform: "translateZ(-4px) translateX(4px)",
                            zIndex: -2,
                          }}
                        />
                      </div>

                      {/* Download indicator */}
                      <div className="absolute -bottom-2 -right-2 rounded-full bg-green-500 p-2 text-white shadow-lg">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-xl border bg-white shadow-xl">
                  <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 text-center text-white">
                    <h3 className="text-xl font-semibold">Get Your Free Cost-Saving Guide</h3>
                    <p className="mt-1 text-sm text-slate-200">Instant download • No spam, ever</p>
                  </div>
                  <div className="p-6">
                    <LeadMagnetForm />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What You'll Learn Section */}
          <div className="rounded-xl border bg-white p-8 shadow-sm">
            <h3 className="mb-8 text-center text-2xl font-bold">What You'll Discover Inside:</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-2xl">🚁</span>
                </div>
                <h4 className="mb-2 font-semibold">Reduce Site Revisits</h4>
                <p className="text-sm text-slate-600">
                  Use drone mapping and photogrammetry to explore sites remotely, saving travel time
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <span className="text-2xl">📋</span>
                </div>
                <h4 className="mb-2 font-semibold">Cut Planning Costs</h4>
                <p className="text-sm text-slate-600">
                  Accurate existing conditions reduce errors during planning and avoid costly surprises
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="mb-2 font-semibold">Minimize Design Errors</h4>
                <p className="text-sm text-slate-600">
                  3D models help identify conflicts before construction, saving rework costs
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                  <span className="text-2xl">📊</span>
                </div>
                <h4 className="mb-2 font-semibold">Calculate ROI</h4>
                <p className="text-sm text-slate-600">
                  Use actual project case studies to show time and money saved with these tools
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-green-100 p-1 text-green-600">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm">Reduce site revisits using drone mapping and photogrammetry</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-green-100 p-1 text-green-600">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm">Cut planning costs with accurate existing conditions</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-green-100 p-1 text-green-600">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm">Minimize design errors with 3D conflict detection</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-green-100 p-1 text-green-600">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm">Optimize earthwork calculations for accurate cut/fill volumes</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-green-100 p-1 text-green-600">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm">Improve communication with interactive 3D models</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-green-100 p-1 text-green-600">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm">Enhance visualization with AR/VR walk-throughs</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-green-100 p-1 text-green-600">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm">Document conditions for liability protection</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-green-100 p-1 text-green-600">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm">Accelerate permitting with accurate maps and visuals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
