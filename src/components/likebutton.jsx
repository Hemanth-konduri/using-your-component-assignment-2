import React, { useState } from 'react';

const likebutton = ({ initialLiked }) => {
  const [liked, setLiked] = useState(initialLiked);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button
      onClick={toggleLike}
      style={{
        backgroundColor: liked ? 'red' : 'gray',
        color: 'white',
        border: 'none',
        padding: '8px 12px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px'
      }}
    >
      {liked ? 'Liked ❤️' : 'Like 🤍'}
    </button>
  );
};

export default likebutton;
