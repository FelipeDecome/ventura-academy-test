import React from 'react';

import './styles.css';

const Logo: React.FC = () => {
    return (
        <svg
            className="logo"
            aria-labelledby="logo-label"
            width="111"
            height="28"
            viewBox="0 0 111 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title id="logo-label">Logo</title>
            <path
                className="fill"
                d="M36.072 1.87207L29.052 27.0001H23.112L18.396 9.10807L13.464 27.0001L7.55999 27.0361L0.791992 1.87207H6.19199L10.62 21.3841L15.732 1.87207H21.348L26.172 21.2761L30.636 1.87207H36.072Z"
            />
            <path
                className="fill"
                d="M38.0669 16.9561C38.0669 14.9401 38.4629 13.1521 39.2549 11.5921C40.0709 10.0321 41.1629 8.83207 42.5309 7.99207C43.9229 7.15207 45.4709 6.73207 47.1749 6.73207C48.6629 6.73207 49.9589 7.03207 51.0629 7.63207C52.1909 8.23207 53.0909 8.98807 53.7629 9.90007V7.05607H58.8389V27.0001H53.7629V24.0841C53.1149 25.0201 52.2149 25.8001 51.0629 26.4241C49.9349 27.0241 48.6269 27.3241 47.1389 27.3241C45.4589 27.3241 43.9229 26.8921 42.5309 26.0281C41.1629 25.1641 40.0709 23.9521 39.2549 22.3921C38.4629 20.8081 38.0669 18.9961 38.0669 16.9561ZM53.7629 17.0281C53.7629 15.8041 53.5229 14.7601 53.0429 13.8961C52.5629 13.0081 51.9149 12.3361 51.0989 11.8801C50.2829 11.4001 49.4069 11.1601 48.4709 11.1601C47.5349 11.1601 46.6709 11.3881 45.8789 11.8441C45.0869 12.3001 44.4389 12.9721 43.9349 13.8601C43.4549 14.7241 43.2149 15.7561 43.2149 16.9561C43.2149 18.1561 43.4549 19.2121 43.9349 20.1241C44.4389 21.0121 45.0869 21.6961 45.8789 22.1761C46.6949 22.6561 47.5589 22.8961 48.4709 22.8961C49.4069 22.8961 50.2829 22.6681 51.0989 22.2121C51.9149 21.7321 52.5629 21.0601 53.0429 20.1961C53.5229 19.3081 53.7629 18.2521 53.7629 17.0281Z"
            />
            <path
                className="fill"
                d="M69.6293 11.1961V20.8441C69.6293 21.5161 69.7853 22.0081 70.0973 22.3201C70.4333 22.6081 70.9853 22.7521 71.7533 22.7521H74.0933V27.0001H70.9253C66.6773 27.0001 64.5533 24.9361 64.5533 20.8081V11.1961H62.1773V7.05607H64.5533V2.12407H69.6293V7.05607H74.0933V11.1961H69.6293Z"
            />
            <path
                className="stroke"
                d="M88.6562 10.6875H85C80.9613 10.6875 77.6875 13.9613 77.6875 18C77.6875 22.0387 80.9613 25.3125 85 25.3125H88.6562"
                strokeWidth="4"
            />
            <path
                className="stroke"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M87.8862 18.4127L84.0581 21.1905C83.6886 21.4586 83.1492 21.2139 83.1492 20.7781V15.2216C83.1492 14.7857 83.6888 14.541 84.0584 14.8091L87.8862 17.5879C88.1748 17.7973 88.1748 18.2031 87.8862 18.4127Z"
                strokeWidth="2"
            />
            <path
                className="fill"
                d="M102.716 6.76811C104.228 6.76811 105.572 7.10411 106.748 7.77611C107.924 8.42411 108.836 9.39611 109.484 10.6921C110.156 11.9641 110.492 13.5001 110.492 15.3001V27.0001H105.452V15.9841C105.452 14.4001 105.056 13.1881 104.264 12.3481C103.472 11.4841 102.392 11.0521 101.024 11.0521C99.632 11.0521 98.528 11.4841 97.712 12.3481C96.92 13.1881 96.524 14.4001 96.524 15.9841V27.0001H91.484V0.360107H96.524V9.54011C97.172 8.67611 98.036 8.00411 99.116 7.52411C100.196 7.02011 101.396 6.76811 102.716 6.76811Z"
            />
        </svg>
    );
};

export default Logo;
