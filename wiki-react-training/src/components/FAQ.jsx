import { useState } from "react";
import FAQItem from "./FAQItem";

const FAQ_DATA = [
  {
    id: 1,
    question: "What is iGEM?",
    answer:
      "iGEM is an international synthetic biology competition where teams design and build projects that solve real-world problems.",
  },
  {
    id: 2,
    question: "What does the Cornell iGEM team do?",
    answer:
      "We research, design, and build a synthetic biology project each year, then document and present our work.",
  },
  {
    id: 3,
    question: "How do I join the team?",
    answer:
      "Recruitment happens during the school year. Watch for announcements and apply during the open call.",
  },
  {
    id: 4,
    question: "Do I need prior lab experience?",
    answer:
      "No. We welcome students from different backgrounds and provide training across wet lab, modeling, and wiki.",
  },
  {
    id: 5,
    question: "What roles are available?",
    answer:
      "Common roles include wet lab, dry lab/modeling, wiki, design, and outreach.",
  },
  {
    id: 6,
    question: "How can I contribute if I am new?",
    answer:
      "Start with smaller tasks, learn from mentors, and build confidence with hands-on practice.",
  },
];

function FAQ() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  const handleExpandAll = () => {
    setOpenId("all");
  };

  const handleCollapseAll = () => {
    setOpenId(null);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-header">
        <h2>FAQ</h2>
        <div className="faq-actions">
          <button className="faq-button" type="button" onClick={handleExpandAll}>
            Expand All
          </button>
          <button
            className="faq-button"
            type="button"
            onClick={handleCollapseAll}
          >
            Collapse All
          </button>
        </div>
      </div>
      <div className="faq-list">
        {FAQ_DATA.map((item) => {
          const isOpen = openId === "all" || openId === item.id;
          return (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={isOpen}
              onToggle={() => handleToggle(item.id)}
            />
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;
