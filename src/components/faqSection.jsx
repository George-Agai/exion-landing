import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What is Exion and how does it work?",
            answer:
                "Exion is a digital platform that lets you buy, send, receive and spend stablecoins instantly. It connects with local payment systems for smooth crypto-to-cash and cash-to-crypto transactions.",
        },
        {
            question: "What currencies does Exion support?",
            answer:
                "Currently, Exion supports stablecoins such as cUSD, cKES, USDT and USDC, and fiat rails in KES (Kenya). We’re expanding to NGN (Nigeria) and other regions soon.",
        },
        {
            question: "How long does a transaction take?",
            answer:
                "Most Exion transactions are processed instantly. However, depending on network congestion or mobile money provider delays, it can take a few extra minutes.",
        },
        {
            question: "Do I need to understand crypto to use Exion?",
            answer:
                "No. Exion is designed for everyone. You’ll see your balance in familiar currencies like KES or USD, even though transactions run securely on blockchain rails behind the scenes.",
        },
        {
            question: "How safe is my money on Exion?",
            answer:
                "Exion uses regulated custodial wallets and stablecoin rails built on Celo. Transactions are recorded on-chain for transparency, and we follow strict KYC/AML procedures in line with local regulations.",
        },
        {
            question: "How do merchants benefit from Exion?",
            answer:
                "Merchants enjoy instant settlement in KES or USD stablecoins, lower fees compared to Visa/Mastercard/M-PESA paybill and easy API integration for POS, e-commerce and mobile apps.",
        },
        {
            question: "What are Exion’s fees?",
            answer:
                "Deposits and withdrawals cost about 1%, merchant payments around 0.5-1% and cross-border transfers only 1.5-2%, far lower than traditional remittance fees of 7-15%.",
        },
        {
            question: "How is Exion different from M-PESA or banks?",
            answer:
                "Exion works across borders instantly, uses stablecoins that protect against currency devaluation and is open to DeFi, Web3 wallets and decentralized apps.",
        },
        {
            question: "How do I get started?",
            answer:
                "Simply download the Exion app from Google Play Store, sign up with your mobile number and start sending, paying and withdrawing instantly.",
        },
    ];


    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="faq-section">
            <div className="faq-badge">
                <span>FAQs</span>
            </div>

            <h1 className="faq-heading">Frequently Asked Questions</h1>
            <p className="faq-description">
                Here are some common questions users have asked about Exion. From payments to security and beyond.
            </p>

            <div className="faq-container">
                {faqs.map((faq, index) => (
                    <div
                        className={`faq-item ${activeIndex === index ? "active" : ""}`}
                        key={index}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="faq-question">
                            <p>{faq.question}</p>
                            {activeIndex === index ? (
                                <IoIosArrowUp size={22} color="#00C48F" />
                            ) : (
                                <IoIosArrowDown size={22} color="#00C48F" />
                            )}
                        </div>

                        <div
                            className="faq-answer"
                            style={{
                                maxHeight: activeIndex === index ? "200px" : "0px",
                            }}
                        >
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;