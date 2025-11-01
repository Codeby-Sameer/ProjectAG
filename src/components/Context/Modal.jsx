
import { useMultiFormModal } from './ModalContext';
import RealEstateForm from './RealEstateForm';


const MultiFormModal = () => {
  const { isModalOpen, currentForm, closeModal, formData } = useMultiFormModal();

  const renderForm = () => {
    switch (currentForm) {
      case 'real-estate':
        return <RealEstateForm initialData={formData} />;
      case 'contact':
        return <ContactForm initialData={formData} />;
      case 'production-inquiry':
        return <ProductionInquiryForm initialData={formData} />;
      case 'infrastructure-consultation':
        return <InfrastructureConsultationForm initialData={formData} />;
      default:
        return null;
    }
  };

  const getModalTitle = () => {
    switch (currentForm) {
      case 'real-estate':
        return 'Appointment Form';
      case 'contact':
        return 'Contact Us';
      case 'production-inquiry':
        return 'Production Inquiry';
      case 'infrastructure-consultation':
        return 'Infrastructure Consultation';
      default:
        return 'Form';
    }
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-navy">{getModalTitle()}</h2>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {renderForm()}
        </div>
      </div>
    </div>
  );
};

export default MultiFormModal;