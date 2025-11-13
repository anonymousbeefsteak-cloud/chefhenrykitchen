import React from 'react';

interface SocialLinkProps {
    href: string;
    icon: string;
    label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
    <a href={href} aria-label={label} className="w-10 h-10 rounded-full bg-colore-tre text-white flex items-center justify-center text-lg transition-colors hover:bg-colore-cinque">
        <i className={icon}></i>
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="py-20 bg-colore-uno/90 text-center relative z-10 w-full">
            <div className="container mx-auto px-5">
                <h2 className="text-3xl text-colore-tre tracking-widest mb-4">Henry's Kitchen</h2>
                <p className="text-colore-tre mb-6">
                    (778) 355-8787 | henryskitchen@hotmail.com | Fridays, Saturdays & Sundays (dinner only)
                </p>
                <div className="flex justify-center gap-5 mb-10">
                    <SocialLink href="#" icon="fab fa-instagram" label="Visit our Instagram page" />
                    <SocialLink href="#" icon="fab fa-facebook-f" label="Visit our Facebook page" />
                    <SocialLink href="#" icon="fab fa-twitter" label="Visit our Twitter page" />
                    <SocialLink href="#" icon="fab fa-tripadvisor" label="Visit our Tripadvisor page" />
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl text-colore-tre">Henry's Kitchen</h2>
                    <p className="text-colore-tre text-sm">Pasta & Grill</p>
                </div>
                <p className="text-colore-tre text-sm">
                    &copy; {new Date().getFullYear()} Henry's Kitchen Pasta & Grill. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
