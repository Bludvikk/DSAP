"use client";

import Image from "next/image";
import { IoLogoTwitter } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import {
  MdContactPhone,
  MdLocationPin,
  MdOutlineFacebook,
  MdOutlineMailOutline,
  MdPhone,
} from "react-icons/md";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full flex-col justify-start items-start inline-flex">
      <div className="self-stretch px-20 py-12 rounded-t-xl bg-teal-400 justify-between items-start">
        <div className="justify-start items-center gap-[420px] flex flex-row">
          <div className="flex flex-col gap-3">
            <div className="justify-start items-center gap-3 inline-flex">
              <Image
                className="w-11 h-11 hidden md:block rounded-full"
                src="/images/dsap_logo.png"
                width={100}
                height={100}
                alt="logo"
              />
              <div className="text-center text-white text-base font-bold leading-normal">
                Drugstores Association of the Philippines Inc.
              </div>
            </div>
            <div className="text-gray-200 text-base font-normal leading-normal">
              "One Cause, One Voice, One Future"
            </div>
            <div className="justify-start items-end gap-3 inline-flex">
              <div className="w-8 h-8 relative">
                <MdOutlineFacebook
                  size={30}
                  className="w-8 h-8 left-0 hover:scale-110 duration-300 transition cursor-pointer text-teal-500 top-0 absolute bg-white rounded-full"
                />
              </div>
              <div className="w-8 h-8 relative">
                <IoLogoTwitter
                  size={30}
                  className="w-8 h-8 left-0 hover:scale-110 duration-300 transition cursor-pointer text-teal-500 p-1 top-0 absolute bg-white rounded-full"
                />
              </div>
              <div className="w-8 h-8 relative">
                <SiGmail
                  size={30}
                  className="w-8 h-8 left-0 top-0 hover:scale-110 duration-300 transition cursor-pointer text-teal-500 p-0.5 absolute bg-white rounded-full"
                />
              </div>
              <div className="w-8 h-8 relative">
                <FaLinkedin
                  size={30}
                  className="w-8 h-8 p-1 text-teal-500 left-0 hover:scale-110 duration-300 transition cursor-pointer top-0 absolute bg-white rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="w-auto flex-col justify-center items-start gap-2 inline-flex">
              <div className="text-center underline text-white text-base font-bold leading-normal">
                Useful links
              </div>
              <div className="text-center underline text-white text-base font-normal leading-normal">
                News
              </div>
              <div className="text-center underline text-white text-base font-normal leading-normal">
                Events
              </div>
              <div className="text-center underline text-white text-base font-normal leading-normal">
                About
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch px-11 bg-teal-700 py-4 z-10 justify-between items-center flex flex-row relative">
        <div className="flex flex-row gap-6">
          <div className="text-center text-gray-50 text-sm font-bold leading-tight">
            DSAP © 2023
          </div>
          <div className="text-center text-gray-50 text-sm font-normal leading-tight">
            Privacy Policy
          </div>
          <div className="text-center text-gray-50 text-sm font-normal leading-tight">
            Terms & Conditions
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center absolute right-[2%]">
          <text className="text-[#E7D9D9] opacity-70 text-xs font-extralight">
            Powered by
          </text>
          <Link href="http://boredguyscorp.com/">
            <svg
              className="hover:animate-pulse duration-75 transition-all cursor pointer"
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              width="100.000000pt"
              height="35.000000pt"
              viewBox="0 0 880.000000 300.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                fill="#E7D9D9"
                stroke="none"
              >
                <path d="M422 2558 l3 -33 68 -3 67 -3 0 -179 0 -180 40 0 40 0 0 180 0 180 70 0 70 0 0 35 0 35 -181 0 -180 0 3 -32z" />
                <path d="M1150 2375 l0 -215 40 0 40 0 0 90 0 90 110 0 110 0 0 -90 0 -90 40 0 40 0 0 215 0 215 -40 0 -40 0 0 -90 0 -90 -110 0 -110 0 0 90 0 90 -40 0 -40 0 0 -215z" />
                <path d="M1910 2375 l0 -215 163 0 163 0 0 35 0 35 -123 0 -123 0 0 50 0 49 118 3 117 3 0 35 0 35 -118 3 -118 3 3 52 3 52 120 2 119 1 2 36 1 36 -164 0 -163 0 0 -215z" />
                <path d="M1675 1926 c-135 -33 -249 -125 -310 -250 -63 -128 -69 -249 -18 -391 69 -191 192 -282 394 -293 165 -8 256 24 362 129 97 97 140 190 145 317 5 116 -15 198 -68 280 -111 171 -315 255 -505 208z m279 -105 c77 -38 157 -120 194 -198 24 -51 27 -70 27 -158 0 -88 -3 -107 -28 -159 -36 -78 -85 -136 -146 -176 -49 -31 -139 -65 -149 -56 -2 3 5 18 17 35 44 61 74 142 75 203 2 57 3 60 34 75 38 18 62 58 62 103 0 39 -15 69 -49 97 -23 19 -24 22 -8 28 19 8 47 54 47 78 0 13 -6 13 -42 0 -97 -34 -290 -33 -388 1 -24 8 -46 14 -47 12 -7 -7 19 -62 39 -84 l22 -22 -30 -31 c-24 -25 -29 -39 -29 -80 0 -45 4 -54 35 -82 32 -29 33 -31 15 -41 -37 -21 -81 -73 -92 -111 -14 -44 -10 -57 15 -48 15 6 15 4 4 -10 -18 -21 -35 -13 -66 31 -132 191 -83 449 109 570 112 71 263 80 379 23z m-213 -270 c35 -35 38 -77 9 -114 -62 -79 -198 -8 -160 83 26 63 103 78 151 31z m240 0 c20 -20 29 -39 29 -61 0 -40 -47 -90 -85 -90 -69 0 -119 63 -95 120 26 63 103 78 151 31z m-155 -142 c3 -6 -1 -18 -10 -27 -15 -15 -17 -15 -32 0 -19 19 -11 38 16 38 10 0 22 -5 26 -11z m-2 -83 c3 -13 3 -39 0 -58 -12 -62 -86 -188 -110 -188 -20 0 -18 7 16 48 41 52 73 130 73 180 0 46 11 56 21 18z" />
                <path d="M1652 1463 c6 -7 25 -13 43 -13 18 0 37 6 43 13 8 9 -1 12 -43 12 -41 0 -51 -3 -43 -12z" />
                <path d="M1850 1469 c0 -20 82 -26 98 -6 8 9 -2 12 -44 12 -30 0 -54 -3 -54 -6z" />
                <path d="M5228 1900 c-65 -16 -158 -69 -205 -116 -89 -90 -143 -260 -128 -403 27 -249 193 -392 455 -391 141 1 223 29 311 107 l49 45 -2 187 -3 186 -185 0 -185 0 -3 -72 -3 -73 116 0 115 0 0 -79 c0 -77 -1 -80 -29 -101 -104 -73 -284 -65 -380 17 -22 18 -52 59 -68 91 -24 49 -28 69 -28 142 0 138 55 234 167 291 87 45 224 35 314 -23 l47 -30 51 51 c50 50 50 50 31 71 -10 12 -56 40 -102 62 -80 40 -88 42 -191 44 -59 2 -124 -1 -144 -6z" />
                <path d="M7893 1896 c-121 -39 -193 -126 -193 -233 0 -78 18 -124 65 -169 52 -50 126 -77 273 -99 100 -15 166 -38 191 -68 21 -26 24 -81 7 -114 -39 -76 -210 -105 -324 -54 -48 22 -104 71 -114 102 -3 9 -24 2 -71 -25 -37 -20 -67 -39 -67 -42 0 -3 15 -29 34 -58 63 -98 175 -146 341 -146 153 0 259 38 323 116 73 89 70 247 -6 327 -55 58 -131 86 -300 111 -107 16 -132 25 -169 59 -49 45 -11 135 65 157 93 25 205 5 274 -51 l37 -30 61 31 c33 17 60 35 60 40 0 23 -86 101 -139 127 -51 26 -67 28 -181 30 -84 2 -139 -2 -167 -11z" />
                <path d="M478 1884 c-5 -4 -8 -203 -8 -442 l0 -434 268 4 c221 4 275 7 311 21 100 39 150 106 158 212 4 51 1 68 -24 115 -18 35 -42 64 -66 79 l-37 25 36 30 c45 36 64 80 64 143 0 111 -50 186 -148 225 -52 20 -77 22 -302 26 -135 2 -248 0 -252 -4z m466 -158 c106 -44 97 -165 -14 -187 -25 -4 -102 -8 -172 -9 l-128 0 0 105 0 105 140 0 c97 0 151 -4 174 -14z m26 -358 c29 -15 52 -36 65 -60 18 -35 19 -38 3 -72 -29 -60 -61 -70 -245 -74 l-163 -4 0 116 0 116 148 0 c133 0 152 -2 192 -22z" />
                <path d="M2375 1878 c-3 -7 -4 -204 -3 -438 l3 -425 78 -3 77 -3 0 146 0 145 83 0 82 0 98 -112 c171 -198 142 -178 252 -178 52 0 95 3 95 8 0 4 -56 70 -125 147 -69 77 -125 143 -125 146 0 3 25 16 55 28 217 90 202 433 -23 523 -53 21 -76 23 -300 26 -194 3 -243 1 -247 -10z m342 -148 l132 0 36 -31 c68 -60 70 -152 5 -214 l-31 -30 -165 -3 -164 -3 0 139 c0 76 3 142 7 146 4 4 17 5 28 2 11 -3 79 -6 152 -6z" />
                <path d="M3230 1450 l0 -440 325 0 325 0 0 80 0 80 -245 0 -245 0 0 100 0 100 240 0 241 0 -3 73 -3 72 -237 3 -238 2 0 105 0 105 245 0 245 0 0 80 0 80 -325 0 -325 0 0 -440z" />
                <path d="M4019 1886 c-2 -2 -3 -200 -1 -440 l2 -436 200 0 c219 0 277 8 363 52 204 102 277 379 162 614 -52 105 -165 182 -305 205 -54 9 -413 13 -421 5z m461 -177 c59 -26 96 -62 128 -124 22 -42 26 -63 26 -135 1 -103 -22 -159 -90 -219 -59 -52 -105 -63 -249 -59 l-120 3 -3 265 c-1 146 0 270 3 277 3 10 38 13 132 13 107 0 135 -4 173 -21z" />
                <path d="M5864 1876 c-3 -8 -4 -147 -2 -308 4 -276 5 -296 26 -350 64 -160 197 -236 394 -226 138 7 227 52 287 146 54 85 61 134 61 460 l0 293 -77 -3 -78 -3 -5 -300 c-5 -282 -6 -302 -26 -340 -40 -75 -98 -107 -191 -107 -122 0 -204 68 -223 187 -5 33 -10 174 -10 313 l0 252 -75 0 c-56 0 -77 -4 -81 -14z" />
                <path d="M6767 1884 c-3 -3 70 -120 164 -260 l169 -254 0 -180 0 -180 80 0 80 0 0 183 1 182 173 250 c95 138 171 253 169 258 -2 4 -46 7 -97 7 l-93 0 -114 -180 c-63 -98 -116 -179 -119 -180 -3 0 -50 73 -104 163 -55 89 -106 170 -114 180 -12 14 -32 17 -102 17 -48 0 -89 -3 -93 -6z" />
                <path d="M6579 775 c-58 -19 -113 -74 -134 -134 -46 -136 16 -265 148 -307 55 -17 59 -17 115 0 79 25 106 47 137 111 24 48 27 64 23 129 -3 64 -8 81 -34 118 -55 79 -160 113 -255 83z m137 -74 c95 -43 112 -195 30 -270 -34 -32 -119 -41 -164 -17 -108 56 -100 243 12 292 42 18 74 17 122 -5z" />
                <path d="M5827 765 c-136 -48 -180 -247 -81 -363 35 -42 119 -82 169 -82 29 0 122 34 150 55 19 15 19 16 -6 40 l-25 26 -49 -22 c-111 -49 -215 16 -215 136 0 120 115 191 222 136 l37 -18 23 24 c23 24 23 25 3 40 -57 44 -152 56 -228 28z" />
                <path d="M7250 554 l0 -215 38 3 37 3 2 60 c1 33 2 66 2 73 1 7 15 12 35 12 30 0 43 -9 102 -75 64 -71 69 -75 111 -75 24 0 43 3 43 6 0 3 -27 35 -60 71 -62 68 -70 83 -45 83 8 0 29 13 46 28 27 24 33 37 37 84 5 66 -14 110 -61 138 -27 17 -51 20 -159 20 l-128 0 0 -216z m259 120 c24 -30 26 -43 10 -78 -16 -34 -55 -48 -130 -44 l-64 3 -3 59 c-4 86 -5 86 87 86 74 0 81 -2 100 -26z" />
                <path d="M7988 555 l3 -215 34 0 34 0 3 63 3 62 95 5 c106 6 139 20 165 69 27 54 28 102 3 151 -35 68 -67 80 -218 80 l-125 0 3 -215z m257 120 c33 -32 33 -78 0 -111 -23 -23 -31 -25 -102 -22 l-78 3 -3 64 c-2 35 -1 70 2 77 4 10 27 14 81 14 67 0 79 -3 100 -25z" />
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

{
  /* <div className="w-auto  flex-col justify-start items-start gap-3 inline-flex">
            
          </div>
          
          
         */
}
{
  /* <div className="flex-col justify-center items-start gap-3 inline-flex">
          
        </div> */
}

{
  /*  */
}
