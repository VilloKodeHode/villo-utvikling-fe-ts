import { getMessages } from "next-intl/server";

export const getDictionary = async (locale: string) => {
  const messages = await getMessages({ locale });
  return messages as any;
};
