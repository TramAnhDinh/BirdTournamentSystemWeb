import ClientLayout, { ClientNavigate } from '../layout/client/ClientLayout';
import { ClientNav } from '../../core/utils/Types';
import HomeHeader from './HomeHeader';

import tournament_image from "../../assets/img/user/tornament.png";
import MatchDetail from './MatchDetail';
import { TableContent } from '../layout/admin/AdminLayout';

function ClientTournamentsDetail() {
  const links = [
    new ClientNav(1, 'match', '/Client/Match'),
    new ClientNav(2, 'tournament', '/Client/Tournament'),
    new ClientNav(3, 'rule', '/Client/Rule'),
    new ClientNav(5, 'about', '/Client/About'),
    new ClientNav(6, 'login', '/Client/Login'),
  ];

  return (
    <>
      <ClientLayout>
        <div className={'Tournament-Detail'} style={{ background: 'rgba(0,0,0,0.5)', position: 'fixed', width: '100%', height: '100%', zIndex: '2' }}>
          <div className={'m-5 w-80 rounded row'} style={{ background: 'white' }}>
            <div className={'col-6 column'}>
              <div className={'text-bold'}>Thông tin giải đấu</div>
              <div className={'row'}>
                <div className={'col-4 m-2'}>
                  <img src={tournament_image}></img>
                </div>
                <div className={'col-7 font-weight-bold d-flex align-items-center'}>
                  <div className={''}>
                    Giải đấu cup mở rộng <br></br>
                    Địa điểm thi đấu: HCM <br></br>
                    Mô tả: <br></br>
                    Thời gian: 21/4/2020 - 21/5/2020
                  </div>
                </div>
              </div>
              <div className={'column'}>
                <div className={'col-12 text-bold'}>Thể thức thi đấu</div>
                <div className={'col-12 d-flex justify-content-center'}>
                  <MatchDetail></MatchDetail>
                </div>
              </div>
              <div className={'column'}>
                <div clasName={'text-bold'}>Nhà tài trợ</div>
                <div className={'d-flex justify-content-between m-3'}>
                  <img src={tournament_image}></img>
                  <img src={tournament_image}></img>
                  <img src={tournament_image}></img>
                </div>
              </div>
            </div>
            <div className={'col-6 d-flex justtify-content-between'}>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Chim thi đấu</th>
                    <th scope="col">Chủ sở hữu</th>
                    <th scope="col">Vote</th>
                    <th scope="col">Hạng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Chào mào A</td>
                    <td>Nguyễn Văn A</td>
                    <td>100</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Chào mào A</td>
                    <td>Nguyễn Văn A</td>
                    <td>100</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Chào mào A</td>
                    <td>Nguyễn Văn A</td>
                    <td>100</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Chào mào A</td>
                    <td>Nguyễn Văn A</td>
                    <td>100</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Chào mào A</td>
                    <td>Nguyễn Văn A</td>
                    <td>100</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Chào mào A</td>
                    <td>Nguyễn Văn A</td>
                    <td>100</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Chào mào A</td>
                    <td>Nguyễn Văn A</td>
                    <td>100</td>
                    <td>7</td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td>Chào mào A</td>
                    <td>Nguyễn Văn A</td>
                    <td>100</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td>Chào mào A</td>
                    <td>Nguyễn Văn A</td>
                    <td>100</td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td>Chào mào A</td>
                    <td>Nguyễn Văn A</td>
                    <td>100</td>
                    <td>10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

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

      </ClientLayout>
    </>
  );
}

export default ClientTournamentsDetail;
