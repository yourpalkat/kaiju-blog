import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Wrapper } from '../components/UI';

const Author = ({ pageContext }) => {
  const { data } = pageContext;

  return (
    <Layout>
      <SEO
        title={`Author: ${data.title}`}
        description={`Author biography of ${data.title}, a contributor to Kaiju Blog.`}
      />
      <Wrapper>
        <h1>
          {data.title}
        </h1>
        <h2>{data.job_title}</h2>
        <img src={data.photo.url} alt={data.photo.description} />
        <ReactMarkdown>{data.bio}</ReactMarkdown>
      </Wrapper>
    </Layout>
  );
}

export default Author;