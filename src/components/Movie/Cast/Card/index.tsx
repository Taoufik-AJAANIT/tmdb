import Cast from "@/types/cast";
import Image, { StaticImageData } from "next/image";
import MalePlaceholder from '@/../public/pictures/male-placeholder.svg'
import FemalePlaceholder from '@/../public/pictures/femal-placeholder.svg'
import Crew from "@/types/crew";


const placeholders : { [key: number]: StaticImageData } = {
    1: FemalePlaceholder,
    2: MalePlaceholder,
    0: MalePlaceholder,
}
function Card({ data }: { data: Cast | Crew }) {
    const src = data.profile_path ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL_132_132}${data.profile_path}` : placeholders[data.gender];

    return <div className="flex flex-row">
        <Image width={66} height={66} src={src} alt={data.name} className="rounded-lg"/>
        <div className="flex justify-center flex-col ml-6">
            <h3 className="text-neutral font-bold">{data.name}</h3>
            <p className="text-neutral font-light">{data.character || data.job}</p>
        </div>
    </div>;
}

export default Card;
