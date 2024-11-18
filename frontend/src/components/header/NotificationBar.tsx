import { Link } from "react-router-dom";

const NotificationBar = () => {
  return (
    <div className="text-sm text-center bg-muted py-2">
      <p>
        Get 25% OFF on your first order.{" "}
        <Link to="#" className="underline text-primary">
          Order Now
        </Link>
      </p>
    </div>
  );
};

export default NotificationBar;
