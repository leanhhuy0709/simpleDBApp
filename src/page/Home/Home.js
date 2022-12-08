
import FoodList from '../../component/FoodList/FoodList';
import {Container} from 'react-bootstrap';
import NavigationBar from '../../component/NavigationBar/NavigationBar';

function Home({data}) {
    
    if (true)
        return (<>
            <NavigationBar
                data = {data}
            />
            <FoodList filter=""/>
        </>
        );
    else 
        return(<p>Please login to access this page</p>)
}

export default Home;
