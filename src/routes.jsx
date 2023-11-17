import Sale from "./page/Sale/Sale"
import Management from "./page/Management/Management"
import Support from "./page/Support/Support"
import Statistics from './page/Statistics/Statistics'


const routes = [ 
    {path:'/' , element: <Sale/>},
    {path:'/Management' , element: <Management/>},
    {path:'/Support' , element: <Support/>},
    {path:'/Statistics' , element: <Statistics/>},
]

export default routes