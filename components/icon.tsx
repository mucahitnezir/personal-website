type IconProps = {
  icon: string,
  title?: string,
  size?: number,
  viewBox?: string
}

function Icon({ icon, title = 'icon', size = 22, viewBox = '0 0 24 24' }: IconProps) {
  return (
    <svg
      role="img"
      viewBox={viewBox}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <path
        fill="currentColor"
        d={icon}
      />
    </svg>
  );
}

export default Icon;
