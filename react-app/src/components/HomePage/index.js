import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect, useHistory, NavLink } from "react-router-dom";

import { loadBusiness, loadAllBusinesses } from "../../store/businesses";

const HomePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // const businesses = useSelector((state) => state?.businesses?.businesses_list)
  // console.log('businesses om businesses page-------------', businesses)
  // const userId = useSelector((state) => state.session.user?.id);


  // let showBusinesses = false;
  // if (businesses) showBusinesses = true;

  // useEffect(() => {
  //   dispatch(loadAllBusinesses());
  // }, [dispatch]);

  // const handleEditRedirect = (e) => {
  //   e.preventDefault();
  //   return history.push(`/businesses/${businessIdParsed}/edit`)
  //   // return <Redirect to={`/businesses/${businessIdParsed}/edit`}/>
  // }

  return (
    <>
      <div>
        <img
          className='home-main-img'
          src='/images/homepage.png'
          width='100%'
        />
      </div>
      <h2 className='find-pros'>Find top pros by service</h2>
    </>
  );
};

export default HomePage;
