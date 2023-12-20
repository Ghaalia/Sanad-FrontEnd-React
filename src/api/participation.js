import { instance } from ".";

const getParticipationsById = async (eventId) => {
  const res = await instance.get(`/api/current_event_details/${eventId}`);
  return res.data;
};

const parApproveById = async (particepant) => {
  const res = await instance.put(`/api/particepant/approve`, particepant);
  return res.data;
};

const parRejectById = async (particepant) => {
  const res = await instance.put(`/api/particepant/reject`, particepant);
  return res.data;
};

const parAttended = async (particepant) => {
  const res = await instance.put(`/api/particepant/attended`, particepant);
  return res.data;
};

export { getParticipationsById, parAttended, parRejectById, parApproveById };
