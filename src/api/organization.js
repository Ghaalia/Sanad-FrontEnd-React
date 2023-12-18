import { instance } from ".";

const getProfile = async () => {
  const res = await instance.get("/api/org/get-my-profile");
  return res.data;
};

const getAllOrganizations = async () => {
  const res = await instance.get(`/api/org/allOrganizations`);
  return res.data;
};

const OrgApproveById = async (orgId) => {
  const res = await instance.put(`/api/org/approve`, orgId);
  return res.data;
};

const OrgRejectById = async (orgId) => {
  const res = await instance.put(`/api/org/reject`, orgId);
  return res.data;
};

const getOrganizationsById = async (orgId) => {
  const res = await instance.get(`/api/org/${orgId}`);
  return res.data;
};

export {
  getProfile,
  getAllOrganizations,
  OrgApproveById,
  OrgRejectById,
  getOrganizationsById,
};
