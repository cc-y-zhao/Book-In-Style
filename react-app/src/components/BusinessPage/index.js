import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect, useHistory } from "react-router-dom";

import EditBusinessModal from "../Modals/EditBusinessModal";
import AddServiceModal from "../Modals/AddServiceModal";
import EditBusinessHoursModal from "../Modals/EditBusinessHoursModal";
import Services from "../Services";

import ErrorPage from "../Errors/ErrorPage";
import { loadBusiness } from "../../store/businesses";

import './BusinessPage.css'

const BusinessPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { businessId } = useParams();
  const businessIdParsed = parseInt(businessId);

  const businesses = useSelector((state) => state?.businesses)
  const business = useSelector((state) => businesses[businessIdParsed])
  const services = business?.services;
  const userId = useSelector((state) => state.session.user?.id);


  useEffect(() => {
    dispatch(loadBusiness(businessIdParsed));
  }, [dispatch, businessIdParsed]);

  let showBusiness = false;
  if (business) showBusiness = true;

  let showEdit = false;
  if (userId && business) {
    if (business.owner_id === userId) showEdit = true;
  }

  let disableBookingForm = true;
  if (userId) disableBookingForm = false;


  if (!(businessIdParsed in businesses)) {
    return (
      <>
        <ErrorPage />
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
            {showEdit && (
              <div className='edit-biz-btn'>
                <AddServiceModal businessId={businessIdParsed}/>
              </div>
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
              {/* <div>{business.description}</div> */}
              <div><Services services={services} userId={userId} businessId={businessIdParsed}/></div>
            </div>
            <div className='biz-right'>
              <div className='street-address'>{business.street_address} {business.unit}</div>
              <div>{business.city}, {business.state} {business.zip_code}</div>
              <div className='edit-biz'>
                {showEdit && (
                  <div className='edit-biz-btn'>
                    <EditBusinessHoursModal businessId={businessIdParsed}/>
                  </div>
                )}
              </div>
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
