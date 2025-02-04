import React from "react";

const achievements = [
  {
    title: "Scratch Art",
    date: "November 1, 2024",
    location: "Surat",
    description: "Created intricate and visually striking scratch art designs, demonstrating precision, creativity, and attention to detail.",
    imageUrl: "/images/Frame.png",
  },
  {
    title: "Scratch Art",
    date: "November 1, 2024",
    location: "Surat",
    description: "Created intricate and visually striking scratch art designs, demonstrating precision, creativity, and attention to detail.",
    imageUrl: "/images/Frame.png",
  },
  {
    title: "Scratch Art",
    date: "November 1, 2024",
    location: "Surat",
    description: "Created intricate and visually striking scratch art designs, demonstrating precision, creativity, and attention to detail.",
    imageUrl: "/images/Frame.png",
  },
];

export default function AchievementsSection() {
  return (
    <div id="achievements" className="mt-16 flex flex-col items-center gap-10">
      <h2 className="text-4xl font-bold text-purple-900">Achievements</h2>
      <p className="text-lg text-center text-gray-700 max-w-2xl">
        You've contributed to the global art community Art Pallatte and showcased creativity through inspiring projects.
      </p>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex flex-col items-center bg-white">
            <div
              className="w-[200px] h-[200px] bg-cover bg-center"
              style={{ backgroundImage: `url(${achievement.imageUrl})` }}
            ></div>
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-gray-900">
                {achievement.title}
              </h3>
              <p className="text-[#FFB600] font-medium mt-2">
                {achievement.date}
              </p>
              <p className="text-sm text-[#FFB600] font-medium">
                {achievement.location}
              </p>
              <p className="text-gray-700 mt-3 text-sm">
                {achievement.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
