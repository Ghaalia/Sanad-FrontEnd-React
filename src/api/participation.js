import { instance } from ".";

const getParticipationsById = async (eventId) => {
  const res = await instance.get(`/api/current_event_details/${eventId}`);
  return res.data;
};

export { getParticipationsById };
