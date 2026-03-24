
export type CinematicWedding = {
    _id: string;
    name: string;
    imageUrl: string;
    subHeading: string;
    client: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
};

export async function getAllCinematicWeddings(): Promise<CinematicWedding[]> {
    try {
        const response = await fetch('https://pk.thetechthingy.com/api/v1/cinematic-weddings', {
            cache: "no-store",
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch cinematic weddings: ${response.statusText}`);
        }
        const rawData = await response.json();
        if (!Array.isArray(rawData)) return [];

        return rawData.map((item: Record<string, unknown>) => {
            const normalizedSubheading = String(
                item.subHeading ?? item.subheading ?? item.sub_heading ?? ""
            ).trim();

            return {
            _id: String(item._id ?? ""),
            name: String(item.name ?? ""),
            imageUrl: String(item.imageUrl ?? ""),
            subHeading: normalizedSubheading || "Cinematic Wedding Story",
            client: String(item.client ?? ""),
            createdAt: String(item.createdAt ?? ""),
            updatedAt: String(item.updatedAt ?? ""),
            __v: Number(item.__v ?? 0),
            };
        });
    } catch (error) {
        console.error('Error fetching cinematic weddings:', error);
        return [];
    }
}
