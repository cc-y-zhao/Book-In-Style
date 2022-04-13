import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect, useHistory } from "react-router-dom";

import EditBusinessForm from "../../Forms/EditBusinessForm";

import { loadBusiness } from "../../store/businesses";

const BusinessPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { businessId } = useParams();
  const businessIdParsed = parseInt(businessId);

  const businesses = useSelector((state) => state?.businesses)
  const business = useSelector((state) => businesses[businessIdParsed])
  const userId = useSelector((state) => state.session.user?.id);


  let showBusiness = false;
  if (business) showBusiness = true;

  let showEdit = false;
  if (userId && business) {
    if (business.owner_id === userId) showEdit = true;
  }

  useEffect(() => {
    dispatch(loadBusiness(businessIdParsed));
  }, [dispatch, businessIdParsed]);

  const handleEditRedirect = (e) => {
    e.preventDefault();
    return history.push(`/businesses/${businessIdParsed}/edit`)
    // return <Redirect to={`/businesses/${businessIdParsed}/edit`}/>
  }

  return (
    <>
      {showBusiness && (
        <div>
          <h2>{business['name']}</h2>
          <div>
            {showEdit && (
              <button onClick={(e) => handleEditRedirect(e)}>Edit Listing</button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default BusinessPage;
