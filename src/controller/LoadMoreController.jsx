
import { useSearchParams } from 'react-router-dom';
import LoadModeView from '../view/LoadModeView'

const LoadMoreController = () => {
    const[params,setParams]=useSearchParams();
    const handleClick=()=>{
        //*güncel sayfa sayısını aldım.
       const pageNumber=params.get("page") || 1;
       //*Url i güncelledim.
       setParams({page:Number(pageNumber)+1});
    };
  return (
    <LoadModeView handleClick={handleClick}/>
  )
}

export default LoadMoreController;