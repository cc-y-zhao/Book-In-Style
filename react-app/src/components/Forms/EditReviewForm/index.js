import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import '../ReviewForm/ReviewForm.css';
import './EditReviewForm.css';
import { editReview, loadReviewsByBusiness, loadReviewsByUser } from "../../../store/reviews";
import { loadBusiness } from "../../../store/businesses";
// import DeleteReviewModal from "../../Modals/DeleteReviewModal";

const EditReviewForm = ({setShowModal, origReview, services, businessName}) => {
  // const dispatch = useDispatch();
  // const history = useHistory();

  // console.log('review in edit review form ----------', origReview);

  // let businessId = origReview.business_id;

  // const businesses = useSelector((state) => state?.businesses);
  // const userId = origReview.user_id;

  // console.log('businesses in review form -------------', businesses);

  // let business;
  // if (businesses) business = businesses[businessId];
  // let services;
  // if (business) services = business.services;
  // let servicesArr;
  // if (services) servicesArr = Object.values(services);

  // console.log('services in review form -------------', services);
  // console.log('services ARRAY in review form -------------', servicesArr);

  // let servicesNamesAndIds = {};
  // servicesArr.forEach((service) => {
  //   let serviceName = service.name;
  //   let serviceId = service.id;
  //   servicesNamesAndIds[serviceName] = serviceId;
  // });

  // let servicesOptions = ['--Select service received--'];
  // servicesArr.forEach((service) => {
  //   servicesOptions.push(service.name);
  // });


  // const ratingsOptions = [
  //   '--Select Rating--',
  //   1,
  //   2,
  //   3,
  //   4,
  //   5,
  // ];

  // const [errors, setErrors] = useState([]);
  // const [rating, setRating] = useState(origReview.rating);
  // const [review, setReview] = useState(origReview.review);
  // const [img1, setImg1] = useState(origReview.img_url_1);
  // const [img2, setImg2] = useState(origReview.img_url_2);
  // const [img3, setImg3] = useState(origReview.img_url_3);
  // const [serviceName, setServiceName] = useState(origReview.service_name);

  // const updateRating = (e) => setRating(e.target.value);
  // const updateReview = (e) => setReview(e.target.value);
  // const updateServiceName = (e) => setServiceName(e.target.value);
  // const updateImg1 = (e) => setImg1(e.target.value);
  // const updateImg2 = (e) => setImg2(e.target.value);
  // const updateImg3 = (e) => setImg3(e.target.value);


  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const serviceId = servicesNamesAndIds[serviceName];
  //   const reviewId = origReview.id;

  //   const payload = {
  //     rating,
  //     review,
  //     serviceId,
  //     businessId,
  //     serviceId,
  //     img1,
  //     img2,
  //     img3,
  //     userId,
  //     reviewId,
  //   };

  //   // console.log('payload-------------', payload)

  //   let data;

  //   data = await dispatch(editReview(payload));

  //   // console.log('data in beofre if data--------------', data)

  //   if (data?.id) {
  //     setErrors([]);

  //     await dispatch(loadReviewsByBusiness(businessId))
  //     await setShowModal(false)
  //     return window.alert('Thanks for updating your review!')
  //     // return history.push(`/profile`);
  //     // return <Redirect to={`/businesses/${data.id}`}/>
  //   } else {
  //     return setErrors(data)
  //   }
  // };

  // useEffect(() => {
  //   dispatch(loadBusiness(businessId));
  // }, [dispatch, businessId]);

  // let disabled = false;
  // if (rating === '--Select Rating--' || review.length < 1) disabled = true;

  const dispatch = useDispatch();

  console.log('review in edit review form ----------', origReview);
  // console.log('business in edit review form ----------', business);

  let businessId = origReview.business_id;
  const userId = origReview.user_id;

  let servicesArr;
  if (services) servicesArr = Object.values(services);

  console.log('services in review form -------------', services);
  console.log('services ARRAY in review form -------------', servicesArr);

  let servicesNamesAndIds = {};
  servicesArr.forEach((service) => {
    let serviceName = service.name;
    let serviceId = service.id;
    servicesNamesAndIds[serviceName] = serviceId;
  });

  let servicesOptions = ['--Select service received--'];
  servicesArr.forEach((service) => {
    servicesOptions.push(service.name);
  });


  const ratingsOptions = [
    '--Select Rating--',
    1,
    2,
    3,
    4,
    5,
  ];

  const [errors, setErrors] = useState([]);
  const [rating, setRating] = useState(origReview.rating);
  const [review, setReview] = useState(origReview.review);
  const [img1, setImg1] = useState(origReview.img_url_1);
  const [img2, setImg2] = useState(origReview.img_url_2);
  const [img3, setImg3] = useState(origReview.img_url_3);
  const [serviceName, setServiceName] = useState(origReview.service_name);

  const updateRating = (e) => setRating(e.target.value);
  const updateReview = (e) => setReview(e.target.value);
  const updateServiceName = (e) => setServiceName(e.target.value);
  const updateImg1 = (e) => setImg1(e.target.value);
  const updateImg2 = (e) => setImg2(e.target.value);
  const updateImg3 = (e) => setImg3(e.target.value);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = servicesNamesAndIds[serviceName];
    const reviewId = origReview.id;

    const payload = {
      rating,
      review,
      serviceId,
      businessId,
      serviceId,
      img1,
      img2,
      img3,
      userId,
      reviewId,
    };

    // console.log('payload-------------', payload)

    let data;

    data = await dispatch(editReview(payload));

    // console.log('data in beofre if data--------------', data)

    if (data?.id) {
      setErrors([]);

      await dispatch(loadReviewsByBusiness(businessId))
      await dispatch(loadReviewsByUser(userId))
      await setShowModal(false)
      return window.alert('Thanks for updating your review!')
      // return history.push(`/profile`);
      // return <Redirect to={`/businesses/${data.id}`}/>
    } else {
      return setErrors(data)
    }
  };

  useEffect(() => {
    dispatch(loadBusiness(businessId));
  }, [dispatch, businessId]);

  let disabled = false;
  if (rating === '--Select Rating--' || review.length < 1) disabled = true;

  return (
    <div className="CreateReviewFormWrapper">
      <div className="CreateBusinessFormHeader">
        <div className='list-biz-title'>Tell us about your experience at {businessName}</div>
      </div>
      <div className="CreatChannelFormBody">
        <form className='create-biz-form' onSubmit={handleSubmit}>
          <div className="CreateBusinessFormErrors">
            <ul>
              {errors && errors.map((error) => <li key={error}>{error}</li>)}
            </ul>
          </div>
          <div>
            <div>Rating: </div>
            <select onChange={updateRating} value={rating}>
              {ratingsOptions.map(rating =>
                <option key={rating}>{rating}</option>
              )}
            </select>
          </div>
          <div>
            <div>Review: </div>
            <textarea
              type="textArea"
              required
              placeholder="Please describe your experience"
              value={review}
              onChange={updateReview}
            />
          </div>
          <div>
            <div>Service:
              <span className='optional-service'>(optional) </span>
            </div>
            <select onChange={updateServiceName} value={serviceName}>
              {servicesOptions.map(service =>
                <option key={service}>{service}</option>
              )}
            </select>
          </div>
          <div>
            <div>Photo:
              <span className='optional-service'>(optional) </span>
            </div>
            <input
              type="text"
              placeholder="Image URL"
              value={img1}
              onChange={updateImg1}
            />
          </div>
          <div>
            <div>Photo:
              <span className='optional-service'>(optional) </span>
            </div>
            <input
              type="text"
              placeholder="Image URL"
              value={img2}
              onChange={updateImg2}
            />
          </div>
          <div>
            <div>Photo:
              <span className='optional-service'>(optional) </span>
            </div>
            <input
              type="text"
              placeholder="Image URL"
              value={img3}
              onChange={updateImg3}
            />
          </div>

          <div className="create-biz-btn">
            <button className='post-review-btn' type="submit" disabled={disabled}>
              Post Updated Review
            </button>
          </div>
        </form>
        {/* <div>
          <DeleteReviewModal setEditReviewModal={setShowModal} businessId={origReview.business_id} reviewId={origReview.id}/>
        </div> */}
      </div>
    </div>
  );
};

export default EditReviewForm;
