import ClientLayout, { ClientNavigate } from '../layout/client/ClientLayout';
import { ClientNav } from '../../core/utils/Types';
import HomeHeader from './HomeHeader';

import tournament_image from "../../assets/img/user/tornament.png";

function ClientTournaments() {
  const links = [
    new ClientNav(1, 'match', '/Client/Match'),
    new ClientNav(2, 'tournament', '/Client/Tournament'),
    new ClientNav(3, 'rule', '/Client/Rule'),
    new ClientNav(5, 'about', '/Client/About'),
    new ClientNav(6, 'login', '/Client/Login'),
  ];

  return (
    <>
      <div className={'container-fluid'}>
        <div className={'column h-100 bg client-header-bg px-lg-5'} >

          <div className={'col-12'}><ClientNavigate links={links} /></div>

          <div className={'d-flex'}>
            <div className={'column flex mx-5'}>
              <div className={'py-5 text-center rounded'} style={{ background: '#C0C0FF' }}>
                <div className={'py-3 '}>
                  GIẢI ĐẤU ĐANG DIỄN RA
                </div>
                <div className={'py-3'}>
                  GIẢI ĐẤU SẮP DIỄN RA
                </div>
                <div className={'py-3'} style={{ background: '#E1E1FF' }}>
                  GIẢI ĐẤU ĐÃ DIỄN RA
                </div>
              </div>

              <div className={'column my-4 p-4 rounded'} style={{ background: '#C0C0FF' }}>
                <div className='col'>
                  CÁC GIẢI ĐẤU ĐANG HOT
                </div>
                <div className='col p-3 rounded text-center fw-bold my-4' style={{ background: 'white' }}>
                  <img src={tournament_image} className={'rounded mx-auto d-block'} alt="Cinque Terre"></img>
                  <br />
                  Giải đấu A
                </div>
                <div className='col p-3 rounded text-center fw-bold my-4' style={{ background: 'white' }}>
                  <img src={tournament_image} className={'rounded mx-auto d-block'} alt="Cinque Terre"></img>
                  <br />
                  Giải đấu A
                </div>
                <div className='col p-3 rounded text-center fw-bold my-4' style={{ background: 'white' }}>
                  <img src={tournament_image} className={'rounded mx-auto d-block'} alt="Cinque Terre"></img>
                  <br />
                  Giải đấu A
                </div>
              </div>


            </div>
            <div className={'flex-fill column'}>
              <div className={'col-9 mx-auto d-flex'}>
                <input type="text" className={'form-control'} aria-label="Text input with dropdown button" placeholder='Tìm kiếm giải đấu' />


                <div className={'dropdown mx-2'}>
                  <button className={'btn btn-light dropdown-toggle'} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Theo tên
                  </button>
                  <div className={'dropdown-menu'} aria-labelledby="dropdownMenuButton">
                    <a className={'dropdown-item'} href="#">Search</a>
                  </div>
                </div>
                <button type="button" className={'btn btn-light'} style={{ background: '#D7D7FF' }}>Search</button>

              </div>
              <div className={'col-9 mx-auto'}>
                <div className={'d-flex justify-content-between'}>
                  <div className='p-3 rounded text-center fw-bold my-4' style={{ background: 'white' }}>
                    <img src={tournament_image} className={'rounded mx-auto d-block'} alt="Cinque Terre"></img>
                    <br />
                    Giải đấu A
                  </div>
                  <div className='p-3 rounded text-center fw-bold my-4' style={{ background: 'white' }}>
                    <img src={tournament_image} className={'rounded mx-auto d-block'} alt="Cinque Terre"></img>
                    <br />
                    Giải đấu A
                  </div>
                  <div className='p-3 rounded text-center fw-bold my-4' style={{ background: 'white' }}>
                    <img src={tournament_image} className={'rounded mx-auto d-block'} alt="Cinque Terre"></img>
                    <br />
                    Giải đấu A
                  </div>
                </div>
                <div className={'d-flex justify-content-between'}>
                  <div className='p-3 rounded text-center fw-bold my-4' style={{ background: 'white' }}>
                    <img src={tournament_image} className={'rounded mx-auto d-block'} alt="Cinque Terre"></img>
                    <br />
                    Giải đấu A
                  </div>
                  <div className='p-3 rounded text-center fw-bold my-4' style={{ background: 'white' }}>
                    <img src={tournament_image} className={'rounded mx-auto d-block'} alt="Cinque Terre"></img>
                    <br />
                    Giải đấu A
                  </div>
                  <div className='p-3 rounded text-center fw-bold my-4' style={{ background: 'white' }}>
                    <img src={tournament_image} className={'rounded mx-auto d-block'} alt="Cinque Terre"></img>
                    <br />
                    Giải đấu A
                  </div>
                </div>
                <div className={'d-flex justify-content-between'}>
                  <div className='p-3 rounded text-center fw-bold my-4' style={{ background: 'white' }}>
                    <img src={tournament_image} className={'rounded mx-auto d-block'} alt="Cinque Terre"></img>
                    <br />
                    Giải đấu A
                  </div>
                  <div className='p-3 rounded text-center fw-bold my-4' style={{ background: 'white' }}>
                    <img src={tournament_image} className={'rounded mx-auto d-block'} alt="Cinque Terre"></img>
                    <br />
                    Giải đấu A
                  </div>
                  <div className='p-3 rounded text-center fw-bold my-4' style={{ background: 'white' }}>
                    <img src={tournament_image} className={'rounded mx-auto d-block'} alt="Cinque Terre"></img>
                    <br />
                    Giải đấu A
                  </div>
                </div>

              </div>
            </div>
          </div>




        </div>
      </div>


    </>
  );
}

export default ClientTournaments;
