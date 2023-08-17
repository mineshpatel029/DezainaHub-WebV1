import React from "react";
import "./FooterFoot.css";

export const FooterFoot = () => {
  return (
    <div className="FooterFootMain container">
      <div className="FooterFoot">
        <p className="FooterFoot-Content">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. and typesetting industry. and typesetting industry.
        </p>

        <hr></hr>
        <div className="FooterFoot-SocialIcons">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.3404 9.58133C19.2223 9.28491 19.0414 9.01576 18.8094 8.7912C18.5774 8.56664 18.2994 8.39166 17.9934 8.27752C17.572 8.12629 17.1269 8.04636 16.6776 8.04122C15.9303 8.00824 15.7063 8 13.8134 8C11.9205 8 11.6965 8.00824 10.9492 8.04122C10.4994 8.0462 10.0538 8.12614 9.63201 8.27752C9.32609 8.39197 9.04831 8.56724 8.81656 8.79203C8.5848 9.01683 8.40421 9.28617 8.28642 9.5827C8.13034 9.99101 8.04785 10.4223 8.04254 10.8577C8.00851 11.5817 8 11.7988 8 13.6329C8 15.467 8.00851 15.6841 8.04254 16.4081C8.04769 16.8439 8.13018 17.2757 8.28642 17.6844C8.40453 17.9808 8.58541 18.25 8.81741 18.4746C9.04941 18.6991 9.32739 18.8741 9.63342 18.9882C10.0548 19.1395 10.4999 19.2194 10.9492 19.2245C11.6965 19.2575 11.9205 19.2657 13.8134 19.2657C15.7063 19.2657 15.9303 19.2575 16.6776 19.2245C17.1274 19.2195 17.573 19.1396 17.9948 18.9882C18.3007 18.8738 18.5785 18.6985 18.8102 18.4737C19.042 18.2489 19.2226 17.9796 19.3404 17.683C19.4965 17.2747 19.579 16.8435 19.5843 16.4081C19.6183 15.6841 19.6268 15.467 19.6268 13.6329C19.6268 11.7988 19.6183 11.5817 19.5843 10.8577C19.5791 10.4218 19.4966 9.99007 19.3404 9.58133ZM13.8134 17.161C13.0932 17.161 12.3893 16.9541 11.7905 16.5664C11.1917 16.1787 10.725 15.6277 10.4494 14.983C10.1738 14.3383 10.1017 13.629 10.2422 12.9446C10.3827 12.2602 10.7295 11.6315 11.2387 11.1381C11.7479 10.6447 12.3967 10.3087 13.103 10.1726C13.8094 10.0364 14.5415 10.1063 15.2068 10.3733C15.8722 10.6404 16.4408 11.0926 16.8409 11.6728C17.241 12.253 17.4546 12.9351 17.4546 13.6329C17.4546 14.5686 17.071 15.466 16.3881 16.1276C15.7052 16.7893 14.7791 17.161 13.8134 17.161ZM17.5978 10.7903C17.4295 10.7903 17.265 10.742 17.1251 10.6514C16.9852 10.5608 16.8762 10.4321 16.8118 10.2815C16.7474 10.1308 16.7306 9.9651 16.7634 9.80519C16.7962 9.64529 16.8772 9.49841 16.9962 9.38313C17.1152 9.26784 17.2668 9.18933 17.4318 9.15753C17.5968 9.12572 17.7679 9.14204 17.9233 9.20444C18.0788 9.26683 18.2117 9.37248 18.3051 9.50804C18.3986 9.6436 18.4485 9.80298 18.4485 9.96601C18.4485 10.1846 18.3589 10.3943 18.1993 10.5489C18.0398 10.7035 17.8234 10.7903 17.5978 10.7903Z"
              fill="#1E1E1E"
            />
            <path
              d="M13.6642 16.29C14.9696 16.29 16.0279 15.2646 16.0279 13.9997C16.0279 12.7349 14.9696 11.7095 13.6642 11.7095C12.3588 11.7095 11.3006 12.7349 11.3006 13.9997C11.3006 15.2646 12.3588 16.29 13.6642 16.29Z"
              fill="#1E1E1E"
            />
            <path
              d="M13.6644 0.810547C10.9722 0.810547 8.34053 1.58408 6.10207 3.03332C3.86361 4.48257 2.11895 6.54243 1.0887 8.95244C0.058449 11.3624 -0.211111 14.0143 0.314106 16.5728C0.839322 19.1312 2.13573 21.4813 4.03938 23.3259C5.94303 25.1704 8.36843 26.4266 11.0089 26.9355C13.6493 27.4444 16.3862 27.1832 18.8735 26.1849C21.3607 25.1867 23.4866 23.4962 24.9823 21.3272C26.478 19.1583 27.2763 16.6083 27.2763 13.9997C27.2763 10.5017 25.8422 7.14701 23.2895 4.67356C20.7367 2.20012 17.2745 0.810547 13.6644 0.810547ZM20.7114 16.8326C20.6992 17.4022 20.5875 17.9657 20.381 18.4991C20.1989 18.9554 19.9205 19.3697 19.5635 19.7156C19.2065 20.0615 18.7789 20.3313 18.3081 20.5077C17.7575 20.7078 17.176 20.8161 16.5881 20.8279C15.831 20.8608 15.5899 20.8691 13.6644 20.8691C11.7389 20.8691 11.4979 20.8608 10.7407 20.8279C10.1529 20.8161 9.57131 20.7078 9.02079 20.5077C8.54993 20.3313 8.12232 20.0615 7.76534 19.7156C7.40837 19.3697 7.12991 18.9554 6.94782 18.4991C6.74131 17.9657 6.62961 17.4022 6.61745 16.8326C6.58342 16.099 6.57491 15.8654 6.57491 13.9997C6.57491 12.134 6.58342 11.9004 6.61745 11.1668C6.62961 10.5972 6.74131 10.0337 6.94782 9.50029C7.12991 9.04405 7.40837 8.62971 7.76534 8.28382C8.12232 7.93793 8.54993 7.66812 9.02079 7.49168C9.57131 7.2916 10.1529 7.18336 10.7407 7.17157C11.4979 7.1386 11.7389 7.13036 13.6644 7.13036C15.5899 7.13036 15.831 7.1386 16.5881 7.17157C17.176 7.18336 17.7575 7.2916 18.3081 7.49168C18.7789 7.66812 19.2065 7.93793 19.5635 8.28382C19.9205 8.62971 20.1989 9.04405 20.381 9.50029C20.5875 10.0337 20.6992 10.5972 20.7114 11.1668C20.7454 11.9004 20.7539 12.134 20.7539 13.9997C20.7539 15.8654 20.7454 16.099 20.7114 16.8326Z"
              fill="#1E1E1E"
            />
          </svg>

          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.2443 12.4778H15.2652V12.446L15.2443 12.4778ZM15.2443 12.4778H15.2652V12.446L15.2443 12.4778ZM15.2443 12.4778H15.2652V12.446L15.2443 12.4778ZM15.2443 12.4778H15.2652V12.446L15.2443 12.4778ZM15.2443 12.4778H15.2652V12.446L15.2443 12.4778ZM15.2443 12.4778H15.2652V12.446L15.2443 12.4778ZM15.2443 12.4778H15.2652V12.446L15.2443 12.4778ZM15.2443 12.4778H15.2652V12.446L15.2443 12.4778ZM15.2443 12.4778H15.2652V12.446L15.2443 12.4778ZM15.2443 12.4778H15.2652V12.446L15.2443 12.4778ZM15.2443 12.4778H15.2652V12.446L15.2443 12.4778ZM15.2443 12.4778H15.2652V12.446L15.2443 12.4778ZM15.2443 12.4778H15.2652V12.446L15.2443 12.4778ZM15.2443 12.4778H15.2652V12.446L15.2443 12.4778ZM15.2443 12.4778H15.2652V12.446L15.2443 12.4778ZM15.2443 12.4778H15.2652V12.446L15.2443 12.4778ZM13.8882 0.810547C11.196 0.810547 8.56429 1.58408 6.32583 3.03332C4.08737 4.48257 2.3427 6.54243 1.31245 8.95244C0.282204 11.3624 0.0126438 14.0143 0.53786 16.5728C1.06308 19.1312 2.35948 21.4813 4.26313 23.3259C6.16679 25.1704 8.59219 26.4265 11.2326 26.9355C13.8731 27.4444 16.61 27.1832 19.0972 26.1849C21.5844 25.1867 23.7103 23.4962 25.206 21.3272C26.7017 19.1583 27.5 16.6083 27.5 13.9997C27.4961 10.5029 26.0607 7.15041 23.5089 4.67779C20.957 2.20516 17.4971 0.814369 13.8882 0.810547ZM10.4845 19.9373C10.4837 19.9958 10.4592 20.0516 10.4162 20.0927C10.3732 20.1337 10.3153 20.1568 10.255 20.1568H7.63214C7.57206 20.1568 7.51445 20.1337 7.47197 20.0925C7.42949 20.0513 7.40562 19.9955 7.40562 19.9373V11.3977C7.40523 11.3686 7.4108 11.3398 7.422 11.3128C7.43321 11.2858 7.44983 11.2613 7.47091 11.2406C7.49198 11.2199 7.51708 11.2035 7.54476 11.1923C7.57244 11.1811 7.60214 11.1753 7.63214 11.1753H10.255C10.2851 11.1753 10.3149 11.1811 10.3428 11.1922C10.3706 11.2034 10.3959 11.2198 10.4172 11.2404C10.4386 11.2611 10.4555 11.2856 10.467 11.3126C10.4785 11.3396 10.4845 11.3685 10.4845 11.3977V19.9373ZM8.85116 10.0346C8.52517 10.0346 8.20651 9.94092 7.93546 9.76544C7.66442 9.58996 7.45316 9.34054 7.32841 9.04872C7.20367 8.7569 7.17102 8.43579 7.23462 8.126C7.29822 7.81621 7.45519 7.53164 7.6857 7.3083C7.91621 7.08495 8.20989 6.93285 8.52961 6.87123C8.84933 6.8096 9.18073 6.84123 9.4819 6.96211C9.78307 7.08298 10.0405 7.28768 10.2216 7.5503C10.4027 7.81293 10.4994 8.1217 10.4994 8.43756C10.4998 8.64739 10.4574 8.85524 10.3747 9.04917C10.292 9.2431 10.1706 9.41931 10.0175 9.56768C9.86436 9.71605 9.68251 9.83367 9.48236 9.9138C9.28222 9.99392 9.06771 10.035 8.85116 10.0346ZM21.5838 19.9373C21.583 19.9958 21.5585 20.0516 21.5155 20.0927C21.4726 20.1337 21.4146 20.1568 21.3543 20.1568H18.7315C18.7017 20.1568 18.6723 20.1511 18.6448 20.1401C18.6173 20.129 18.5923 20.1129 18.5713 20.0925C18.5502 20.0721 18.5336 20.0479 18.5222 20.0213C18.5108 19.9947 18.5049 19.9661 18.5049 19.9373V15.3484C18.5049 14.1412 18.0608 13.3268 16.9461 13.3268C16.5988 13.3287 16.2606 13.4346 15.9778 13.63C15.695 13.8255 15.4815 14.1009 15.3665 14.4185C15.2879 14.6532 15.2536 14.8997 15.2652 15.1462V19.9373C15.2652 19.9963 15.241 20.0528 15.1979 20.0945C15.1549 20.1362 15.0965 20.1597 15.0357 20.1597H12.4128C12.3828 20.1597 12.3531 20.1539 12.3255 20.1427C12.2978 20.1315 12.2727 20.115 12.2516 20.0944C12.2305 20.0737 12.2139 20.0491 12.2027 20.0222C12.1915 19.9952 12.1859 19.9664 12.1863 19.9373C12.1863 18.7186 12.2191 12.8012 12.1863 11.4092C12.1859 11.3802 12.1915 11.3513 12.2027 11.3244C12.2139 11.2974 12.2305 11.2729 12.2516 11.2522C12.2727 11.2315 12.2978 11.2151 12.3255 11.2038C12.3531 11.1926 12.3828 11.1869 12.4128 11.1869H15.0297C15.0599 11.1865 15.09 11.192 15.118 11.203C15.146 11.214 15.1715 11.2304 15.1929 11.2511C15.2143 11.2719 15.2312 11.2965 15.2425 11.3237C15.2539 11.3508 15.2596 11.3799 15.2592 11.4092V12.4576C15.538 11.9886 15.944 11.6026 16.4332 11.3415C16.9223 11.0803 17.476 10.9539 18.034 10.9761C20.0578 10.9761 21.5778 12.2583 21.5778 15.0192L21.5838 19.9373ZM15.2652 12.4864V12.4547L15.2443 12.4864H15.2652ZM15.2443 12.4864H15.2652V12.4547L15.2443 12.4864ZM15.2443 12.4864H15.2652V12.4547L15.2443 12.4864ZM15.2443 12.4864H15.2652V12.4547L15.2443 12.4864ZM15.2443 12.4864H15.2652V12.4547L15.2443 12.4864ZM15.2443 12.4864H15.2652V12.4547L15.2443 12.4864ZM15.2443 12.4864H15.2652V12.4547L15.2443 12.4864ZM15.2443 12.4864H15.2652V12.4547L15.2443 12.4864ZM15.2443 12.4864H15.2652V12.4547L15.2443 12.4864ZM15.2443 12.4864H15.2652V12.4547L15.2443 12.4864ZM15.2443 12.4864H15.2652V12.4547L15.2443 12.4864ZM15.2443 12.4864H15.2652V12.4547L15.2443 12.4864ZM15.2443 12.4864H15.2652V12.4547L15.2443 12.4864ZM15.2443 12.4864H15.2652V12.4547L15.2443 12.4864ZM15.2443 12.4864H15.2652V12.4547L15.2443 12.4864Z"
              fill="#1E1E1E"
            />
          </svg>

          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1119 0.810547C6.60602 0.810547 0.5 6.72714 0.5 13.9996C0.5 21.2723 6.60602 27.1892 14.1119 27.1892C21.6172 27.1892 27.7237 21.2723 27.7237 13.9996C27.7237 6.72714 21.6172 0.810547 14.1119 0.810547ZM17.959 9.13654C17.959 9.19899 17.9334 9.25889 17.8878 9.30305C17.8422 9.34721 17.7804 9.37202 17.7159 9.37202L16.1686 9.37296C15.1476 9.37296 14.961 9.7582 14.961 10.5169V12.0908H17.6148C17.6846 12.0908 17.7512 12.12 17.7971 12.1709C17.843 12.2218 17.8644 12.2893 17.8559 12.3565L17.478 15.1899C17.4704 15.2467 17.4418 15.2989 17.3974 15.3367C17.3531 15.3745 17.296 15.3953 17.2369 15.3953H14.961V22.4311C14.961 22.4936 14.9354 22.5534 14.8898 22.5976C14.8442 22.6418 14.7824 22.6666 14.718 22.6666H11.6986C11.6342 22.6666 11.5723 22.6418 11.5268 22.5976C11.4812 22.5534 11.4556 22.4936 11.4556 22.4311V15.3953H9.17237C9.10791 15.3953 9.0461 15.3705 9.00052 15.3263C8.95495 15.2822 8.92934 15.2223 8.92934 15.1598V12.3263C8.92934 12.2639 8.95495 12.204 9.00052 12.1598C9.0461 12.1156 9.10791 12.0908 9.17237 12.0908H11.4556V10.2365C11.4556 7.78043 12.9896 6.25501 15.4594 6.25501C16.5212 6.25501 17.4595 6.33154 17.7478 6.36851C17.8062 6.37599 17.8598 6.40378 17.8987 6.44671C17.9375 6.48963 17.9589 6.54477 17.959 6.60187V9.13654Z"
              fill="#1E1E1E"
            />
          </svg>

          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.3354 0.810547C6.83002 0.810547 0.723755 6.72719 0.723755 13.9997C0.723755 21.2725 6.83002 27.1894 14.3354 27.1894C21.8412 27.1894 27.9475 21.2725 27.9475 13.9997C27.9472 6.72719 21.841 0.810547 14.3354 0.810547ZM21.58 10.5598C21.219 11.0835 20.7702 11.545 20.2521 11.9251C20.2543 12.0017 20.2557 12.0782 20.2557 12.1547C20.2557 16.0011 17.2352 19.9795 12.1802 19.9795C10.6376 19.9802 9.1273 19.5516 7.82885 18.7446C7.78256 18.716 7.74768 18.673 7.72993 18.6226C7.71218 18.5722 7.71261 18.5175 7.73115 18.4675C7.7492 18.4171 7.78451 18.3742 7.83121 18.346C7.87791 18.3178 7.93318 18.306 7.98779 18.3125C8.20092 18.3363 8.41211 18.3481 8.61577 18.3481C9.60731 18.3481 10.5522 18.0897 11.3816 17.5962C10.8821 17.4793 10.422 17.2399 10.0457 16.9008C9.66932 16.5618 9.38938 16.1346 9.23281 15.6603C9.21999 15.6214 9.21782 15.5799 9.22651 15.5399C9.2352 15.4999 9.25445 15.4628 9.28239 15.4321C9.31032 15.4015 9.34608 15.3784 9.38608 15.3653C9.42608 15.3522 9.46893 15.3495 9.51034 15.3575C9.55603 15.366 9.60197 15.3733 9.64765 15.3794C8.80363 14.8583 8.25609 13.942 8.25609 12.9276V12.8939C8.25611 12.8529 8.26717 12.8127 8.28817 12.7771C8.30918 12.7415 8.3394 12.7119 8.37585 12.6911C8.4123 12.6703 8.45371 12.6591 8.49601 12.6586C8.5383 12.658 8.58 12.6682 8.61698 12.6881C8.7227 12.7448 8.8323 12.7941 8.94482 12.8355C8.51295 12.3183 8.27767 11.673 8.27845 11.0077C8.27845 10.4948 8.41867 9.98998 8.68381 9.54799C8.70355 9.51504 8.73123 9.48722 8.7645 9.46692C8.79777 9.44662 8.83562 9.43444 8.87481 9.43143C8.914 9.42842 8.95336 9.43467 8.98952 9.44964C9.02567 9.46461 9.05753 9.48785 9.08238 9.51738C10.375 11.0532 12.2541 12.0193 14.2753 12.1974C14.261 12.0807 14.2539 11.9633 14.254 11.8458C14.254 10.2452 15.5981 8.94304 17.2502 8.94304C18.0296 8.94304 18.7837 9.24092 19.34 9.76416C19.8837 9.64689 20.4046 9.44667 20.8835 9.17099C20.8954 9.13465 20.9163 9.10168 20.9443 9.07489C20.9723 9.0481 21.0066 9.0283 21.0442 9.01719C21.0819 9.00609 21.1217 9.004 21.1604 9.01113C21.1991 9.01825 21.2354 9.03436 21.2662 9.05808C21.297 9.0818 21.3214 9.11241 21.3373 9.14729C21.3532 9.18217 21.3601 9.22027 21.3575 9.25832C21.3548 9.29636 21.3427 9.33321 21.3221 9.36571C21.3015 9.3982 21.2731 9.42536 21.2392 9.44485C21.1202 9.80637 20.9286 10.1415 20.6754 10.431C20.8814 10.3708 21.0832 10.2981 21.2798 10.2135C21.328 10.1928 21.3817 10.188 21.433 10.1995C21.4843 10.211 21.5303 10.2384 21.5641 10.2774C21.598 10.3165 21.6178 10.3652 21.6207 10.4161C21.6235 10.467 21.6092 10.5175 21.58 10.5598Z"
              fill="#1E1E1E"
            />
          </svg>
        </div>
        <h6 className="FooterFoot-Copyright">
          2023 All Rights Reserved @ Dezaina.hub
        </h6>
      </div>
    </div>
  );
};
export default FooterFoot;
