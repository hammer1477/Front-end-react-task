import './product.css'
import Onseller from './Onseller.js';
const Bestseller = () => {
    return (
        <div>
            <div id='bestSeller'><Onseller />
            <text className='Calen'>Daily</text>
            <text className='Calen'>Weekly</text>
            <text className='Calen'>Monthly</text>
            </div>
        </div>
    )
}
export default Bestseller