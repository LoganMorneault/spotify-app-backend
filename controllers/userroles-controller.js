import * as userrolesDao from "../users/userroles-dao.js"

const createUserRoles = async(req, res) => {
    const newUR = req.body;
    const insertedUR = await userrolesDao.createUserRoles(newUR);
    res.json(insertedUR);
}

const findUserRoles = async(req, res) => {
    const urs = await userrolesDao.findUserRoles();
    res.json(urs);
}

const findUserRolesByUid = async (req, res) => {
    const userID = req.params.uid;
    console.log(req.params);
    const userroles = await userrolesDao.findUserRolesByUID(userID);
    res.json(userroles);
}

const updateUserRoles = async(req, res) => {
    const uidToUpdate = req.params.uid;
    const updates = req.body;
    const status = await userrolesDao.updateUserRoles(uidToUpdate, updates);
    res.json(status);
}

const deleteUserRoles = async(req, res) => {
    const uidToDelete = req.params.uid;
    const status = await userrolesDao.deleteUserRoles(uidToDelete);
    res.json(status);
}

const UserRolesController = (app) => {
    app.post('/api/userroles', createUserRoles);
    app.get('/api/userroles', findUserRoles);
    app.get('/api/userroles/:uid', findUserRolesByUid);
    app.put('/api/userroles/:uid', updateUserRoles);
    app.delete('/api/userroles/:uid', deleteUserRoles);
}

export default UserRolesController;