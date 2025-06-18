import React, { useEffect } from 'react';

export default function TermsOfUse() {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);
    return (
        <div className='policy-container' style={{ paddingLeft: 24, paddingRight: 24, paddingTop: 30 }}>
            <h1 style={{ marginBottom: 16 }}>Terms of Use</h1>

            <p style={{ marginBottom: 16 }}>
                By accessing, using or attempting to use the Exion Pay App and website, you agree to be legally bound by these Terms and Conditions, our Privacy Policy, and any other policy posted on our website. If you do not agree, you may not use the Service.
            </p>

            <section style={{ marginBottom: 24 }}>
                <h2>1. Background</h2>
                <p>
                    These Terms apply specifically to the Exion Pay App service. In case of conflict with the Privacy Policy, these Terms shall prevail.
                </p>
            </section>

            <section style={{ marginBottom: 24 }}>
                <h2>2. Description of the Service</h2>
                <p>
                    Exion Pay allows users to use stablecoins for everyday financial transactions, such as merchant and bill payments, as they would with fiat currency.
                </p>
            </section>

            <section style={{ marginBottom: 24 }}>
                <h2>3. Eligibility</h2>
                <ul style={{ paddingLeft: 20 }}>
                    <li>You must be at least 18 years of age.</li>
                    <li>You must meet all KYC/AML requirements.</li>
                    <li>You must not be sanctioned by the US, UK, or EU.</li>
                    <li>You must not reside in a sanctioned country.</li>
                </ul>
            </section>

            <section style={{ marginBottom: 24 }}>
                <h2>4. Account Registration</h2>
                <p>
                    You must register using your email. A Blockchain wallet will be created for you. All transactions are your responsibility. Regularly check your account and notify us of any discrepancies.
                </p>
            </section>

            <section style={{ marginBottom: 24 }}>
                <h2>5. Data Protection</h2>
                <p>
                    We collect and protect your PII (Personally Identifiable Information) as per our Privacy Policy. By creating an account, you consent to our use of your data for service provision and support.
                </p>
            </section>

            <section style={{ marginBottom: 24 }}>
                <h2>6. Transactions</h2>
                <ul style={{ paddingLeft: 20 }}>
                    <li>Ensure correct fiat amount and recipient account details.</li>
                    <li>We are not liable for user input errors.</li>
                    <li>Your wallet must be under your full control and ownership.</li>
                </ul>
            </section>

            <section style={{ marginBottom: 24 }}>
                <h2>7. Service Use</h2>
                <ul style={{ paddingLeft: 20 }}>
                    <li>You accept our exchange rate as final.</li>
                    <li>Available payment methods vary by jurisdiction.</li>
                    <li>Transactions are final once completed; we hold no further liability.</li>
                    <li>You must ensure all information provided is accurate.</li>
                    <li>We use third-party payment processors; we are not liable for their delays.</li>
                    <li>Transaction limits may apply at our discretion.</li>
                    <li>You are responsible for any taxes on transactions.</li>
                    <li>Report unauthorized access to info@exion.finance immediately.</li>
                </ul>
            </section>

            <section style={{ marginBottom: 24 }}>
                <h2>8. Prohibited Use</h2>
                <ul style={{ paddingLeft: 20 }}>
                    <li>Do not use the service for any unlawful or fraudulent activity.</li>
                    <li>Do not transmit malware or malicious code.</li>
                    <li>Do not infringe on IP rights or reverse engineer the platform.</li>
                    <li>Do not allow others to access the service using your credentials.</li>
                </ul>
            </section>

            <section style={{ marginBottom: 24 }}>
                <h2>9. Transaction Cancellation</h2>
                <p>
                    If we cannot complete your transaction, we may refund your digital assets. However, we will only notify you if legally permitted.
                </p>
            </section>

            <section style={{ marginBottom: 24 }}>
                <h2>10. Representations</h2>
                <ul style={{ paddingLeft: 20 }}>
                    <li>You meet the eligibility requirements.</li>
                    <li>Your information is accurate and complete.</li>
                    <li>You comply with all applicable laws.</li>
                    <li>You own and control your wallets and accounts.</li>
                </ul>
            </section>

            <section style={{ marginBottom: 24 }}>
                <h2>11. Indemnification</h2>
                <p>
                    You agree to indemnify Exion Pay against any loss or claim arising from your use of the service or breach of these terms.
                </p>
            </section>

            <section style={{ marginBottom: 24 }}>
                <h2>12. Limitation of Liability</h2>
                <ul style={{ paddingLeft: 20 }}>
                    <li>Our liability is limited to a refund of your digital asset.</li>
                    <li>We are not liable for third-party acts, government actions, or technical issues beyond our control.</li>
                    <li>The service is provided “as is” without any warranties.</li>
                </ul>
            </section>

            <section style={{ marginBottom: 24 }}>
                <h2>13. Account Closure</h2>
                <p>
                    You may close your account at any time. We may also close your account for violations of these Terms or at the request of legal authorities.
                </p>
            </section>

            <section style={{ marginBottom: 24 }}>
                <h2>14. Dispute Resolution</h2>
                <p>
                    Disputes will be resolved via binding arbitration. You waive your right to jury trial and class action lawsuits.
                </p>
            </section>

            <section style={{ marginBottom: 24 }}>
                <h2>15. Risk Disclaimer</h2>
                <p>
                    Digital assets are volatile and involve risk. You acknowledge these risks and agree not to use the service for speculative trading. Exion Pay does not offer financial advice.
                </p>
            </section>
        </div>
    );
}
