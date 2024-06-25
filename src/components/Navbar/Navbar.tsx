import { useEffect, useRef, useState } from 'react';
import { TabNav } from "@radix-ui/themes";
import { StyledTabNavRoot } from "./style";

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('accueil');
    const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

    const scrollTo = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) {
            const offset = elementId === 'accueil' ? 0 : 50; // Pas de marge pour 'home'
            window.scrollTo({
                top: element.offsetTop - offset,
                behavior: 'smooth'
            });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 50,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.boundingClientRect.top < 0) {
                        setActiveTab(entry.target.id);
                    }
                });
            },
            { threshold: 0 }
        );

        const sections = ['accueil', 'apropos', 'cv', 'projets'];
        sections.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                sectionsRef.current[id] = element;
                observer.observe(element);
            }
        });

        return () => {
            if (sectionsRef.current) {
                sections.forEach(id => {
                    const element = sectionsRef.current[id];
                    if (element) {
                        observer.unobserve(element);
                    }
                });
            }
        };
    }, []);

    return (
        <StyledTabNavRoot justify="start" wrap="wrap">
            <TabNav.Link onClick={() => { setActiveTab('accueil'); scrollToTop(); }} active={activeTab === 'accueil'}>Accueil</TabNav.Link>
            <TabNav.Link onClick={() => { setActiveTab('apropos'); scrollTo('apropos'); }} active={activeTab === 'apropos'}>A propos de moi</TabNav.Link>
            <TabNav.Link onClick={() => { setActiveTab('cv'); scrollTo('cv'); }} active={activeTab === 'cv'}>CV</TabNav.Link>
            <TabNav.Link onClick={() => { setActiveTab('projets'); scrollTo('projets'); }} active={activeTab === 'projets'}>Mes projets</TabNav.Link>
        </StyledTabNavRoot>
    );
};

export default Navbar;