import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import EditBusinessModal from "../Modals/EditBusinessModal";
import AddServiceModal from "../Modals/AddServiceModal";
// import EditBusinessHoursModal from "../Modals/EditBusinessHoursModal";
import ErrorPage from "../Errors/ErrorPage";

import Services from "../Services";
import Reviews from "../Reviews";
import About from "./About";

import { loadBusiness } from "../../store/businesses";
import { loadReviewsByBusiness } from "../../store/reviews";

import './BusinessPage.css'

const BusinessPage = () => {
  const dispatch = useDispatch();

  const { businessId } = useParams();
  const businessIdParsed = parseInt(businessId);

  const userId = useSelector((state) => state.session.user?.id);
  const businesses = useSelector((state) => state?.businesses)
  const business = useSelector((state) => businesses[businessIdParsed])

  const [selectedTab, setSelectedTab] = useState(<Services/>)

  let servicesTab = document?.getElementById("services-tab");
  let reviewsTab = document?.getElementById("reviews-tab");
  let aboutTab = document?.getElementById("about-tab");
  const [selectedTabTitle, setSelectedTabTitle] = useState(servicesTab)
  if (selectedTabTitle) {
    selectedTabTitle.style.fontWeight = 'bold';
    selectedTabTitle.style.borderBottom = 'solid';
  }


  const onClickServices = async (e) => {
    e.preventDefault();
    setSelectedTabTitle(servicesTab);
    // servicesTab.style.fontWeight = 'bold';
    // servicesTab.style.borderBottom = 'solid';

    // reviewsTab.style.fontWeight = 'normal';
    // reviewsTab.style.borderBottom = 'none';
    // aboutTab.style.fontWeight = 'normal';
    // aboutTab.style.borderBottom = 'none';
    setSelectedTab(<Services />)
  }

  const onClickReviews = async (e) => {
    e.preventDefault();
    setSelectedTabTitle(reviewsTab);
    setSelectedTab(<Reviews />)
  }

  const onClickAbout = async (e) => {
    e.preventDefault();
    setSelectedTabTitle(aboutTab);
    setSelectedTab(<About />)
  }

  useEffect(() => {
    dispatch(loadBusiness(businessIdParsed));
    dispatch(loadReviewsByBusiness(businessIdParsed));
    setSelectedTab(<Services />);
  }, [dispatch, businessIdParsed]);

  // useEffect(() => {
  //   (async () => {
  //     await dispatch(loadBusiness(businessIdParsed));
  //     await setSelectedTab(<Services />);
  //   })();
  // }, [dispatch, businessIdParsed]);

  let showBusiness = false;
  if (business) showBusiness = true;

  let showEdit = false;
  if (userId && business) {
    if (business.owner_id === userId) showEdit = true;
  }

  if (!(businessIdParsed in businesses)) {
    return (
      <>
        <ErrorPage />
      </>
    );
  }

  let showSelectedTab = false;
  if (selectedTab) showSelectedTab = true;


  return (
    <>
      {showBusiness && (
        <div className='biz-page-container'>
          <div className='edit-biz'>
            {showEdit && (
              <div className='edit-listing-btn'>
                <EditBusinessModal/>
              </div>
            )}
            {showEdit && (
              <div className='edit-services-btn'>
                <AddServiceModal businessId={businessIdParsed}/>
              </div>
            )}
          </div>
          <div className="prof-and-heart">
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
              {/* <div className='biz-pics'>------Additional pics will go here------</div> */}
            </div>

            <div className='heart-biz-page'>
              <i class="fa-regular fa-heart fa-lg"></i>
              {/* <i class="fa-solid fa-heart fa-lg"></i> */}
            </div>

          </div>


          <div className='biz-page-bottom'>
            <div className="about-reviews-services">
              <div className='about-reviews-services-nav'>
                <span
                  className='services-title-biz-pg'
                  id='services-tab'
                  onClick={(e) => onClickServices(e)}
                >
                  Services
                </span>
                <span
                  className='reviews-title-biz-pg'
                  id='reviews-tab'
                  onClick={(e) => onClickReviews(e)}
                >
                  Reviews
                </span>
                <span
                  onClick={(e) => onClickAbout(e)}
                  id='about-tab'
                >
                  About
                </span>
              </div>
              {showSelectedTab && (
              <div>
                  {selectedTab}
              </div>
              )}
              {/* -----------------THIS IS WHERE THE SELECTED CONTENT WILL GO--------------- */}
              {/* <div>{business.description}</div> */}
              {/* <div><Services services={services} userId={userId} businessId={businessIdParsed} businessName={business.name}/></div> */}
            </div>



            {/* BOTTOM RIGHT OF PAGE */}
            <div className='biz-bottom-right'>
              <div className='biz-name-bottom'>{business['name']}</div>
              <div className='street-address'>{business.street_address} {business.unit}</div>
              <div className='biz-city'>{business.city}, {business.state} {business.zip_code}</div>
              <div className='biz-hours-title'>Business Hours</div>
              <div className='biz-hours'>
                <div className='biz-days'>
                  <div>Monday:</div>
                  <div>Tuesday:</div>
                  <div>Wednesday:</div>
                  <div>Thursday:</div>
                  <div>Friday:</div>
                  <div>Saturday:</div>
                  <div>Sunday:</div>
                </div>
                <div>
                  <div>{business.hours.monday}</div>
                  <div>{business.hours.tuesday}</div>
                  <div>{business.hours.wednesday}</div>
                  <div>{business.hours.thursday}</div>
                  <div>{business.hours.friday}</div>
                  <div>{business.hours.saturday}</div>
                  <div>{business.hours.sunday}</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}
    </>
  );
};

export default BusinessPage;
