"use client";
import { useParams } from "next/navigation";
import React from "react";

const singleUser = () => {
  const { slug } = useParams();

  return <div>{slug}</div>;
};

export default singleUser;