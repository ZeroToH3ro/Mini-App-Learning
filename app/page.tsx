"use client";

import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";
import TelegramAuth from "../components/TelegramAuth";

interface UserData {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  language_code: string;
  is_premeium: boolean;
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user as UserData);
    }
  }, []);

  return (
    <main className="p-4">
      {userData ? (
        <>
          <h1 className="text-2xl font-bold mb-4">User Data</h1>
          <ul>
            <li>Id: {userData.id}</li>
            <li>First Name: {userData.first_name}</li>
            <li>Last Name: {userData.last_name}</li>
            <li>User Name: {userData.username}</li>
            <li>Language Code: {userData.language_code}</li>
            <li>Premium: {userData.is_premeium ? "yes" : "no"}</li>
          </ul>
        </>
      ) : (
        <div>Loading....</div>
      )}
      <TelegramAuth />
    </main>
  );
}
