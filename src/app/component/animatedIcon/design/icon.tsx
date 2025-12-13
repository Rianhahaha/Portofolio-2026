
export default function DesignIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="503"
      height="276"
      viewBox="0 0 503 276"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_49_77)">
        <path
          d="M245.959 1.61038C249.468 -0.0427381 253.532 -0.0427277 257.041 1.61039L495.039 113.74C504.985 118.426 504.985 132.574 495.039 137.26L257.041 249.39C253.532 251.043 249.468 251.043 245.959 249.39L7.96126 137.26C-1.98456 132.574 -1.98453 118.426 7.96129 113.74L245.959 1.61038Z"
          fill="url(#paint0_linear_49_77)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_49_77"
          x="0.501953"
          y="0.370544"
          width="501.996"
          height="275.259"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="25" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_49_77"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_49_77"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_49_77"
          x1="-17"
          y1="125"
          x2="520"
          y2="125"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#00BBA7" />
          <stop offset="1" stop-color="#00AEFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
