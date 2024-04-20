import React from 'react';
import { PAGE_HOME_TEXT } from 'constants/fixedText/pageHome';
import { Link } from 'react-router-dom';

const PageHome: React.FC = () => {
  return (
    <section className='prose prose-orange mx-auto text-end px-5 md:p-0'>
      <h2 className='mt-10'>{PAGE_HOME_TEXT.title}</h2>
      <p className="text-justify">{PAGE_HOME_TEXT.desc}</p>
      <Link to={PAGE_HOME_TEXT.link} target='_blank'>
        <h3>{PAGE_HOME_TEXT.contactTitle}</h3>
      </Link>
    </section>
  );
};

export default PageHome;
