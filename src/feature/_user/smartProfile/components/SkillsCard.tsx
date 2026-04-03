const SkillsCard = ({ skills }: { skills: string[] }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold">Keahlian</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-800">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SkillsCard
