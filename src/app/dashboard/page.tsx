"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getUser } from "@/lib/auth";
import styles from "./dashboard.module.scss";

const DashboardPage: React.FC = () => {
  const router = useRouter();
  const user = getUser();

  useEffect(() => {
    if (!user) {
      router.push("/auth");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {user.name.first} {user.name.last} به داشبورد خوش آمدید!
      </h1>
    </div>
  );
};

export default DashboardPage;
