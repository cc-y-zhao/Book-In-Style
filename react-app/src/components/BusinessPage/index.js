import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect, useHistory } from "react-router-dom";

import EditBusinessModal from "../Modals/EditBusinessModal";
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

  if (!(businessIdParsed in businesses)) {
    let sadFace = ':(';
    return (
      <>
        <div className='error-msg'>
          <h2>The page you are looking for could not be found {sadFace}</h2>
        </div>
      </>
    );
  }

  return (
    <>
      {showBusiness && (
        <div className='biz-page-container'>
          <div className='edit-biz'>
            {showEdit && (
              <div className='edit-biz-btn'>
                <EditBusinessModal/>
              </div>
              // <button className='edit-biz-btn' onClick={(e) => handleEditRedirect(e)}>Edit Listing</button>
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
            <div className='biz-pics'>------Additional pics will go here------</div>
          </div>
          <div className='biz-page-bottom'>
            <div className="about-reviews-services">About, Reviews, Services
              <div>{business.description}</div>
            </div>
            <div className='biz-right'>
              <div className='street-address'>{business.street_address} {business.unit}</div>
              <div>{business.city}, {business.state} {business.zip_code}</div>
              <div className='biz-hours-title'>Business Hours</div>
              <div>
                <div>Monday: </div>
                <div>Tuesday: </div>
                <div>Wednesday: </div>
                <div>Thursday: </div>
                <div>Friday: </div>
                <div>Saturday: </div>
                <div>Sunday: </div>
              </div>
            </div>
          </div>

        </div>
      )}
    </>
  );
};

export default BusinessPage;
