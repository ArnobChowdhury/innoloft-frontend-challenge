export const DownArrow = ({ isLight = false }: { isLight?: boolean }) => {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_1989_536)'>
        <path
          d='M8.00001 12.25C7.93434 12.2501 7.8693 12.2372 7.80863 12.2121C7.74796 12.1869 7.69287 12.1501 7.64651 12.1035L0.14651 4.60354C0.098755 4.55742 0.0606639 4.50224 0.0344594 4.44124C0.00825487 4.38024 -0.00553825 4.31463 -0.00611515 4.24824C-0.00669206 4.18185 0.00595879 4.11601 0.0310992 4.05456C0.0562397 3.99312 0.0933662 3.93729 0.140313 3.89034C0.187259 3.8434 0.243085 3.80627 0.304533 3.78113C0.365981 3.75599 0.431821 3.74334 0.498211 3.74392C0.5646 3.74449 0.63021 3.75829 0.691212 3.78449C0.752214 3.81069 0.807387 3.84879 0.85351 3.89654L8.00001 11.043L15.1465 3.89654C15.1926 3.84879 15.2478 3.81069 15.3088 3.78449C15.3698 3.75829 15.4354 3.74449 15.5018 3.74392C15.5682 3.74334 15.634 3.75599 15.6955 3.78113C15.7569 3.80627 15.8128 3.8434 15.8597 3.89034C15.9067 3.93729 15.9438 3.99312 15.9689 4.05456C15.9941 4.11601 16.0067 4.18185 16.0061 4.24824C16.0056 4.31463 15.9918 4.38024 15.9656 4.44124C15.9394 4.50224 15.9013 4.55742 15.8535 4.60354L8.35351 12.1035C8.30715 12.1501 8.25206 12.1869 8.19139 12.2121C8.13072 12.2372 8.06568 12.2501 8.00001 12.25Z'
          fill={isLight ? "#fff" : "#374151"}
        />
      </g>
      <defs>
        <clipPath id='clip0_1989_536'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
