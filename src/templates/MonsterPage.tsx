import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Wrapper } from '../components/UI';

const Monster = ({ pageContext }) => {
  const { data } = pageContext;
  const datePosted = new Date(data.date_posted).toLocaleDateString('en-GB', { 
    weekday: 'long', 
    month: 'long', 
    year: 'numeric', 
    day: 'numeric' 
  });
  return (
    <Layout>
      <SEO
        title={data.seo.page_title}
        description={data.seo.page_description}
      />
      <Wrapper>
        <h1>
          {data.title}
        </h1>
        <img src={data.featured_image.url} alt={data.featured_image.description} />
        <p><strong>Monster rating: {data.rating} / 5</strong></p>
        <ReactMarkdown>{data.description}</ReactMarkdown>
        <p><small>Posted by <Link to={`/author${data.author[0].url}`}>{data.author[0].title}</Link> on {datePosted}</small></p>
      </Wrapper>
    </Layout>
  );
}

export default Monster;