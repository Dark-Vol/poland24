type Request = {
  id: string;
  createdDate: number;
  articles: {
    articleName: string;
    comment: "";
  }[];
  email: string;
  name: string;
  phoneNumber: number;
  status: Status;
  comment?: string;
};

export enum Status {
  NEW = "new",
  IS_CONSIDERED = "isConsidered",
  CLOSED = "closed",
  SUCCESSFUL = "successful",
}

export default Request;
