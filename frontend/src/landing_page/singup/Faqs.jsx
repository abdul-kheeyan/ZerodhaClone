import React, { useState } from 'react';

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      padding: '60px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    wrapper: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    heading: {
      fontSize: '32px',
      fontWeight: '500',
      color: '#424242',
      marginBottom: '40px'
    },
    faqItem: {
      borderBottom: '1px solid #e5e7eb',
      paddingBottom: '20px',
      marginBottom: '20px'
    },
    questionWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
      paddingTop: '20px'
    },
    question: {
      fontSize: '18px',
      fontWeight: '400',
      color: '#424242',
      margin: 0,
      flex: 1
    },
    arrow: {
      fontSize: '20px',
      color: '#666',
      transition: 'transform 0.3s ease',
      marginLeft: '20px'
    },
    arrowOpen: {
      transform: 'rotate(180deg)'
    },
    answer: {
      fontSize: '16px',
      color: '#666',
      lineHeight: '1.6',
      marginTop: '16px',
      paddingLeft: '0'
    },
    progressBar: {
      height: '3px',
      backgroundColor: '#387ed1',
      width: '80px',
      marginTop: '8px'
    }
  };

  const faqs = [
    {
      question: 'What is a Zerodha account?',
      answer: 'A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally.'
    },
    {
      question: 'What documents are required to open a demat account?',
      answer: 'You need PAN card, Aadhaar card, a cancelled cheque or bank statement, your photograph, and income proof (for F&O segment). The entire process is paperless and can be completed online through e-KYC.'
    },
    {
      question: 'Is Zerodha account opening free?',
      answer: 'Yes, opening a Zerodha account is completely free. There are no account opening charges. However, there is an Annual Maintenance Charge (AMC) of ₹300 + GST per year.'
    },
    {
      question: 'Are there any maintenance charges for a demat account?',
      answer: 'Yes, Zerodha charges an Annual Maintenance Charge (AMC) of ₹300 + GST per year for the demat account. This is charged at the end of the financial year.'
    },
    {
      question: 'Can I open a demat account without a bank account?',
      answer: 'No, a bank account is mandatory to open a demat account. You need to link your bank account for fund transfers and to receive dividends, sale proceeds, and other credits.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <h1 style={styles.heading}>FAQs</h1>

        {faqs.map((faq, index) => (
          <div key={index} style={styles.faqItem}>
            <div 
              style={styles.questionWrapper}
              onClick={() => toggleFAQ(index)}
            >
              <h3 style={styles.question}>{faq.question}</h3>
              <span 
                style={{
                  ...styles.arrow,
                  ...(openIndex === index ? styles.arrowOpen : {})
                }}
              >
                ▼
              </span>
            </div>
            <div style={styles.progressBar}></div>
            {openIndex === index && (
              <p style={styles.answer}>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}