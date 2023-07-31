// Blog.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';
import Giscus from '@giscus/react';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, [id]);

  return (
    <>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt='cover' />
          <div
            className='blog-desc'
            dangerouslySetInnerHTML={{ __html: blog.description2 || blog.description }}
          />
        </div>
      ) : (
        <EmptyList />
      )}

<Giscus
      id="comments"
      repo="tripti033/My_first_blog_website"
      repoId="R_kgDOKBwu3Q="
      category="Announcements"
      categoryId="DIC_kwDOKBwu3c4CYP0Z"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light_high_contrast"
      lang="en"
      loading="lazy"
    />

    </>
  );
};

export default Blog;
