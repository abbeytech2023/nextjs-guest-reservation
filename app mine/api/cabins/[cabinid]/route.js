import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  const { cabinid } = params;

  .log(params);

  try {
    const [cabin, getBookedDates] = await Promise.all([
      getCabin(cabinid),
      getBookedDatesByCabinId(cabinid),
    ]);
    return Response.json({ cabin, getBookedDates });
  } catch {}

  return Response.json({ message: "cabin not found" });
}
// export async function POST() {

// }
