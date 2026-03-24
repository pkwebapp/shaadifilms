
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
        const response = await fetch('https://pk.thetechthingy.com/api/v1/cinematic-weddings');
        if (!response.ok) {
            throw new Error(`Failed to fetch cinematic weddings: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching cinematic weddings:', error);
        return [];
    }
}
