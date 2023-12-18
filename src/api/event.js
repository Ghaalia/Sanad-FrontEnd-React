import { async } from "q";
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

=
const getEventById = async (eventId) => {

  const res = await instance.get(`/api/event/${eventId}`);
  return res.data;
};

export { createOneEvent, getAllEvents, getEventById };
const getParticipationsByEvent = async (eventId) => {
  const res = await instance.get(`/participation/event/`, eventId);
  return res.data;
};
