// src/components/GameCard.jsx
import React from 'react';
import './GameCard.css';

const GameCard = ({ image, name, description }) => {
    return (
        <div className="card">
            <img src={image} alt={name} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{name}</h2>
                <p className="card-description">{description}</p>
                <button className="card-button">View More</button>
            </div>
        </div>
    );
};

const GamesList = () => {
    const games = [
        { image: 'src/assets/ArtfulArmor.png', name: 'ARTFUL ARMOR', description: '“Artful Armor,” a captivating puzzle game that challenges your artistic skills and problem-solving abilities. In this unique adventure, you must draw intricate line patterns to guide and protect your hero as they navigate through a series of challenging tasks.' },
        { image: 'src/assets/Lost_in_the_world.png', name: 'Lost In The Wild', description: '“Lost in the Wild” an exhilarating 2D platformer adventure that will test your agility, wits, and bravery. As the daring explorer, you find yourself stranded in a lush, yet perilous jungle teeming with secrets and treasures waiting to be discovered.' },
        { image: 'src/assets/Ninja_Secret_Quest.png', name: 'NINJA’S SECRET QUEST', description: 'Ninja’s Secret Quest is a thrilling adventure game that challenges your ninja skills to the max! Navigate through tough levels filled with monstrous foes and tricky obstacles while racing against time to uncover the hidden key.' },
        { image: 'src/assets/Sena.png', name: 'SENA : Bharat’s Own Battle Royale (NEW)', description: 'Gauravgo Games Technologies is a startup on a mission to revolutionize the gaming industry in India. The company is currently developing India’s first battle royale game, SENA, which promises to be unlike any other game in the market.' },
        { image: 'src/assets/bubble.png', name: 'Bubble Blast Bash', description: 'Bubble Blast Bash - A fun-to-play game developed by GauravGo Games. “Bubble Blast Bash” is an entertaining game that challenges players to pop colorful bubbles in a fast-paced and strategic environment. With each level, the difficulty increases, requiring quick reflexes and sharp thinking.' },
        { image: 'src/assets/Bhoomiputra.png', name: 'Bhoomiputra – The Legend Of Biju Patnaik', description: '“Lost in the Wild” an exhilarating 2D platformer adventure that will test your agility, wits, and bravery. As the daring explorer, you find yourself stranded in a lush, yet perilous jungle teeming with secrets and treasures waiting to be discovered.' },
        { image: 'src/assets/Angry.png', name: 'Angry Bird', description: '“Angry World” is an intense and fast-paced 2D action game that will push your reflexes and strategic thinking to the limit. In this chaotic world, you must navigate through hostile environments, battling fierce enemies and overcoming challenging obstacles to restore peace and order.' },
        { image: 'src/assets/subway.png', name: 'Subway Surfer', description: 'Subway Surfer is an adrenaline-pumping endless runner game that has captivated players worldwide. Developed by Kiloo and SYBO Games, it places you in the role of a daring graffiti artist running through the bustling city subways to escape the clutches of an irate inspector and his dog.' }
    ];

    return (
        <div className="games-container">
            <h1 className="games-heading">Our Top Games</h1>
            <div className="cards-grid">
                {games.map((game, index) => (
                    <GameCard key={index} image={game.image} name={game.name} description={game.description} />
                ))}
            </div>
        </div>
    );
};

export default GamesList;
