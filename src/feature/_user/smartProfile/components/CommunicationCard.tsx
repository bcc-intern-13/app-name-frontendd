const CommunicationCard = ({ methods }: { methods: string[] }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold">Komunikasi & Kebutuhan Kerja</h2>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {methods.map((method) => (
          <div key={method} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-center text-xs font-semibold text-slate-700">
            {method}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommunicationCard
