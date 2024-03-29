import Wrapper from "./Wrapper";
import { Icon, Link } from "./PortfolioComponents";

export default function Portfolio() {
  return (
    <Wrapper title="Portfolio" background="graph_paper">
      <div className="xl:flex gap-8">
        <span className="w-7/12">
          <h2 className="text-4xl font-serif mb-4">Astro OG Image</h2>
          <p className="text-justify mb-2">
            An astro integration for optimalizing SEO of sites, by generating
            Open Graph images, on build time.
          </p>
          <div className="flex gap-3 mb-4">
            <Icon link="https://astro.build">
              <svg
                width="76"
                height="76"
                viewBox="0 0 76 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M48.3931 5.61948C48.9701 6.33584 49.2644 7.30253 49.8529 9.23595L62.7102 51.4723C57.9565 49.0062 52.7888 47.2276 47.3387 46.2681L38.9674 17.9786C38.8304 17.5157 38.4052 17.1982 37.9225 17.1982C37.4386 17.1982 37.0126 17.5174 36.8768 17.9819L28.6067 46.2538C23.1314 47.2091 17.9401 48.9908 13.166 51.4658L26.0864 9.22616H26.0864C26.6768 7.29611 26.972 6.33109 27.5491 5.616C28.0585 4.98471 28.7212 4.49443 29.4739 4.19188C30.3265 3.84918 31.3357 3.84918 33.354 3.84918H42.5824C44.6034 3.84918 45.6138 3.84918 46.4672 4.1926C47.2206 4.49578 47.8836 4.98704 48.3931 5.61948Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M49.9314 53.4823C47.8119 55.2947 43.5814 56.5308 38.7083 56.5308C32.7273 56.5308 27.7143 54.6688 26.384 52.1646C25.9085 53.5997 25.8019 55.2423 25.8019 56.2915C25.8019 56.2915 25.4885 61.4436 29.0721 65.0275C29.0721 63.1667 30.5806 61.6586 32.4414 61.6586C35.6307 61.6586 35.6271 64.4409 35.6242 66.6983C35.6241 66.766 35.624 66.8331 35.624 66.8996C35.624 70.3261 37.7182 73.2634 40.6966 74.502C40.2517 73.587 40.0022 72.5592 40.0022 71.4738C40.0022 68.2058 41.9208 66.9887 44.1505 65.5743C45.9247 64.4492 47.8959 63.1993 49.2544 60.6913C49.9632 59.3827 50.3657 57.8843 50.3657 56.2915C50.3657 55.3121 50.2135 54.3683 49.9314 53.4823Z"
                  fill="white"
                />
              </svg>
            </Icon>
            <Icon link="https://www.typescriptlang.org/">
              <svg
                width="76"
                height="76"
                viewBox="0 0 76 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_418_191)">
                  <path
                    d="M68.5781 0H7.42188C3.32289 0 0 3.32289 0 7.42188V68.5781C0 72.6771 3.32289 76 7.42188 76H68.5781C72.6771 76 76 72.6771 76 68.5781V7.42188C76 3.32289 72.6771 0 68.5781 0Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M47.0456 60.477V67.9079C48.2536 68.5272 49.6823 68.9915 51.3318 69.3012C52.9812 69.6108 54.7196 69.7656 56.5471 69.7656C58.3282 69.7656 60.0201 69.5954 61.6231 69.2547C63.2261 68.9142 64.6316 68.3529 65.8396 67.5711C67.0476 66.7895 68.004 65.7676 68.7086 64.5059C69.4132 63.2442 69.7656 61.6845 69.7656 59.8268C69.7656 58.4799 69.5643 57.2995 69.1616 56.2856C68.7589 55.2716 68.1782 54.3698 67.4193 53.5803C66.6605 52.7908 65.7505 52.0824 64.6897 51.4554C63.6288 50.8284 62.4324 50.2363 61.1004 49.6791C60.1248 49.2765 59.2497 48.8857 58.4753 48.5064C57.7009 48.127 57.0427 47.74 56.5007 47.3453C55.9586 46.9505 55.5404 46.5325 55.2462 46.0913C54.952 45.65 54.8048 45.1508 54.8048 44.5934C54.8048 44.0827 54.9364 43.6221 55.1998 43.2118C55.4631 42.8015 55.8348 42.4494 56.3148 42.1552C56.795 41.8612 57.3834 41.6327 58.0803 41.4702C58.7774 41.3076 59.5516 41.2264 60.4035 41.2264C61.023 41.2264 61.6773 41.2729 62.3665 41.3657C63.0557 41.4586 63.7487 41.6018 64.4458 41.7952C65.1427 41.9888 65.8202 42.2327 66.4785 42.5268C67.1367 42.821 67.7445 43.1615 68.302 43.5486V36.6053C67.1715 36.1718 65.9364 35.8506 64.5967 35.6416C63.2571 35.4326 61.7199 35.3281 59.9854 35.3281C58.2197 35.3281 56.5471 35.5178 54.9674 35.8971C53.3878 36.2763 51.9978 36.8685 50.7974 37.6734C49.5971 38.4786 48.6486 39.5041 47.9517 40.7504C47.2548 41.9965 46.9062 43.4865 46.9062 45.2204C46.9062 47.4342 47.5451 49.323 48.8229 50.8866C50.1005 52.4501 52.0403 53.7737 54.6422 54.8575C55.6644 55.2755 56.6169 55.6856 57.4996 56.0881C58.3824 56.4907 59.1452 56.9087 59.7878 57.3421C60.4305 57.7756 60.9377 58.2478 61.3096 58.7587C61.6813 59.2695 61.8671 59.85 61.8671 60.5003C61.8671 60.9802 61.7509 61.4252 61.5186 61.8355C61.2863 62.2458 60.9339 62.6017 60.4616 62.9037C59.9892 63.2056 59.4007 63.4416 58.696 63.6119C57.9913 63.7823 57.1667 63.8673 56.2219 63.8673C54.6112 63.8673 53.0161 63.5848 51.4363 63.0197C49.8566 62.4548 48.393 61.6072 47.0456 60.477V60.477ZM34.5533 42.1684H44.0859V36.0703H17.5156V42.1684H27.0017V69.3203H34.5533V42.1684Z"
                    fill="#141414"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_418_191">
                    <rect width="76" height="76" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Icon>
          </div>
          <span className="flex flex-col gap-3">
            <Link
              type="github"
              link="https://github.com/tomaskebrle/astro-og-image"
            >
              tomaskebrle/astro-og-image
            </Link>
            <Link type="site" link="https://npmjs.com/package/astro-og-image">
              npmjs.com/package/astro-og-image
            </Link>
          </span>
        </span>
      </div>
    </Wrapper>
  );
}
