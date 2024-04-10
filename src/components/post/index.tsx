import React from 'react';
import { TPostCard } from './type';
import { COLOR_CONTRAST, COLOR_MAIN } from 'constants/styles/colors.constants';
import Button from 'components/button';


const Post: React.FC<TPostCard> = ({ post }) => {
  return (
    <article
      className={`border rounded border-${COLOR_CONTRAST}-200 dark:border-${COLOR_CONTRAST}-500 
                  px-4 py-2
                  text-${COLOR_CONTRAST}-900 dark:text-${COLOR_CONTRAST}-300`}
    >
      <div className="flex space-x-2 items-center text-lg font-medium">
        <h3>
          <span className={`text-${COLOR_MAIN}-600 pr-2`}>#{post.id}</span>
          {post.title}
        </h3>
        <Button/>
      </div>
      <p>{post.body}</p>
    </article>
  );
};

export default Post;
