import { instance } from ".";

const createOneEvent = async (event) => {
  const formData = new FormData();
  for (let key in event) {
    formData.append(key, event[key]);
  }
  const res = await instance.post("/api/event", formData);
  return res.data;
};

const getAllEvents = async () => {
  const res = await instance.get("/api/event");
  return res.data;
};

export { createOneEvent, getAllEvents };
