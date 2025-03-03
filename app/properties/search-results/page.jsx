import connectDB from "@/config/database";
import Property from "@/models/Property";
import { convertToSerializiableObject } from "@/utils/convertToObjects";

const SearchResultsPage = async ({searchParams}) => {
    await connectDB();

    const { location, propertyType } = await searchParams;

    const locationPattern = new RegExp(location, 'i');

    let query = {
        $or: [
            {name: locationPattern},
            {description: locationPattern},
            {'location.street': locationPattern},
            {'location.city': locationPattern},
            {'location.state': locationPattern},
            {'location.zipcode': locationPattern},
        ]
    }

    if (propertyType && propertyType !== "All"){
        const typePattern = new RegExp(propertyType, 'i');
        query.type = typePattern;
    }

    const propertiesQueryResults = await Property.find(query).lean();
    const properties = convertToSerializiableObject(propertiesQueryResults);

    return ( <div>search results</div> );
}
 
export default SearchResultsPage;