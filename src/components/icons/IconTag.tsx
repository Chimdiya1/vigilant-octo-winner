
import { IconAttributes } from "../../utils/types";
export const IconTag = ({ size = 24, stroke = 1.5, className }: IconAttributes) => {
  const width = Math.round(size * (20 / 20));
  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      className={className}  
      xmlns="http://www.w3.org/2000/svg"
    >
      
<path d="M19.0086 10.625L11.25 2.86641C11.1344 2.74983 10.9967 2.65741 10.845 2.59451C10.6933 2.5316 10.5306 2.49948 10.3664 2.50001H3.12501C2.95925 2.50001 2.80027 2.56585 2.68306 2.68306C2.56585 2.80027 2.50001 2.95925 2.50001 3.12501V10.3664C2.49948 10.5306 2.5316 10.6933 2.59451 10.845C2.65741 10.9967 2.74983 11.1344 2.86641 11.25L10.625 19.0086C10.7411 19.1247 10.8789 19.2168 11.0306 19.2796C11.1822 19.3425 11.3448 19.3748 11.509 19.3748C11.6732 19.3748 11.8357 19.3425 11.9874 19.2796C12.1391 19.2168 12.2769 19.1247 12.393 19.0086L19.0086 12.393C19.1247 12.2769 19.2168 12.1391 19.2796 11.9874C19.3425 11.8357 19.3748 11.6732 19.3748 11.509C19.3748 11.3448 19.3425 11.1822 19.2796 11.0306C19.2168 10.8789 19.1247 10.7411 19.0086 10.625ZM11.5086 18.125L3.75001 10.3664V3.75001H10.3664L18.125 11.5086L11.5086 18.125ZM7.50001 6.56251C7.50001 6.74793 7.44502 6.92918 7.34201 7.08335C7.239 7.23752 7.09258 7.35769 6.92127 7.42864C6.74997 7.4996 6.56147 7.51817 6.37961 7.48199C6.19775 7.44582 6.03071 7.35653 5.89959 7.22542C5.76848 7.09431 5.67919 6.92726 5.64302 6.7454C5.60685 6.56355 5.62541 6.37505 5.69637 6.20374C5.76733 6.03243 5.88749 5.88602 6.04166 5.783C6.19583 5.67999 6.37709 5.62501 6.56251 5.62501C6.81115 5.62501 7.0496 5.72378 7.22542 5.89959C7.40123 6.07541 7.50001 6.31387 7.50001 6.56251Z" fill="currentColor"/>

    </svg>
  );
};