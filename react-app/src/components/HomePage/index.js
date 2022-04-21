import React from "react";
import { NavLink } from "react-router-dom";
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
  let params1 = "Women's-Haircuts";

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
      <h1 className='discover'>Discover & book local beauty professionals</h1>
      <div className='find-pros'>
        <h2>Find top pros by service</h2>
      </div>
      <div>
        <div className='services-homepage-top'>

          <NavLink className='no-underline' key={1} exact to={`/businesses/categories/Women's-Haircuts`}>
            <div className='service-pic-label'>
              <div className='homepage-img-1'>
              </div>
              <div className='service-label'>WOMEN'S HAIRCUT
              </div>
            </div>
          </NavLink>

          <NavLink className='no-underline' key={2} exact to={`/businesses/categories/Lashes`}>
            <div className='service-pic-label'>
              <div className='homepage-img-2'></div>
              <div className='service-label'>LASHES</div>
            </div>
          </NavLink>

          <NavLink className='no-underline' key={3} exact to={`/businesses/categories/Men's-Haircuts`}>
            <div className='service-pic-label'>
              <div className='homepage-img-3'></div>
              <div className='service-label'>MEN'S HAIRCUT</div>
            </div>
          </NavLink>

          <NavLink className='no-underline' key={4} exact to={`/businesses/categories/Spas`}>
            <div className='service-pic-label'>
              <div className='homepage-img-4'></div>
              <div className='service-label'>SPA TREATMENT</div>
            </div>
          </NavLink>

          <NavLink className='no-underline' key={5} exact to={`/businesses/categories/Nail-Salons`}>
            <div className='service-pic-label'>
              <div className='homepage-img-5'></div>
              <div className='service-label'>NAILS</div>
            </div>
          </NavLink>
        </div>

        <div className='services-homepage-top'>

          <NavLink className='no-underline' key={6} exact to={`/businesses/categories/Kid's-Haircuts`}>
            <div className='service-pic-label'>
              <div className='homepage-img-6'></div>
              <div className='service-label'>KID'S HAIRCUT</div>
            </div>
          </NavLink>

          <NavLink className='no-underline' key={7} exact to={`/businesses/categories/Hair-Styling`}>
            <div className='service-pic-label'>
              <div className='homepage-img-7'></div>
              <div className='service-label'>HAIR STYLING</div>
            </div>
          </NavLink>

          <NavLink className='no-underline' key={8} exact to={`/businesses/categories/Makeup`}>
            <div className='service-pic-label'>
              <div className='homepage-img-8'></div>
              <div className='service-label'>MAKEUP</div>
            </div>
          </NavLink>

          <NavLink className='no-underline' key={9} exact to={`/businesses/categories/Hair-Coloring`}>
            <div className='service-pic-label'>
              <div className='homepage-img-9'></div>
              <div className='service-label'>HAIR COLORING</div>
            </div>
          </NavLink>

          <NavLink className='no-underline' key={10} exact to={`/businesses/categories/Perms`}>
            <div className='service-pic-label'>
              <div className='homepage-img-10'></div>
              <div className='service-label'>PERM</div>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default HomePage;
