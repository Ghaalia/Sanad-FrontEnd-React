import { instance } from ".";

const getAllOrganizations = async () => {
  const res = await instance.get(`/api/org/allOrganizations`);
  return res.data;
};

const OrgApproveById = async (orgId) => {
  const res = await instance.put(`/api/org/approve`, orgId);
  return res.data;
};
export { getAllOrganizations, OrgApproveById };
