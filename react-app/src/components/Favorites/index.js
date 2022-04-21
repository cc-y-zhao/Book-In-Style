import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createFavorite, deleteFavorite } from "../../store/favorites";
import { loadBusiness } from "../../store/businesses";

import '../BusinessPage/BusinessPage.css';

const Favorite = ({business, businessId, userId, businessName, businessCoverPhoto}) => {
  const dispatch = useDispatch();

  const businesses = useSelector((state) => state?.businesses)
  const user = useSelector((state) => state?.session?.user);


  // const business = useSelector((state) => businesses[businessId])

  console.log('business in the favorites comp-------', business);
  // const [favorite, setFavorite] = useState(false);
  let favorited;
  if (business.is_favorited === true) favorited = true;
  else favorited = false;

  const addToFavorites = async (e) => {
    // if (!userId) {
    //   let smiley = ':)';
    //   return (
    //     <h2>Please log in or sign up to continue {smiley}</h2>
    //   )
    // }
    e.preventDefault();

    if (!user) return window.alert('Please log in to start adding to favorites');

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
      favorited = true;
      await dispatch(loadBusiness(businessId));
      return;
      // return history.push('/');
    }
  }

  const deletedFavoriteAlert = () => window.alert('Removed from favorites');

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
      await dispatch(loadBusiness(businessId))
        .then(() => deletedFavoriteAlert())
      // return window.alert('Removed from favorites');
    }
  }

  useEffect(() => {
    dispatch(loadBusiness(businessId));
    // setSelectedTab(<Services />);
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
