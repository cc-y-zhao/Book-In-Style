import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";

import { loadBusiness } from "../../store/businesses";

const BusinessPage = () => {
  const dispatch = useDispatch();
  const { businessId } = useParams();
  const businessIdParsed = parseInt(businessId);

  const businesses = useSelector((state) => state?.businesses)
  const business = useSelector((state) => businesses[businessIdParsed])
  const user_id = useSelector((state) => state.session.user?.id);


  let showBusiness = false;
  if (business) showBusiness = true;

  useEffect(() => {
    dispatch(loadBusiness(businessIdParsed));
  }, [dispatch, businessIdParsed]);

  return (
    <>
      {showBusiness && (
        <h2>{business['name']}</h2>
      )}
    </>
  );
};

export default BusinessPage;
