// src/components/admin/CommentModeration.js
import React, { useState } from 'react';

const CommentModeration = () => {
  const [comments, setComments] = useState([]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Comment Moderation</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <p>Comment moderation interface coming soon...</p>
      </div>
    </div>
  );
};

export default CommentModeration;