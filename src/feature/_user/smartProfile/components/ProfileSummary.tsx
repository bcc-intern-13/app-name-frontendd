type UserProfile = {
  nama: string
  role: string
  email: string
  nohp: string
  kota: string
  usia: string
  pendidikan: string
  status: string
  portfolio: string
}

const ProfileSummary = ({ user }: { user: UserProfile }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold">Data Diri</h2>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {Object.entries(user).map(([key, value]) => (
          <div key={key} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <p className="text-xs font-medium uppercase text-slate-400">{key.replace(/([A-Z])/g, ' $1')}</p>
            <p className="text-sm font-semibold text-slate-800">{value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProfileSummary
