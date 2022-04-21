import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { loadAllBusinesses } from "../../store/businesses";

const CategoryPage = () => {
  const dispatch = useDispatch();
  // const history = useHistory();

  const businesses = useSelector((state) => state?.businesses?.businesses_list)
  // console.log('businesses om businesses page-------------', businesses)
  // const userId = useSelector((state) => state.session.user?.id);


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
          <h3>Browse Businesses</h3>
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
