import React from 'react';

interface MetaContent {
  tag: string;
  title: string;
  version: string;
}

export default function HomePage() {

  const metaContent: MetaContent = {
    tag: 'Welcome Back!',
    title: 'OPENSOURCE',
    version: 'Version 1.0.0-beta',
  };

  return (
    <main>
      <div className="viewheight__container">
        <div className="center-xy__content">
          <small className="fw-bold">{metaContent.tag}</small>
          <h1 className="pb-3">{metaContent.title}</h1>
          <a className="btn btn-outline__theme fw-bold" href="#">Coming Soon</a>
          <div className="d-flex justify-content-center mt-5">
            <small className="fw-bold">&#x1F4E6; {metaContent.version}</small>
          </div>
        </div>
      </div>
    </main>
  );
}
