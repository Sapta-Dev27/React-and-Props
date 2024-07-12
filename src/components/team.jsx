import React from "react";


function Team( {userName , deg , img}) { 
  return ( 

    <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    <img class="w-24 h-24 rounded-full mx-auto" src={img} alt="" width="384" height="512" />
    <div class="pt-6 text-center space-y-4">
      <figcaption class="font-medium">
        <div class="text-sky-500 dark:text-sky-400">
          {userName}
        </div>
        <div class="text-slate-700 dark:text-slate-500">
          {deg}
        </div>
      </figcaption>
    </div>
  </figure>

  )
}

export default Team;