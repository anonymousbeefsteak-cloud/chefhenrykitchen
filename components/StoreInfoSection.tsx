import React from 'react';

interface InfoCardProps {
    title: string;
    icon: string;
    children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, icon, children }) => (
    <div className="bg-colore-uno rounded-lg p-6 mb-6 shadow-md">
        <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
            <i className={`fas ${icon} text-colore-cinque w-6`}></i> {title}
        </h4>
        <ul className="space-y-3 text-colore-tre">{children}</ul>
    </div>
);

interface InfoListItemProps {
    icon: string;
    children: React.ReactNode;
}

const InfoListItem: React.FC<InfoListItemProps> = ({ icon, children }) => (
    <li className="flex items-start gap-3">
        <i className={`fas ${icon} text-colore-sette mt-1 w-4 flex-shrink-0`}></i>
        <span>{children}</span>
    </li>
);

const StoreInfoSection: React.FC = () => {
    return (
        <section id="store-info" className="py-20 bg-white/90 relative z-10 w-full">
            <div className="container mx-auto px-5">
                <div className="flex flex-wrap lg:flex-nowrap gap-10 items-center">
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-3xl font-bold mb-6 pb-4 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-colore-cinque">
                            Contact Information
                        </h3>
                        
                        <InfoCard title="Basic Info" icon="fa-store">
                            <InfoListItem icon="fa-phone"><strong>Phone:</strong> (778) 355-8787</InfoListItem>
                            <InfoListItem icon="fa-envelope"><strong>Email:</strong> henryskitchen@hotmail.com</InfoListItem>
                            <InfoListItem icon="fa-clock"><strong>Hours:</strong> Fridays, Saturdays & Sundays (dinner only)</InfoListItem>
                        </InfoCard>

                        <InfoCard title="Important Reminders" icon="fa-info-circle">
                            <InfoListItem icon="fa-check">Book one day in advance and pre-order.</InfoListItem>
                            <InfoListItem icon="fa-check">Bring your own containers for leftovers.</InfoListItem>
                            <InfoListItem icon="fa-check">Cash, transfer, or Interac payments are encouraged.</InfoListItem>
                            <InfoListItem icon="fa-check">A 20% service fee is automatically included.</InfoListItem>
                            <InfoListItem icon="fa-check">BYOB welcome. Corkage fee is $30 per 750ml.</InfoListItem>
                            <li>
                                <a href="#reservations" className="mt-4 inline-block bg-colore-cinque text-white px-6 py-2 rounded-md font-semibold hover:bg-colore-nove transition-colors">
                                    Book Now
                                </a>
                            </li>
                        </InfoCard>
                    </div>

                    <div className="w-full lg:w-1/2 h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            className="w-full h-full border-0"
                            title="Restaurant Location Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.688147929918!2d-123.1207373846209!3d49.28272927933139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717886a0b3f7%3A0x530f7a755a5c531d!2sVancouver%2C%2C%20BC!5e0!3m2!1sen!2sca!4v1689000000000!5m2!1sen!2sca"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StoreInfoSection;