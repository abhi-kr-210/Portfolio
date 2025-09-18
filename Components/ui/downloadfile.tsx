"use client";

import React from "react";

type props={
    link:string,
}
export default function DownloadCertificate({link}:props) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <a
        href={link} // file inside /public
        download
        className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 
                   text-white font-semibold shadow-lg transition-all"
      >
        Download Certificate
      </a>
    </div>
  );
}
