'use server';

async function addProperty(formData) {
    console.log("formdata: ", formData.get("name")) // 'name' is one of form properties (PropertyAddForm.jsx)
    console.log("formdata: ", formData.getAll("amenities")) // also 'amenities'
}

export default addProperty;