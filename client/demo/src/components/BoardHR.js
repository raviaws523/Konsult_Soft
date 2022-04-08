import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";
const BoardAdmin = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getModeratorBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
    );
  }, []);
  
  return (
    <section className="middle">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
        {/* Icon */}
        <div className="p-4 d-inline-flex align-items-center justify-content-center circle bg-light-danger text-danger mx-auto mb-4"><i className="ti-face-smile fs-lg" /></div>
        {/* Heading */}
        <h2 className="mb-2 ft-bold">{content}</h2>
      </div>
    </div>
  </div>
</section>

  );
};
export default BoardAdmin;