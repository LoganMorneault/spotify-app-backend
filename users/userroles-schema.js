import mongoose from 'mongoose';
const schema = mongoose.Schema({
    uid: String,
    isAdmin: Boolean,
    isPlaylistCreator: Boolean
}, { collection: "userroles" });
export default schema;