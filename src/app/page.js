export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 antialiased font-sans pb-12">
      
      {/* HEADER SECTION: Clean layout for contact and summary */}
      <header className="bg-slate-900 text-white py-12 px-6 sm:px-12 shadow-md">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2">Meenakshi Sankaran</h1>
            <p className="text-xl text-blue-400 font-medium">Business Analytics & Biology Student</p>
          </div>
          <div className="text-sm space-y-1 text-gray-300 md:text-right">
            <p>📍 Tampa, FL</p>
            <p>✉️ <a href="mailto:msankaran@example.com" className="hover:text-blue-400 transition-colors">msankaran@example.com</a></p>
            <p>🔗 <a href="https://github.com/meenakshi-sankaran" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">github.com/meenakshi-sankaran</a></p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-6 border-t border-slate-700 pt-6">
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            Detail-oriented honors student pursuing a dual degree in Business Analytics and Biology. Combines analytical data processing with rigorous laboratory research capabilities. Experienced in leadership, financial tracking, and collaborative project management. Driven to bridge data visualization tools with advanced scientific applications.
          </p>
        </div>
      </header>

      {/* CORE RESUME CONTENT */}
      <div className="max-w-4xl mx-auto px-6 sm:px-12 mt-10 space-y-10">
        
        {/* EDUCATION SECTION */}
        <section aria-label="Education">
          <h2 className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-4 pb-1 border-b border-gray-200">
            Education
          </h2>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
              <div>
                <h3 className="text-lg font-bold text-gray-900">University of South Florida (USF)</h3>
                <p className="text-gray-600">Dual Degree: B.S. in Business Analytics & B.S. in Biology</p>
              </div>
              <p className="text-sm font-medium text-gray-500 sm:text-right">Expected Graduation: 2028</p>
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE SECTION */}
        <section aria-label="Work Experience">
          <h2 className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-4 pb-1 border-b border-gray-200">
            Experience
          </h2>
          <div className="space-y-4">
            {/* Experience Item 1 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Treasurer</h3>
                  <p className="text-sm font-medium text-blue-600">Collegiate Dance Team — USF</p>
                </div>
                <p className="text-sm font-medium text-gray-500 sm:text-right">Mar 2026 – Present</p>
              </div>
              <ul className="mt-3 list-disc list-inside text-gray-600 text-sm space-y-1.5 pl-1">
                <li>Manage comprehensive financial spreadsheets, tracking budgets, dues, and performance funding allocations.</li>
                <li>Coordinate directly with executive board members to systematically minimize team operational overhead.</li>
                <li>Audit financial logs to ensure zero discrepancies before final review submission.</li>
              </ul>
            </div>

            {/* Experience Item 2 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Part-Time Associate</h3>
                  <p className="text-sm font-medium text-blue-600">Retail & Operations</p>
                </div>
                <p className="text-sm font-medium text-gray-500 sm:text-right">May 2026 – Present</p>
              </div>
              <ul className="mt-3 list-disc list-inside text-gray-600 text-sm space-y-1.5 pl-1">
                <li>Handle multi-task workflows under high-volume retail conditions while prioritizing customer satisfaction.</li>
                <li>Manage point-of-sale transactions smoothly, handling financial balances with zero end-of-day variances.</li>
                <li>Optimize inventory management and stock organization layouts to increase shifting speed.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CORE SKILLS SECTION */}
        <section aria-label="Skills">
          <h2 className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-4 pb-1 border-b border-gray-200">
            Technical & Practical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Data & Analytics</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">Tableau</span>
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">Data Visualization</span>
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">Excel Modeling</span>
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">Analytical Logic</span>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Laboratory & Scientific</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">Organic Chemistry Lab</span>
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">Experimental Analysis</span>
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">Data Collection</span>
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">Safety Protocols</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
