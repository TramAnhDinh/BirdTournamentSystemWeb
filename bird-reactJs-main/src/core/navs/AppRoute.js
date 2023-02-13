import  {BrowserRouter,Routes,Route} from 'react-router-dom'

import CreateTour from '../../views/admin/CreateTour'

const ClientRouter = (props)=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CreateTour />} />
            </Routes>
      </BrowserRouter>
    )
}

export default ClientRouter