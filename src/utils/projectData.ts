import SyncUpLogo from '../assets/logoSyncUpFitness.png';
import SyncUpImg from '../assets/SyncUpFitnessImage.png';
import hololensLogo from '../assets/logoHololens.png';
import toxiRealityImg from '../assets/toxiRealityImg.png';
import logoSignLanguage from '../assets/signLanguage.png';
import signLanguageImg from '../assets/signLanguageImg.jpg';
import meltdownLogo from '../assets/meltdownLogo.png';
import starlearnLogo from '../assets/starLearnLogo.jpg';
import starlearnImg from '../assets/starlearnImg.jpg';
import keepSafeLogo from '../assets/KeepSafeLogo.png';
import keepSafeImg from '../assets/keepSafeImg.png';
import kotangaLogo from '../assets/kotanga.png';
import kotangaImg from '../assets/kotangaImg.svg';
import DouShouQiLogo from '../assets/doushouqi.png';
import DouShouQiImg from '../assets/imageDoushouQI.png';
import BoardConquestLogo from '../assets/logoBoardConquest.png';
import BoardConquestImg from '../assets/boardConquest.png';

export const project1Data = {
    titre: "SyncUp-Fitness",
    imageslogo: SyncUpLogo,
    imagesSource: SyncUpImg,
    date: "Current",
    description: "Flutter, ESP32, Raspberry Pi",
    descriptionLongue: "Android application to optimize gym training",
    text: "SyncUp Fitness, is a mobile application that enables users to track their performance during gym sessions. Using ESP32 sensors and a Raspberry Pi camera, the app collects data on heart rate, blood oxygen levels, and other key body parameters. This information is then displayed in the app and analyzed by AI, which provides personalized advice to enhance performance and prevent injuries. This project was designed to offer an affordable alternative for individuals who cannot afford a personal coach.",
    url: "https://github.com/nathanverdier/SyncUp-Fitness"
};

export const project2Data = {
    titre: "ToxiReality",
    imageslogo: hololensLogo,
    imagesSource: toxiRealityImg,
    date: "26/06/24",
    description: "Nosedive black mirror",
    descriptionLongue: "facial recognition with hololens v2",
    text: "Inspired by the Black Mirror episode 'Nosedive', this project integrates AI with real-time face recognition through HoloLens. The application keeps track of recognized individuals by cross-referencing faces scanned by the HoloLens with a database via an API. When a person is encountered, the HoloLens scans their face and queries the AI to determine if it's recognized. If a match is found, the person's name is displayed on the HoloLens screen. The project includes an app that consolidates all recognized individuals and a robust backend API for face identification and matching.",
    url: "https://github.com/nathanverdier/ToxiReality/"
};

export const project3Data = {
    titre: "Dou Shou Qi",
    imageslogo: DouShouQiLogo,
    imagesSource: DouShouQiImg,
    date: "24/06/2024",
    description: "The game Dou Shou Qi",
    descriptionLongue: "An iOS application of the DouShouQi board game",
    text: "Swift, SwiftUI, SpriteKit. Created within a team of three during my 3rd year of BUT, the application allows you to play the Chinese board game DouShouQi. It also lets you view the list of players you have created and their respective scores. The application was developed in Swift and uses the SpriteKit and SwiftUI libraries.",
    url: "https://github.com/nathanverdier/DouShouQi_App"
};

export const project4Data = {
    titre: "ASL recognition",
    imageslogo: logoSignLanguage,
    imagesSource: signLanguageImg,
    date: "29/04/2023",
    description: "Python, Keras, JAX",
    descriptionLongue: "AI project for real-time American Sign Language gesture recognition",
    text: "ASL Recognizer is an AI project aimed at detecting American Sign Language (ASL) gestures in real-time and transcribing them into text. Using deep learning techniques, the project recognizes hand gestures from images and converts them into corresponding text. The dataset used comes from Roboflow, providing various ASL gestures captured under different conditions. The project utilizes Keras for model building and JAX for optimization of training processes, ensuring high-performance and efficiency in recognizing and transcribing gestures",
    url: "https://github.com/nathanverdier/ASL_Recognizer"
};

