import api from '@/tools/api';
import Cast from "@/types/cast";
import Card from "@/components/Movie/Cast/Card";
import Crew from "@/types/crew";
import CastType from "@/types/cast-type";


async function CastComponent({ movieId }: { movieId: number }) {
    const { data } = await api.get({
        url: `/movie/${movieId}/credits`
    }) as {
        data: {
            cast: Cast[],
            crew: Crew[],
            id: number,
        }
    }
    const crew = data.crew
        .reduce((acc: { [key: string]: Crew[] }, current: Crew) => {
            if (current.known_for_department == CastType.Acting) return acc
            if (!acc[current.known_for_department]) {
                acc[current.known_for_department] = []
            }
            acc[current.known_for_department].push(current)
            return acc
        }, {})

    return <div className="bg-white p-10 flex flex-col justify-center md:flex-row">
        <div className="w-1/2">
            <div className="flex flex-row">
                <h2 className="text-2xl text-black">Cast</h2>
                <h2 className="text-2xl text-gray-400 ml-1">{data.cast.length}</h2>
            </div>
            {
                data.cast.map((cast: Cast) => {
                    return (
                        <div className="mt-5" key={cast.id}>
                            <Card data={cast}/>
                        </div>)
                })
            }
        </div>
        <div className="w-1/2">
            <div className="flex flex-row">
                <h2 className="text-2xl text-black">Crew</h2>
                <h2 className="text-2xl text-gray-400 ml-1">{data.crew.length}</h2>
            </div>
            {
                Object.keys(crew).map((key: string) => {
                    return <div key={key} className="mt-10">
                        <h2 className="text-neutral font-bold">{key}</h2>

                        {
                            crew[key].map((crew: Crew) => {
                                return (
                                    <div className="mt-5" key={crew.id}>
                                        <Card data={crew}/>
                                    </div>)
                            })
                        }
                    </div>
                })
            }
        </div>
    </div>
}

export default CastComponent;
