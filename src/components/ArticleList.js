import React from 'react';
import Article from './Article'
function ArticleList({posts}) {
    function getPosts() {
        const postsJsx = posts.map((post) => {
          return (
            <Article minutesProp={post.minutes} preview={post.preview} date={post.date} title={post.title} key={`${post.id}-key`}/>
          )
          
        })
      return postsJsx
      }
    return(
        <main>
            {getPosts()}
        </main>
    )
}




export default ArticleList