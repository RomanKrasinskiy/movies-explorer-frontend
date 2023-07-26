import "./Logo.css";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="logo__container">
      <Link className="logo" to="/" />
    </div>
  );
}
