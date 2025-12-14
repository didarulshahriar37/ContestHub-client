const uploadImageToImgBB = async (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);

    const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_img_host_key}`,
        {
            method: "POST",
            body: formData,
        }
    );

    const data = await res.json();
    return data.data.display_url;
};

export default uploadImageToImgBB;