import React, {useState} from "react";
import { useHistory } from "react-router-dom";


const UploadImage = ({businessId}) => {
    const history = useHistory(); // so that we can redirect after the image upload is successful
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image);
        formData.append("business_id", businessId)

        // aws uploads can be a bit slow—displaying
        // some sort of loading message is a good idea
        setImageLoading(true);

        console.log("image: ", image);
        console.log("form data: ", formData);
        console.log('\n\n\n FORM DATA: \n\n\n', formData)

        const res = await fetch('/api/images', {
            method: "POST",
            body: formData,
        });
        if (res.ok) {
            await res.json();
            setImageLoading(false);
            history.push("/");
        }
        else {
            setImageLoading(false);
            // a real app would probably use more advanced
            // error handling
            console.log("error :(");
        }
    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
              type="file"
              accept="image/*"
              onChange={updateImage}
            />
            <input type="hidden" value={businessId} />
            <button type="submit">Submit</button>
            {(imageLoading)&& <p>Loading...</p>}
        </form>
    )
}

export default UploadImage;
