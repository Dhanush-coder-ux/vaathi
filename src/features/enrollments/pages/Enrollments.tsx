
import Title from '../../../shared/components/common/Title';
import EnrollmentForm from './EnrollmentForm';

// Mock data for the dropdown


const Enrollments = () => {


  return (

    <div className="w-full bg-white p-6 ">
    
      <Title
        title="Enrollments"
        subtitle="Join your online session securely"
      />
      <EnrollmentForm/>
    </div>
  );
};

export default Enrollments;