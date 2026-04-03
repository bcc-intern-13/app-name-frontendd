

const CVChecker = () => {
    return (
        <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <h2 className="text-lg font-semibold">CV Analyzer</h2>
                <p className="mt-2 text-sm text-slate-600">
                Seberapa layak CV-mu? .
                </p>
                <button className="mt-4 w-full rounded-xl bg-violet-600 px-3 py-2 text-white hover:bg-violet-700">
                Analisis CV (Premium)
                </button>
            </div>
        </div>
    )
}

export default CVChecker