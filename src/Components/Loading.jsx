import Skeleton from "react-loading-skeleton"




const Loading = () => {
    return (
      <>
        <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
      </>   
    )
  }

  export default Loading;