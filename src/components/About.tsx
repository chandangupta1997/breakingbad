import React from 'react';
import { GlitchText } from './GlitchText';
import { CharacterProfile } from './CharacterProfile';

export function About() {
  const characters = [
    {
      name: "Jesse Pinkman",
      image: "https://images.immediate.co.uk/production/volatile/sites/3/2019/10/breaking-bad-jesse-11b6c49.jpg?quality=90&resize=980,654",
      role: "The Cook",
      description: "Yo, I used to be a small-time dealer, now I'm a legend in the business. Science, b**ch! That's what changed everything. Working with Mr. White taught me that chemistry is like art - it's all about the process."
    },
    {
      name: "Walter White",
      image: "https://m.media-amazon.com/images/M/MV5BZTdhMmQ5MGEtYzcyZS00ZWI1LWIwMTUtZjU4ZThmMWVjYjQ4XkEyXkFqcGc@._V1_QL75_UY281_CR0,0,500,281_.jpg",
      role: "The Master Chef",
      description: "The one who knocks. Mr. White showed me the ropes, taught me everything I know about the art of cooking. He's the mastermind behind the blue stuff, yo."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <GlitchText className="text-3xl md:text-4xl font-bold mb-12">
          Who's Jesse Pinkman?
        </GlitchText>
        <div className="grid md:grid-cols-2 gap-8">
          {characters.map((character) => (
            <CharacterProfile key={character.name} {...character} />
          ))}
        </div>
      </div>
    </section>
  );
}