import React from 'react';

export default function OurServices() {
    const services = [
        {
            id: 1,
            title: 'Payments',
            description:
                'Make instant payments to local payment channels like mobile money (Mpesa, Buy Goods, Pay Bill) in three simple steps or less.',
            color: '#00C48F',
        },
        {
            id: 2,
            title: 'Instant Offramp',
            description:
                'Easily withdraw your stablecoins and receive local currency instantly in your mobile money wallet.',
            color: '#FFE62C',
        },
        {
            id: 3,
            title: 'Instant Onramp',
            description:
                'Buy stablecoins at the best rates instantly using mobile money. Simple, transparent and available 24/7.',
            color: '#F24E1E',
        },
        {
            id: 4,
            title: 'Send Money',
            description:
                'Send stablecoins across borders and at low cost. Fast, reliable and settled instantly with no hidden fees.',
            color: '#29B6F6',
        },
    ];

    return (
        <section className="our-services-section">
            <div className="our-services-container">
                <div className="faq-badge">
                    <span>Services</span>
                </div>
                <h1 className="our-services-title">Our Services</h1>
                <p className="our-services-description">
                    Explore how Exion empowers you to pay, send and move funds effortlessly.
                    Connecting crypto with mobile money in real-time.
                </p>

                <div className="services-list">
                    {services.map((service) => (
                        <div className="service-row" key={service.id}>
                            <div
                                className="service-number"
                                style={{ backgroundColor: service.color }}
                            >
                                {service.id}
                            </div>
                            <div className="service-text">
                                <h3 className="service-title">
                                    {service.title}
                                </h3>
                                <span className="dash"> – </span>
                                <p className="service-description">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
