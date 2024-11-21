const FAQ = () => {
  const faqs = [
    {
      question: "What is EduPro?",
      answer: "EduPro is an online learning platform offering a variety of courses to help you advance your career.",
    },
    {
      question: "How do I enroll in a course?",
      answer: "To enroll in a course, simply browse our course catalog, select the course you're interested in, and click the 'Enroll' button.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers.",
    },
    {
      question: "Can I get a refund?",
      answer: "Yes, we offer a 30-day money-back guarantee on all our courses. If you're not satisfied, you can request a refund within 30 days of purchase.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
      <div className="mt-8 space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
            <p className="mt-2 text-sm text-gray-500">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;