const homeTypes = [
  // 'chapra' | 'chowchala' | 'adhapaka' | 'paka' | 'bohutal'

  {
    id: "chapra",
    title: "চাপড়া বাড়ি",
  },
  {
    id: "chowchala",
    title: "চাউচালা বাড়ি",
  },
  {
    id: "adhapaka",
    title: "অধাপাকা বাড়ি",
  },
  {
    id: "paka",
    title: "পাকা বাড়ি বা ফ্ল্যাট",
  },
  {
    id: "bohutal",
    title: "বহুতল বা দালান সহ বাড়ি",
  },
];

export const homeTypeOptions = homeTypes?.map((homeType) => {
  return {
    label: homeType?.title,
    value: homeType?.id,
  };
});
