
import { IconAttributes } from "../../utils/types";
export const IconGear = ({ size = 24, stroke = 1.5, className }: IconAttributes) => {
  const width = Math.round(size * (24 / 24));
  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}  
      xmlns="http://www.w3.org/2000/svg"
    >
      
<path opacity="0.2" d="M19.4864 11.5481L21.0595 9.57932C20.8473 8.7817 20.5299 8.01591 20.1155 7.30213L17.6123 7.02088C17.4124 6.79559 17.1992 6.5824 16.9739 6.38244L16.6927 3.87838C15.9781 3.46647 15.212 3.15122 14.4145 2.94088L12.4458 4.51307C12.1448 4.49525 11.843 4.49525 11.542 4.51307L9.57328 2.93994C8.77826 3.15275 8.01502 3.47021 7.30359 3.884L7.02234 6.38713C6.79706 6.58709 6.58387 6.80028 6.38391 7.02557L3.87984 7.30682C3.46793 8.02137 3.15268 8.78744 2.94234 9.58494L4.51453 11.5537C4.49672 11.8547 4.49672 12.1565 4.51453 12.4574L2.94141 14.4262C3.15359 15.2238 3.47107 15.9896 3.88547 16.7034L6.38859 16.9846C6.58856 17.2099 6.80174 17.4231 7.02703 17.6231L7.30828 20.1271C8.02284 20.539 8.7889 20.8543 9.58641 21.0646L11.5552 19.4924C11.8561 19.5103 12.1579 19.5103 12.4589 19.4924L14.4277 21.0656C15.2253 20.8534 15.9911 20.5359 16.7048 20.1215L16.9861 17.6184C17.2114 17.4184 17.4246 17.2052 17.6245 16.9799L20.1286 16.6987C20.5405 15.9841 20.8558 15.2181 21.0661 14.4206L19.4939 12.4518C19.5092 12.1507 19.5067 11.8489 19.4864 11.5481ZM11.9995 15.7499C11.2579 15.7499 10.5328 15.53 9.91614 15.118C9.29946 14.7059 8.81881 14.1202 8.53498 13.435C8.25115 12.7498 8.17689 11.9958 8.32159 11.2684C8.46628 10.5409 8.82343 9.87274 9.34788 9.34829C9.87233 8.82384 10.5405 8.46669 11.2679 8.322C11.9954 8.1773 12.7494 8.25156 13.4346 8.53539C14.1198 8.81922 14.7055 9.29987 15.1175 9.91655C15.5296 10.5332 15.7495 11.2583 15.7495 11.9999C15.7495 12.9945 15.3544 13.9483 14.6512 14.6516C13.9479 15.3549 12.9941 15.7499 11.9995 15.7499Z" fill="currentColor"/>
<path d="M12 7.50004C11.11 7.50004 10.24 7.76396 9.49998 8.25843C8.75995 8.7529 8.18318 9.4557 7.84259 10.278C7.50199 11.1002 7.41288 12.005 7.58651 12.8779C7.76014 13.7509 8.18873 14.5527 8.81806 15.182C9.4474 15.8114 10.2492 16.2399 11.1221 16.4136C11.9951 16.5872 12.8998 16.4981 13.7221 16.1575C14.5444 15.8169 15.2472 15.2401 15.7417 14.5001C16.2361 13.7601 16.5 12.8901 16.5 12C16.4988 10.8069 16.0243 9.66308 15.1807 8.81943C14.337 7.97579 13.1931 7.50128 12 7.50004ZM12 15C11.4067 15 10.8267 14.8241 10.3333 14.4945C9.83998 14.1648 9.45547 13.6963 9.2284 13.1481C9.00134 12.5999 8.94193 11.9967 9.05769 11.4148C9.17344 10.8328 9.45916 10.2983 9.87872 9.87872C10.2983 9.45916 10.8328 9.17344 11.4148 9.05769C11.9967 8.94193 12.5999 9.00134 13.1481 9.2284C13.6963 9.45547 14.1648 9.83998 14.4945 10.3333C14.8241 10.8267 15 11.4067 15 12C15 12.7957 14.684 13.5588 14.1214 14.1214C13.5588 14.684 12.7957 15 12 15ZM20.25 12.2025C20.2538 12.0675 20.2538 11.9325 20.25 11.7975L21.6488 10.05C21.7221 9.95829 21.7729 9.85059 21.797 9.73563C21.8211 9.62067 21.8179 9.50165 21.7875 9.38817C21.5578 8.52637 21.2148 7.69884 20.7675 6.92723C20.7089 6.82628 20.6275 6.7404 20.5299 6.67644C20.4322 6.61248 20.321 6.57219 20.205 6.55879L17.9813 6.31129C17.8888 6.21379 17.795 6.12004 17.7 6.03004L17.4375 3.80067C17.424 3.68462 17.3836 3.57332 17.3195 3.47566C17.2554 3.37801 17.1693 3.29668 17.0682 3.23817C16.2966 2.79121 15.469 2.44884 14.6072 2.22004C14.4937 2.18972 14.3747 2.18648 14.2598 2.21058C14.1448 2.23468 14.0371 2.28545 13.9454 2.35879L12.2025 3.75004C12.0675 3.75004 11.9325 3.75004 11.7975 3.75004L10.05 2.35411C9.95829 2.28076 9.85059 2.23 9.73563 2.2059C9.62067 2.1818 9.50165 2.18504 9.38817 2.21536C8.52637 2.44507 7.69884 2.78806 6.92723 3.23536C6.82628 3.29397 6.7404 3.37535 6.67644 3.473C6.61248 3.57065 6.57219 3.68189 6.55879 3.79785L6.31129 6.02535C6.21379 6.11848 6.12004 6.21223 6.03004 6.3066L3.80067 6.56254C3.68462 6.57604 3.57332 6.61647 3.47566 6.6806C3.37801 6.74473 3.29668 6.83079 3.23817 6.93192C2.79131 7.70363 2.44864 8.53114 2.21911 9.39286C2.18891 9.50641 2.18583 9.62547 2.21009 9.74044C2.23435 9.8554 2.28529 9.96306 2.35879 10.0547L3.75004 11.7975C3.75004 11.9325 3.75004 12.0675 3.75004 12.2025L2.35411 13.95C2.28076 14.0418 2.23 14.1495 2.2059 14.2645C2.1818 14.3794 2.18504 14.4984 2.21536 14.6119C2.44507 15.4737 2.78806 16.3012 3.23536 17.0729C3.29397 17.1738 3.37535 17.2597 3.473 17.3236C3.57065 17.3876 3.68189 17.4279 3.79785 17.4413L6.02161 17.6888C6.11473 17.7863 6.20848 17.88 6.30286 17.97L6.56254 20.1994C6.57604 20.3155 6.61647 20.4268 6.6806 20.5244C6.74473 20.6221 6.83079 20.7034 6.93192 20.7619C7.70363 21.2088 8.53114 21.5514 9.39286 21.781C9.50641 21.8112 9.62547 21.8143 9.74044 21.79C9.8554 21.7657 9.96306 21.7148 10.0547 21.6413L11.7975 20.25C11.9325 20.2538 12.0675 20.2538 12.2025 20.25L13.95 21.6488C14.0418 21.7221 14.1495 21.7729 14.2645 21.797C14.3794 21.8211 14.4984 21.8179 14.6119 21.7875C15.4739 21.5582 16.3014 21.2152 17.0729 20.7675C17.1738 20.7089 17.2597 20.6275 17.3236 20.5299C17.3876 20.4322 17.4279 20.321 17.4413 20.205L17.6888 17.9813C17.7863 17.8888 17.88 17.795 17.97 17.7L20.1994 17.4375C20.3155 17.424 20.4268 17.3836 20.5244 17.3195C20.6221 17.2554 20.7034 17.1693 20.7619 17.0682C21.2088 16.2965 21.5514 15.4689 21.781 14.6072C21.8112 14.4937 21.8143 14.3746 21.79 14.2596C21.7657 14.1447 21.7148 14.037 21.6413 13.9454L20.25 12.2025ZM18.7407 11.5932C18.7566 11.8642 18.7566 12.1359 18.7407 12.4069C18.7295 12.5925 18.7876 12.7755 18.9038 12.9207L20.2341 14.5829C20.0815 15.068 19.886 15.5386 19.65 15.9891L17.5313 16.2291C17.3468 16.2496 17.1764 16.3378 17.0532 16.4766C16.8727 16.6796 16.6805 16.8718 16.4775 17.0522C16.3387 17.1755 16.2505 17.3458 16.23 17.5304L15.9947 19.6472C15.5443 19.8833 15.0736 20.0788 14.5885 20.2313L12.9254 18.901C12.7923 18.7946 12.627 18.7368 12.4566 18.7369H12.4116C12.1406 18.7529 11.8689 18.7529 11.5979 18.7369C11.4124 18.7263 11.2295 18.7844 11.0841 18.9L9.41723 20.2313C8.9321 20.0786 8.4615 19.8832 8.01098 19.6472L7.77098 17.5313C7.7505 17.3468 7.66231 17.1764 7.52348 17.0532C7.32052 16.8727 7.12831 16.6805 6.94785 16.4775C6.8246 16.3387 6.65424 16.2505 6.46973 16.23L4.35286 15.9938C4.11679 15.5433 3.92132 15.0727 3.76879 14.5875L5.0991 12.9244C5.21527 12.7793 5.2734 12.5962 5.26223 12.4107C5.24629 12.1397 5.24629 11.8679 5.26223 11.5969C5.2734 11.4114 5.21527 11.2283 5.0991 11.0832L3.76879 9.41723C3.92144 8.9321 4.1169 8.4615 4.35286 8.01098L6.46879 7.77098C6.65331 7.7505 6.82367 7.66231 6.94692 7.52348C7.12738 7.32052 7.31958 7.12831 7.52254 6.94785C7.66193 6.82452 7.75048 6.65377 7.77098 6.46879L8.00629 4.35286C8.45676 4.11679 8.92737 3.92132 9.41254 3.76879L11.0757 5.0991C11.2208 5.21527 11.4039 5.2734 11.5894 5.26223C11.8604 5.24629 12.1322 5.24629 12.4032 5.26223C12.5886 5.27286 12.7715 5.21479 12.9169 5.0991L14.5829 3.76879C15.068 3.92144 15.5386 4.1169 15.9891 4.35286L16.2291 6.46879C16.2496 6.65331 16.3378 6.82367 16.4766 6.94692C16.6796 7.12738 16.8718 7.31958 17.0522 7.52254C17.1755 7.66137 17.3458 7.74956 17.5304 7.77004L19.6472 8.00535C19.8833 8.45583 20.0788 8.92644 20.2313 9.4116L18.901 11.0747C18.7837 11.2211 18.7255 11.406 18.7379 11.5932H18.7407Z" fill="currentColor"/>

    </svg>
  );
};