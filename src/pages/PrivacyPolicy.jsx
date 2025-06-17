import React, { useEffect } from 'react';

export default function PrivacyPolicy() {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);
    return (
        <div className='policy-container' style={{ paddingLeft: 24, paddingRight: 24 }}>
            <h1 style={{ marginBottom: 16 }}>Privacy Policy &amp; Security</h1>
            <p style={{ marginBottom: 24 }}>
                Your engagement with and utilization of this website and the Exion Pay Mobile App signify your agreement with the privacy protocols delineated in this Policy. If you are in disagreement, you must refrain from accessing or employing the Website. Exion Pay Finance retains the prerogative to modify this Policy at any given point. Continued use of the website or software subsequent to the publication of such alterations implies your acceptance of the updated policy. It is advisable to periodically visit this page to review the current policy.
            </p>

            <section style={{ marginBottom: 24 }}>
                <h2 style={{ marginBottom: 8 }}>1. Information We Collect</h2>
                <ul style={{ paddingLeft: 20, margin: 0 }}>
                    <li>Your public wallet address</li>
                    <li>Your name, email address, phone number, and other similar details</li>
                    <li>Details of your interactions with us (e.g., customer care queries or complaints)</li>
                    <li>
                        Account information, account numbers, account status, transaction history,
                        transaction and payment details, bank account details, virtual asset details,
                        other financial data
                    </li>
                    <li>Communication Data and Contact Data as well as any direct marketing preferences</li>
                    <li>Statistics and Usage Information on usage of our website(s) and apps</li>
                </ul>
            </section>

            <section style={{ marginBottom: 24 }}>
                <h2 style={{ marginBottom: 8 }}>2. Legal Bases</h2>
                <p>The personal data described above is used by us and by third party service providers acting on our behalf. The legal bases on which we collect, process and transfer your personal data for these purposes are:</p>
                <ul style={{ paddingLeft: 20, margin: 0 }}>
                    <li>Consent (“Consent”)</li>
                    <li>Performance of your contract with us (“Contract”)</li>
                    <li>Compliance with our legal and regulatory obligations (“Legal Obligation”)</li>
                    <li>Our legitimate interests (“Legitimate Interests”)</li>
                </ul>
            </section>

            <section style={{ marginBottom: 24 }}>
                <h2 style={{ marginBottom: 8 }}>3. Sources of Data</h2>
                <p>The personal data relating to you that we hold is generally collected directly from you (e.g. when you make an application for a wallet account).</p>
            </section>

            <section style={{ marginBottom: 24 }}>
                <h2 style={{ marginBottom: 8 }}>4. Recipients of Data</h2>
                <p>We may disclose any of your personal data detailed in section 1 above to third party recipients in connection with the above purposes, including:</p>
                <ul style={{ paddingLeft: 20, margin: 0 }}>
                    <li>Professional advisers, auditors, insurers, and outsourced service providers</li>
                    <li>Government, regulatory and law enforcement authorities as required by law</li>
                </ul>
            </section>

            <section style={{ marginBottom: 24 }}>
                <h2 style={{ marginBottom: 8 }}>5. Retention</h2>
                <p>
                    Exion Pay retains your personal information as long as necessary to offer our services to you.
                    The retention period may vary depending on the data type, country of collection, user category,
                    purposes of collection, and legal requirements.
                </p>
            </section>

            <section style={{ marginBottom: 24 }}>
                <h2 style={{ marginBottom: 8 }}>6. Necessity &amp; Consequences</h2>
                <p>
                    Providing certain information (e.g. Identification Data for KYC/AML checks) is mandatory for us
                    to comply with legal obligations. Failure to provide this information will impact our ability
                    to provide services.
                </p>
            </section>

            <section style={{ marginBottom: 24 }}>
                <h2 style={{ marginBottom: 8 }}>7. Cross-Border Transfers</h2>
                <p>
                    When transferring your personal data outside the country of collection, we ensure lawful transfers
                    using standard contractual clauses and reasonable security measures. You consent to such transfers
                    by providing your data.
                </p>
            </section>

            <section style={{ marginBottom: 24 }}>
                <h2 style={{ marginBottom: 8 }}>8. Your Rights as a Data Subject</h2>
                <ul style={{ paddingLeft: 20, margin: 0 }}>
                    <li>Right to Access</li>
                    <li>Right to Rectification</li>
                    <li>Right to Erasure (right to be forgotten)</li>
                    <li>Right to Restrict or Object to Processing</li>
                    <li>Right to Data Portability</li>
                    <li>Right to Withdraw Consent</li>
                </ul>
                <p style={{ marginTop: 8 }}>
                    These rights are subject to certain limitations or exceptions under applicable law.
                </p>
            </section>

            <section style={{ marginBottom: 24 }}>
                <h2 style={{ marginBottom: 8 }}>9. Data Security</h2>
                <p>
                    We employ commercially reasonable measures (firewalls, encryption, password‑secured databases,
                    SSL) to protect your personal information. However, we cannot guarantee against all unauthorized access.
                </p>
            </section>

            <section style={{ marginBottom: 24 }}>
                <h2 style={{ marginBottom: 8 }}>10. Information Sharing</h2>
                <ul style={{ paddingLeft: 20, margin: 0 }}>
                    <li>Fraud prevention &amp; identity verification providers</li>
                    <li>Operational service providers (audits, legal, marketing, payment processing)</li>
                    <li>Legal &amp; government authorities</li>
                    <li>Business transfers (mergers, acquisitions)</li>
                    <li>Affiliates &amp; subsidiaries</li>
                    <li>Investors (aggregated data)</li>
                    <li>Other third parties with your consent</li>
                </ul>
                <p style={{ marginTop: 8 }}>
                    We never sell or rent your personal information.
                </p>
            </section>

            <section style={{ marginBottom: 24 }}>
                <h2 style={{ marginBottom: 8 }}>11. Indemnity</h2>
                <p>
                    By agreeing to this Policy, you release Exion Pay Finance and its affiliates from any claims
                    arising from information sharing, breaches of obligations, or confidentiality violations.
                </p>
                <p>
                    We are not liable for indirect, punitive, or consequential damages, even if advised of the risk.
                </p>
            </section>

            <section style={{ marginBottom: 24 }}>
                <h2 style={{ marginBottom: 8 }}>12. Complaints</h2>
                <p>
                    If you have concerns about our use of your data or your rights, please contact us at{' '}
                    <a href="mailto:exionfinance@gmail.com" style={{ color: '#0066cc' }}>
                        exionfinance@gmail.com
                    </a>
                </p>
            </section>
        </div>
    );
}

