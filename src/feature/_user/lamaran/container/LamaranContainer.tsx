'use client'

import { useState } from 'react'
import { AplikasiDetail } from '../components/AplikasiDetail'
import { RekomendasiCard } from '../components/RekomendasiCard'
import { AplikasiCard } from '../components/AplikasiCard'

type TabType = 'terkirim' | 'diproses' | 'interview' | 'ditolak'

interface Application {
  id: string
  position: string
  company: string
  workType: 'Remote' | 'On-site' | 'Hybrid'
  employmentType: 'Full - time' | 'Part - time' | 'Contract'
  status: {
    sent: boolean
    hrReviewed: boolean
    interview: boolean
    offering: boolean
    selected: boolean
  }
  interviewScheduled: boolean
  interviewDate?: string
  rejectionDate?: string
  appliedDate: string
}

const DUMMY_APPLICATIONS: Application[] = [
  {
    id: '1',
    position: 'UI/UX Designer',
    company: 'Tokopedia',
    workType: 'Remote',
    employmentType: 'Full - time',
    status: {
      sent: true,
      hrReviewed: false,
      interview: false,
      offering: false,
      selected: false,
    },
    interviewScheduled: false,
    appliedDate: '10 Maret 2026',
  },
  {
    id: '2',
    position: 'UI/UX Designer',
    company: 'Tokopedia',
    workType: 'Remote',
    employmentType: 'Full - time',
    status: {
      sent: true,
      hrReviewed: true,
      interview: false,
      offering: false,
      selected: false,
    },
    interviewScheduled: false,
    appliedDate: '10 Maret 2026',
  },
  {
    id: '3',
    position: 'UI/UX Designer',
    company: 'Tokopedia',
    workType: 'Remote',
    employmentType: 'Full - time',
    status: {
      sent: true,
      hrReviewed: true,
      interview: true,
      offering: false,
      selected: false,
    },
    interviewScheduled: true,
    interviewDate: '16 Maret 2026',
    appliedDate: '10 Maret 2026',
  },
]

const RECOMMENDATIONS = [
  { id: '1', company: 'Gojek', type: 'Aksesibilitas' },
  { id: '2', company: 'Gojek', type: 'Aksesibilitas' },
  { id: '3', company: 'Gojek', type: 'Aksesibilitas' },
  { id: '4', company: 'Gojek', type: 'Aksesibilitas' },
]

export default function LamaranContainer() {
  const [activeTab, setActiveTab] = useState<TabType>('terkirim')
  const [selectedApplication, setSelectedApplication] = useState<string | null>(null)

  const getFilteredApplications = () => {
    switch (activeTab) {
      case 'terkirim':
        return DUMMY_APPLICATIONS.filter(app => app.status.sent && !app.status.hrReviewed)
      case 'diproses':
        return DUMMY_APPLICATIONS.filter(app => app.status.hrReviewed && !app.status.interview)
      case 'interview':
        return DUMMY_APPLICATIONS.filter(app => app.status.interview)
      case 'ditolak':
        return []
      default:
        return []
    }
  }

  const filteredApplications = getFilteredApplications()

  const getTabCount = (tab: TabType): number => {
    switch (tab) {
      case 'terkirim':
        return DUMMY_APPLICATIONS.filter(app => app.status.sent && !app.status.hrReviewed).length
      case 'diproses':
        return DUMMY_APPLICATIONS.filter(app => app.status.hrReviewed && !app.status.interview).length
      case 'interview':
        return DUMMY_APPLICATIONS.filter(app => app.status.interview).length
      case 'ditolak':
        return 2
      default:
        return 0
    }
  }

  return (
    <div className="min-h-screen pt-34">
      <div className="bg-bl-01 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="h2-bold mb-2">Lamaran Saya</h1>
          <p className="text-gray-600">Pantau status semua lamaranmu dalam satu tempat</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab('terkirim')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'terkirim'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Terkirim ({getTabCount('terkirim')})
              </button>
              <button
                onClick={() => setActiveTab('diproses')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'diproses'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Diproses ({getTabCount('diproses')})
              </button>
              <button
                onClick={() => setActiveTab('interview')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'interview'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Interview ({getTabCount('interview')})
              </button>
              <button
                onClick={() => setActiveTab('ditolak')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'ditolak'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Ditolak ({getTabCount('ditolak')})
              </button>
            </div>

            <div className="space-y-4">
              {filteredApplications.length > 0 ? (
                filteredApplications.map((application) => (
                  <div key={application.id}>
                    <AplikasiCard
                      application={application}
                      isSelected={selectedApplication === application.id}
                      onClick={() => setSelectedApplication(
                        selectedApplication === application.id ? null : application.id
                      )}
                    />
                    
                    {selectedApplication === application.id && (
                      <AplikasiDetail application={application} />
                    )}
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-xl p-12 text-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Belum Ada Lamaran
                  </h3>
                  <p className="text-gray-600">
                    Kamu belum memiliki lamaran di kategori ini
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex justify-end">
              <select className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Terbaru</option>
                <option>Terlama</option>
                <option>A-Z</option>
                <option>Z-A</option>
              </select>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Tips Meningkatkan Peluang</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">
                    Sesuaikan CV
                  </p>
                  <p className="text-xs text-gray-600">
                    dengan deskripsi pekerjaan. Gunakan kata kunci yang sama dengan lowongan.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">
                    Lengkapi Smart Profile
                  </p>
                  <p className="text-xs text-gray-600">
                    agar rekomendasi lowongan makin akurat dan relevan.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">
                    Lamar lebih awal
                  </p>
                  <p className="text-xs text-gray-600">
                    - lowongan yang dilamar dalam 24 jam pertama 3x lebih sering mendapat respons.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">
                    Tambahkan portfolio
                  </p>
                  <p className="text-xs text-gray-600">
                    untuk posisi kreatif atau teknis agar peluangmu meningkat signifikan.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Rekomendasi Untukmu</h3>
              <div className="space-y-3">
                {RECOMMENDATIONS.map((rec) => (
                  <RekomendasiCard key={rec.id} recommendation={rec} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}