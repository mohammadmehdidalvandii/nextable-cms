import Sale from "./page/Sale/Sale"
import Management from "./page/Management/Management"
import Support from "./page/Support/Support"


const routes = [ 
    {path:'/Sale' , element: <Sale/>},
    {path:'/Management' , element: <Management/>},
    {path:'/Support' , element: <Support/>},
]

export default routes