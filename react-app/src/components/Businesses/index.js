import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { loadAllBusinesses } from "../../store/businesses";

const BusinessesPage = () => {
  const dispatch = useDispatch();

  const businesses = useSelector((state) => state?.businesses?.businesses_list)

  let showBusinesses = false;
  if (businesses) showBusinesses = true;

  useEffect(() => {
    dispatch(loadAllBusinesses());
  }, [dispatch]);

  // const handleEditRedirect = (e) => {
  //   e.preventDefault();
  //   return history.push(`/businesses/${businessIdParsed}/edit`)
  //   // return <Redirect to={`/businesses/${businessIdParsed}/edit`}/>
  // }

  return (
    <>
      {showBusinesses && (
        <div>
          <h2>Browse Businesses</h2>
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

export default BusinessesPage;
