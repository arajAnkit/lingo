import { auth } from "@clerk/nextjs";

const adminIds = ["user_2e1k9Ine9j8MFF42Ol6LhiYSpWM"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
