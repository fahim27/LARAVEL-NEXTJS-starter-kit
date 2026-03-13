import React from "react";
import "@/styles/skeleton.css";

export default function SkeletonPost() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-title"></div>
      <div className="skeleton-line"></div>
      <div className="skeleton-line"></div>
    </div>
  );
}
