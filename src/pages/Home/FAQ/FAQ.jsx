import React, { useState } from 'react';

const FAQ = () => {
  const [faq, setFaq] = useState([
    {
      question: "How do I create an account?",
      answer: "To join ContestHub, click the <a href='/auth/register' class='text-blue-600 hover:underline'>Sign Up</a> button on the top right corner and fill in your details. You can also sign in using Google for faster access.",
      open: false
    },
    {
      question: "How can I create a contest?",
      answer: "After logging in as a Contest Creator, go to your dashboard → <strong>Add New Contest</strong>. Fill in the contest name, description, prize, deadline, entry fee, and type, then submit for admin approval.",
      open: false
    },
    {
      question: "How do I participate in a contest?",
      answer: "Browse contests on the <strong>All Contests</strong> page, select a contest, and click <strong>Register / Pay</strong>. Complete the payment, and you are officially registered.",
      open: false
    },
    {
      question: "How is the winner selected?",
      answer: "Winners are declared by the contest creator after the deadline based on the submissions. You can see the winner's name and photo in the contest details section.",
      open: false
    },
    {
      question: "Can I submit my task after registering?",
      answer: "Yes! After successful registration, a <strong>Submit Task</strong> button will appear in the contest details. You can provide your entry links or files and submit before the deadline.",
      open: false
    },
    {
      question: "How can I pay the contest entry fee?",
      answer: "We support secure payments via integrated gateways like Paypal and Stripe. Just click <strong>Register / Pay</strong> and follow the instructions.",
      open: false
    },
    {
      question: "Can I track my contests and winnings?",
      answer: "Absolutely! Your dashboard shows <strong>My Participated Contests</strong>, <strong>My Winning Contests</strong>, and detailed statistics including win percentage.",
      open: false
    },
    {
      question: "How can I contact support?",
      answer: "If you face any issues, click <a href='/contact' class='text-blue-600 hover:underline'>Contact Support</a> or email us at <strong>support@contesthub.com</strong>.",
      open: false
    },
    {
      question: "How do I become a contest creator?",
      answer: "Any registered user can request to become a creator. Admins will approve your request, and once approved, you can create and manage contests from your dashboard.",
      open: false
    },
    {
      question: "Is my payment information safe?",
      answer: "Yes! All payments are processed securely using trusted payment gateways. We never store your sensitive payment information on our servers.",
      open: false
    }
  ]);

  const toggleFaq = (index) => {
    setFaq(faq.map((item, i) => {
      if (i === index) {
        item.open = !item.open;
      } else {
        item.open = false;
      }
      return item;
    }));
  };

  return (
    <section className="mt-20 mb-15">
      <div className="mx-auto px-5 md:px-20">
        <div className="mx-auto text-center mb-12">
          <h2 className="font-bold text-3xl md:text-4xl">Frequently Asked Questions</h2>
          <p className="mx-auto mt-3 text-lg md:text-xl">Find answers to common questions about ContestHub</p>
        </div>
        <div className="mx-auto space-y-4">
          {faq.map((item, index) => (
            <div 
              key={index} 
              className="transition-all duration-300 
                         border border-gray-200 dark:border-gray-700 
                         cursor-pointer rounded-xl
                         shadow-sm hover:shadow-md"
            >
              <button 
                type="button" 
                className="flex items-center justify-between w-full px-6 py-5 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl transition"
                onClick={() => toggleFaq(index)}
                aria-expanded={item.open}
              >
                <span className="flex text-lg md:text-xl font-semibold">{item.question}</span>
                <svg 
                  className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${item.open ? 'rotate-180' : ''}`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out px-6 ${item.open ? 'max-h-96 py-4' : 'max-h-0 py-0'}`}
              >
                <p className="text-base md:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: item.answer }}></p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 dark:text-gray-400 text-base mt-12">
          Didn’t find the answer you are looking for?{' '}
          <a href="/contact" className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition">
            Contact our support
          </a>
        </p>
      </div>
    </section>
  );
};

export default FAQ;