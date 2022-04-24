import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import EditBusinessModal from "../Modals/EditBusinessModal";
import AddServiceModal from "../Modals/AddServiceModal";
import { createFavorite } from "../../store/favorites";
import ErrorPage from "../Errors/ErrorPage";

import Services from "../Services";
import Reviews from "../Reviews";
import About from "./About";
import Favorite from "../Favorites";

import { loadBusiness } from "../../store/businesses";
import { loadReviewsByBusiness } from "../../store/reviews";

import defaultImage from "../../images/favicon.png";

import './BusinessPage.css'

const BusinessPage = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const { businessId } = useParams();
  const businessIdParsed = parseInt(businessId);

  const userId = useSelector((state) => state.session.user?.id);
  const businesses = useSelector((state) => state?.businesses)
  const business = useSelector((state) => businesses[businessIdParsed])
  const favorites = useSelector((state) => state?.favorites?.user)

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
    reviewsTab.style.fontWeight = 'normal';
    reviewsTab.style.borderBottom = 'none';
    aboutTab.style.fontWeight = 'normal';
    aboutTab.style.borderBottom = 'none';
    setSelectedTab(<Services />)
  }

  const onClickReviews = async (e) => {
    e.preventDefault();
    setSelectedTabTitle(reviewsTab);
    servicesTab.style.fontWeight = 'normal';
    servicesTab.style.borderBottom = 'none';
    aboutTab.style.fontWeight = 'normal';
    aboutTab.style.borderBottom = 'none';
    setSelectedTab(<Reviews />)
  }

  const onClickAbout = async (e) => {
    e.preventDefault();
    setSelectedTabTitle(aboutTab);
    reviewsTab.style.fontWeight = 'normal';
    reviewsTab.style.borderBottom = 'none';
    servicesTab.style.fontWeight = 'normal';
    servicesTab.style.borderBottom = 'none';
    setSelectedTab(<About />)
  }
  // TO DO: DISPATCH USER'S FAVORITES UPON EVERY PAGE VISIT

  useEffect(() => {
    dispatch(loadBusiness(businessIdParsed))
      .then(() => dispatch(loadReviewsByBusiness(businessIdParsed)))
      .then(() => setSelectedTab(<Services />))
      .then(() => setSelectedTabTitle(servicesTab))
      .then(() => setIsLoaded(true));
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


  let showSelectedTab = false;
  if (selectedTab) showSelectedTab = true;

  function checkImage(url) {
    let image = new Image();
    image.onload = function() {
      if (this.width > 0) {
        return true;
      }
    }
    return false;
  }


  return (
    <>
      {isLoaded && (
        <>
          {showBusiness ? (
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
                  {business?.cover_photo ? (
                    <img
                      className='cover-photo'
                      src={business.cover_photo}
                      onError={(e) => {
                        e.target.setAttribute("src", defaultImage);
                      }}
                      alt={`${business.name}`}
                      height="180px"
                      width="180px"
                    />
                  ) : (
                    <img
                      className='cover-photo'
                      src={defaultImage}
                      alt={`${business.name}`}
                      height="180px"
                      width="180px"
                    />
                  )}
                </div>
                <div className='biz-name'>{business['name']}</div>
                {/* <div className='biz-pics'>------Additional pics will go here------</div> */}
              </div>

              <Favorite business={business} businessId={businessIdParsed} userId={userId} businessName={business.name} businessCoverPhoto={business.cover_photo}/>

              {/* <div className='heart-biz-page'>
                {favorite ? (
                  <i class="fa-solid fa-heart fa-lg"></i>
                ) : (
                  <i
                    class="fa-regular fa-heart fa-lg"
                    onClick={(e) => addToFavorites(e)}
                  ></i>
                )}
                {/* <i class="fa-solid fa-heart fa-lg"></i> */}
              {/* </div>  */}

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
                <div className='street-address'>{business.street_address}</div>
                <div>{business.unit}</div>
                <div className='biz-city'>{business.city}</div>
                <div className='biz-state-zip'>{business.state} {business.zip_code}</div>
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
          ) : (
            <>
              <ErrorPage />
            </>
          )}
        </>

      )}

    </>
  );
};

export default BusinessPage;
