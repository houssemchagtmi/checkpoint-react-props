import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function HandelName({Data}) {
    return(
<div> 
    <Button variant="outline-info" onClick={Data} >Info</Button>{' '}

</div>
)
}
export default HandelName