type Experience = {
  title: string
  company: string
  date: string
}

const ExperienceCard = ({ experiences }: { experiences: Experience[] }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold">Pengalaman Kerja</h2>
      <div className="mt-3 space-y-3">
        {experiences.map((item) => (
          <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <p className="text-sm font-semibold text-slate-800">{item.title}</p>
            <p className="text-xs text-slate-500">{item.company}</p>
            <p className="text-xs text-slate-500">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExperienceCard
