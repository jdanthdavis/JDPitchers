import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    idTag: String,
    species: String,
    plantName: String,
    cross: String,
    selectedFile: String,
    notes: String,
    location: String,
    creator: String,
    likes: { type: [String], default: [] },
})

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;