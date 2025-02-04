import connectDB from "@/config/database";
import Property from "@/models/Property";

export const GET = async (request, {params}) => {
    try {
        await connectDB();
        const property = await Property.findById(params.id);
        if (!property)
            return new Response("Property not found", {status: 404});

        return new Response(property, {
            status: 200,
        });
    } catch (error){
        return new Response(JSON.stringify({message: "Something went wrong"}), {
            status: 500,
        });
    }
};

// go to http://localhost:3000/api/properties/[id] to GET this response