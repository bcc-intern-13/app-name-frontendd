'use client'

interface ApplicationStatus {
  sent: boolean
  hrReviewed: boolean
  interview: boolean
  offering: boolean
  selected: boolean
}

interface Application {
  id: string
  position: string
  company: string
  workType: 'Remote' | 'On-site' | 'Hybrid'
  employmentType: 'Full - time' | 'Part - time' | 'Contract'
  status: ApplicationStatus
  interviewScheduled: boolean
  interviewDate?: string
  appliedDate: string
}

interface Props {
  application: Application
  isSelected: boolean
  onClick: () => void
}

export function AplikasiCard({ application, isSelected, onClick }: Props) {
  const getCurrentStep = () => {
    if (application.status.selected) return 5
    if (application.status.offering) return 4
    if (application.status.interview) return 3
    if (application.status.hrReviewed) return 2
    if (application.status.sent) return 1
    return 0
  }

  const currentStep = getCurrentStep()

  const steps = [
    { label: 'Dikirim', active: currentStep >= 1 },
    { label: 'Diterima HR', active: currentStep >= 2 },
    { label: 'Interview', active: currentStep >= 3 },
    { label: 'Offering', active: currentStep >= 4 },
    { label: 'Selesai', active: currentStep >= 5 },
  ]

  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-xl p-6 shadow-sm cursor-pointer transition-all hover:shadow-md ${
        isSelected ? 'ring-2 ring-blue-500' : ''
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            {application.position}
          </h3>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-gray-600">{application.company}</span>
            <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full border border-blue-200">
              {application.workType}
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600 text-sm">{application.employmentType}</span>
          </div>
        </div>

        {application.interviewScheduled && (
          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-200">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Dipanggil Interview
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-2 mb-2">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
              step.active ? 'bg-green-500' : 'bg-gray-200'
            }`}>
              {step.active ? (
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              )}
            </div>
            <span className={`text-[10px] text-center ${
              step.active ? 'text-green-600 font-semibold' : 'text-gray-400'
            }`}>
              {step.label}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
        <span className="text-xs text-gray-500">
          Dilamar {application.appliedDate}
        </span>
        <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
          {isSelected ? 'Sembunyikan Detail' : 'Lihat Detail'}
        </button>
      </div>
    </div>
  )
}