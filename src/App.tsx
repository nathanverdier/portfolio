import './App.css'
import { Navbar } from './components/Navbar'
import styled from 'styled-components';
import '@radix-ui/themes/styles.css';
import { CVBars } from './components/CVBars';
import { TopContainer } from './components/TopContainer';
import { BarBottom } from './components/BarBottom';
import APropos from './components/APropos/APropos';
import { MesProjects } from './components/MesProjects';

function App() {
    return (
        <MainContainer>
            <Navbar/>
            <MainContent>
                <TopContainer/>
                <APropos/>
                <CVBars/>
                <MesProjects/>
            </MainContent>
            <BarBottom/>
        </MainContainer>
    );
}

const MainContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-top: 32px; /* Réduisez encore plus le padding */
    padding-bottom: 32px; /* Réduisez encore plus le padding */
    box-sizing: border-box;
`;

const MainContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: 1280px; /* Appliquez une largeur maximale pour les écrans plus larges */
    padding: 8px; /* Réduisez encore plus le padding */
    box-sizing: border-box;
`;

export default App