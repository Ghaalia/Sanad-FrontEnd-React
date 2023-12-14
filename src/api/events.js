import { instance } from ".";

const createEvent = async ({
  event_title,
  event_image,
  event_start_date,
  event_end_date,
  event_start_time,
  event_end_time,
  no_of_volunteer,
  description,
  event_address,
  event_category,
}) => {
  const formData = new FormData();
  formData.append("event_title", event_title);
  formData.append("event_start_date", event_start_date);
  formData.append("event_end_date", event_end_date);
  formData.append("description", description);
  formData.append("event_address", event_address);
  formData.append("event_start_time", event_start_time);
  formData.append("event_end_time", event_end_time);
  formData.append("no_of_volunteer", no_of_volunteer);
  if (event_image) formData.append("event_image", event_image);
  event_category.forEach((categoryId) => {
    formData.append("event_category", categoryId);
  });
  const { data } = await instance.post(`/api/org/create-event`, formData);
  return data;
};

const test = async () => {
  const res = await instance.get("dsjdshjd");
  return res.data;
};

export { createEvent, test };
