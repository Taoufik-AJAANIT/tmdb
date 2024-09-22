import CastType from "@/types/cast-type";

type Crew = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: CastType;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  department: string;
  job: string;
  character: null
};

export default Crew;
