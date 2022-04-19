import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createFavorite } from "../../store/favorites";
import { loadBusiness } from "../../store/businesses";

import '../BusinessPage/BusinessPage.css';

const Favorite = ({businessId, userId, businessName, businessCoverPhoto}) => {
  const dispatch = useDispatch();

  const businesses = useSelector((state) => state?.businesses)
  const business = useSelector((state) => businesses[businessId])

  const [favorite, setFavorite] = useState(false);

  const addToFavorites = async (e) => {
    // if (!userId) {
    //   let smiley = ':)';
    //   return (
    //     <h2>Please log in or sign up to continue {smiley}</h2>
    //   )
    // }
    e.preventDefault();
    let addedFavorite;

    console.log('user id------------------', userId)
    let payload = {
      businessId,
      userId,
      businessName,
      businessCoverPhoto,
    }

    addedFavorite = await dispatch(createFavorite(payload));

    if (addedFavorite) {
      setFavorite(true);
      // await dispatch(loadReviewsByBusiness(businessId));
      return window.alert('Added to favorites!');
      // return history.push('/');
    }
  }

  useEffect(() => {
    dispatch(loadBusiness(businessId));
    // setSelectedTab(<Services />);
  }, [dispatch, businessId]);


  return (
    <>
      <div className='heart-biz-page'>
        {favorite ? (
          <i class="fa-solid fa-heart fa-lg"></i>
        ) : (
          <i
            class="fa-regular fa-heart fa-lg"
            onClick={(e) => addToFavorites(e)}
          ></i>
        )}
        {/* <i class="fa-solid fa-heart fa-lg"></i> */}
      </div>
    </>
  );
};

export default Favorite;
