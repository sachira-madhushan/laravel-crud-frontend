import React, { use, useState } from "react";
import axios from "axios";
import { data } from "react-router-dom";

const CreatePostModal = ({ isOpen, onClose }) => {
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");

    const handleCreatePost = async () => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.post("/api/posts/create",
                {
                    title: postTitle,
                    body: postBody,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                },
                

            );
            console.log("Post created:", response.data);
            window.location.reload();
            onClose();
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Create Post</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Post Title</label>
                    <input
                        type="text"
                        value={postTitle}
                        onChange={(e) => setPostTitle(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Post Body</label>
                    <textarea
                        value={postBody}
                        onChange={(e) => setPostBody(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 h-24"
                    />
                </div>
                <div className="flex justify-end space-x-2">
                    <button
                        onClick={handleCreatePost}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Create
                    </button>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreatePostModal;
