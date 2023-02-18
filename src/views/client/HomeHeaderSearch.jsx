const HomeHeaderSearch = (props) => {
    return (
      <div className={'row align-self-center'} style={{ width: '50%' }}>
        <div className={'col-8 mx-auto col-md-4 px-1 text-center mb-4 mb-md-0'}>
          <button className={'btn w-100 bg-black text-white py-2'} style={{ fontSize: '14px' }}>
            Research Now
          </button>
        </div>
        <div className={'col-12 col-md-8 px-1'}>
          <div
            className={
              'border px-2 py-1 rounded bg-white d-flex justify-content-start align-items-center'
            }
          >
            <div style={{ width: '20px', paddingRight: '30px', textAlign: 'center', height: '26px' }}>
              <span className={'fa fa-search text-muted'}></span>
            </div>
            <input
              className={'text-muted border-0 w-100'}
              style={{ fontSize: '12px' }}
              placeholder={'Tìm kiếm'}
            />
          </div>
        </div>
      </div>
    );
  };


  export default HomeHeaderSearch;