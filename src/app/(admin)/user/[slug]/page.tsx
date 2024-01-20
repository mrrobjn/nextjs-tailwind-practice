"use client";

const SingleUser = ({ params }: { params: { slug: string } }) => {
  return <div>{params.slug}</div>;
};

export default SingleUser;