export const project5Data = {
    titre: "SecuMeltdown",
    imageslogo: meltdownLogo,
    imagesSource: meltdownLogo,
    date: "10/10/23",
    description: "Intel vulnerability exploiting speculative execution",
    descriptionLongue: "Hardware vulnerability exploiting speculative execution in Intel processors",
    text: "Meltdown is a hardware vulnerability affecting Intel x86 processors, allowing attackers to access protected memory through speculative execution. Discovered in January 2018, this flaw enables unauthorized code to execute privileged operations, exposing sensitive data like passwords and encryption keys. It particularly impacts cloud service providers and systems using paravirtualization technologies like Docker. Patches such as Kernel Page Table Isolation on Linux have been deployed to mitigate this vulnerability, although performance compromises may result.",
    url: "https://github.com/nathanverdier/SecuMeltdown"
};

export const project6Data = {
    titre: "BoardConquest",
    imageslogo: BoardConquestLogo,
    imagesSource: BoardConquestImg,
    date: "23/06/23",
    description: "Revisited chess game design in Unreal Engine",
    descriptionLongue: "Project created at UQAC in C++ and Unreal Engine",
    text: "Created within a team of 2 during my training at UQAC, the game is a 3D chess game with pieces of different races. You can choose between 3 game boards whose size and starting pieces vary, as well as 3 powers to use strategically during your game. The application was developed with Unreal Engine and primarily implemented in C++.",
    url: "https://gitlab.com/nathanverdier/boardconquest"
};

export const project7Data = {
    titre: "Kotanga",
    imageslogo: kotangaLogo,
    imagesSource: kotangaImg,
    date: "29/04/2023",
    description: "Kotlin app for Android",
    descriptionLongue: "Created within a team of 5, using Kotlin, Android Studio, Firebase, Gitlab, ...",
    text: "Our application is named Kotanga, which means 'to count' in Lingala. It aims to facilitate payments between friends, within a group of people such as roommates, families, etc. On our application, you will be notified whenever another user in the same group as you sends a message, updates their debts, declares a new expense, and more. The scanner will save you time when you want to declare a new expense. The application is completely free and without ads! Your data is accessible only to you and stored in a fully secure database.",
    url: "https://gitlab.com/nathanverdier/kotanga"
};

export const project8Data = {
    titre: "StarLearn",
    imageslogo: starlearnLogo,
    imagesSource: starlearnImg,
    date: "21/04/2023",
    description: "Exoplanet classification model training.",
    descriptionLongue: "Model training to classify planets as exoplanets",
    text: "StarLearn is a project focused on training a model to classify new planets as exoplanets or not. The project involves handling missing values, balancing class distributions, and normalizing data using methods like MinMax scaling and standardization. Dimension reduction and feature selection are also applied. Three classification models, including K-Nearest Neighbors, SVM, and CVFDT, are used, with evaluation through validation metrics. The project also includes a user interface to upload or enter new planets for classification, displaying results and model evaluation metrics.",
    url: "https://github.com/nathanverdier/StarLearn"
};

export const project9Data = {
    titre: "KeepSafe",
    imageslogo: keepSafeLogo,
    imagesSource: keepSafeImg,
    date: "20/01/2023",
    description: "Surveillance camera using AI",
    descriptionLongue: "Connected camera for surveillance, detection, security, and versatility",
    text: "KeepSafe is a project focused on creating a connected camera for remote surveillance of buildings and other areas. The camera allows users to monitor properties from a distance, addressing the growing need for remote security, especially for those with remote properties. Features such as night vision, motion detection, and anomaly identification are incorporated. The main challenge is implementing effective surveillance using a Raspberry Pi while ensuring data privacy and security. The project also expands to include wildlife photography and heat leak detection, making the device versatile for various needs.",
    url: "https://github.com/nathanverdier/KeepSafe"
};

