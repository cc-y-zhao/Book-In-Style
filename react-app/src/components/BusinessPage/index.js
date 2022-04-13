import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";

const BusinessPage = () => {
  const dispatch = useDispatch();
  const { businessIdString } = useParams();
  const businessId = parseInt(businessIdString);

  const user_id = useSelector((state) => state.session.user?.id);

  let showChannel = false;

  return (
    <>
      <h2>Business</h2>
    </>
  );
};

export default BusinessPage;
