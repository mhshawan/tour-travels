import useServices from '../../../hooks/useServices';
import { useParams } from 'react-router-dom';
import './BookNow.css';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';

const BookNow = () => {
    const { serviceID } = useParams();
    const { services } = useServices();
    const { register, handleSubmit, reset,  formState: { errors } } = useForm();
    const {user} = useAuth();

    const matchedCourse = services.find(service => service._id === serviceID);
    const {uid} = user;
    const onSubmit = data => {
        const orderView = 'Pending';
        const userID = uid;
        data.order = matchedCourse;
        data.orderStatus = orderView;
        data.userID = userID;
        console.log(data);
        fetch(`https://frozen-gorge-80443.herokuapp.com/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                alert('Your Booking Has Been Placed Successfully!!');
                reset();
            }
        })

    };
    return (
        <>
        <Container className='my-5'>
            <Row>
                <Row>
                    <Col>
                        <div className="service-title mb-5">
                            <h2>Package Detail</h2>
                        </div>
                    </Col>
                </Row>
                <Col md={6} sm={6} xs={12}>
                    <div className="single-service-img">
                        <img src={matchedCourse?.img} alt="SingleServiceIMG" className='img-fluid mt-5' />
                    </div>
                </Col>
                <Col md={6} sm={6} xs={12}>
                    <div className="single-service-detail text-start">
                        <h3>{matchedCourse?.name}</h3>
                        <p>Details: <br /><span>{matchedCourse?.desc}</span></p>
                        <h5>Duration: <span>{matchedCourse?.duration}</span></h5>
                        <h4>Price: <span>${matchedCourse?.price}</span></h4>
                        <Link to='/contact'>Contact us</Link>
                    </div>
                </Col>
            </Row>
        </Container>
        <div className="book-now-bg pt-5 pb-5">
        <Container>
        <h1 className="book-now-title pb-3">Place-Order</h1>
        <form className="book-now-form mx-auto w-50 mb-2 pt-5" onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue={user.displayName} {...register("name")} />
          <input defaultValue={user.email} {...register("email", { required: true })} />
          {errors.email && <span className="error">This field is required</span>}
          <input placeholder="Address" defaultValue="" {...register("address")} />
          <input placeholder="City" defaultValue="" {...register("city")} />
            <input placeholder="phone number" defaultValue="" {...register("phone")} />        
          <input type="submit" className="book-now-btn"/>
        </form>        
      </Container>
      </div>
      </>
    );
};

export default BookNow;