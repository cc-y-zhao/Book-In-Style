import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

import { loadBusinessesByCategory } from "../../store/businesses";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const { category } = useParams();

  console.log('category-------------------', category);

  const businesses = useSelector((state) => state?.businesses?.businesses_list)
  // console.log('businesses om businesses page-------------', businesses)


  let showBusinesses = false;
  if (businesses && isLoaded) showBusinesses = true;

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

  return (
    <>
      {showBusinesses && (
        <div>
          <h3>{categoryName}</h3>
          <div className='all-businesses-container'>
            {businesses?.map((business) => {
              return (
                <div className='each-business-in-businesses'>
                  <NavLink key={business.id} to={'/businesses/' + business.id}>
                    <img
                      src={business.cover_photo}
                      alt={`${business.name}`}
                      height="370px"
                      width="360px"
                    />
                  </NavLink>
                  <NavLink key={business.id} to={'/businesses/' + business.id}>{business.name}</NavLink>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryPage;
