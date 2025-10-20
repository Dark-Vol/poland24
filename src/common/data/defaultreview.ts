export const defaultReview = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));

  return {
    fullName: userData ? `${userData?.firstName} ${userData?.lastName}` : "",
    email: userData?.email || "",
    text: "",
    store: "",
    rating: 4,
  };
};
