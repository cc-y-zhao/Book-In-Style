import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect, useHistory, NavLink } from "react-router-dom";

import { loadBusiness, loadAllBusinesses } from "../../store/businesses";
import './HomePage.css';
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
      <div className='home-main-img-div'>
        {/* <img
          className='home-main-img'
          src='/images/homepage.png'
          width='90%'
          height='400'
        /> */}
      </div>
      <div className='find-pros'>
        <h2>Find top pros by service</h2>
      </div>
    </>
  );
};

export default HomePage;
