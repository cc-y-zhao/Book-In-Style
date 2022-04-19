import React from "react";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";

// import { loadBusiness, loadAllBusinesses } from "../../store/businesses";
import './HomePage.css';
const HomePage = () => {
  // const dispatch = useDispatch();
  // const history = useHistory();

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
      <div>
        <div className='services-homepage-top'>
          <div className='homepage-img-1'></div>
          <div className='homepage-img-2'></div>
          <div className='homepage-img-3'></div>
          <div className='homepage-img-4'></div>
          <div className='homepage-img-5'></div>
        </div>
        <div className='services-homepage-top'>
          <div className='homepage-img-6'></div>
          <div className='homepage-img-7'></div>
          <div className='homepage-img-8'></div>
          <div className='homepage-img-9'></div>
          <div className='homepage-img-10'></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
