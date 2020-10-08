import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

const addListing = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);

  listing.images.forEach((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );

  data.append(
    "location",
    JSON.stringify({ latitude: 37.78825, longitude: -122.4324 })
  );

  // console.log(data);
  return (
    client.post(endpoint, data),
    {
      onUploadProgress: (progress) =>
        onUploadProgress(progres.loaded / progress.total),
    }
  );
};

export default {
  getListings,
  addListing,
};
