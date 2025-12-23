
export const HavanIcon = ({ size = 32 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-yellow-500"
  >
    {/* Flame */}
    <path
      d="M32 8c6 10 10 14 10 22a10 10 0 11-20 0c0-8 4-12 10-22z"
      fill="currentColor"
      className="opacity-90"
    />

    {/* Inner Fire */}
    <path
      d="M32 18c3 5 5 7 5 11a5 5 0 11-10 0c0-4 2-6 5-11z"
      fill="currentColor"
      className="opacity-100"
    />

    {/* Havan Kund */}
    <path
      d="M14 36h36l-6 16H20l-6-16z"
      fill="currentColor"
      className="opacity-80"
    />

    {/* Kund Border */}
    <path
      d="M18 36h28"
      stroke="currentColor"
      strokeWidth="2"
      className="opacity-100"
    />
  </svg>
);
