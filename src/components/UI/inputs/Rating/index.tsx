import { Rating as MuiRating, RatingProps } from "@mui/material";

const Rating: React.FC<RatingProps> = ({ ...props }) => {
  return <MuiRating {...props} />;
};

export default Rating;
