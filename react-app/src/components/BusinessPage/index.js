import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";

import { loadBusiness } from "../../store/businesses";

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
