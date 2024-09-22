import CastType from "@/types/cast-type";

type Cast = {
  adult: boolean;
  gender: number;
  id: number;
  job: string;
  known_for_department: CastType;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

export default Cast;
