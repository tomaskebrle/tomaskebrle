import Wrapper from "./Wrapper";
import { Icon, Link } from "./PortfolioComponents";

export default function Portfolio() {
  return (
    <Wrapper title="Portfolio" background="graph_paper">
      <div className="xl:flex gap-8">
        <span className="w-5/12">
          <h2 className="text-4xl font-serif mb-4">Maturita Book</h2>
          <p className="text-justify mb-2">
            A web application for students to rate books, from the school
            reading list. It allows students to rate their favorite books, sort
            by rating, pages. They can also write a comment to help other choose
            the right book for them.
          </p>
          <p className="text-justify mb-2">
            I used python to scrape the data, then I built the site using
            NextJS, Firebase and Tailwind.
          </p>
          <div className="flex gap-3 mb-4">
            <Icon link="https://nextjs.org">
              <svg
                width="92"
                height="18"
                viewBox="0 0 92 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_417_418)">
                  <path
                    d="M60.9941 0.00744629H76.8448V2.8575H70.557V17.8513H67.4129V2.8575H60.9941V0.00744629Z"
                    fill="white"
                  />
                  <path
                    d="M34.9258 0.00744629V2.8575H22.2204V7.44238H32.438V10.2924H22.2204V15.0012H34.9258V17.8513H19.0765V2.8575H19.0752V0.00744629H34.9258Z"
                    fill="white"
                  />
                  <path
                    d="M42.8405 0.0148926H38.7261L53.463 17.8587H57.5894L50.22 8.94295L57.5776 0.0285063L53.463 0.0347005L48.1601 6.45069L42.8405 0.0148926Z"
                    fill="white"
                  />
                  <path
                    d="M47.0626 12.7608L45.0021 10.2651L38.7144 17.8723H42.8405L47.0626 12.7608Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.1866 17.8513L4.42988 0H0.5V17.8438H3.64391V3.81411L15.2371 17.8513H19.1866Z"
                    fill="white"
                  />
                  <path
                    d="M77.5514 17.7423C77.3211 17.7423 77.1253 17.6646 76.9613 17.5092C76.7973 17.3538 76.7162 17.1656 76.7183 16.9428C76.7162 16.726 76.7973 16.5399 76.9613 16.3845C77.1253 16.2291 77.3211 16.1514 77.5514 16.1514C77.7729 16.1514 77.9667 16.2291 78.1306 16.3845C78.2969 16.5399 78.3799 16.726 78.3822 16.9428C78.3799 17.09 78.3415 17.2249 78.2648 17.3456C78.1861 17.4683 78.0861 17.5644 77.9602 17.6339C77.8366 17.7055 77.7004 17.7423 77.5514 17.7423Z"
                    fill="white"
                  />
                  <path
                    d="M82.9173 10.2252H84.3105V15.454C84.3084 15.9346 84.2017 16.3456 83.9931 16.6912C83.7822 17.0368 83.4903 17.3006 83.1154 17.4867C82.7427 17.6707 82.3059 17.7648 81.8096 17.7648C81.3557 17.7648 80.949 17.685 80.5868 17.5296C80.2247 17.3742 79.9371 17.1411 79.7263 16.8343C79.5131 16.5276 79.4087 16.1452 79.4087 15.6872H80.8042C80.8063 15.8876 80.8531 16.0614 80.9425 16.2065C81.0319 16.3517 81.1555 16.4621 81.3132 16.5399C81.4728 16.6176 81.6562 16.6564 81.8627 16.6564C82.0865 16.6564 82.2782 16.6114 82.4336 16.5194C82.5891 16.4294 82.7085 16.2945 82.7916 16.1145C82.8725 15.9366 82.9152 15.7158 82.9173 15.454V10.2252Z"
                    fill="white"
                  />
                  <path
                    d="M90.043 12.2701C90.0091 11.9531 89.8599 11.7057 89.6 11.5299C89.3379 11.3519 88.9993 11.264 88.5838 11.264C88.2921 11.264 88.0408 11.307 87.832 11.3908C87.6232 11.4767 87.4613 11.5912 87.3504 11.7364C87.2398 11.8816 87.1844 12.0472 87.18 12.2333C87.18 12.3887 87.2183 12.5237 87.2929 12.6362C87.3675 12.7507 87.4675 12.8468 87.5976 12.9245C87.7253 13.0042 87.868 13.0697 88.0237 13.1228C88.1812 13.176 88.339 13.221 88.4965 13.2578L89.2229 13.4316C89.5148 13.4971 89.7982 13.585 90.0687 13.6975C90.3391 13.8079 90.5842 13.949 90.7992 14.1187C91.0145 14.2884 91.1849 14.4929 91.3106 14.7322C91.4362 14.9714 91.5002 15.2516 91.5002 15.5747C91.5002 16.0102 91.3852 16.3926 91.1528 16.7239C90.9207 17.0531 90.5863 17.3108 90.1474 17.4969C89.7107 17.681 89.1824 17.775 88.5605 17.775C87.9597 17.775 87.4357 17.685 86.9948 17.5051C86.5518 17.3272 86.2065 17.0654 85.9573 16.7219C85.7081 16.3783 85.5739 15.9591 85.5547 15.4663H86.9352C86.9543 15.7239 87.0396 15.9387 87.1844 16.1125C87.3313 16.2843 87.523 16.4111 87.7574 16.4969C87.9939 16.5808 88.2579 16.6237 88.5498 16.6237C88.8545 16.6237 89.1229 16.5787 89.355 16.4908C89.585 16.4029 89.7661 16.2802 89.8961 16.1207C90.0282 15.9632 90.0943 15.7771 90.0964 15.5645C90.0943 15.3702 90.0345 15.2086 89.9195 15.0818C89.8024 14.9551 89.6405 14.8487 89.4337 14.7629C89.2252 14.677 88.9822 14.5993 88.7053 14.5318L87.8235 14.315C87.1865 14.1576 86.6816 13.9183 86.3129 13.5973C85.9425 13.2762 85.7591 12.8509 85.7591 12.3172C85.7591 11.8796 85.8827 11.4951 86.1321 11.1659C86.379 10.8367 86.7178 10.581 87.146 10.399C87.5763 10.215 88.062 10.125 88.603 10.125C89.1527 10.125 89.634 10.215 90.0495 10.399C90.4648 10.581 90.7909 10.8346 91.0272 11.1577C91.2637 11.4808 91.3872 11.8509 91.3937 12.2701H90.043Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_417_418">
                    <rect
                      width="91"
                      height="18"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Icon>
            <Icon link="https://firebase.com">
              <svg
                width="74"
                height="74"
                viewBox="0 0 74 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1489 58.3098L20.549 4.1523C20.6517 3.4881 21.1644 2.96451 21.8221 2.85193C22.4799 2.73934 23.1353 3.06325 23.4499 3.65604L32.137 19.9814L35.5997 13.3387C35.8678 12.8251 36.3965 12.5034 36.9726 12.5034C37.5486 12.5034 38.0772 12.8251 38.3455 13.3387L61.7889 58.3097H12.1489V58.3098Z"
                  fill="white"
                />
                <path
                  d="M41.3489 37.0186L32.2568 19.6198L12.1489 58.3098L41.3489 37.0186Z"
                  fill="white"
                />
                <path
                  d="M61.7889 58.1552L55.3552 18.003C55.2579 17.4264 54.8499 16.9527 54.2973 16.7742C53.7448 16.5956 53.14 16.7442 52.7297 17.1576L12.1489 58.1546L34.6033 70.8543C36.0133 71.6483 37.7306 71.6483 39.1407 70.8543L61.7889 58.1546V58.1552Z"
                  fill="white"
                />
                <path
                  d="M55.3586 18.1562C55.2615 17.5816 54.8537 17.1096 54.3014 16.9317C53.7491 16.7537 53.1447 16.9018 52.7346 17.3138L44.6846 25.4292L38.3546 13.3111C38.0865 12.7988 37.5582 12.478 36.9824 12.478C36.4067 12.478 35.8784 12.7988 35.6103 13.3111L32.1495 19.9371L23.4668 3.65308C23.1519 3.06162 22.496 2.73905 21.8379 2.85219C21.1797 2.96533 20.669 3.48891 20.5675 4.15196L12.176 58.1695H12.1489L12.176 58.2007L12.3969 58.3098L52.7229 17.7119C53.1328 17.2977 53.7387 17.1488 54.2924 17.3262C54.8462 17.5036 55.2547 17.9775 55.3509 18.5537L61.7269 58.2084L61.7889 58.1694L55.3587 18.1561L55.3586 18.1562ZM12.2496 58.0954L20.5714 4.53398C20.6728 3.87094 21.1847 3.34735 21.8423 3.23421C22.4999 3.12107 23.1558 3.44354 23.4712 4.0351L32.153 20.3194L35.6138 13.6934C35.8818 13.1811 36.4102 12.8603 36.9859 12.8603C37.5617 12.8603 38.09 13.1811 38.358 13.6934L44.5597 25.5539L12.2493 58.0954H12.2496Z"
                  fill="white"
                />
                <path
                  opacity="0.2"
                  d="M39.1407 70.4591C37.7307 71.2658 36.0134 71.2658 34.6033 70.4591L12.2032 57.5916L12.1489 57.9454L34.6033 70.8447C36.0133 71.6515 37.7306 71.6515 39.1407 70.8447L61.7889 57.9454L61.7308 57.5798L39.1407 70.4592V70.4591Z"
                  fill="white"
                />
                <path
                  d="M55.3551 18.1641C55.2579 17.5891 54.8498 17.1165 54.2973 16.9394C53.7447 16.7624 53.14 16.9096 52.7296 17.3218L44.6748 25.4409L38.3418 13.3168C38.0735 12.8042 37.5449 12.4832 36.9689 12.4832C36.3929 12.4832 35.8643 12.8042 35.5961 13.3168L32.1329 19.9463L23.4459 3.65351C23.1309 3.06176 22.4747 2.73893 21.8167 2.85223C21.1587 2.96553 20.6466 3.48919 20.5451 4.15271L12.1489 58.1978L34.6033 70.856C36.0133 71.6477 37.7306 71.6477 39.1407 70.856L61.7889 58.1978L55.3551 18.164V18.1641Z"
                  fill="white"
                />
              </svg>
            </Icon>
            <Icon link="https://tailwindcss.com">
              <svg
                width="76"
                height="76"
                viewBox="0 0 76 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.2018 17.2139C24.9278 17.604 21.2798 26.3719 20.4438 31.1219C21.5332 29.3612 24.9658 25.498 30.0198 25.498C35.9098 25.498 40.3938 32.072 43.1298 34.124C46.4539 36.617 53.1332 39.9087 61.9018 37.24C68.8938 35.112 72.1365 27.6892 72.8458 24.1679C69.4638 28.7659 64.3338 31.5277 57.9878 28.2719C53.6178 26.0299 50.3498 16.796 37.2018 17.2139Z"
                  fill="white"
                />
                <path
                  d="M19.8361 38.0759C7.56212 38.466 3.91412 47.2339 3.07812 51.9839C4.16746 50.2232 7.60012 46.36 12.6541 46.36C18.5441 46.36 23.0281 52.934 25.7641 54.986C29.0881 57.479 35.7675 60.7707 44.5361 58.102C51.5281 55.974 54.7708 48.5512 55.4801 45.0299C52.0981 49.6279 46.9681 52.3897 40.6221 49.1339C36.2521 46.8919 32.9841 37.658 19.8361 38.0759Z"
                  fill="white"
                />
              </svg>
            </Icon>
          </div>
          <span className="flex flex-col gap-3">
            <Link
              type="github"
              link="https://github.com/tomaskebrle/maturitabook"
            >
              tomaskebrle/maturitabook
            </Link>
            <Link type="site" link="https://maturita-book.vercel.app">
              maturita-book.vercel.app
            </Link>
          </span>
        </span>
        <span className="w-7/12">
          <img src="/maturitabook.jpg" alt="" />
        </span>
      </div>
    </Wrapper>
  );
}
