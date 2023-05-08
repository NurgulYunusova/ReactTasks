/* eslint-disable react/jsx-key */

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function UserData({ data }) {
  return (
    <>
      {data &&
        data.map(({ id, name, email, company: { name: companyName } }, i) => (
          <tr>
            <th scope="row">{i}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{companyName}</td>
            <td>
              <Link to={`/users/posts/${id}`} className="btn btn-primary">
                See Posts
              </Link>
            </td>
          </tr>
        ))}
    </>
  );
}

export default UserData;
