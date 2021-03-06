import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import './ReviewForm.css';
import { createReview, loadReviewsByBusiness } from "../../../store/reviews";

const CreateReviewForm = ({showModal, setShowModal, businessId}) => {
  const dispatch = useDispatch();

  const businesses = useSelector((state) => state?.businesses);
  const user = useSelector((state) => state?.session?.user);
  const userId = user.id;

  let business;
  if (businesses) business = businesses[businessId];
  let services;
  if (business) services = business.services;
  let servicesArr;
  if (services) servicesArr = Object.values(services);

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
  const [rating, setRating] = useState('--Select Rating--');
  const [review, setReview] = useState('');
  // const [img1, setImg1] = useState('');
  // const [img2, setImg2] = useState('');
  // const [img3, setImg3] = useState('');
  const [serviceName, setServiceName] = useState('');

  const updateRating = (e) => setRating(e.target.value);
  const updateReview = (e) => setReview(e.target.value);
  const updateServiceName = (e) => setServiceName(e.target.value);
  // const updateImg1 = (e) => setImg1(e.target.value);
  // const updateImg2 = (e) => setImg2(e.target.value);
  // const updateImg3 = (e) => setImg3(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = servicesNamesAndIds[serviceName];

    const payload = {
      rating,
      review,
      serviceId,
      businessId,
      userId,
    };

      // img1,
      // img2,
      // img3,

    let data;

    data = await dispatch(createReview(payload));

    if (data?.id) {
      setErrors([]);

      await dispatch(loadReviewsByBusiness(businessId))
      // const showModalFalse = await setShowModal(false)
      return setShowModal(false);
      // return window.alert('Thanks for submitting your review!');
      // return history.push(`/profile`);
      // return <Redirect to={`/businesses/${data.id}`}/>
    } else {
      return setErrors(data)
    }
  };

  let disabled = false;
  if (rating === '--Select Rating--' || review.length < 1) disabled = true;


  return (
    <div className="CreateReviewFormWrapper">
      <div className="CreateBusinessFormHeader">
        <div className='review-biz-title'>
          <div className='tell-us'>Tell us about your experience at</div>
          <div className='list-biz-title'>{business?.name}</div>
        </div>
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
              className='textarea-review'
              rows="10"
              col="33"
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


          <div className="create-biz-btn">
            <button type="submit" disabled={disabled}>
              Post Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateReviewForm;


          // <div>
          //   <div>Photo:
          //     <span className='optional-service'>(optional) </span>
          //   </div>
          //   <input
          //     type="text"
          //     placeholder="Image URL"
          //     value={img1}
          //     onChange={updateImg1}
          //   />
          // </div>
          // <div>
          //   <div>Photo:
          //     <span className='optional-service'>(optional) </span>
          //   </div>
          //   <input
          //     type="text"
          //     placeholder="Image URL"
          //     value={img2}
          //     onChange={updateImg2}
          //   />
          // </div>
          // <div>
          //   <div>Photo:
          //     <span className='optional-service'>(optional) </span>
          //   </div>
          //   <input
          //     type="text"
          //     placeholder="Image URL"
          //     value={img3}
          //     onChange={updateImg3}
          //   />
          // </div>
