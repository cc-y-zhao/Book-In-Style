import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect, useHistory } from "react-router-dom";

import { loadBusiness } from "../../store/businesses";

import './BusinessPage.css'

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
        <div className='biz-page-container'>
          <div>
            {showEdit && (
              <button onClick={(e) => handleEditRedirect(e)}>Edit Listing</button>
            )}
          </div>
          <div className='biz-page-prof'>
            <div>
              <img
                className='cover-photo'
                src={business.cover_photo}
                alt={`${business.name}`}
                height="180px"
                width="180px"
              />
            </div>
            <div className='biz-name'>{business['name']}</div>
            <div>------Additional pics will go here------</div>
          </div>

        </div>
      )}
    </>
  );
};

export default BusinessPage;
