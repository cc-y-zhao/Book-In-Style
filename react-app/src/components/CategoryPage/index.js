import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import ErrorPage from "../Errors/ErrorPage";
import './CategoryPage.css';
import defaultImage from "../../images/favicon.png";

import { loadBusinessesByCategory } from "../../store/businesses";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const { category } = useParams();

  console.log('category-------------------', category);

  const businesses = useSelector((state) => state?.businesses?.businesses_list)
  // console.log('businesses om businesses page-------------', businesses)



  useEffect(() => {
    dispatch(loadBusinessesByCategory(category))
    .then(() => setIsLoaded(true));
  }, [dispatch, category]);

  // const handleEditRedirect = (e) => {
    //   e.preventDefault();
    //   return history.push(`/businesses/${businessIdParsed}/edit`)
    //   // return <Redirect to={`/businesses/${businessIdParsed}/edit`}/>
    // }
    let categoryName;
    if (category.includes("-")) {
      let arr = category.split("-");
      categoryName = arr[0] + " " + arr[1];

    } else {
      categoryName = category
    }
    let showBusinesses = false;
    if (businesses && isLoaded) showBusinesses = true;

  return (
    <>
      {isLoaded && (
        <>
        {showBusinesses ? (
          <div className='category-page'>
            <h1 className='category-pg-title'>{categoryName}</h1>
            <div className='businesses-in-category'>
              {businesses?.map((business) => {
                return (
                  <div className='each-business-in-category'>
                    <NavLink key={business.id} to={'/businesses/' + business.id}>
                      <img
                        src={business.cover_photo}
                        onError={(e) => {
                          e.target.setAttribute("src", defaultImage);
                        }}
                        alt={`${business.name}`}
                        height="370px"
                        width="360px"
                      />
                    </NavLink>
                    <NavLink className='business-name-category-pg' key={business.id} to={'/businesses/' + business.id}>{business.name}</NavLink>
                  </div>
                );
              })}
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

export default CategoryPage;
