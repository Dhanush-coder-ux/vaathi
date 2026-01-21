
import Title from '../../../shared/components/common/Title';
import EnrollmentForm from './EnrollmentForm';


const Enrollments = () => {


  return (

    <div className="w-full bg-white ">
    
      <Title
        title="Enrollments"
        subtitle="Join your online session securely"
      />
      <EnrollmentForm/>
    </div>
  );
};

export default Enrollments;