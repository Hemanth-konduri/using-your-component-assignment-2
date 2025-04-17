import React from 'react';
import LikeButton from './likebutton';

const PostCard = ({ post }) => {
  return (
    <div
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '12px',
        maxWidth: '400px',
        backgroundColor: '#f3f4f6'
      }}
    >
          <img
          src={post.profileImage}
          alt={post.username}
          style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '12px' }}
        />
      <h3 style={{ marginBottom: '8px' }}>Username: {post.username}</h3>
      <p style={{ marginBottom: '12px' }}>{post.content}</p>
      <LikeButton initialLiked={post.isLiked} />
    </div>
  );
};

export default PostCard;
