"use client";
import { useParams } from "next/navigation";
import React from "react";

const SingleUser = () => {
  const { slug } = useParams();

  return <div>{slug}</div>;
};

export default SingleUser;
