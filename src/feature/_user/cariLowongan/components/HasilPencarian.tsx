import JobCard from "@/shared/components/JobCard";
import { jobCardData } from "../../beranda/data/jobCardData";


const HasilPencarian = () => {
    return (
        <div className="space-y-4">
            <h3 className="h3-semibold">Hasil Pencarian</h3>

            <div className="bg-white p-4 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {jobCardData.map((job, index) => (
                    <JobCard key={index} job={job} />
                ))}
            </div>
        </div>

        
    );
};

export default HasilPencarian;