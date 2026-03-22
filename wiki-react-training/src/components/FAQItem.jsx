function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <button
      className={`faq-item ${isOpen ? "is-open" : ""}`}
      onClick={onToggle}
      type="button"
    >
      <div className="faq-item__question">
        <span>{question}</span>
        <span className="faq-item__icon">{isOpen ? "−" : "+"}</span>
      </div>
      <div className="faq-item__answer">
        <p>{answer}</p>
      </div>
    </button>
  );
}

export default FAQItem;
