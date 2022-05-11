import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createFavorite, deleteFavorite } from "../../store/favorites";
import { loadBusiness } from "../../store/businesses";

import '../BusinessPage/BusinessPage.css';

const Favorite = ({business, businessId, userId, businessName, businessCoverPhoto}) => {
  const dispatch = useDispatch();


  const user = useSelector((state) => state?.session?.user);

  let favorited;
  if (business.is_favorited === true) favorited = true;
  else favorited = false;

  const addToFavorites = async (e) => {

    e.preventDefault();

    if (!user) return window.alert('Please log in to start adding to favorites');

    let addedFavorite;

    let payload = {
      businessId,
      userId,
      businessName,
      businessCoverPhoto,
    }

    addedFavorite = await dispatch(createFavorite(payload));

    if (addedFavorite) {
      favorited = true;
      await dispatch(loadBusiness(businessId));
      return;
    }
  }

  const removeFromFavorites = async (e) => {
    e.preventDefault()

    let removedFavorite;

    let payload = {
      userId,
      businessId,
    }

    removedFavorite = await dispatch(deleteFavorite(payload))

    if (removedFavorite) {
      favorited = false;
      await dispatch(loadBusiness(businessId));
    }
  }

  useEffect(() => {
    dispatch(loadBusiness(businessId));
  }, [dispatch, businessId]);


  return (
    <>
      <div className='heart-biz-page'>
        {favorited ? (
          <i
            class="fa-solid fa-heart fa-lg"
            onClick={(e) => removeFromFavorites(e)}
          ></i>

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
