"use client";
import React from "react";
import { useRouter } from "next/navigation";

const LearnRouter = () => {
  const router = useRouter();
  console.log("Router",router);
  return (
    <div>
      <h1>Use Router</h1>
      <button type="button" onClick={() => router.push("/admin/dashboard")}>
        Goto Admin Dash
      </button>
    </div>
  );
};

export default LearnRouter;
