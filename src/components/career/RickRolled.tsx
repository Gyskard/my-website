// yes I have a specific component to do something which is so unoriginal
// give me a job please, i'm not a AI but a human being with high food requirements

"use client";

export default function RickRolled() {
  function rickRolled() {
    window.location.replace("https://www.youtube.com/watch?v=uHgt8giw1LY");
  }

  return (
    <div className="flex justify-center mt-10 mb-7 items-center">
      <button className="btn btn-secondary" onClick={() => rickRolled()}>
        Don&apos;t click on this button
      </button>
    </div>
  );
}
