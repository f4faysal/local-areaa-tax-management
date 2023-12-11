export const getBaseUrl = () => {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://up-tax-manager-core-service.vercel.app/api/v1"
  );
};
