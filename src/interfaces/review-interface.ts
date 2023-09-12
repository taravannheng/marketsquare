export default interface ReviewInterface {
  _id: string;
  productID: string;
  userID: string | null;
  username: string | null;
  profileUrl: string | null;
  rating: number;
  comment: string;
  createdAt: string;
  isDeleted: boolean;
  deletedAt: string | null;
}