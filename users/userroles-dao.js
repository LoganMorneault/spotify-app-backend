import UserRolesModel from "./userroles-model.js";

export const findUserRoles = () => UserRolesModel.find();
export const findUserRolesByUID = (userID) => UserRolesModel.findOne({ uid: userID });
export const createUserRoles = (ur) => UserRolesModel.create(ur);
export const deleteUserRoles = (userID) => UserRolesModel.deleteOne({ uid: userID })
export const updateUserRoles = (userID, ur) => UserRolesModel.updateOne({ uid: userID }, { $set: ur })