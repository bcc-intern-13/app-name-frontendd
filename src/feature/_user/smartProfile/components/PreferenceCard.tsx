type Pref = {
  bidang: string
  tipeKerja: string
  status: string
}

const PreferenceCard = ({ preferences }: { preferences: Pref }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold">Preferensi Kerja</h2>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {Object.entries(preferences).map(([key, value]) => (
          <div key={key} className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
            <p className="text-xs font-medium text-slate-400 uppercase">{key === 'bidang' ? 'Bidang Minat' : key === 'tipeKerja' ? 'Tipe Kerja' : 'Status'}</p>
            <p className="mt-1 text-sm font-semibold text-slate-800">{value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PreferenceCard
