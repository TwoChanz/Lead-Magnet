// Email templates for the follow-up sequence

export const emailTemplates = {
  caseStudy: {
    subject: "How We Saved a Developer $50K with Reality Capture",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Hi {{name}},</h2>
        
        <p>Yesterday you downloaded our Reality Capture guide. Today, I want to share a real case study that shows these strategies in action.</p>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #16a34a; margin-top: 0;">Case Study: Riverside Development Project</h3>
          <p><strong>Challenge:</strong> 50-acre mixed-use development with complex topography</p>
          <p><strong>Solution:</strong> Drone mapping + 3D modeling instead of traditional surveying</p>
          <p><strong>Results:</strong></p>
          <ul>
            <li>Reduced site visits from 12 to 3 (75% reduction)</li>
            <li>Caught drainage issue before construction ($30K saved)</li>
            <li>Optimized earthwork calculations ($20K saved)</li>
            <li><strong>Total savings: $50,000+</strong></li>
          </ul>
        </div>
        
        <p>The developer told us: <em>"This technology paid for itself on the first project. We're never going back to the old way."</em></p>
        
        <p>Want to see how this could work for your projects? I'll share more specific strategies in my next email.</p>
        
        <p>Best,<br>Chandler</p>
        
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
        <p style="font-size: 12px; color: #666;">
          <a href="#" style="color: #666;">Unsubscribe</a> | Six1Five Studio
        </p>
      </div>
    `,
  },

  mistakes: {
    subject: "5 Mistakes to Avoid in Land Planning – A Quick Read",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Hi {{name}},</h2>
        
        <p>I've seen hundreds of land development projects over the years. Here are the 5 most expensive mistakes I see teams make:</p>
        
        <div style="background-color: #fef2f2; padding: 15px; border-left: 4px solid #ef4444; margin: 20px 0;">
          <h4 style="color: #dc2626; margin-top: 0;">❌ Mistake #1: Relying on outdated surveys</h4>
          <p>Cost: $15,000-$50,000 in design changes</p>
        </div>
        
        <div style="background-color: #fef2f2; padding: 15px; border-left: 4px solid #ef4444; margin: 20px 0;">
          <h4 style="color: #dc2626; margin-top: 0;">❌ Mistake #2: Not documenting existing conditions</h4>
          <p>Cost: Legal liability + insurance claims</p>
        </div>
        
        <div style="background-color: #fef2f2; padding: 15px; border-left: 4px solid #ef4444; margin: 20px 0;">
          <h4 style="color: #dc2626; margin-top: 0;">❌ Mistake #3: Poor stakeholder communication</h4>
          <p>Cost: 2-6 month delays + relationship damage</p>
        </div>
        
        <div style="background-color: #fef2f2; padding: 15px; border-left: 4px solid #ef4444; margin: 20px 0;">
          <h4 style="color: #dc2626; margin-top: 0;">❌ Mistake #4: Inaccurate earthwork calculations</h4>
          <p>Cost: $10,000-$100,000 in excess trucking</p>
        </div>
        
        <div style="background-color: #fef2f2; padding: 15px; border-left: 4px solid #ef4444; margin: 20px 0;">
          <h4 style="color: #dc2626; margin-top: 0;">❌ Mistake #5: Skipping visualization for permits</h4>
          <p>Cost: 3-12 month approval delays</p>
        </div>
        
        <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #16a34a; margin-top: 0;">✅ The Solution</h3>
          <p>Reality capture technology prevents all of these mistakes. That's why smart developers are making it standard practice.</p>
        </div>
        
        <p>Questions about implementing this on your projects? Just reply to this email.</p>
        
        <p>Best,<br>Chandler</p>
      </div>
    `,
  },

  consultation: {
    subject: "Need Help? Book a Free 30-Min Site Audit Call",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Hi {{name}},</h2>
        
        <p>Over the past week, you've learned about:</p>
        <ul>
          <li>✅ 10 ways reality capture saves money</li>
          <li>✅ A real $50K savings case study</li>
          <li>✅ 5 expensive mistakes to avoid</li>
        </ul>
        
        <p>Now you might be wondering: <em>"How would this work for MY specific projects?"</em></p>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
          <h3 style="margin-top: 0;">Free 30-Minute Site Audit Call</h3>
          <p>I'll review your current process and show you exactly where reality capture could save you the most money.</p>
          
          <a href="https://calendly.com/six1five-studio" 
             style="background-color: #16a34a; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold; margin: 10px 0;">
            📅 Book Your Free Audit Call
          </a>
          
          <p style="font-size: 14px; color: #666; margin-bottom: 0;">No sales pitch. Just actionable insights for your projects.</p>
        </div>
        
        <p><strong>What we'll cover in 15 minutes:</strong></p>
        <ul>
          <li>Quick assessment of your current land development process</li>
          <li>Biggest cost-saving opportunities for your specific projects</li>
          <li>Technology recommendations that fit your budget</li>
          <li>Next steps to get started (if you want to)</li>
        </ul>
        
        <p>These calls typically save developers $20,000+ on their next project. Worth 15 minutes?</p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://calendly.com/six1five-studio" 
             style="background-color: #16a34a; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold;">
            Yes, Book My Free Audit Call
          </a>
        </div>
        
        <p>Best,<br>Chandler @ Six1Five Studio</p>
        
        <p style="font-size: 12px; color: #666;">
          P.S. Not ready for a call? No problem. Just keep this email and reach out when you have a project that could benefit from reality capture.
        </p>
      </div>
    `,
  },
}
