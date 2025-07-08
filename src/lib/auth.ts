import { User } from "../Types/user";

export async function loginUser(): Promise<User> {
  const response = await fetch("https://randomuser.me/api/?results=1&nat=us");
  const data = await response.json();
  const user = data.results[0];
  return {
    name: {
      first: user.name.first,
      last: user.name.last,
    },
    email: user.email,
  };
}

export function saveUser(user: User): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("user", JSON.stringify(user));
  }
}

export function getUser(): User | null {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }
  return null;
}

export function logoutUser(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("user");
  }
}