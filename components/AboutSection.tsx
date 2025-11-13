
import React from 'react';

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start gap-3">
        <i className="fas fa-check text-colore-sette mt-1"></i>
        <span>{children}</span>
    </li>
);

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-20 relative z-10 w-full bg-black/90 text-colore-due text-center">
            <div className="container mx-auto px-5 max-w-4xl">
                <h2 className="text-4xl text-white mb-6">About Us</h2>
                <p className="text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
                    Henry's Kitchen Pasta & Grill is an appointment-only restaurant dedicated to providing an exquisite pasta and grill experience. We insist on using the freshest ingredients to bring you an unforgettable dining experience.
                </p>
                <div className="bg-colore-quattro/80 border border-colore-tre text-left rounded-lg p-8 max-w-3xl mx-auto">
                    <h4 className="text-xl text-white font-semibold mb-5 flex items-center gap-3">
                        <i className="fas fa-info-circle text-colore-otto"></i> Important Information
                    </h4>
                    <ul className="space-y-3 text-colore-due">
                        <ListItem>Book one day in advance and pre-order (appetizer, main, dessert).</ListItem>
                        <ListItem>We recommend bringing your own containers for leftovers.</ListItem>
                        <ListItem>Cash, transfer, or Interac payments are encouraged.</ListItem>
                        <ListItem>A 20% service fee is automatically included.</ListItem>
                        <ListItem>BYOB welcome. Corkage fee is $30 per 750ml bottle.</ListItem>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
