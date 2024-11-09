import React, { useEffect, useState } from "react";

const Navigation=()=>{
    return (

        <nav class="flex items-center justify-between p-4 bg-gray-800 text-white">
  {/* <!-- Logo --> */}
  <div class="text-2xl font-bold">
    <a href="/">YourLogo</a>
  </div>

  {/* <!-- Links (hidden on small screens) --> */}
  <div class="hidden md:flex space-x-8">
    <a href="/" class="hover:text-gray-300">Home</a>
    <a href="/movies" class="hover:text-gray-300">Movies</a>
    <a href="/tvshows" class="hover:text-gray-300">TV Shows</a>
    <a href="/genres" class="hover:text-gray-300">Genres</a>
    <a href="/trending" class="hover:text-gray-300">Trending</a>
  </div>

  {/* <!-- Search Bar (hidden on small screens) --> */}
  <div class="hidden md:block">
    <input
      type="text"
      placeholder="Search..."
      class="p-2 rounded-md text-black w-64 md:w-80 lg:w-96 "
    />
  </div>

  {/* <!-- Account Options --> */}
  <div class="flex items-center space-x-4">
    <a href="/login" class="hover:text-gray-300">Login</a>
    <a href="/signup" class="hover:text-gray-300">Sign Up</a>
  </div>

  {/* <!-- Mobile Menu Button --> */}
  <button class="md:hidden flex items-center">
    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
</nav>


    );
}
export default Navigation;