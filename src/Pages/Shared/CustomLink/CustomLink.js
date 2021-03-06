import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ border: match ? "3px solid #2C302E" : "none" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }

  export default CustomLink;