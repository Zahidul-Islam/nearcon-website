const ownerId = "nearcon23.near";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  padding: 3.5em 3.5em 4.5em;
  gap: 3em;
  background: #fff;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h2 {
    font-family: "FK Grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 2em;
    line-height: 1.4em;
    color: #000000;
  }
`;

const Tracks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  width: 100%;

  div {
    width: 100%;
    margin: 0;
  }

  @media (min-width: 768px) {
    div {
      width: 48%;
    }
  }

  @media (min-width: 1024px) {
    div {
      width: 24%;
    }
  }
`;

return (
  <Container>
    <Title>
      <h2>Two Locations. Four tracks.</h2>
      {/*<Widget
        src={`${ownerId}/widget/Home.BlackButton`}
        props={{ text: "View Full Schedule" }}
      />*/}
    </Title>
    <Tracks>
      <Widget
        src={`${ownerId}/widget/Home.TrackCard`}
        props={{
          icon: (
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M49.875 0H6.125C2.7475 0 0 2.7475 0 6.125V49.875C0 53.2525 2.7475 56 6.125 56H49.875C53.2525 56 56 53.2525 56 49.875V6.125C56 2.7475 53.2525 0 49.875 0ZM15.0019 32.8606L23.5113 43.8681C23.7869 44.2969 23.7606 44.87 23.3844 45.2463L23.345 45.2856C23.0081 45.6225 22.3519 45.5744 21.8444 45.0669L9.68187 32.9044C9.51125 32.7337 9.51125 32.4581 9.68187 32.2875L21.8444 20.125C22.3519 19.6175 23.0081 19.565 23.345 19.9062L23.3844 19.9456C23.7606 20.3219 23.7869 20.895 23.5113 21.3238L15.0019 32.3312C14.8794 32.4888 14.8794 32.7075 15.0019 32.865V32.8606ZM46.3181 32.9044L34.1556 45.0669C33.6481 45.5744 32.9919 45.6269 32.655 45.2856L32.6156 45.2463C32.2394 44.87 32.2131 44.2969 32.4888 43.8681L40.9981 32.8606C41.1206 32.7031 41.1206 32.4844 40.9981 32.3269L32.4888 21.3194C32.2131 20.8906 32.2394 20.3175 32.6156 19.9412L32.655 19.9019C32.9919 19.565 33.6481 19.6131 34.1556 20.1206L46.3181 32.2831C46.4888 32.4538 46.4888 32.7294 46.3181 32.9V32.9044ZM53.375 10.0625H2.625V6.125C2.625 4.19563 4.19563 2.625 6.125 2.625H49.875C51.8044 2.625 53.375 4.19563 53.375 6.125V10.0625Z"
                fill="#9797FF"
              />
            </svg>
          ),
          title: "Developers",
          description: (
            <>
              Whether you’re a Web2 developer just getting started in the space
              or a Web3 native who’s been here since the beginning, these talks
              and technical workshops will meet you wherever you are on your
              journey
            </>
          ),
          color: "#7269E1",
        }}
      />
      <Widget
        src={`${ownerId}/widget/Home.TrackCard`}
        props={{
          icon: (
            <svg
              width="57"
              height="56"
              viewBox="0 0 57 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.2566 20.1786C33.8054 20.1786 38.3214 15.6516 38.3214 10.0893C38.3214 4.52702 33.8054 0 28.2566 0C22.7078 0 18.1917 4.52702 18.1917 10.0893C18.1917 15.6516 22.7078 20.1786 28.2566 20.1786ZM10.9187 26.434C14.5377 26.434 17.4828 23.4817 17.4828 19.854C17.4828 16.2262 14.5377 13.274 10.9187 13.274C7.29978 13.274 4.35471 16.2262 4.35471 19.854C4.35471 23.4817 7.29978 26.434 10.9187 26.434ZM45.2574 26.434C48.8764 26.434 51.8215 23.4817 51.8215 19.854C51.8215 16.2262 48.8764 13.274 45.2574 13.274C41.6384 13.274 38.6934 16.2262 38.6934 19.854C38.6934 23.4817 41.6384 26.434 45.2574 26.434ZM50.5743 29.316H40.9645C40.5751 26.548 38.2076 24.4161 35.337 24.4161H21.6094C18.7387 24.4161 16.3713 26.548 15.9818 29.316H5.93883C2.79685 29.316 0.25 31.869 0.25 35.0186V47.7092C0.25 48.5646 0.740115 49.3411 1.50592 49.7227C4.70042 51.3107 8.05245 52.6267 11.5314 53.6356C11.7896 53.7102 12.0565 53.5347 12.0871 53.2671L12.5816 49.42L14.3627 35.4705C14.4458 35.0888 14.7697 34.7862 15.181 34.7862H15.2204C15.588 34.7862 15.9162 35.1678 15.9162 35.7249V54.3594C15.9162 54.5699 16.065 54.7498 16.2663 54.7937C20.139 55.5789 24.1431 56 28.2478 56C32.3525 56 36.6717 55.5438 40.6889 54.7015C40.8902 54.6577 41.0389 54.4778 41.0389 54.2673V49.42V35.7249C41.0389 35.1722 41.3803 34.7862 41.761 34.7862H41.8047C42.2292 34.7862 42.5705 35.0844 42.6537 35.4705L44.8505 53.1311C44.8855 53.3987 45.1524 53.5786 45.4106 53.4996C48.732 52.5126 51.9352 51.2449 54.9897 49.7227C55.7555 49.3411 56.25 48.5646 56.25 47.7048V35.0143C56.25 31.8646 53.7032 29.3116 50.5612 29.3116L50.5743 29.316Z"
                fill="#17D9D4"
              />
            </svg>
          ),
          title: "Entrepreneurs",
          description: (
            <>
              An open web gives Web2 and Web3 businesses a new way to create
              innovative products and solutions that change how they connect and
              engage with their users. These talks will help show the way
            </>
          ),
          color: "#17D9D4",
        }}
      />
      <Widget
        src={`${ownerId}/widget/Home.TrackCard`}
        props={{
          icon: (
            <svg
              width="57"
              height="56"
              viewBox="0 0 57 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M48.1932 30.1863C52.5726 30.1863 56.0813 26.3801 55.5826 21.9001C55.2019 18.492 52.4501 15.7401 49.0419 15.3595C44.5619 14.8607 40.7557 18.3695 40.7557 22.7488C40.7557 22.9632 40.7688 23.1732 40.7863 23.3832L35.1557 24.897C34.4732 23.2345 33.3751 21.7863 31.9969 20.6795L35.8688 14.3576C37.0676 14.8257 38.4107 15.0051 39.8238 14.7645C43.0701 14.2045 45.6207 11.5051 45.9619 8.22822C46.4651 3.43322 42.3701 -0.578654 37.5444 0.0688461C34.2632 0.506346 31.6251 3.1576 31.1963 6.43885C30.8551 9.04197 31.8744 11.422 33.6332 12.9882L29.7613 19.3101C28.4444 18.7107 26.9832 18.3782 25.4432 18.3782C23.3694 18.3782 21.4357 18.9863 19.8038 20.0276L14.0594 13.1063C15.3938 11.527 16.0894 9.38322 15.7176 7.08635C15.2013 3.8926 12.5851 1.36385 9.37818 0.943846C4.52193 0.305096 0.409432 4.39135 1.00006 9.24322C1.39818 12.5245 4.01006 15.1932 7.28256 15.6701C9.02381 15.9238 10.6688 15.5607 12.0426 14.7776L17.7869 21.6988C16.0282 23.5757 14.9432 26.1001 14.9432 28.8738C14.9432 31.0482 15.6082 33.0651 16.7413 34.7451L12.5807 38.3851C11.1019 37.1995 9.16381 36.5651 7.07693 36.8013C3.72131 37.182 0.991307 39.8638 0.562557 43.2151C-0.0586933 48.0713 4.03631 52.1751 8.88818 51.567C12.0819 51.1688 14.6938 48.6838 15.2538 45.5163C15.5907 43.6176 15.1838 41.8282 14.3001 40.3626L18.4651 36.7182C20.3201 38.3676 22.7613 39.3738 25.4344 39.3738C27.7269 39.3738 29.8488 38.6345 31.5769 37.3788L37.8594 44.112C36.6694 45.6957 36.0876 47.7651 36.4988 49.9701C37.0544 52.9276 39.4126 55.3032 42.3701 55.8588C47.4319 56.8126 51.8244 52.5951 51.1813 47.577C50.7657 44.3526 48.2282 41.732 45.0213 41.2157C43.0788 40.9051 41.2501 41.3601 39.7801 42.3138L27.0576 28.9001C26.6769 28.502 26.6551 27.9901 26.9351 27.7232L26.9657 27.6926C27.2719 27.3995 27.7269 27.3776 28.0507 27.5963L34.5563 32.807C34.7882 32.9951 35.1338 32.8945 35.2432 32.6145C35.6894 31.4507 35.9388 30.1907 35.9388 28.8695C35.9388 28.3795 35.9038 27.8982 35.8382 27.4301L41.4688 25.912C42.6632 28.432 45.2226 30.182 48.1888 30.182L48.1932 30.1863Z"
                fill="#00EC97"
              />
            </svg>
          ),
          title: "Creators",
          description: (
            <>
              The internet is fueled by creators, but Web2 made it difficult for
              them to get discovered and fairly compensated for their work.
              These tracks will show how an open web can turn that old system on
              its head to foster an ethical passion economy
            </>
          ),
          color: "#00EC97",
        }}
      />
      <Widget
        src={`${ownerId}/widget/Home.TrackCard`}
        props={{
          icon: (
            <svg
              width="57"
              height="56"
              viewBox="0 0 57 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44.5 17.9375H51.0625C54.2038 17.9375 56.75 15.3912 56.75 12.25V5.6875C56.75 2.54625 54.2038 0 51.0625 0H44.5C41.3587 0 38.8125 2.54625 38.8125 5.6875V7.4375H19.125V5.6875C19.125 2.54625 16.5787 0 13.4375 0H6.4375C3.29625 0 0.75 2.54625 0.75 5.6875V12.6875C0.75 15.8287 3.29625 18.375 6.4375 18.375H8.625V22.9688C8.625 26.11 11.1713 28.6562 14.3125 28.6562H18.25V32.1562C18.25 35.2975 20.7962 37.8438 23.9375 37.8438H27.4375V45.5H19.125V43.3125C19.125 40.1712 16.5787 37.625 13.4375 37.625H6.4375C3.29625 37.625 0.75 40.1712 0.75 43.3125V50.3125C0.75 53.4538 3.29625 56 6.4375 56H13.4375C16.5787 56 19.125 53.4538 19.125 50.3125V48.125H38.375V50.3125C38.375 53.4538 40.9212 56 44.0625 56H51.0625C54.2038 56 56.75 53.4538 56.75 50.3125V43.3125C56.75 40.1712 54.2038 37.625 51.0625 37.625H44.0625C40.9212 37.625 38.375 40.1712 38.375 43.3125V45.5H30.0625V29.7063C30.0625 29.085 30.4431 28.6562 30.8763 28.6562H30.9244C31.4013 28.6562 31.7863 28.9931 31.8825 29.4219L32.9544 37.4631C32.985 37.6819 33.1688 37.8438 33.3875 37.8438H33.5669C36.7081 37.8438 39.2544 35.2975 39.2544 32.1562V22.5312C39.2544 19.39 36.7081 16.8438 33.5669 16.8438H23.9419C20.8006 16.8438 18.2544 19.39 18.2544 22.5312V26.0312H14.3169C12.6237 26.0312 11.2544 24.6619 11.2544 22.9688V18.375H13.4419C16.5831 18.375 19.1294 15.8287 19.1294 12.6875V10.0625H38.8169V12.25C38.8169 15.3912 41.3631 17.9375 44.5044 17.9375H44.5Z"
                fill="#FF7966"
              />
            </svg>
          ),
          title: "Regulators",
          description: (
            <>
              The Web3 space continues to evolve, and as it does the rules and
              regulations, continue to evolve as well. These talks will keep you
              abreast of all of the latest policies, changes, and directions for
              the future
            </>
          ),
          color: "#FF7966",
        }}
      />
    </Tracks>
  </Container>
);
