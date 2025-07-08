"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import { loginUser, saveUser } from "@/lib/auth";
import styles from "./auth.module.scss";

const AuthPage: React.FC = () => {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^09[0-9]{9}$/;
    return phoneRegex.test(phone);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePhone(phone)) {
      setError("شماره همراه باید با 09 شروع شود و 11 رقم باشد");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const user = await loginUser();
      saveUser(user);
      router.push("/dashboard");
      // } catch (error) {
      //   setError("خطا در ورود. لطفاً دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.floatingForm} onSubmit={handleLogin}>
        <h2>خوش آمدید</h2>
        <p>برای ادامه شماره همراه خود را وارد نماید</p>
        <Input
          label="شماره همراه"
          value={phone}
          onChange={setPhone}
          error={error}
          type="tel"
        />
        {error && <div className={styles.error}>{error}</div>}
        <Button disabled={loading}>
          {loading ? "در حال پردازش..." : "ورود"}
        </Button>
      </form>
    </div>
  );
};

export default AuthPage;
