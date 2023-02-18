import HomeHeaderSearch from "./HomeHeaderSearch";

const HomeHeader = (props) => {
    return (
      <div className={'row mx-0 w-100 home-header bg client-header-bg px-lg-5'}>
        <div className={'col-12'}>{props.children}</div>
        <div className={'col-12 d-flex flex-column justify-content-center align-items-center'}>
          <p className={'fw-bold text-center font-inter'} style={{ fontSize: '3rem', lineHeight: 1 }}>
            The Bird Tournament
          </p>
          <p className={'text-center mt-2 mb-5 font-inter'}>
            Giải đấu đỉnh cao cho những chú chim chào mào
          </p>
          <HomeHeaderSearch />
        </div>
      </div>
    );
  };

export default HomeHeader;