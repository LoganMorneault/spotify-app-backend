import mongoose from "mongoose";
import userSchema from './userroles-schema.js';

const UserRolesModel = mongoose.model('UserRoleModel', userSchema);
export default UserRolesModel;