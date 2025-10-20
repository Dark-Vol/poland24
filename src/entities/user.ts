type User = {
  createdDate: number;
  id: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  city?: string;
  post?: string;
  viber?: string;
  telegram?: string;
  role: string;
  photoUrl?: string;
  comment?: string;
};

export default User;
