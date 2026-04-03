import ProfileSummary from '@/feature/_user/smartProfile/components/ProfileSummary'
import PreferenceCard from '@/feature/_user/smartProfile/components/PreferenceCard'
import CareerMappingCard from '@/feature/_user/smartProfile/components/CareerMappingCard'
import SkillsCard from '@/feature/_user/smartProfile/components/SkillsCard'
import ExperienceCard from '@/feature/_user/smartProfile/components/ExperienceCard'
import CommunicationCard from '@/feature/_user/smartProfile/components/CommunicationCard'
import CVChecker from '../components/CVChecker'
import SideLayout from './SideBarSmartProfile'
import SideBarSmartProfile from './SideBarSmartProfile'

const SmartProfileContainer = () => {
  const user = {
    nama: 'Rizky Maulana',
    role: 'UI/UX Designer - Jakarta',
    email: 'rizky@gmail.com',
    nohp: '+62 81234567890',
    kota: 'Jakarta',
    usia: '27 Tahun (25-30 tahun)',
    pendidikan: 'S1',
    status: 'Sedang mencari kerja',
    portfolio: 'link portfolio',
  }

  const preferences = {
    bidang: 'Teknologi & IT',
    tipeKerja: 'Remote Penuh',
    status: 'Mencari Kerja',
  }

  const careerMapping = {
    rekomendasiUtama: 'Teknologi & IT',
    score: 38,
    kategori: ['UI/UX Designer', 'Frontend Developer', 'Product Designer'],
    idePekerjaan: ['UI/UX Researcher', 'Desainer Visual', 'Team Lead Product'],
  }

  const skills = ['Figma', 'Photoshop', 'Sketch', 'Wireframing', 'Prototyping']

  const experiences = [
    { title: 'UI/UX Designer - Freelance', company: 'Freelance company', date: 'Jan 2024 - Sekarang' },
    { title: 'Frontend Developer Intern', company: 'Startup XYZ', date: 'Jul 2023 - Des 2023' },
  ]

  const communication = ['Tek/Chat', 'Email', 'Zoom', 'Slack']

  return (
    <div className="min-h-screen bg-bl-01 py-6 px-4 md:px-8">
      <div className="mx-auto max-w-6xl md:ml-110 space-y-5 pt-34">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Data Diri</h1>
        <div className="w-full grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="w-full lg:col-span-2 space-y-4">
            <ProfileSummary user={user} />
            <PreferenceCard preferences={preferences} />
            <CareerMappingCard data={careerMapping} />
            <SkillsCard skills={skills} />
            <ExperienceCard experiences={experiences} />
            <CommunicationCard methods={communication} />
            <CVChecker/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmartProfileContainer