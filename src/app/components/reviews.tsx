'use client';
import { useState } from "react";

type Review = {
  name: string;
  email: string;
  comments: string;
};

export default function ReviewBox() {
  const [formData, setFormData] = useState<Review>({
    name: "",
    email: "",
    comments: "",
  });

  const [reviews, setReviews] = useState<Review[]>([]); // Explicit type for reviews
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setReviews((prev) => [...prev, formData]); 
    setSubmitted(true);
    setFormData({ name: "", email: "", comments: "" }); 
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border rounded-md shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Submit a Review</h2>
      {submitted && <p className="text-green-600 mb-4">Thank you for your review!</p>}
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Comments Field */}
        <div className="mb-4">
          <label htmlFor="comments" className="block text-gray-700 font-medium mb-2">
            Comments
          </label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            rows={4}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          Submit Review
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Submitted Reviews:</h3>
        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet. Be the first to comment!</p>
        ) : (
          reviews.map((review, index) => (
            <div key={index} className="bg-gray-100 p-4 my-4 rounded-md shadow">
              <h3 className="text-lg font-semibold">{review.name}</h3>
              <p className="text-sm text-gray-600">{review.email}</p>
              <p className="mt-2">{review.comments}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
