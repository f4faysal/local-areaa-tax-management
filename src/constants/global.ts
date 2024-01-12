const homeTypes = [
  {
    id: "1",
    title: "পাকা বাড়ি",
  },
  {
    id: "2",
    title: "কাঁচা বাড়ি",
  },
];

export const homeTypeOptions = homeTypes?.map((homeType) => {
  return {
    label: homeType?.title,
    value: homeType?.id,
  };
});
