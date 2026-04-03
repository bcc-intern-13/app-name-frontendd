import Image from "next/image";


const BannerCariLowongan = () => {
    return (
        <div>
            <div className="w-full h-100 flex items-center justify-center gap-22">
                <Image src={"/Banner-1.webp"} alt='BannerCariLowongan' width={500} height={500} className='w-94 h-56'/>
                <Image src={"/Banner-2.webp"} alt='BannerCariLowongan' width={500} height={500} className='w-94 h-56'/>
                <Image src={"/Banner-3.webp"} alt='BannerCariLowongan' width={500} height={500} className='w-94 h-56'/>
            </div>
        </div>
    );
};

export default BannerCariLowongan;