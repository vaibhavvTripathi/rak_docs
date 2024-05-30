import React from "react";

const TanStackDiscordBanner = () => {
  return (
    <div className="bg-blue-600 text-white p-6 rounded-lg flex items-center justify-between shadow-lg">
      <div>
        <h2 className="text-xl font-bold">TanStack on Discord</h2>
        <p className="mt-2">
          The official TanStack community to ask questions, network and make new
          friends and get lightning fast news about {"what's"} coming next for
          TanStack!
        </p>
      </div>
      <div>
        <a
          href="https://discord.com/invite/your-invite-link"
          className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-full hover:bg-gray-200"
        >
          JOIN TANSTACK DISCORD
        </a>
      </div>
    </div>
  );
};

export default TanStackDiscordBanner;
