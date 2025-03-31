import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CreatePostModal from "./Create";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPosts = async () => {
            const token = localStorage.getItem("token");
           
            try {
                const response = await axios.get("/api/posts/user", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setPosts(response.data.posts);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
    }, []);

    const handleEdit = (id) => {
        navigate(`/edit-post/${id}`);
    };

    const handleDelete = async (id) => {
        const token = localStorage.getItem("token");
        try {
            await axios.delete(`/api/posts/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setPosts(posts.filter((post) => post.id !== id));
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    const handleCreateNew = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-semibold text-gray-800">Posts</h1>
                <button
                    onClick={handleCreateNew}
                    className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
                >
                    Create New
                </button>
            </div>
            <CreatePostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                <table className="min-w-full table-auto border-collapse">
                    <thead className="bg-blue-100">
                        <tr>
                            <th className="px-6 py-3 text-center text-sm font-medium text-gray-600 border-b">Title</th>
                            <th className="px-6 py-3 text-center text-sm font-medium text-gray-600 border-b">Body</th>
                            <th className="px-6 py-3 text-center text-sm font-medium text-gray-600 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {posts.map((post) => (
                            <tr key={post.id} className="border-b hover:bg-gray-50 transition duration-300">
                                <td className="px-6 py-4 text-sm font-medium text-gray-800">{post.title}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{post.body}</td>
                                <td className="px-6 py-4 space-x-2">
                                    <button
                                        onClick={() => handleEdit(post.id)}
                                        className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(post.id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Posts;
